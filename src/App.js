import React from 'react';
import './App.css';

import fotito from './img/background.jpg';

import Weather from './app_component/weather.component';
import Form from './app_component/form.component';
import Nav from './app_component/nav';

/* api.openweathermap.org/data/2.5/weather?q={city name}&appid= */
const API_key = 'baa4f0d8d71d7e8197c87d67191a1d19';

class App extends React.Component{

  constructor()
  {
    super();
    this.state={
      band: undefined,
      fundation: undefined,
      genre: undefined,
      song0: undefined,
      song1: undefined,
      song2: undefined,
      song3: undefined,
      song4: undefined
    };

  }

  
  buscarData = async (e) =>
  {
        /* Top tracks */
        e.preventDefault();
        const band = e.target.elements.city.value;
        const api_call = await fetch(        
          `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${band}&api_key=baa4f0d8d71d7e8197c87d67191a1d19&format=json`
        );

      const response = await api_call.json();
      console.log(response);

      /* InfoArtist */
      const artistInfo = await fetch(        
        `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${band}&api_key=${API_key}&format=json`);
      const ResponseArtistInfo = await artistInfo.json();
      console.log(ResponseArtistInfo.artist);

      /* Tops albums */
      const TopAlbumInfo = await fetch(        
        `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${band}&api_key=${API_key}&format=json`);
      const ResponseTopAlbumInfo = await TopAlbumInfo.json();
      console.log(ResponseTopAlbumInfo.topalbums.album[0]);

      this.setState(
        {
          band: ResponseArtistInfo.artist.name,
          genre: ResponseArtistInfo.artist.tags.tag[0].name,
          song0: response.toptracks.track[0].name,
          song1: response.toptracks.track[1].name,
          song2: response.toptracks.track[2].name,
          song3: response.toptracks.track[3].name,
          song4: response.toptracks.track[4].name
        });
      };


  render()
  {

    return(
      <React.Fragment>
          <Nav />
        <div className="App">
         <Form loadWeather={this.buscarData}/>
         <Weather 
          band={this.state.band}
          genre={this.state.genre}
          song0={this.state.song0}
          song1={this.state.song1}
          song2={this.state.song2}
          song3={this.state.song3}
          song4={this.state.song4}
         />
        </div>
      </React.Fragment>
    );   
  }
}
export default App;

