import React from 'react'
import "../styles/ImageComponent.css";

function Image ({src,alt,width,height}) {
  return (
    <div className="image-container">
    <Image
      src={src}
      alt={alt}
      width={width} // Set appropriate width
      height={height} // Set appropriate height
      className="custom-image"
      priority // Loads the image faster
    />
    <p className="image-caption">A moment of peace in nature.</p>
  </div>
  )
}

export default Image
