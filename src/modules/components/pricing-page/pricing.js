import * as React from 'react';
import { Box , Card , CardContent , CardHeader , CssBaseline , Grid , Typography , Container } from '@material-ui/core';
import StarIcon from '@mui/icons-material/StarBorder';
import { GlobalStyles } from '@mui/material';
import theme from '../../theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CustomerNavbar from "../../customer-dashboard/customer-navbar";

const tiers = [
  {
    title: 'Lorem',
    price: '0',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex metus, convallis vel nisi suscipit, pulvinar aliquet'
    ],
  },
  {
    title: 'Lorem',
    subheader: 'Most popular',
    price: '00',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex metus, convallis vel nisi suscipit, pulvinar aliquet'
    ],
  },
  {
    title: 'Lorem',
    price: '00',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex metus, convallis vel nisi suscipit, pulvinar aliquet'
    ],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <CustomerNavbar />
      {/* Hero unit */}
      <Box
          sx={{
          height: 30,
          }}
           />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex metus, convallis vel nisi suscipit, pulvinar aliquet tortor. Suspendisse tempus augue sem, vel porttitor arcu
        </Typography>
        <Box
          sx={{
          width: 100,
          height: 20,
          }}
           />
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}