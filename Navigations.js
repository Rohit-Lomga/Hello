import React from 'react';
import { Routes, Route } from 'react-router-dom';


import MuiStudents from './Students';
import Dashboard from './Dashboard';
import Programs from './Programs';
import Courses from './Courses';

export default function Navigations(){
    return(
        <div>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<MuiStudents />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/courses" element={<Courses />} />
            {/* Add more routes as needed */}
            
        </Routes>
        </div>
    )
}