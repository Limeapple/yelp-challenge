import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const priceMarks = [
  {
    value: 1,
    label: '$0-$10',
  },
  {
    value: 2,
    label: '$11-$30',
  },
  {
    value: 3,
    label: '$31-$60',
  },
  {
    value: 4,
    label: '$61+',
  },
];
const distanceMarks = [
    {
        value: 0,
        label: 0,
    },
    {
      value: 10,
      label: 10,
    },
    {
      value: 20,
      label: 20,
    },
    {
      value: 30,
      label: 30,
    },
    {
      value: 40,
      label: 40,
    },
    {
        value: 50,
        label: 50,
      },
  ];
export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Price Range (Per Person)
      </Typography>
      <Slider
        defaultValue={2}
        step={1}
        marks={priceMarks}
        min={1}
        max={4}
      />
      
      <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom>
        Distance Away (Miles)
      </Typography>
      <Slider
        defaultValue={20}
        aria-labelledby="discrete-slider-custom"
        step={5}
        valueLabelDisplay="auto"
        marks={distanceMarks}
        min={0}
        max={50}
      />
        <Button style={{marginTop:20}} variant="outlined" color="primary">Apply Filter</Button>
    </div>
  );
}
