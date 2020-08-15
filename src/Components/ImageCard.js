import React from 'react';
import './ImageCard.css'

const ImageCard =(props)=>{
    return(
        <div>
         {/* <!-- Sample Wallpaper --> */}
           <article class="wallpaper">
            <img src={props.uri} alt="Wallpaper #1" class="wallpaper" />
          </article>
         </div>
    )
}
export default ImageCard;