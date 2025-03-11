import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { ScheduleXCalendar, useCalendarApp } from '@schedule-x/react';
import { createViewWeek, createViewMonthGrid } from '@schedule-x/calendar';
import '@schedule-x/theme-default/dist/calendar.css';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from '@schedule-x/event-modal'

import axios from 'axios';
//@ts-ignore
import {WeatherWidget} from "@daniel-szulc/react-weather-widget"


export default function PatientDashboard() {
  const calendar = useCalendarApp({
    views: [
      createViewWeek(),
      createViewMonthGrid(),
    ],
    events: [
      {
        id: 1,
        title: 'Acne Check Appointment',
        start: '2025-03-31 00:00',
        end: '2025-03-31 15:00',
        description: 'Skin acne appointment at 12:00 PM',
      },
      {
        id: 2,
        title: 'Pimple Injection Appointment',
        start: '2025-03-11 10:00',
        end: '2025-03-11 11:00',
        description: 'Pimple injection appointment at 10:00 AM',
      },
      {
        id: 3,
        title: 'Rashes Appointment',
        start: '2025-03-12 15:00',
        end: '2025-03-12 16:30',
        description: 'Armpit rashes appointment at 15:00 PM',
      },
      {
        id: 4,
        title: 'Eczema Appointment',
        start: '2025-03-01 07:00',
        end: '2025-03-01 08:00',
        description: 'Skin eczema appointment at 07:00 AM',
      }


    ],
    selectedDate: '2025-03-31',
    plugins: [
      createEventModalPlugin(),
      createDragAndDropPlugin()
    ]
  });
  return (
    <Box>
      <Typography level="h4" component="h4">
        Patient Dashboard
      </Typography>
      
      {/* Add more patient-specific content here */}
      <Box
        sx={{'width': '100%', 'height': '70%'}}>
        {calendar && <ScheduleXCalendar calendarApp={calendar}/>}
      </Box>
      <Box>
      <WeatherWidget
        autoLocate="gps"
        axiosInstance={axios}
        
    />
      </Box>
    </Box>
  );
}
