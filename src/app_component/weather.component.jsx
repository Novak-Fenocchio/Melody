import React from 'react';

const Weather = (props) =>{
    return(
        <div className="container">

            <div className="container-band">
                <div className="background-black">
                    <div className="containerDataBand">
                        <h2 className='title-band'>{props.band}</h2>
                        <div className="">
{/*                             <h2 className='age-band'>Fundado: {props.fundation}</h2>
 */}                            <h2 className='genre-band'>Genero: <span>{props.genre}</span></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <div className="container-top-songs">
                    <h4 className='song-name'> <span className='number-ranking'>1.</span> {props.song0}.</h4>
                    <h4 className='song-name'> <span className='number-ranking'>2.</span> {props.song1}.</h4>
                    <h4 className='song-name'> <span className='number-ranking'>3.</span> {props.song2}.</h4>
                    <h4 className='song-name'> <span className='number-ranking'>4.</span> {props.song3}.</h4>
                    <h4 className='song-name'> <span className='number-ranking'>5.</span> {props.song4}.</h4>
                </div>
            </div>

        </div>
    );
    
}

export default Weather;