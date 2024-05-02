import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const images = [
        {
            src: "src/assets/picture/lastRecipe1.svg"
        },
        {
            src: "src/assets/picture/lastRecipe2.svg"
        },
        {
            src: "src/assets/picture/lastRecipe3.svg"
        },
        {
            src: "src/assets/picture/lastRecipe4.svg"
        },
        {
            src: "src/assets/picture/burger.svg"
        },
        {
            src: "src/assets/picture/caramel.svg"
        },
        {
            src: "src/assets/picture/chees.svg"
        }
    ]
    return (
        <div className="carouselContainer">
            <Slider {...settings}>
                {
                    images.map((img, id) => {
                        return (
                            <div
                                key={id}
                                className="carousel"
                            >
                                <img src={img.src} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Carousel