import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChooseRoom() {
  const navigate = useNavigate();
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        margin: '2rem',   
      },
      heading: {
        textAlign: 'center',
        margin: '2rem 0',
      },
      cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: '1rem',
      },
      card: {
        width: '500px',
        height: '450px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      },
      text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '24px',
        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)',
        padding: '5px',
        marginBottom: '5px', // Add margin to separate the text from the image
      },
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    const setval = Number(index + 1);
    setSelectedImage(setval);
    navigate(`/RoomVisualizer/${setval}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Choose Your Room</h1>
      <div style={styles.cardContainer}>
        <button onClick={() => handleImageClick(0)}>
          <div style={{ ...styles.card, backgroundImage: 'url(https://roomvisualizer.s3.us-east-2.amazonaws.com/New+folder/Room1.jpg)' }}></div>
          <span style={styles.text}>Normal Classroom</span>
        </button>
        <button onClick={() => handleImageClick(1)}>
          <div style={{ ...styles.card, backgroundImage: 'url(https://roomvisualizer.s3.us-east-2.amazonaws.com/New+folder/Room2.jpg)' }}></div>
          <span style={styles.text}>Bedroom</span>
        </button>
        <button onClick={() => handleImageClick(2)}>
          <div style={{ ...styles.card, backgroundImage: 'url(https://roomvisualizer.s3.us-east-2.amazonaws.com/New+folder/Room3.jpg)' }}></div>
          <span style={styles.text}>Kitchen</span>
        </button>
        <button onClick={() => handleImageClick(3)}>
          <div style={{ ...styles.card, backgroundImage: 'url(https://roomvisualizer.s3.us-east-2.amazonaws.com/New+folder/Room4.jpg)' }}></div>
          <span style={styles.text}>Restroom</span>
        </button>
        <button onClick={() => handleImageClick(4)}>
          <div style={{ ...styles.card, backgroundImage: 'url(https://roomvisualizer.s3.us-east-2.amazonaws.com/New+folder/Room5.jpg)' }}></div>
          <span style={styles.text}>Bathroom</span>
        </button>
      </div>
    </div>
  );
}

export default ChooseRoom;
