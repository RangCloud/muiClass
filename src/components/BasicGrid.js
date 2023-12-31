import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>my test : xs=12</Item>
        </Grid>
        <Grid item xs={13}>
          <Item>my test : xs=13</Item>
        </Grid>
        <Grid item xs={11}>
          <Item>my test : xs=11</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs=1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=2</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      <AccessTimeFilledIcon/>
    </Box>
  );
}