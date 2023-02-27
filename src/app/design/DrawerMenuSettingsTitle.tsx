import { Typography } from '@mui/material';
import React from 'react';

interface DrawerMenuSettingsTitleProps {
  title: string;
}

export default function DrawerMenuSettingsTitle({
  title,
}: DrawerMenuSettingsTitleProps) {
  return (
    <Typography
      sx={{
        m: 0,
        p: 2,
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '22px',
        color: 'white',
      }}
    >
      {title}
    </Typography>
  );
}
