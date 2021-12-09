import * as React from 'react';
import { Box , Container , Grid } from '@material-ui/core';
import Typography from '../components/Home-page/Typography';
import TextField from '../components/Home-page/TextField';
import Snackbar from '../components/Home-page/Snackbar';
import Button from '../components/Home-page/Button';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 10,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" >
                Receive offers
              </Typography>
              <Typography variant="h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra.
              </Typography>
              <Box
              sx={{
              width: 50,
              height: 15,
               }}
              />
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Box
              sx={{
              width: 50,
              height: 10,
               }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1505682499293-233fb141754c?w=800&q=80"
            alt="call to action"
            sx={{
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
        <Box
      sx={{
        width: 300,
        height: 100,
         }}
        />
    </Container>
  );
}

export default ProductCTA;