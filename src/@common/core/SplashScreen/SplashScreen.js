import { memo } from 'react';
import Box from '@mui/material/Box';

function SplashScreen() {
  return (
    <div id="fuse-splash-screen">
      <div className="logo">
        <div> </div>
      </div>
      <Box
        id="spinner"
        sx={{
          '& > div': {
            backgroundColor: 'palette.secondary.main',
          },
        }}>
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </Box>
    </div>
  );
}

export default memo(SplashScreen);
