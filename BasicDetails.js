import { FormHelperText, Typography, Box, Paper, styled } from "@mui/material";

const DetailsBox = styled(Paper)({
    width: '290px', 
    typography: 'body1',
    padding:'20px' 
})

const TitleLabel = styled(Typography)({
    paddingTop: '0px'
})

const Paragraph = styled(Typography)({
    padding: '0',
    color: '#3D3D4E'
})

export default function BasicDetails(){
    return(
        <div>
            <Paper elevation={0} sx={{display: 'flex',justifyContent: 'space-around', gap: '20px',}}>

                {/* Personal Details */}
                <DetailsBox elevation={3}>
                    <Typography variant="h5" sx={{paddingBottom: '10px'}}>Personal Details</Typography>

                    <TitleLabel variant="h6">Name</TitleLabel>
                    <Paragraph variant="subtitle2">Rohit Lomga</Paragraph>

                    <TitleLabel variant="h6">Gender</TitleLabel>
                    <Paragraph variant="subtitle2" >Male</Paragraph>

                    <TitleLabel variant="h6">Date of Birth</TitleLabel>
                    <Paragraph variant="subtitle2">29/02/2004</Paragraph>

                    <TitleLabel variant="h6">AADHAR Number</TitleLabel>
                    <Paragraph variant="subtitle2">XXXX XXXX XXXX</Paragraph>

                    <TitleLabel variant="h6">PAN Number</TitleLabel>
                    <Paragraph variant="subtitle2">BFEP3525C</Paragraph>

                    <TitleLabel variant="h6">Passport Number</TitleLabel>
                    <Paragraph variant="subtitle2">BFEP3525C</Paragraph>

                    <TitleLabel variant="h6">Identification Mark</TitleLabel>
                    <Paragraph variant="subtitle2">BFEP3525C</Paragraph>

                    <TitleLabel variant="h6">Nationality</TitleLabel>
                    <Paragraph variant="subtitle2">Indian</Paragraph>

                </DetailsBox>

                {/* CONTACT DETAILS */}
                <DetailsBox elevation={3}>
                <Typography variant="h5" sx={{paddingBottom: '10px'}}>Contact Details</Typography>

                    <TitleLabel variant="h6">Permanent Address</TitleLabel>
                    <Paragraph variant="subtitle2">Rajaulatu, Namkum</Paragraph>

                    <TitleLabel variant="h6">Correspondence Address</TitleLabel>
                    <Paragraph variant="subtitle2">Rajaulatu, Namkum</Paragraph>

                    {/* Father's details */}
                    <TitleLabel variant="h6" sx={{paddingTop: '25px'}}>Father's Name</TitleLabel>
                    <Paragraph variant="subtitle2">Father Lomga</Paragraph>

                    <TitleLabel variant="h6">Mobile Number</TitleLabel>
                    <Paragraph variant="subtitle2">9857412364</Paragraph>

                    <TitleLabel variant="h6">Email</TitleLabel>
                    <Paragraph variant="subtitle2">father@gmail.com</Paragraph>


                    {/* Mother's details */}
                    <TitleLabel variant="h6" sx={{paddingTop: '25px'}}>Mother's Name</TitleLabel>
                    <Paragraph variant="subtitle2">Mother Lomga</Paragraph>

                    <TitleLabel variant="h6">Mobile Number</TitleLabel>
                    <Paragraph variant="subtitle2">9857412364</Paragraph>



                </DetailsBox>

                {/* Medical Details */}
                <DetailsBox elevation={3}>
                <Typography variant="h5" sx={{paddingBottom: '10px'}}>Medical Details</Typography>

                    <TitleLabel variant="h6">Blood Group</TitleLabel>
                    <Paragraph variant="subtitle2">B+</Paragraph>

                    <TitleLabel variant="h6">height</TitleLabel>
                    <Paragraph variant="subtitle2">5'4"</Paragraph>

                    <TitleLabel variant="h6">Allergic</TitleLabel>
                    <Paragraph variant="subtitle2">Peanuts</Paragraph>

                    <TitleLabel variant="h6">Insurance Information</TitleLabel>
                    <Paragraph variant="subtitle2">NA</Paragraph>

                    {/* Post Academic Details */}
                    <Typography variant="h5" sx={{padding: '10px 0'}}>Post Academic Details</Typography>

                    <TitleLabel variant="h6">Name of Exam</TitleLabel>
                    <Paragraph variant="subtitle2">10th</Paragraph>

                    <TitleLabel variant="h6">Board / University</TitleLabel>
                    <Paragraph variant="subtitle2">Jac</Paragraph>

                    <TitleLabel variant="h6">School / College Name</TitleLabel>
                    <Paragraph variant="subtitle2">Government School</Paragraph>

                    <TitleLabel variant="h6">Year of Passing</TitleLabel>
                    <Paragraph variant="subtitle2">2021</Paragraph>
                    

                </DetailsBox>
            </Paper>
        </div>
    )
}