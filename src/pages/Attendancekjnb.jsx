import React, { useState, useEffect } from "react";
import QrReader from "react-qr-scanner";
import { db } from "../firebase";
import "../App.css";
import Navbar from "../components/Navbar-Class";

const Attendance = () => {
  const [scanResult, setScanResult] = useState(null);
  const [calendarData, setCalendarData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [qrCodeData, setQrCodeData] = useState("");
  useEffect(() => {
    fetchCalendarData();
  }, []);

  const fetchCalendarData = async () => {
    try {
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();

      const snapshot = await db
        .collection("attendance")
        .where("month", "==", month)
        .where("year", "==", year)
        .get();

      if (snapshot.empty) {
        setCalendarData(generateCalendarData());
      } else {
        const data = snapshot.docs.map((doc) => doc.data());
        setCalendarData(data);
      }
    } catch (error) {
      console.error("Error fetching calendar data:", error);
    }
  };

  const handleScan = (data) => {
    setScanResult(data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleQrCodeScan = async () => {
    if (!scanResult) return;

    try {
      // Update Firebase with scanned QR code
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth();
      const year = today.getFullYear();
      
      await db.collection('attendance').doc(`${year}-${month}-${day}`).set({
        day,
        month,
        year,
        marked: true
      }, { merge: true });

      setQrCodeData(scanResult);
      fetchCalendarData(); // Refresh calendar data
    } catch (error) {
      console.error('Error marking attendance:', error);
    }
  };


  const generateCalendarData = () => {
    const { year, month } = { year: currentDate.getFullYear(), month: currentDate.getMonth() };
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar = [];
    let day = 1;
    
    for (let i = 0; i < 6; i++) { // Maximum 6 weeks in a month
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null); // Empty cells before the first day of the month
        } else if (day > daysInMonth) {
          break; // Stop filling when all days are filled
        } else {
          week.push({
            day: day,
            marked: false // Initially not marked
          });
          day++;
        }
      }
      calendar.push(week);
    }
    return calendar;
  };


  return (
    <div className="App">
      <Navbar/>
      <h1>Attendance Marking</h1>
      <p>Today: {currentDate.toLocaleDateString()}</p>

      <div className="calendar">
        <h2>Calendar for {currentDate.toLocaleDateString('default', { month: 'long' })}</h2>
        <div className="calendar-header">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="calendar-body">
          {generateCalendarData().map((week, weekIndex) => (
            <div key={weekIndex} className="calendar-week">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`calendar-day ${day && day.marked ? 'marked' : ''}`}
                  onClick={() => handleQrCodeScan()}
                >
                  {day ? day.day : ''}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* QR Code Scanner */}
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '300px', height: '300px' }}
      />

      {scanResult && (
        <div className="scan-result">
          <h3>Scan Result:</h3>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
}

export default Attendance;