import React from 'react';

function Keyword({keyword}) {
    return (
        <div className={`item ${keyword}`}>{keyword}</div>
    ) 
}

export default Keyword;