// src/components/UpcomingEvents.js
import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Stack } from '@mui/material';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Maths Lecture',
      time: '08:00 - 09:00 AM',
      location: 'Room 01',
      type: 'Internal',
      status: 'In 10 mins',
    },
    {
      title: 'CoA Lecture',
      time: '10:00 - 11:00 AM',
      location: 'Room 02',
      type: 'External',
      status: 'Upcoming',
    },
  ];

  return (
    <Box>
      {events.map((event, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Stack direction="row" spacing={2} alignItems="center">
              <Chip
                label={event.status}
                color={event.status === 'In 10 mins' ? 'error' : 'info'}
              />
              <Typography variant="body1">{event.title}</Typography>
            </Stack>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              {`${event.time} | ${event.location}`}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default UpcomingEvents;