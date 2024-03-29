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
import { Link } from 'react-router-dom';

const ScienceAndMathSlides = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch(' https://library-management-server-seven.vercel.app/books')
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [])

    const scienceAndMathData = slides.filter(item => item.category === 'Science and Math')

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

                    scienceAndMathData.map(item => (
                        <SwiperSlide key={item.id}>

                            <div className="card bg-base-100 shadow-xl">
                                <figure className='h-72'><img src={item?.image} alt={item?.name} /></figure>
                                <div className="card-body h-80">
                                    <Link to={`/books/${item._id}`}>
                                        <h2 className="card-title text-2xl font-heading font-semibold hover:text-blue-500 hover:underline">{item?.name?.split(':')[0].trim()}</h2>
                                    </Link>
                                    <h3 className='text-body text-lg font-semibold mt-5'>Author: <span>{item?.author}</span></h3>
                                </div>
                                <Link to={`/books/${item._id}`}>
                                    <div className='pb-5'>
                                        <button className='btn btn-outline'>Details</button>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default ScienceAndMathSlides;