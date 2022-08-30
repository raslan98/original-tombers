import React from "react";
 
function DynamicVideo(getUrl) {
    return(
        <video width="420" height="280" controls>
            <source src = {getUrl.url} />
        </video>
    )
}
export default DynamicVideo;