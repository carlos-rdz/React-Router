import React from 'react';


const oneMovie = (props) => {

    const AllMovies = props.movies;
    const MovieName = props.match.params.name;
    const myMovie = AllMovies[MovieName]


    return (
        <div>
        <h1> {MovieName}</h1>
        <h4> {myMovie}</h4>
        </div>
    )
}


export default oneMovie