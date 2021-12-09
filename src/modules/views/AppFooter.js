import * as React from 'react';
import { Box , Grid , Link , Container } from '@material-ui/core';
import Typography from '../components/Home-page/Typography';
import TextField from '../components/Home-page/TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
      <Box
      sx={{
        width: 300,
        height: 100,
         }}
        />
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://www.facebook.com/" >
                  <img
                    src="https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?w=500&q=80"
                    alt="Facebook"
                    width="50"
                    height="50"
                  />
                </Box>
                <Box
      sx={{
        width: 20,
        height: 20,
         }}
        />
                <Box
                  component="a"
                  href="https://twitter.com/"
                  sx={iconStyle}
                >
                  <img
                    src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80"
                    alt="Twitter"
                    width="50"
                    height="50"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link 
 //               href="/premium-themes/onepirate/terms/"
                >Terms
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link 
 //               href="/premium-themes/onepirate/privacy/"
                >Privacy
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        
      </Container>
    </Typography>
  );
}