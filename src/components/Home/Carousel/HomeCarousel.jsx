import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselData } from './CarouselData';

const HomeCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    return (
        <div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true  }
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                slidesToSlide={1}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                    {
                        carouselData.map((ele) => (
                            <div  key={ele.id} style={{width:'100%'}}>
                                <img src={ele.url} alt="img" style={{width:"100%"}}/>
                            </div>
                        ))
                    }
            </Carousel>
        </div>
    )
}

export default HomeCarousel


