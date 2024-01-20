import Navbar from "../Shared/Navbar/Navbar";
import AllBooksBanner from "./AllBooksBanner";
import AllBooksCard from "./AllBooksCard";


const AllBooks = () => {


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <AllBooksBanner></AllBooksBanner>
            </div>

            <div className=" my-20">
                <h3 className="text-2xl md:text-4xl font-heading font-bold text-center mb-14">All books</h3>

                {/* Books card */}
                <div>
                    <AllBooksCard></AllBooksCard>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;