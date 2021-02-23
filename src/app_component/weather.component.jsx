import React from 'react';

const Weather = (props) =>{
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
                        <h2>Top canciones:</h2>
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

                <div className="container-top-albums">

                </div>

            </div>
        </React.Fragment>
    );
    
}

export default Weather;