import React from "react";
function DetailInfo({info}) {
    return(
        <div className='detailInfo'>
        <table>
            {info}
        </table>
        </div>
    )
}
export default DetailInfo;