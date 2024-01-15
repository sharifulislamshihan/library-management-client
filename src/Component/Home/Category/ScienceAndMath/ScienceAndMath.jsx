import ScienceAndMathSlides from "./ScienceAndMathSlides";


const ScienceAndMath = () => {
    return (
        <div>
            <div className=" my-16 ">
                <h3 className="text-5xl font-heading font-semibold text-center md:text-left mx-20 md:ml-24"> Science And Math</h3>
            </div>

            <div className="mx-10 my-10">
                <ScienceAndMathSlides></ScienceAndMathSlides>
            </div>
        </div>
    );
};

export default ScienceAndMath;