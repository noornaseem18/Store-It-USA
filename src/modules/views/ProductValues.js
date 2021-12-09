import * as React from 'react';

import { Box , Grid , Container} from '@material-ui/core';
import Typography from '../components/Home-page/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
      sx={{
        width: 300,
        height: 100,
         }}
        />
        <Typography variant="h4" align ="center" component="h2" gutterBottom sx={{ mb: 14 }}>
          Our Values
        </Typography>
        <Box
              sx={{
              width: 50,
              height: 10,
               }}
              />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h6" align ="center" sx={{ my: 5 }}>
              Lorem ipsum dolor.
              </Typography>
              <Typography variant="h5" align ="center" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla mi, rutrum eu vulputate sed, 
                semper ac neque. Sed ornare volutpat arcu, malesuada iaculis libero dignissim a. Sed vel urna.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h6" align ="center" sx={{ my: 5 }}>
              Lorem ipsum dolor.
              </Typography>
              <Typography variant="h5" align ="center" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla mi, rutrum eu vulputate sed, 
                semper ac neque. Sed ornare volutpat arcu, malesuada iaculis libero dignissim a. Sed vel urna.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Typography variant="h6" align ="center"  sx={{ my: 5 }}>
              Lorem ipsum dolor.
              </Typography>
              <Typography variant="h5" align ="center" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla mi, rutrum eu vulputate sed, 
                semper ac neque. Sed ornare volutpat arcu, malesuada iaculis libero dignissim a. Sed vel urna.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;