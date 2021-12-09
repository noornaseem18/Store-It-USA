import * as React from 'react';
import { Box , Link } from '@material-ui/core';
import Toolbar from '../components/Home-page/Toolbar';
import AppBar from '../components/Home-page/AppBar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'Store It USA'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/login"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Box
              sx={{
              width: 15,
              }}
           />
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/register"
              sx={{ ...rightLink }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;