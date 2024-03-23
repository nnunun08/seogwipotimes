import React from "react";
function Desc({name, text}) {
    return(
        <p className='desc'>{name}{text}</p>
    )
}
export default Desc;