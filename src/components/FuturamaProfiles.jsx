import React, { useState, useEffect } from 'react';

import { FaHeart, FaEye, FaFile } from 'react-icons/fa';

function FuturamaProfiles() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/futurama/characters')
      .then(response => response.json())
      .then(data => setCharacters(data.slice(0, 4)));
  }, []);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem' }}>Futurama</h1>
      {characters.map(character => (
        <div
          key={character.id}
          style={{
            border: '1px solid gray',
            padding: '1rem',
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f2f2f2',
            width: '92%',
            position: 'relative',
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            in omnis modi odi <br />
            tenetur quos quidem natus id, repudiandae repellat distinctio,
            quasi odit eos<br />
            neque unde voluptatibus eius adipisci doloremque.Lorem ipsum dolor
            sit amet consectetur,<br /> adipisicing elit. Quibusdam in omnis
            modi odio tenetur quos quidem natus id, repudiandae repellat
            distinctio, quasi odit eos<br />
            neque unde voluptatibus eius adipisci doloremque?
          </p>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <img
              src={character.images.main}
              alt={character.name}
              style={{
                backgroundColor: '#f2f2f2',
                width: '85%',
                position: 'relative',
              }}
            />
            {hovered && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '5px',
                  right: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaHeart style={{ marginRight: '0.5rem' }} />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '1rem',
                  }}
                >
                
                  <FaFile />
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '5px',
              left: '5px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h3>{character.species}</h3>
          </div>
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaHeart style={{ marginRight: '0.5rem' }} />65
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
              <FaEye />709k
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FuturamaProfiles;
