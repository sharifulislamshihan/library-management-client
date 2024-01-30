import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBitbucket, FaEye, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const AllBooksCard = ({ bookName, category }) => {

    // for books
    const [slides, setSlides] = useState([]);
    // for cart
    //const [cart, setCart] = useState([]);

    // to change item per page dynamically
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // state management for current page
    const [currentPage, setCurrentPage] = useState(0);

    // total number of books stored in server
    const { count } = useLoaderData();
    // const count = booksData.length;

    // counting the number of pages according to the total books getting from backend
    const numberOfPages = Math.ceil(count / itemsPerPage);

    // counting total page number for pagination
    const pages = [...Array(numberOfPages).keys()];

    // fetching data from backend
    useEffect(() => {
        fetch(`http://localhost:5000/books?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [currentPage, itemsPerPage]);


    // // handling add to cart
    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     const savedCart = [];
    //     // get id of the added book
    //     for (const id in storedCart) {
    //         // get book from the book state by using id
    //         const addedBook = slides.find(slide => slide._id === id)
    //         if (addedBook) {
    //             // add quantity
    //             const quantity = storedCart[id]
    //             addedBook.quantity = quantity;
    //             // add the added product into saved cart
    //             savedCart.push(addedBook);
    //         }
    //         console.log("added Book", addedBook);
    //     }
    // }, [slides])


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

    // handle next button
    const handleNextButton = () => {
        if (currentPage < (pages.length - 1)) {
            setCurrentPage(currentPage + 1)
        }
    }


    //handle Delete
    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/books/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = slides.filter(slide => slide._id !== _id);
                            setSlides(remaining);
                        }
                    })
            }
        });
    }

    // set the slides data in the filteredBooks
    let filteredBooks = slides;

    // const { _id } = filteredBooks;
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
                                    <figure><img className="w-48" src={filteredBook.image} alt={filteredBook.name} /></figure>

                                    <div className="card-body">
                                        <Link to={`/books/${filteredBook._id}`}>
                                            <h2 className="card-title text-2xl font-heading font-semibold hover:text-blue-500 hover:underline">{filteredBook?.name?.split(':')[0].trim()}</h2>
                                        </Link>
                                        <h3 className="text-lg font-bold font-heading text-slate-600">Category: <span className="text-xl">{filteredBook.category}</span></h3>
                                        <h3 className="text-lg font-bold font-heading text-slate-600">Author: <span className="text-xl">{filteredBook.author}</span></h3>
                                        <h3 className="text-lg font-bold font-heading text-slate-600">Quantity: <span className="text-xl">{filteredBook.author}</span></h3>
                                        <div className="card-actions flex justify-between mt-4 ">

                                            {/* borrow button with modal */}

                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <button
                                                className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"
                                                onClick={() => document.getElementById('my_modal_3').showModal()
                                                
                                                }
                                            >
                                                Borrow</button>
                                            <dialog id="my_modal_3" className="modal">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>

                                                    <div>

                                                        {/* name */}
                                                        <div className="text-2xl my-6 md:flex md:gap-10">
                                                            <h3 className="text-3xl font-body font-bold my-3">Name: </h3>
                                                            <input type="text" />
                                                        </div>

                                                        {/* email */}
                                                        <div className="text-2xl my-6 md:flex md:gap-10">
                                                            <h3 className="text-3xl font-body font-bold my-3">Email: </h3>
                                                            <input type="email" />
                                                        </div>

                                                        {/* return date */}
                                                        <div className="text-2xl my-6 md:flex md:gap-10">
                                                            <h3 className="text-3xl font-body font-bold my-3">Return Date : </h3>
                                                            <input type="date" name="" />
                                                        </div>



                                                    </div>
                                                    <form className="mx-auto" method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button
                                                            className="btn text-base md:text-lg bg-black text-white hover:text-white mx-auto hover:bg-black"
                                                        >
                                                            Submit</button>
                                                    </form>
                                                </div>
                                            </dialog>



                                            <div className="join join-horizontal gap-3 md:gap-6 mx-auto">
                                                <Link to={`/books/${filteredBook._id}`}>
                                                    <button className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"><FaEye></FaEye></button>
                                                </Link>

                                                <Link to={`/updateBooks/${filteredBook._id}`}>
                                                    <button className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"><FaPen></FaPen></button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(filteredBook._id)}
                                                    className="btn  text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"><FaBitbucket></FaBitbucket></button>
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
