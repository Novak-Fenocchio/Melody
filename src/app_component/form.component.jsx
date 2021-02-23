import React from 'react';

const Form = (props) =>
{
    return(
        <div className="container">
            <h1>Buscar sobre un artista o banda</h1>
            <form onSubmit={props.loadWeather}>
            <div className="containerForm">
                <div className="formInputs">
                    <label htmlFor="">Artista o banda:</label> <br/>
                    <input type="text" name="city"  placeholder='Buenos Aires' autoComplete='off' id=""/>
                </div>

                <div className="container-button">
                    <button className='btn-black'>Buscar</button>
                </div>
            </div>
            </form>
        </div>
    );
}

export default Form