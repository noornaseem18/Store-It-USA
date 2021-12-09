import * as React from 'react';
import {  Container } from '@material-ui/core';
import Typography from '../components/Home-page/Typography';

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    > 
        <Typography  color="inherit" align="center" variant="h4" gutterBottom>
          Got any questions? Need help?
        </Typography>
      <Typography  color="inherit" align="center" variant="h6" gutterBottom>
        We are here to help. Get in touch!
      </Typography>
    </Container>
  );
}

export default ProductSmokingHero;