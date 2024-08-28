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

export default function Marksheet(){

    return(
        <div>

            <SemesterYear />

            <Paper sx={{marginTop: '10px'}}>
                    <TableContainer>
                        <Table aria-label="students table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ textAlign: 'center'}}>Course Code</TableCell>
                                    <TableCell>Subject Name</TableCell>
                                    <TableCell>MID</TableCell>
                                    <TableCell>END</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>Practical</TableCell>
                                    <TableCell>FM</TableCell>
                                    <TableCell>MO</TableCell>
                                    <TableCell sx={{ textAlign: 'center'}}>Grade</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {marksheetDetails.map((row,index) =>(
                                <TableRow 
                                key={index}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    backgroundColor: index % 2 === 0 ? '#E6E6ED' : 'transparent',
                                    padding: '0'
                                }}>
             
                                        <TableCell sx={{ textAlign: 'center'}}>{row.courseCode}</TableCell>
                                        <TableCell>{row.subjectName}</TableCell>
                                        <TableCell>{row.mid}</TableCell>
                                        <TableCell>{row.end}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.practical}</TableCell>
                                        <TableCell>{row.fm}</TableCell>
                                        <TableCell>{row.mo}</TableCell>
                                        <TableCell sx={{ textAlign: 'center'}}>{row.grade}</TableCell>
                                    </TableRow>
                                ) )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

        </div>
    )
}

const marksheetDetails = [
    {
        courseCode: 23446,
        subjectName: 'Operating System',
        mid: 20,
        end: 50,
        practical: 10,
        fm:100,
        mo:80,
        grade: 'A+'
    },
    {
        courseCode: 88567,
        subjectName: 'Open Elective M3',
        mid: 20,
        end: 50,
        practical: 10,
        fm: 100,
        mo: 99,
        grade: 'B+'
    },
]