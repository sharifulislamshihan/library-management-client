// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


// import required modules
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';

const BusinessSlides = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [])

    const businessData = slides.filter(item => item.category === 'Business')

    return (
        <div>
            <Swiper
                //slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    // When window width is >= 1440px (for larger screens)
                    2560: {
                        slidesPerView: 7,
                        spaceBetween: 40
                    },
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 40
                    },
                    // When window width is >= 768px (for tablets and larger screens)
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // When window width is < 768px (for small screens and mobile devices)
                    0: {
                        slidesPerView: 1,
                    },
                }}
            >
                {

                    businessData.map(item => (
                        <SwiperSlide key={item.id}>

                            <div className="card bg-base-100 shadow-xl">
                                <figure className='h-72'><img src={item?.image} alt={item?.name} /></figure>
                                <div className="card-body h-80">
                                    <h2 className="card-title text-2xl font-heading font-semibold hover:text-blue-500 hover:underline">{item?.name.split(':')[0].trim()}</h2>
                                    <h3 className='text-body text-lg font-semibold mt-5'>Author: <span>{item?.author}</span></h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default BusinessSlides;