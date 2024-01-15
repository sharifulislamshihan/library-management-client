import ComicsSlides from "./ComicsSlides";


const Comics = () => {
    return (
        <div>
            <div className=" my-16 ">
                <h3 className="text-5xl font-heading font-semibold ml-24"> Comics</h3>
            </div>

            <div className="mx-10 my-10">
                <ComicsSlides></ComicsSlides>
            </div>
        </div>
    );
};

export default Comics;