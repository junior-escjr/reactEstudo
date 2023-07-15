import ImageShow from './ImageShow';

const ImageList = ({ images }) => {
    const renderedImage = images.map( ( image ) => {
        return <ImageShow image={image} key={image.id} />
    });

    return <div>{renderedImage}</div>
}

export default ImageList;