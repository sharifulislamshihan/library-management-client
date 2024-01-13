
{/* <img src="https://i.ibb.co/sQRx3DN/slide1.jpg" alt="" />
<img src="https://i.ibb.co/m9yP9mk/slide2.jpg" alt="" />
<img src="https://i.ibb.co/fvF9Smr/slide3.jpg" alt='' />
<img src="https://i.ibb.co/PrzbZSs/slide4.jpg" alt="" /> */}

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Carousel = () => {
    return (
        <div className="carousel w-full">

            {/* image 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/sQRx3DN/slide1.jpg" className="w-full" />

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                    <div className="text-base md:text-2xl font-heading font-semibold text-white">
                        <h3 className="">
                            <span>BACK TO SCHOOL</span>
                            <br />
                            <span className='text-xl md:text-5xl'>SPECIAL <span className='text-blue-500'>50% OFF</span></span>
                            <br />
                            <span>FOR OUR STUDENT</span>
                        </h3>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle ">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* image 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/m9yP9mk/slide2.jpg" className="w-full" />

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                    <div className="text-center font-semibold text-white">
                        <h3 className='text-body text-sm md:text-xl text-blue-600'>Benefits of Reading</h3>
                        <h3 className='text-md md:text-4xl lg:text-5xl font-body text-body  md:my-3'>Getting Smart, <br />
                            Thin, Healthy, <br />
                            Happy
                        </h3>

                        <p className='text-body pt-3 text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                </div>


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* image 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/fvF9Smr/slide3.jpg" className="w-full" />

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                    <div className="text-base md:text-2xl font-heading font-semibold text-white">
                        <h3 className="">
                            <span>BACK TO SCHOOL</span>
                            <br />
                            <span className='text-xl md:text-5xl'>SPECIAL <span className='text-blue-500'>50% OFF</span></span>
                            <br />
                            <span>FOR OUR STUDENT</span>
                        </h3>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* image 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/PrzbZSs/slide4.jpg" className="w-full" />

                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                    <div className="text-base md:text-2xl font-heading font-semibold text-white">
                        <h3 className="">
                            <span>BACK TO SCHOOL</span>
                            <br />
                            <span className='text-xl md:text-5xl'>SPECIAL <span className='text-blue-500'>50% OFF</span></span>
                            <br />
                            <span>FOR OUR STUDENT</span>
                        </h3>
                    </div>
                </div>


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;