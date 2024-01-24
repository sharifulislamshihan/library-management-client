import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBitbucket, FaEye, FaPen } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const AllBooksCard = ({ bookName, category }) => {

    const [slides, setSlides] = useState([]);

    // to change item per page dynamically
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // state management for current page
    const [currentPage, setCurrentPage] = useState(0);

    // total number of books stored in server
    const { count } = useLoaderData();

    // counting the number of pages according to the total books getting from backend
    const numberOfPages = Math.ceil(count / itemsPerPage);

    // counting total page number for pagination
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/books?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [currentPage, itemsPerPage]);


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


    // set the slides data in the filteredBooks
    let filteredBooks = slides;

    /**
     * You can find here book using any input field. you do not need to fill up the both input field
     */

    // searching books using the bookName
    if (bookName) {
        filteredBooks = filteredBooks.filter(
            // eslint-disable-next-line react/prop-types
            (book) => book.name.toLowerCase().includes(bookName.toLowerCase())
        )
    }

    // searching books using the category
    if (category) {
        filteredBooks = filteredBooks.filter(
            (book) => book.category === category
        );
    }

    return (
        <div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 xl:gap-20 mx-10 lg:mx-10 xl:mx-40">
                {
                    // if searched book is available in the database
                    filteredBooks.length > 0 ? (
                        filteredBooks.map(filteredBook => (
                            <div key={filteredBook.id}>

                                <div className="card md:card-side bg-base-100 h-full hover:shadow-xl my-4">
                                    <figure><img className="w-48" src={filteredBook.image} alt="Shoes" /></figure>

                                    <div className="card-body">
                                        <Link to={`/books/${filteredBook._id}`}>
                                            <h2 className="card-title text-2xl font-heading font-semibold hover:text-blue-500 hover:underline">{filteredBook?.name?.split(':')[0].trim()}</h2>
                                        </Link>
                                        <h3 className="text-lg font-bold font-heading text-slate-600">Category: <span className="text-xl">{filteredBook.category}</span></h3>
                                        <h3 className="text-lg font-bold font-heading text-slate-600">Author: <span className="text-xl">{filteredBook.author}</span></h3>
                                        <h3 className="text-lg font-bold font-heading text-slate-600">Quantity: <span className="text-xl">{filteredBook.author}</span></h3>
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
                    ) 
                    :
                    (
                        // if the searched book is not available in the database
                        <div className="mx-auto">
                            <img className="w-1/3 mx-auto" src="https://cdn-icons-png.flaticon.com/512/1548/1548682.png" alt="" />
                            <p>This book is currently unavailable</p>
                        </div>
                    )
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
                            className={`join-item btn btn-square mr-4 ${currentPage === page ? 'text-purple-700 border-purple-700' : ''}`}
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
