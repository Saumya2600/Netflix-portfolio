import React, { useState } from 'react';
import './Music.css';
import albumCover1 from '../images/Hotelcalifornia.jpg'; // Hotel California by The Eagles
import albumCover2 from '../images/ac-dc.jpg'; // Back in Black by AC/DC
import albumCover3 from '../images/guns-n-roses.webp'; // Appetite for Destruction by Guns N' Roses
import albumCover4 from '../images/queen.png';
import albumCover5 from '../images/nirvana.png';
import albumCover6 from '../images/moon.png';
import albumCover7 from '../images/mars.png';
import beatles from '../images/beatles.png';
import divide from '../images/divide.png';
import reck from '../images/reckless.png';

const favoriteGenres = ["All", "Rock", "Classic Rock", "Hard Rock", "Blues", "Alternative", "Pop", "Jazz/Pop"];

const favoriteAlbums = [
  {
    title: "Hotel California",
    artist: "The Eagles",
    imgSrc: albumCover1,
    genre: "Classic Rock",
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
    imgSrc: albumCover2,
    genre: "Hard Rock",
  },
  {
    title: "Appetite for Destruction",
    artist: "Guns N' Roses",
    imgSrc: albumCover3,
    genre: "Hard Rock",
  },
  {
    title: "A Night at the Opera",
    artist: "Queen",
    imgSrc: albumCover4,
    genre: "Rock",
  },
  {
    title: "Nevermind",
    artist: "Nirvana",
    imgSrc: albumCover5,
    genre: "Alternative",
  },
  {
    title: "Reckless",
    artist: "Bryan Adams",
    imgSrc: reck,
    genre: "Classic Rock",
  },
  {
    title: "÷ (Divide)",
    artist: "Ed Sheeran",
    imgSrc: divide,
    genre: "Pop",
  },
  {
    title: "It Might as Well Be Swing",
    artist: "Frank Sinatra",
    imgSrc: albumCover6,
    genre: "Jazz/Pop",
  },
  {
    title: "The Beatles (The White Album)",
    artist: "The Beatles",
    imgSrc: beatles,
    genre: "Classic Rock",
  },
  {
    title: "Uptown Special",
    artist: "Mark Ronson ft. Bruno Mars",
    imgSrc: albumCover7,
    genre: "Pop",
  },
];

const Music: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  // Filter albums based on the selected genre
  const filteredAlbums = selectedGenre === "All"
    ? favoriteAlbums
    : favoriteAlbums.filter(album => album.genre === selectedGenre);

  return (
    <div className="music-page">
      <div className="quote">
        <p>“Rock and Roll isn’t a genre, it’s a way of life.” 🎸</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {favoriteGenres.map((genre, index) => (
            <div
              key={index}
              className={`genre-card ${selectedGenre === genre ? 'selected' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedGenre(genre)}
            >
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums {selectedGenre !== "All" && `(${selectedGenre})`}</h3>
        <div className="albums">
          {filteredAlbums.length > 0 ? (
            filteredAlbums.map((album, index) => (
              <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
                <img
                  src={album.imgSrc}
                  alt={album.title}
                  className="album-image"
                  onError={() => console.log(`Failed to load image for ${album.title}`)}
                />
                <div className="album-details">
                  <h4>{album.title}</h4>
                  <p>by {album.artist}</p>
                  <span className="album-genre">{album.genre}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No albums found for this genre.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Music;