import React from 'react';

const ImageList = (props) => {
       const images = props.images.map((image) => {
           return <img key={image.id} id={image.id} src={image.urls.thumb} />
       });

    return(<div>{images}</div>)
}

export default ImageList;