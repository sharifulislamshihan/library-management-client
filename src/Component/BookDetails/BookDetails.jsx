import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useState } from "react";
import YouMayLikeSlides from "./YouMayLikeSlides";



const BookDetails = () => {
    const bookData = useLoaderData();
    const [showReadMore, setShowReadMore] = useState(false);
    const [quantity, setQuantity] = useState(0);
    // words limitation
    const maxWordsToShow = 30;

    // spliting words
    const words = bookData?.description.split(' ');

    // will display certain amount of word according to maxWords to show
    const displayText = showReadMore ? words.join(' ') : words.slice(0, maxWordsToShow).join(' ');

    const id = bookData._id;

    // handling Read More and Read Less button
    const handleReadMore = () => {
        setShowReadMore(!showReadMore)
    }


    // handle increase in the quantity
    const handleIncrease = () => {
        if (quantity < bookData.quantity) {
            setQuantity(quantity + 1)
        }
    }

    // handle decrease in the quantity

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    // to show this page from the top of the site
    window.scrollTo(0, 0);

    return (
        <div>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 mx-10 md:mx-20 my-10">
                <div className="flex justify-center md:justify-end">
                    <img className="mb-10 h-72 lg:h-96" src={bookData?.image} alt={bookData?.name} />
                </div>
                <div className="col-span-2">
                    <h3 className="text-heading font-bold text-4xl mb-5">{bookData?.name}</h3>
                    <h3 className="text-lg text-body font-semibold mb-4">by <span className="text-heading text-xl font-bold">{bookData?.author}</span></h3>
                    <div className="rating mb-5">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />

                        <div className="mx-3 text-sm md:text-lg">
                            <h3>Student Review</h3>
                        </div>
                    </div>
                    <p className="text-lg font-body">{displayText} {
                        words.length > maxWordsToShow && (
                            <span
                                className="text-blue-500 hover:text-blue-700 hover:underline"
                                onClick={handleReadMore}
                            >
                                {
                                    showReadMore ? 'Read Less' : 'Read More'
                                }
                            </span>
                        )
                    }
                    </p>


                    {/* Available books */}
                    <div className=" my-5">
                        <p className="text-xl font-body">Available books: <span>{bookData?.quantity - quantity}</span></p>
                    </div>

                    <div className=" my-6 text-center md:text-left flex flex-wrap gap-10">
                        <div className="join">
                            <button onClick={() => handleDecrease()} className="join-item btn">-</button>
                            <button className="join-item px-5">{quantity}</button>
                            <button onClick={() => handleIncrease()} className="join-item btn">+</button>
                        </div>
                        <div className="space-x-5">
                            <div>
                                {/* borrow button with modal */}

                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button
                                    className="btn text-base md:text-lg bg-black text-white hover:text-white hover:bg-black"
                                    onClick={() => document.getElementById('my_modal_3').showModal()}
                                >
                                    Borrow</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>

                                        {/* return date */}
                                        <div className="text-2xl my-6 md:flex md:gap-10">
                                            <h3 className="text-3xl font-body font-bold my-3">Return Date : </h3>
                                            <input type="date" name="" />
                                        </div>

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

                                        <form className="mx-auto" method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button
                                                onClick={() => handleAddToCart(filteredBook)}
                                                className="btn text-base md:text-lg bg-black text-white hover:text-white mx-auto hover:bg-black"
                                            >
                                                Submit</button>
                                        </form>
                                    </div>
                                </dialog>
                            </div>
                            <button className="btn btn-outline font-body text-xl font-semibold">Read</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mx-10">
                    <h3 className="text-3xl font-bold font-heading">You might also enjoy</h3>
                    <div >
                        <YouMayLikeSlides
                            id={id}
                        ></YouMayLikeSlides>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BookDetails;