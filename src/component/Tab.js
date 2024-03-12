import React from "react";
function Tab({
    inner,
    keyword,
}) {
    return(
        <div className='tab'>
            <div className={inner}>
                <div className="keyword">
                    {keyword}
                </div>
            </div>
        </div>
    )
}
export default Tab;