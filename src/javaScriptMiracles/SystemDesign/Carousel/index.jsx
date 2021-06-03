const images = [
    'https://picsum.photos/400/300/?image=926',
    'https://picsum.photos/400/300/?image=925',
    'https://picsum.photos/400/300/?image=924',
    'https://picsum.photos/400/300/?image=923',
    'https://picsum.photos/400/300/?image=922',
    'https://picsum.photos/400/300/?image=921',
];

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const showPrevSet = () => {
        const t = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(t);
    }

    const showNextSet = () => {
        const t = (currentIndex + 1) % images.length;
        setCurrentIndex(t);
    }

    return (
        <div className="carousel__wrapper">
            <div className="carousel__container">
                {images.map((img, index) => {
                    let className = 'carousel__image'
                    if (index === currentIndex) className += ' active';

                    return <img src={img} className={className} key={`img-${index}`} id={`img-${index}`} />;
                })}
            </div>
            <div className="carousel__controls">
                <button className="carousel__button" onClick={showPrevSet}>Prev</button>
                <button className="carousel__button" onClick={showNextSet}>Next</button>
            </div>
        </div>
    );
}


// Render
ReactDOM.render(<Carousel/>,
    document.getElementById('app')
);