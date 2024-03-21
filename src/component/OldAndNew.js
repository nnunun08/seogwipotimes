import React from "react";
function OldAndNew({text1, text2}) {
    return(
        <div className='oldAndNew'>
            <div className='old'>
                <table>
                    <tr><th>OLD</th></tr>
                    <tr><td>{text1}</td></tr>
                </table>
            </div>
            <img src='/img/ic_downArr.svg' alt='arr'/>
            <div className='new'>
                <table>
                    <tr><th>NEW</th></tr>
                    <tr><td>{text2}</td></tr>
                </table>
            </div>
        </div>
    )
}
export default OldAndNew;