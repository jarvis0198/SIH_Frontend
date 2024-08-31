// src/components/MainContent.js
import React, { useState } from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UpcomingEvents from '../components/UpcomingEvents'; // Import the UpcomingEvents component
import Navbar from '../components/Navbar-Class';

const MainContent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceDates, setAttendanceDates] = useState({
    present: ['2024-08-01', '2024-08-03'],
    absent: ['2024-08-02'],
  });

  // Handle QR Code Scan Event (Mockup)
  const handleQRCodeScan = () => {
    const response = { status: 'success', date: '2024-08-04', attendance: 'present' };

    // Update attendance based on the response
    setAttendanceDates((prev) => ({
      ...prev,
      [response.attendance]: [...prev[response.attendance], response.date],
    }));
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];

      if (attendanceDates.present.includes(dateString)) {
        return 'present-day'; // CSS class for present days
      } else if (attendanceDates.absent.includes(dateString)) {
        return 'absent-day'; // CSS class for absent days
      }
    }
    return null;
  };

  return (
    <>
      <Navbar/>
    
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {/* QR Code Section - Takes most of the page */}
      
      <Grid item xs={12} md={9} display="flex" justifyContent="center">
        <Card sx={{ width: '100%', maxWidth: 600 }}>
          <CardContent>
            <Typography variant="h5" align="center">
              Scan this QR code to mark your attendance
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
              <img src="https://via.placeholder.com/400" alt="QR Code" onClick={handleQRCodeScan} />
            </Box>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
              Note that your code is different from others. So don’t think of proxy!!
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Sidebar - Calendar and Upcoming Events */}
      <Grid item xs={12} md={3}>
        {/* Calendar Section */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" align="center">
              August, 2024
            </Typography>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              tileClassName={tileClassName}
            />
          </CardContent>
        </Card>

        {/* Upcoming Events Section */}
        <Card>
          <CardContent>
            <Typography variant="h6" align="center">
              Upcoming Events
            </Typography>
            <UpcomingEvents /> {/* Render UpcomingEvents component */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  );
};

export default MainContent;