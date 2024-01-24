
import Navbar from "../Shared/Navbar/Navbar";
import AllBooksBanner from "./AllBooksBanner";
import AllBooksCard from "./AllBooksCard";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";




const AllBooks = () => {

    // taking bookName and category null initially
    const [bookName, setBookName] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <AllBooksBanner
                // passing setBookName and setCategory to get the value
                setBookName = {setBookName}
                setCategory = {setCategory}
                ></AllBooksBanner>
            </div>

            <div className=" my-20">
                <h3 className="text-2xl md:text-4xl font-heading font-bold text-center mb-14">All books</h3>

                {/* Books card */}
                <div className=" my-20">
                    <AllBooksCard
                    // passing BookName and Category to get the value
                    bookName = {bookName}
                    category = {category}
                    ></AllBooksCard>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBooks;