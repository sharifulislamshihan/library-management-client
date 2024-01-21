import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBitbucket, FaEye, FaPen } from "react-icons/fa";

const AllBooksCard = () => {

    const [slides, setSlides] = useState([]);


    // total number of books stored in server
    const { count } = useLoaderData();
    console.log(count);

    // to change item per page dynamically
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // state management for current page
    const [currentPage, setCurrentPage] = useState(0);
    console.log(itemsPerPage);

    useEffect(() => {
        fetch(`http://localhost:5000/books?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [currentPage, itemsPerPage]);


    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);

    const handleItemsPerPage = e => {
        console.log(e.target.value);
        setItemsPerPage(parseInt(e.target.value));

        // set Current page to first page if the items per page change
        setCurrentPage(0)
    }

    // handling prev button 

    const handlePrevButton = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    // handlling next button
    const handleNextButton = () => {
        if (currentPage < (pages.length - 1)) {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div>
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
                                    <h3 className="text-lg font-bold font-heading text-slate-600">Quantity: <span className="text-xl">{slide.author}</span></h3>
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



            {/* Pagination */}
            <div className=" join flex flex-wrap justify-center my-16 mx-auto space-y-5">

                <button onClick={handlePrevButton} className="join-item btn mr-4 mt-5">«</button>

                {
                    pages.map(page =>
                        <button
                            onClick={() => setCurrentPage(page)}
                            // set the class name dynamically.
                            className={`join-item btn btn-square mr-4 ${currentPage === page && 'text-purple-700 border-purple-700'}`}
                            key={page}
                        >{page + 1}</button>
                    )
                }

                <button onClick={handleNextButton} className="join-item btn">»</button>

                <div className="ml-5">
                    <select value={itemsPerPage} onChange={handleItemsPerPage} className="select">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </div>


    );
};

export default AllBooksCard;
