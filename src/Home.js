import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return(
        <ul>
            <li><Link to='/Page1'>페이지1</Link></li>
            <li><Link to='/Page2'>페이지2</Link></li>
        </ul>
    ) 
}
export default Home;