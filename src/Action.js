import React from 'react';
import {Link} from 'react-router-dom';



const Action = (props) => {
    return (
        <div>
        <h1>Action</h1>
        <Link to="/Action/:movie">Die Hard</Link>
        </div>
    )
}


export default Action