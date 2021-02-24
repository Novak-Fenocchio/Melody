import React from 'react';

import spotifyImage from './img/spotify.png';
import itunesImage from './img/itunes.png';
import youtubeImage from './img/youtubeImage.png';

const Weather = (props) =>{
    
    const linkSpotify = 'https://open.spotify.com/search/'+props.band;
    const linkItunes = 'https://music.apple.com/us/search?l=es&term='+props.band;
    const linkYoutube = 'https://www.youtube.com/results?search_query='+props.band;
    
    return(
        <React.Fragment>
            <div className="container container-header">

                <div className="container-band">
                    <div className="background-black">
                        <div className="containerDataBand">
                            <h2 className='title-band'>{props.band}</h2>
                            <div className="container-genre-band">
                            <h2 className='genre-band'><span>{props.genre}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="text-center contenedor-tops">
                    <div className="container-top-songs">
                        <h2>Topaaaaa canciones:</h2>
                        <h4 className='song-name'> <span className='number-ranking'>1.</span> {props.song0}.</h4>
                        <h4 className='song-name'> <span className='number-ranking'>2.</span> {props.song1}.</h4>
                        <h4 className='song-name'> <span className='number-ranking'>3.</span> {props.song2}.</h4>
                        <h4 className='song-name'> <span className='number-ranking'>4.</span> {props.song3}.</h4>
                        <h4 className='song-name'> <span className='number-ranking'>5.</span> {props.song4}.</h4>
                    </div>
                    <div className="container-image">
                        <img src={props.MainImage}></img>
                    </div>
                </div>

                <div className="container-paragraph-bio">
                <hr/>
                    <h1>Biografía</h1>
                    <p>
                        {props.summary}
                    </p>
                </div>
                <hr/>

                <div className="container-top-songs container-top-albums">
                    <div className="container-listen-buttons">
                        <div className="">
                            <a href={linkSpotify} target='_AUTOBLANK'>
                                <button className='btn-green btn-search'><img src={spotifyImage}/></button>
                             </a>
                            <a href={linkItunes} target='_AUTOBLANK'>
                                <button className='btn-white btn-search'><img src={itunesImage}></img></button>
                            </a>
                            <a href={linkYoutube} target='_AUTOBLANK'>
                                <button className='btn-red btn-search'><img src={youtubeImage}></img></button>
                            </a>
                        </div>
                    </div>

                    <div className="container-tops-albums">
                        <h2>Top Albums:</h2>
                        <h4 className='song-name top-first'> <span className='number-ranking'>1.</span> {props.album0}.</h4>
                        <h4 className='song-name top-second'> <span className='number-ranking'>2.</span> {props.album1}.</h4>
                        <h4 className='song-name top-third'> <span className='number-ranking'>3.</span> {props.album2}.</h4>
                        <h4 className='song-name'> <span className='number-ranking'>4.</span> {props.album3}.</h4>
                        <h4 className='song-name'> <span className='number-ranking'>5.</span> {props.album4}.</h4>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
    
}

export default Weather;