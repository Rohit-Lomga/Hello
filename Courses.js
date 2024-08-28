
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material'

import SemesterYear from './Semester'



export default function Courses(){

    return(
        <div>
         
            <SemesterYear />

         <Paper sx={{marginTop: '20px'}}>
                    <TableContainer>
                        <Table aria-label="students table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center'}}>SLNO</TableCell>
                                    <TableCell>Course code</TableCell>
                                    <TableCell>Name of Course</TableCell>
                                    <TableCell>L</TableCell>
                                    <TableCell>T</TableCell>
                                    <TableCell>P</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>Credit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {courseDetails.map((row,index) =>(
                                <TableRow 
                                key={index}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    backgroundColor: index % 2 === 0 ? '#E6E6ED' : 'transparent',
                                    padding: '0'
                                }}>
             
                                        <TableCell sx={{ textAlign: 'center'}}>{row.slNo}</TableCell>
                                        <TableCell>{row.courseCode}</TableCell>
                                        <TableCell>{row.nameOfCourse}</TableCell>
                                        <TableCell>{row.l}</TableCell>
                                        <TableCell>{row.t}</TableCell>
                                        <TableCell>{row.p}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.credit}</TableCell>
                                    </TableRow>
                                ) )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                
        </div>
    )
}

const courseDetails = [
    {
        slNo : 1,
        courseCode: 'SEPCT3030',
        nameOfCourse: 'Operating System',
        l: 3,
        t: 0,
        p: 0,
        credit: 3
    },
    {
        slNo : 2,
        courseCode: 'SEOEXX',
        nameOfCourse: 'Open E lective M3',
      
        credit: 4
    }
]
