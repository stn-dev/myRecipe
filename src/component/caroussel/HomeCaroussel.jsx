import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export function HomeCaroussel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    const data = [
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

    ]


    return (
        <div className="carousselle">
            <Slider {...settings} >
                {
                    data.map((item, id) => {
                        return (
                            <div key={id} className='item'>
                                <img src={item.src} />
                            </div>
                        )
                    })
                }

            </Slider>

        </div>
    )
}


export default HomeCaroussel