
function ImageItem({image}){
  
    return (<div><img className="imageCss" src={image.urls.small} alt=""/> </div>)
};

export default ImageItem;