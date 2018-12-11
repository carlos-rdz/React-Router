import React from 'react';
import {Link} from 'react-router-dom';




const Horror = (props) => {


    const HorrorList = props.genres.map(horrorMovie => {
        return <li><Link to={`/Horror/${horrorMovie}`}> {horrorMovie}   </Link></li>
    })

    return (

        <ul>{HorrorList}</ul>
    )
}


export default Horror