import ProfileImage from './profile.png';

import React, { useState } from "react";

import {
    Paper,
    Box,
    Typography,
    Divider,
    styled,
    Link,
} from '@mui/material';
import MainMenuAndTopBar from "./MainMenuAndTopBar";



const Titles = styled(Typography)({
    paddingTop: '10px',
});

const Paragraph = styled(Typography)({
    padding: '0',
    color: '#3D3D4E'
})

export default function Profile() {

    return (
        <div>
            <MainMenuAndTopBar />
            <main
                style={{
                    display: 'flex',
                    marginLeft: '190px',
                    marginTop: '55px',
                    padding: '24px',
                    gap: '20px',
                    // position: 'fixed'
                }}
            >
                <Paper elevation={3} sx={{ width: '310px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box >
                        <img src={ProfileImage} width='110px' height='110px' alt="Profile" style={{ borderRadius: '50%' }} />
                    </Box>
                    <Typography variant="h5">Rohit Lomga</Typography>
                    <Paragraph variant="subtitle2">Enrollment Number YBNU23204</Paragraph>

                    <Divider sx={{ width: '100%', my: 2 }} />

                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Typography variant="h6">Campus</Typography>
                        <Paragraph variant="subtitle2">YBN University (Main Campus)</Paragraph>

                        <Titles variant="h6">Programme</Titles>
                        <Paragraph variant="subtitle2">BCA Bachelor of Computer Application</Paragraph>
                        <Paragraph variant="subtitle2">(Specialization in Software Engineering)</Paragraph>

                        <Titles variant="h6">Mobile No.</Titles>
                        <Paragraph variant="subtitle2">+91-9654825478</Paragraph>

                        <Titles variant="h6">Email ID</Titles>
                        <Paragraph variant="subtitle2">hello@gmail.com</Paragraph>

                        <Titles variant="h6">Book ID</Titles>
                        <Paragraph variant="subtitle2">23001</Paragraph>

                        <Titles variant="h6">Linked in</Titles>
                        <Paragraph variant="subtitle2">
                            <Link href='https://www.google.com/' sx={{color:'#3D3D4E', textDecoration:'none'}}>https://www.google.com</Link>
                        </Paragraph>
                    </Box>
                </Paper>
               
            </main>
        </div>
    );
}
