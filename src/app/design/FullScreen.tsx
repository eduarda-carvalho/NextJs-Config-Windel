import { Icon, Stack, Tooltip, IconButtonProps } from '@mui/material';
import React from 'react';

import { TbArrowsMaximize, TbArrowsMinimize } from 'react-icons/tb';

interface FullScreenProps extends IconButtonProps {
  toggleFullScreen: () => void;
  isFullScreen: boolean;
}

export function FullScreen({
  toggleFullScreen,
  isFullScreen,
}: FullScreenProps) {
  return (
    <Tooltip
      arrow
      sx={{ bgcolor: 'gray.600', borderRadius: '5px' }}
      title={
        !isFullScreen ? 'Ativar modo tela cheia' : 'Desativar modo tela cheia'
      }
    >
      <Stack
        sx={{
          cursor: 'pointer',
          display: { xs: 'none', sm: 'none', md: 'block' },
        }}
      >
        {!isFullScreen ? (
          <Icon component={TbArrowsMaximize} onClick={toggleFullScreen} />
        ) : (
          <Icon component={TbArrowsMinimize} onClick={toggleFullScreen} />
        )}
      </Stack>
    </Tooltip>
  );
}
