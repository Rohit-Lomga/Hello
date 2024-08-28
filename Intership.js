import { Box, Divider, Typography, Stack, styled } from "@mui/material";

const Texts = styled(Typography)({
    paddingLeft: '25px'
})

export default function Internship() {
  return (
    <div>
      <Box sx={{width: '810px'}}>
        <Stack>
          <Typography variant="h6">2024</Typography>

          {/* Divider on the right side */}
          <Divider sx={{width: '90%', marginTop: '-16px', marginLeft: '55px'}} />

          <Texts variant="subtitle1" sx={{paddingTop: '20px',}}>Date - 2/2/2023 To 2/2/2024</Texts>

          <Texts variant="subtitle1">Activity -</Texts>

          <Texts variant="subtitle1">Organiser - TATA Service Company</Texts>

          <Texts variant="subtitle1" sx={{paddingTop: '15px'}}>Description</Texts>
          <Texts variant="subtitle1">
            try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic tly .
          </Texts>

        <Stack sx={{display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'flex-end'}}>
            
          <Typography
              variant="body1"
              component="span"
              sx={{ textDecoration: 'underline', color: '#716C80', cursor: 'pointer' }}
            >
              view certificate
          </Typography>

          <Typography
              variant="body1"
              component="span"
              sx={{ textDecoration: 'underline',  color: '#716C80', cursor: 'pointer' }}
            >
              view report
          </Typography>
        </Stack>

        </Stack>


        <Stack>
          <Typography variant="h6">2023</Typography>

          {/* Divider on the right side */}
          <Divider sx={{width: '90%', marginTop: '-16px', marginLeft: '55px'}} />

          <Texts variant="subtitle1" sx={{paddingTop: '20px',}}>Date - 2/2/2023 To 2/2/2024</Texts>

          <Texts variant="subtitle1">Activity -</Texts>

          <Texts variant="subtitle1">Organiser - TATA Service Company</Texts>

          <Texts variant="subtitle1" sx={{paddingTop: '15px'}}>Description</Texts>
          <Texts variant="subtitle1">
            try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic tly .
          </Texts>

          <Stack sx={{display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'flex-end'}}>
            
            <Typography
                variant="body1"
                component="span"
                sx={{ textDecoration: 'underline', color: '#716C80', cursor: 'pointer' }}
              >
                view certificate
            </Typography>
  
            <Typography
                variant="body1"
                component="span"
                sx={{ textDecoration: 'underline',  color: '#716C80', cursor: 'pointer' }}
              >
                view report
            </Typography>
          </Stack>

        </Stack>
      </Box>
    </div>
  );
}
