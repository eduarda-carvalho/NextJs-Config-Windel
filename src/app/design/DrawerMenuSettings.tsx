import React, { ElementType } from 'react';
import { Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface DrawerMenuSettingsProps {
  title: string;
  icon: ElementType;
}

export default function DrawerMenuSettings({
  title,
  icon,
}: DrawerMenuSettingsProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      paddingX="1rem"
      sx={{
        cursor: 'pointer',

        transition: 'backgroundColor 1s',

        ':hover': {
          backgroundColor: '#1d416e',
        },
      }}
    >
      <Icon
        component={icon}
        sx={{
          color: 'white',
        }}
      />
      <Typography
        sx={{
          m: 0,
          p: 2,
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '22px',
          color: 'white',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
