import { Box, Paper, styled } from "@mui/material"

const Semester = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    // border: '1px solid red',
    width: '400px'
})

const SemesterNo = styled(Box)({
    border: '1px solid black',
    border: 'none',
    padding: '8px 16px',
    backgroundColor: '#D9D9D9',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
})

export default function SemesterYear(){

    return(
        <div>
            <Semester>
                <SemesterNo>1</SemesterNo>
                <SemesterNo>2</SemesterNo>
                <SemesterNo>3</SemesterNo>
                <SemesterNo>4</SemesterNo>
                <SemesterNo>5</SemesterNo>
                <SemesterNo>6</SemesterNo>
                <SemesterNo>7</SemesterNo>
                <SemesterNo sx={{backgroundColor: '#3D3D4E'}}>8</SemesterNo>
            </Semester>
        </div>
    )
}