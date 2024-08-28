
import { 
    Paper,
    MenuItem,
    Typography,
    TextField,
    Box,
    Button,
    styled,
    Stack,
    Avatar,
} from "@mui/material";

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material'

import profileImage from './profile.png';

import VisibilityIcon from '@mui/icons-material/Visibility';
import MainMenuAndTopBar from "./MainMenuAndTopBar";

const drawerWidth = 240; // Width of the drawer
const CustomButton = styled(Button)({
    // padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#3D3D4E',
    textTransform: 'capitalize',
    color: 'white',
    wordSpacing: '5px',
    // margin: '17px 0 0 65px',
    '&:hover': {
      backgroundColor: '#2f2f3c',
    },
  });


function MuiStudents(){
    return(
        <div>
            <MainMenuAndTopBar />
            {/* Main content area, offset by drawer width */}
                <main
                style={{
                flexGrow: 1,
                padding: '24px',
                marginLeft: drawerWidth,
                marginTop: '64px',
                }}
                >
                {/* Grid container to include your Select component */}
                
                <Paper elevation={2} sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', padding: '15px 0',}}>
                    <Box width='250px'>
                    <Typography sx={{marginBottom: '10px'}}>Campus Name</Typography>
                        <TextField
                        label='Select Campus'
                        select
                        size="small"
                        fullWidth
                        >

                        <MenuItem value='campus'>Hello</MenuItem>                        
                        </TextField>
                    </Box>

                    <Box width='250px'>
                    <Typography sx={{marginBottom: '10px'}}>Session</Typography>

                        <TextField
                        label='Select Session'
                        select
                        size="small"
                        fullWidth
                        >

                            <MenuItem value='campus'>2023-24</MenuItem>                        
                        </TextField>
                    </Box>

                    <Box width='250px'>
                    <Typography sx={{marginBottom: '10px'}}>Course Name</Typography>

                        <TextField
                        label='Select Course'
                        size="small"
                        select
                        fullWidth
                        >

                            <MenuItem value='bca'>BCA</MenuItem>   
                            <MenuItem value='b-tech'>B-Tech</MenuItem> 
                            <MenuItem value='mca'>MCA</MenuItem>                        
                       
                     
                        </TextField>
                    </Box>
                    <Stack>
                        <CustomButton variant="contained">Search</CustomButton>
                    </Stack>

                    <Stack>
                        <CustomButton variant="contained">Export</CustomButton>
                    </Stack>
                </Paper>
     

                <Paper
                    elevation={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',  // Adjust to space-between for alignment
                        alignItems: 'center',  // Aligns items vertically in the center
                        marginTop: '20px',
                        padding: '15px 25px', // Add padding for consistency
                    }}
                >
                    <Typography>Students Lists</Typography>
                   <div>
                        <TextField size="small" placeholder="Search students..." />
                        <CustomButton variant="contained" sx={{marginLeft: '20px'}}>+ Add New</CustomButton>
                   </div>
                </Paper>

                <Paper sx={{marginTop: '10px'}}>
                    <TableContainer>
                        <Table aria-label="students table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Profile</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Course</TableCell>
                                    <TableCell>Enrollment No</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>Book Id</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {studentsDetails.map((row,index) =>(
                                <TableRow 
                                key={index}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    backgroundColor: index % 2 === 0 ? '#E6E6ED' : 'transparent',
                                    padding: '0'
                                }}>
             
                                        <TableCell>{row.profile}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.course}</TableCell>
                                        <TableCell>{row.enrollmentNo}</TableCell>
                                        <TableCell>{row.mobile}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.bookId}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.action}</TableCell>
                                    </TableRow>
                                ) )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                
                </main>

        </div>
    )
}

const studentsDetails = [
    {
        profile: <Avatar src={profileImage} />,
        name: 'Garret Winters',
        course: 'B.A, B.C.A',
        enrollmentNo : 'YBNU23204',
        mobile: 9654781254,
        email: 'info@example.com',
        bookId: 25478,
        action: <VisibilityIcon sx={{backgroundColor: 'white',padding: '3px', borderRadius: '9px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
        }} />
    }
]

export default MuiStudents;
 