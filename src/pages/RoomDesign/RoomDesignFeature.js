import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core';
import Dropzone from 'react-dropzone';

const useStyles = makeStyles(theme => ({
  dropzone: {
    border: '2px dashed grey',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  thumbnail: {
    maxWidth: '100%',
  },
}));

export function RoomImageUpload({ onImageUpload }) {
  const classes = useStyles();

  const [file, setFile] = useState(null);

  function handleDrop(acceptedFiles) {
    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result);
      onImageUpload(reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }

  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className={classes.dropzone}>
          <input {...getInputProps()} />
          {file ? (
            <img src={file} alt="Room" className={classes.thumbnail} />
          ) : (
            <p>Drag and drop a room image here or click to select a file</p>
          )}
        </div>
      )}
    </Dropzone>
  );
}

export function WallColorSelection({ onColorChange }) {
  const [color, setColor] = useState('');

  function handleColorChange(event) {
    setColor(event.target.value);
    onColorChange(event.target.value);
  }

  return (
    <TextField
      label="Wall Color"
      value={color}
      onChange={handleColorChange}
      variant="outlined"
      fullWidth
    />
  );
}

export function FlooringTileSelection({ onTileChange }) {
  const classes = useStyles();
  const [tile, setTile] = useState(null);

  function handleDrop(acceptedFiles) {
    const reader = new FileReader();
    reader.onload = () => {
      setTile(reader.result);
      onTileChange(reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className={classes.dropzone}>
            <input {...getInputProps()} />
            {tile ? (
              <img src={tile} alt="Tile" className={classes.thumbnail} />
            ) : (
              <p>Drag and drop a tile image here or click to select a file</p>
            )}
          </div>
        )}
      </Dropzone>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="outlined" onClick={() => onTileChange(null)}>
            Clear
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Browse Tiles
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
