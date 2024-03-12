import React from 'react';

function Keyword({keyword, ac}) {
    // NEWS,BRAND,TRAVEL,ACTIVITY,HISTORY,HOW-TO,PEOPLE,SPACE
    return (
        <div className={`item ${keyword} ${ac}`}>{keyword}</div>
    ) 
}

export default Keyword;