import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { FullScreen } from './FullScreen';
import Settings from './Settings';

export default function Navbar() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  return (
    <Box px={4}>
      <Box
        display="flex"
        height="5rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Stack direction={'row'} spacing={5} alignItems="center">
            <FullScreen
              aria-label="Tela cheia"
              toggleFullScreen={toggleFullScreen}
              isFullScreen={isFullScreen}
            />
            <Settings />
            {/* <Help />

            <LogOut />
            <Profile /> */}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
