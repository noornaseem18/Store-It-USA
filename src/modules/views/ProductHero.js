import * as React from 'react';
import Typography from '../components/Home-page/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?w=800&q=80';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
        sx={{
          top: -28,
          left: -28,
          right: 0,
          bottom: 0,
          width: '10%',
          height: '10%',
          maxWidth: 600,
        }}
      />
      <Typography color="inherit" align="center" variant="h2" gutterBottom>
      Lorem ipsum dolor.
      </Typography>
    </ProductHeroLayout>
  );
}