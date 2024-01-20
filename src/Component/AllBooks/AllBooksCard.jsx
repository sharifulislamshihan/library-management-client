import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBitbucket, FaEye, FaPen } from "react-icons/fa";

const AllBooksCard = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/books")
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [])
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 xl:gap-20 mx-10 lg:mx-10 xl:mx-40">
            {
                slides.map(slide => (
                    <div key={slide.id}>
                        {/* <div className="card md:card-side bg-base-100 shadow-xl h-full">
                            <figure><img className="w-full" src={slide.image} alt={slide.name} /></figure>
                            <div className="card-body">
                                <Link to={`/books/${slide._id}`}>
                                    <h2 className="card-title text-lg md:text-3xl font-heading font-semibold hover:text-blue-500 hover:underline">{slide?.name?.split(':')[0].trim()}</h2>
                                </Link>
                                <p className="text-md md:text-xl font-semibold font-body">Category: <span className="font-bold">{slide.category}</span></p>
                                <p className="text-md md:text-xl font-semibold font-body">Author: <span className="font-bold">{slide.author}</span></p>
                                <div className="card-actions flex justify-between md:justify-end ">
                                    <div className="join join-horizontal gap md:join-vertical">
                                        <button className="btn join-item">Button</button>
                                        <button className="btn join-item">Button</button>
                                        <button className="btn join-item">Button</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="card md:card-side bg-base-100 h-full hover:shadow-xl my-4">
                            <figure><img className="w-48" src={slide.image} alt="Shoes" /></figure>

                            <div className="card-body">
                                <Link to={`/books/${slide._id}`}>
                                    <h2 className="card-title text-2xl font-heading font-semibold hover:text-blue-500 hover:underline">{slide?.name?.split(':')[0].trim()}</h2>
                                </Link>
                                <h3 className="text-lg font-bold font-heading text-slate-600">Category: <span className="text-xl">{slide.category}</span></h3>
                                <h3 className="text-lg font-bold font-heading text-slate-600">Author: <span className="text-xl">{slide.author}</span></h3>
                                <div className="card-actions flex justify-between mt-4 ">
                                    <div className="join join-horizontal gap-3 md:gap-6 mx-auto">
                                        <Link>
                                            <button className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"><FaEye></FaEye></button>
                                        </Link>

                                        {/* to={`/updatePhone/${_id}`}> */}
                                        <Link>
                                            <button className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"><FaPen></FaPen></button>
                                        </Link>
                                        <button
                                            className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"><FaBitbucket></FaBitbucket></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllBooksCard;