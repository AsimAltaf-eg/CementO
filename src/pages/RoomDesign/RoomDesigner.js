import React, { useState } from "react";
import {
  RoomImageUpload,
  WallColorSelection,
  FlooringTileSelection,
} from "./RoomDesignFeature";
import {
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { useParams } from 'react-router-dom';
import "./asim.css";
import { array } from "joi";

function Room() {
  const [mainImageUrl, setMainImageUrl] = useState('')
  const [topImage, setTopImage] = useState(1);
  const [leftImage, setLeftImage] = useState(1);
  const { imageIndex } = useParams();
  const handleTopImageChange = (newTopImage) => {
    setTopImage(newTopImage);
    loadMainImage(newTopImage, leftImage);
  };

  const handleLeftImageChange = (newLeftImage) => {
    setLeftImage(newLeftImage);
    loadMainImage(topImage, newLeftImage);
  };

  const roomnumber = useParams();
  const lin = roomnumber.id;
  console.log(lin);

  const loadMainImage = (topImage, leftImage) => {
    // Load the main image based on the selected images from sidebars
    // This is a dummy function, replace this with your logic to load the image from your S3 bucket
    
    const newMainImageUrl = `${topImage}+${leftImage}`;
    setMainImageUrl(newMainImageUrl);
  };

  

  return (
    <div className="Room">
      <div className="top">
        <div className="top2">
          <div className="top_image">
            {Array(15).fill(0).map((imageUrl,index) => (
              <button onClick={()=>handleTopImageChange(index +1)}>
              <div className="image">
              {console.log(index)}
                <img
                  src={
                    
                    "https://roomvisualizer.s3.us-east-2.amazonaws.com/New+folder/Designs/" +
                    (index+1) + ".jpg"
                  }
                />
                <p className="top_image_p">Tile Design {(index+1) } </p>
              </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="center"></div>
      <div className="middle">
        <div className="left">
          <div className="l_image">
            {Array(15).fill(0).map((imageUrl,index) => (
              <button onClick={()=>handleLeftImageChange(index +1)}>
              <div className="image">
                <img
                  src={
                    "https://roomvisualizer.s3.us-east-2.amazonaws.com/New+folder/Designs/" +
                    (index+1) + ".jpg"
                  }
                />
                <span
                  style={{
                    margintop: "40px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    padding: "10px",
                  }}
                  className="l_image_span"
                >
                  <p className="left_image_p">Wall Design {(index+1)}</p>
                </span>
              </div>
              </button>
            ))}
          </div>
        </div>
        {console.log("room" + lin + "/" + mainImageUrl + ".jpg")}
        <div className="center">
          <img src={"https://roomvisualizer.s3.us-east-2.amazonaws.com/New+folder/Room" + lin + "/" +mainImageUrl  + ".jpg"} />
        </div>
      </div>
    </div>
  );
}

export default Room;
