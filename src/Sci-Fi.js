import React from 'react';
import {Link} from 'react-router-dom';



const Sci_Fi = (props) => {


    const Sci_FiList = props.genres.map(Sci_FiMovie => {
        return <li><Link to={`/Sci-Fi/${Sci_FiMovie}`}> {Sci_FiMovie}   </Link></li>
    })

    return (
        <ul>{Sci_FiList}</ul>
    )
}


export default Sci_Fi