const ImageShow = ({ image }) => {
    console.log(image);
    return (
        <div>
            <a href={image.links.download}>
                <img src={image.urls.small} alt={image.alt_description} />
            </a>
        </div>
    );
}

export default ImageShow;