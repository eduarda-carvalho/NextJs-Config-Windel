'use client';

import React from 'react';
import { Grid, Box } from '@mui/material';
import { GridItemXs2 } from '@/components/GridItem/GridItemXs2';
import { GridItemXs3 } from '@/components/GridItem/GridItemXs3';
import { GridItemXs4 } from '@/components/GridItem/GridItemXs4';
import { GridItemXs5 } from '@/components/GridItem/GridItemXs5';
import { GridItemXs8 } from '@/components/GridItem/GridItemXs8';

export default function Home() {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 1 }}>
        <Box display="flex" width="100%" gap="2rem">
          <Box bgcolor="aquamarine" width="100%" height="5rem" gap="1rem"></Box>
          <Box bgcolor="aquamarine" width="100%" height="5rem" gap="1rem"></Box>
        </Box>
        <GridItemXs8>
          <Box bgcolor="red" width="100%" height="5rem"></Box>
        </GridItemXs8>
        <GridItemXs4>
          <Box bgcolor="red" width="100%" height="5rem"></Box>
        </GridItemXs4>
      </Grid>
    </>
  );
}
