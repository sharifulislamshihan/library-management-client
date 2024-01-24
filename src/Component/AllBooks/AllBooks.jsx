
import Navbar from "../Shared/Navbar/Navbar";
import AllBooksBanner from "./AllBooksBanner";
import AllBooksCard from "./AllBooksCard";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";




const AllBooks = () => {

    const [bookName, setBookName] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <AllBooksBanner
                setBookName = {setBookName}
                setCategory = {setCategory}
                ></AllBooksBanner>
            </div>

            <div className=" my-20">
                <h3 className="text-2xl md:text-4xl font-heading font-bold text-center mb-14">All books</h3>

                {/* Books card */}
                <div className=" my-20">
                    <AllBooksCard
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