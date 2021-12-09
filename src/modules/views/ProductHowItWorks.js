import * as React from 'react';

import { Box , Grid , Container} from '@material-ui/core';
import Typography from '../components/Home-page/Typography';

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 100,
          mb: 105,
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
      sx={{
        width: 300,
        height: 100,
         }}
        />
        <Typography variant="h4" align ="center" component="h2" gutterBottom sx={{ mb: 14 }}>
          How it works
        </Typography>
        <Box
              sx={{
              width: 50,
              height: 10,
               }}
              />
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box>
                <Box>              
                <Typography variant="h6" align="center">
                  1.
                </Typography>
                </Box>
                <Box
                 component="img"
                 sx={{
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '50%',
                  maxWidth: 600,
                 }}
                 src="https://images.unsplash.com/1/work-station-straight-on-view.jpg?ixlib=rb-1.2.1&iw=500&q=60"
                 alt="ordering"
                />
                <Typography variant="h5" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla mi, rutrum eu vulputate sed, 
                semper ac neque. Sed ornare volutpat arcu, malesuada iaculis libero dignissim a. Sed vel urna.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Box>              
                  <Typography variant="h6" align="center">
                    2.
                  </Typography>
                </Box>
                <Box
                 component="img"
                 sx={{
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '60%',
                  maxWidth: 600,
                 }}
                 src="https://images.unsplash.com/photo-1581068466660-e6585b8afa97?w=800&q=80"
                 alt="boxing"
                />
                <Typography variant="h5" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla mi, rutrum eu vulputate sed, 
                semper ac neque. Sed ornare volutpat arcu, malesuada iaculis libero dignissim a. Sed vel urna.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box >
              <Box>              
                  <Typography variant="h6" align="center">
                    3.
                  </Typography>
                </Box>
                <Box
                 component="img"
                 src="https://images.unsplash.com/photo-1609522886437-27a610fbe81d?w=800&q=80"
                 alt="shipping"
                 sx={{
                 right: 0,
                 bottom: 0,
                 width: '100%',
                 height: '80%',
                 maxWidth: 600,
                }}
                />
                <Typography variant="h5" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla mi, rutrum eu vulputate sed,
                 semper ac neque. Sed ornare volutpat arcu, malesuada iaculis libero dignissim a. Sed vel urna.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Box
      sx={{
        width: 300,
        height: 100,
         }}
        />
      </Container>
    </Box>
    
  );
}

export default ProductHowItWorks;