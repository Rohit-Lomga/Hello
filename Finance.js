import {
    Box,
    Divider,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
    
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';

const TableDetails = styled(TableCell)({
    padding: '0 40px'
})

export default function Finance(){

    return(
        <div>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>

                {/* PAYMENT HISTORY */}
                <Box>
                    <Typography variant="h6">Payment History</Typography>
                    <Divider sx={{margin: '20px 0'}} />

                    <Paper elevation={3}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableDetails sx={{ textAlign: 'center'}}>Receipt No.</TableDetails>
                                        <TableDetails sx={{ textAlign: 'center'}}>Category</TableDetails>
                                        <TableDetails sx={{ textAlign: 'center'}}>Amount</TableDetails>
                                        <TableDetails sx={{ textAlign: 'center'}}>Invoice</TableDetails>

                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {financeDetails.map((row,index) =>(
                                        <TableRow 
                                            key={index}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: 0 },
                                                backgroundColor: index % 2 === 0 ? '#E6E6ED' : 'transparent',
                                                padding: '0'
                                            }}>

                                            <TableCell>{row.date}</TableCell>
                                            <TableCell sx={{ textAlign: 'center'}}>{row.receiptNo}</TableCell>
                                            <TableCell sx={{ textAlign: 'center'}}>{row.category}</TableCell>
                                            <TableCell sx={{ textAlign: 'center'}}>{row.amount}</TableCell>
                                            <TableCell sx={{ textAlign: 'center'}}>{row.invoice}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>


                {/* FEES DETAILS */}
                <Box>
                    <Typography variant="h6">Fees Details</Typography>
                    <Divider sx={{margin: '20px 0'}} />

                    <Paper elevation={3}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Category</TableCell>
                                        <TableCell sx={{ textAlign: 'center',paddingLeft: '60px'}}>Amount</TableCell>

                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {feesDetails.map((row,index) =>(
                                        <TableRow 
                                            key={index}
                                            sx={{
                                                '&:last-child td, &:last-child th': { border: 0 },
                                                backgroundColor: index % 2 === 0 ? '#E6E6ED' : 'transparent',
                                                padding: '0'
                                            }}>

                                            <TableCell>{row.category}</TableCell>
                                            <TableCell sx={{ textAlign: 'center',paddingLeft: '60px'}}>{row.amount}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
        </div>
    )
}

const financeDetails = [
    {
        date: '12/6/24',
        receiptNo: 12345,
        category: 'Tuition Fee',
        amount: 5000,
        invoice: <VisibilityIcon sx={{backgroundColor: 'white',padding: '2px', borderRadius: '9px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
        }} />
    }
]

const feesDetails = [
    {
        category: 'Admission Fee',
        amount: 10000
    }
]