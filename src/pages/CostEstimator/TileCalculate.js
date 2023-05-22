import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "30%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "30%",
  },
}));

const TileCalculator = () => {
  const classes = useStyles();
  const [surfaceType, setSurfaceType] = useState("");
  const [roomShape, setRoomShape] = useState("");
  const [roomLength, setRoomLength] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const [roomHeight, setRoomHeight] = useState("");
  const [tileLength, setTileLength] = useState("");
  const [tileWidth, setTileWidth] = useState("");
  const [noTiles, setNoTiles] = useState("");
  const [measurementUnit, setMeasurementUnit] = useState("ft");
  const handleSurfaceTypeChange = (event) => {
    setSurfaceType(event.target.value);
  };

  const handleRoomShapeChange = (event) => {
    setRoomShape(event.target.value);
  };

  const handleRoomLengthChange = (event) => {
    setRoomLength(event.target.value);
  };

  const handleRoomWidthChange = (event) => {
    setRoomWidth(event.target.value);
  };

  const handleRoomHeightChange = (event) => {
    setRoomHeight(event.target.value);
  };

  const handleTileLengthChange = (event) => {
    setTileLength(event.target.value);
  };

  const handleTileWidthChange = (event) => {
    setTileWidth(event.target.value);
  };

  const convertToFeet = (measurement) => {
    if (measurementUnit === "inches") {
      return measurement / 12;
    } else if (measurementUnit === "centimeters") {
      return measurement / 30.48;
    } else {
      return measurement;
    }
  };
  const handleMeasurementUnitChange = (event) => {
    setMeasurementUnit(event.target.value);
  };

  const calculateTileArea = () => {
    let roomArea = 0;
    if (roomShape === "rectangle") {
      roomArea = convertToFeet(roomLength) * convertToFeet(roomWidth);
    } else if (roomShape === "square") {
      roomArea = convertToFeet(roomLength) * convertToFeet(roomLength);
    } else if (roomShape === "triangle") {
      roomArea = (convertToFeet(roomLength) * convertToFeet(roomWidth)) / 2;
    } else if (roomShape === "circle") {
      roomArea =
        (convertToFeet(roomLength) / 2) *
        (convertToFeet(roomLength) / 2) *
        Math.PI;
    } else if (roomShape === "trapezoid") {
      roomArea =
        ((convertToFeet(roomLength) + convertToFeet(roomWidth)) / 2) *
        convertToFeet(roomHeight);
    }

    const tileArea = tileLength * tileWidth;
    const numberOfTiles = Math.ceil(roomArea / tileArea);
    setNoTiles(numberOfTiles);
    return numberOfTiles;
  };

  return (
    <div className={classes.root}>

      <FormControl className={classes.formControl}>
        <InputLabel id="surface-type-label">Surface Type</InputLabel>
        <Select
          labelId="surface-type-label"
          id="surface-type"
          value={surfaceType}
          onChange={handleSurfaceTypeChange}
        >
          <MenuItem value="wall">Wall</MenuItem>
          <MenuItem value="floor">Floor</MenuItem>
        </Select>
      </FormControl>


      <FormControl className={classes.formControl}>
        <InputLabel id="Measurement-type-label">Measurement Unit</InputLabel>
   
              <Select
                labelId="MeasurementUnit-type-label"
                id="Measurement Unit-type"
                value={measurementUnit}
                onChange={handleMeasurementUnitChange}
              >
                <MenuItem value="feet">Feet</MenuItem>
                <MenuItem value="inches">Inches</MenuItem>
                <MenuItem value="centimeters">Centimeters</MenuItem>
              </Select>
      </FormControl>



      <FormControl className={classes.formControl}>
        <InputLabel id="room-shape-label">Room Shape</InputLabel>
        <Select
          labelId="room-shape-label"
          id="room-shape"
          value={roomShape}
          onChange={handleRoomShapeChange}
        >
          <MenuItem value="rectangle">Rectangle</MenuItem>
          <MenuItem value="square">Square</MenuItem>
          <MenuItem value="triangle">Triangle</MenuItem>
          <MenuItem value="circle">Circle</MenuItem>
          <MenuItem value="trapezoid">Trapezoid</MenuItem>
        </Select>
      </FormControl>

      {roomShape === "rectangle" || roomShape === "square" ? (
        <>
          <TextField
            id="room-length"
            label={`Room Length (${measurementUnit})`}
            type="number"
            value={roomLength}
            onChange={handleRoomLengthChange}
          />
          <TextField
            id="room-width"
            label={`Room Width (${measurementUnit})`}
            type="number"
            value={roomWidth}
            onChange={handleRoomWidthChange}
          />
        </>
      ) : roomShape === "triangle" ? (
        <>
          <TextField
            id="room-length"
            label={`Room Base (${measurementUnit})`}
            type="number"
            value={roomLength}
            onChange={handleRoomLengthChange}
          />
          <TextField
            id="room-width"
            label={`Room Height (${measurementUnit})`}
            type="number"
            value={roomWidth}
            onChange={handleRoomWidthChange}
          />
        </>
      ) : roomShape === "circle" ? (
        <TextField
          id="room-length"
          label={`Room Radius (${measurementUnit})`}
          type="number"
          value={roomLength}
          onChange={handleRoomLengthChange}
        />
      ) : roomShape === "trapezoid" ? (
        <>
          <TextField
            id="room-length"
            label={`Room Length (${measurementUnit})`}
            type="number"
            value={roomLength}
            onChange={handleRoomLengthChange}
          />
          <TextField
            id="room-width"
            label={`Room Width (${measurementUnit})`}
            type="number"
            value={roomWidth}
            onChange={handleRoomWidthChange}
          />
          <TextField
            id="room-height"
            label={`Room Height (${measurementUnit})`}
            type="number"
            value={roomHeight}
            onChange={handleRoomHeightChange}
          />
        </>
      ) : null}

      <TextField
        id="tile-length"
        label={`Tile Length (${measurementUnit})`}
        type="number"
        value={tileLength}
        onChange={handleTileLengthChange}
      />
      <TextField
        id="tile-width"
        label={`Tile Width Length (${measurementUnit})`}
        type="number"
        value={tileWidth}
        onChange={handleTileWidthChange}
      />
      <Button  variant="contained" color="primary" style={{ backgroundColor: "blue" }} onClick={calculateTileArea}>Calculate Tile </Button>
      <Typography variant="body1">Total Tile : {noTiles}</Typography>
    </div>
  );
};

export default TileCalculator;

