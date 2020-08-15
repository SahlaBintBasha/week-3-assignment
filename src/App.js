import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import ImageCard from './Components/ImageCard';
import image1 from './img/venom-1.jpg';
import image2 from './img/hulk-1.jpg';
import image3 from './img/venom-2.jpg';
import image4 from './img/Rogue.jpg';
import image5 from './img/america.jpg';
import image6 from './img/Ironman.png';
import image7 from './img/marvelblack.jpg';
import image8 from './img/spiderman.jpg';
import image9 from './img/Thanos.jpg';
import image10 from './img/Thor.jpg';
import SearchInput from './Components/SearchInput'
import './App.css';

function App() {
  return (
    <div>
      {/* Header Components */}
    <Header />
    <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>

        {/* Search Input Components */}
        <SearchInput />

        {/* Sample Wallpaper */}
        <div class="sample-wallpaper">
        <ImageCard uri={image1} />
        <ImageCard uri={image2} />
        <ImageCard uri={image3} />
        <ImageCard uri={image4} />
        <ImageCard uri={image5} />
        <ImageCard uri={image6} />
        <ImageCard uri={image7} />
        <ImageCard uri={image8} />
        <ImageCard uri={image9} />
        <ImageCard uri={image10} />        
        </div>  
      </div>
    </header>
    </div>   
    );
}

export default App;
