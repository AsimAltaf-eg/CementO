import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    margin: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  result: {
    marginTop: theme.spacing(2),
    fontWeight: 'bold',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const BrickCalculator = () => {
  const [wallLength, setWallLength] = useState(0);
  const [wallHeight, setWallHeight] = useState(0);
  const [brickLength, setBrickLength] = useState(0);
  const [mortarThickness, setMortarThickness] = useState(0);
  const [brickHeight, setBrickHeight] = useState(0);
  const [numBricks, setNumBricks] = useState(0);
  const [measurementUnit, setMeasurementUnit] = useState('inches');
  const classes = useStyles();

  const calculateBricks = () => {
    let area;
    if (measurementUnit === 'inches') {
      area = wallLength * wallHeight;
    } else {
      area = (wallLength / 2.54) * (wallHeight / 2.54);
    }
    const brickArea = (brickLength + mortarThickness) * (brickHeight + mortarThickness);
    const numBricks = Math.ceil(area / brickArea);
    setNumBricks(numBricks);
  };

  const handleMeasurementUnitChange = event => {
    setMeasurementUnit(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <FormControl className={classes.formControl}>
        <Select
          value={measurementUnit}
          onChange={handleMeasurementUnitChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Measurement Unit' }}
        >
          <MenuItem value="inches">Inches</MenuItem>
          <MenuItem value="centimeters">Centimeters</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="wall-length"
        label={`Wall Length (${measurementUnit})`}
        type="number"
        className={classes.textField}
        value={wallLength}
        onChange={e => setWallLength(e.target.value)}
        margin="normal"
      />
      <TextField
        id="wall-height"
        label={`Wall Height (${measurementUnit})`}
        type="number"
        className={classes.textField}
        value={wallHeight}
        onChange={e => setWallHeight(e.target.value)}
        margin="normal"
      />
      <TextField
        id="brick-length"
        label={`Brick Length (${measurementUnit})`}
        type="number"
        className={classes.textField}
        value={brickLength}
        onChange={e => setBrickLength(e.target.value)}
        margin="normal"
      />
      <TextField
        id="mortar-thickness"
        label="Mortar Thickness"
        type="number"
        className={classes.textField}
        value={mortarThickness}
        onChange={e => setMortarThickness(e.target.value)}
        margin="normal"
      />
      <TextField
        id="brick-height"
        label="Brick Height"
        type="number"
        className={classes.textField}
        value={brickHeight}
        onChange={e => setBrickHeight(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={calculateBricks}
      >
        Calculate
      </Button>
      <div className={classes.result}>
        Number of Bricks: {numBricks}
      </div>
    </form>
  );
};

export default BrickCalculator;
