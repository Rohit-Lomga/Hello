import { TabContext, TabList, TabPanel } from '@mui/lab';
import BasicDetails from "./BasicDetails";
import Courses from "./Courses";
import Marksheet from "./Marksheet";
import Attendence from "./Attendence";
import Finance from "./Finance";
import Activities from "./Activities";

import React, { useState } from "react";

import {
    Paper,
    Box,
    Tab,
} from '@mui/material';
import Internship from './Intership';
import Placement from './Placement';

export default function Tabs(){
    const [value, setValue] = useState('basicDetails');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
                {/* LINK DETAILS  */}
                {/* STUDENT DETAILS */}

                <Paper sx={{width: '950px',marginLeft: '550px',marginTop: '-650px'}}>
                    <Box sx={{ width: '950px', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                                <TabList onChange={handleChange} aria-label="profile tabs"    sx={{
                            '& .MuiTab-root': { 
                                color: 'black', // Color of the tab text when not selected
                                '&.Mui-selected': {
                                    color: '#3D3D4E',
                                    fontWeight: 'bold',
                                },
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#3D3D4E', // Color of the indicator
                            },
                        }}>
                                    <Tab label="Basic Details" value="basicDetails" />
                                    <Tab label="Courses" value="courses" />
                                    <Tab label="Mark Sheet" value="marksheet" />
                                    <Tab label="Attendance" value="attendence" />
                                    <Tab label="Finance" value="finance" />
                                    <Tab label="Activities" value="activities" />
                                    <Tab label="Internship" value="internship" />
                                    <Tab label="Placement" value="placement" />
                                </TabList>
                            </Box>
                            <TabPanel value="basicDetails"><BasicDetails /></TabPanel>
                            <TabPanel value="courses"><Courses /></TabPanel>
                            <TabPanel value="marksheet"><Marksheet /></TabPanel>
                            <TabPanel value="attendence"><Attendence /></TabPanel>
                            <TabPanel value="finance"><Finance /></TabPanel>
                            <TabPanel value="activities"><Activities /></TabPanel>
                            <TabPanel value="internship"><Internship /></TabPanel>
                            <TabPanel value="placement"><Placement /></TabPanel>
                        </TabContext>
                    </Box>
                </Paper>
        </div>
    )
}