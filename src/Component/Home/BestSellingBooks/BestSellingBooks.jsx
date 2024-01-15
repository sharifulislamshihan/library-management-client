import BestSellingBooksSlides from "./BestSellingBooksSlides";

const BestSellingBooks = () => {
    //const localTheme = localStorage.getItem("theme");
    return (
        <div>
            <div className=" my-16 ">
                <h3 className="text-3xl font-heading font-semibold ml-24"> Current Best Selling</h3>
            </div>

            <div className="mx-10 my-10">
                <BestSellingBooksSlides></BestSellingBooksSlides>
            </div>
        </div>
    );
};

export default BestSellingBooks;