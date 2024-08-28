import SemesterYear from "./Semester";
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material'

export default function Attendence(){

    return(
        <div>
            <SemesterYear />

            
            <Paper sx={{marginTop: '10px'}}>
                    <TableContainer>
                        <Table aria-label="students table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center'}}>Course Code</TableCell>
                                    <TableCell>Course Name</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>Total Lecture</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>Attended</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>Percentage</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {attendenceDetails.map((row,index) =>(
                                <TableRow 
                                key={index}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    backgroundColor: index % 2 === 0 ? '#E6E6ED' : 'transparent',
                                    padding: '0'
                                }}>
             
                                        <TableCell sx={{ textAlign: 'center'}}>{row.courseCode}</TableCell>
                                        <TableCell>{row.courseName}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.totalLecture}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.attended}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.percentage}</TableCell>
                                    </TableRow>
                                ) )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
        </div>
    )
}

const attendenceDetails = [
    {
        courseCode : 23446,
        courseName: 'Operating System',
        totalLecture: '100%',
        attended: '100%',
        percentage: '100%'
    }
]