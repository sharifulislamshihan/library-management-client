import TopRatedSlides from "./TopRatedSlides";


const TopRated = () => {
    return (
        <div>
            <div className=" my-16 ">
                <h3 className="text-5xl font-heading font-semibold text-center md:text-left mx-20 md:ml-24"> Top Rated</h3>
            </div>

            <div className="mx-10 my-10">
                <TopRatedSlides></TopRatedSlides>
            </div>
        </div>
    );
};

export default TopRated;