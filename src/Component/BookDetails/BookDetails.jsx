import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useState } from "react";
import YouMayLikeSlides from "./YouMayLikeSlides";



const BookDetails = () => {
    const bookData = useLoaderData();
    const [showReadMore, setShowReadMore] = useState(false);
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
    // console.log(bookData._id);

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
                    <div className=" my-6 text-center md:text-left">
                        <button className="btn btn-outline font-body text-xl font-semibold">Borrow</button>
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