/* eslint-disable react/prop-types */

const AllBooksBanner = ({ setBookName, setCategory}) => {


    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchBookName = form.bookName.value;
        const searchCategory = form.category.value;
        setBookName(searchBookName);
        if(searchCategory === "Category"){
            setCategory('')
        }
        else{
            setCategory(searchCategory)
        }
    }
    // console.log(bookName, category);



    return (
        <div>

            {/* image */}
            <div className="relative ">
                <img className="object-cover w-full" src="https://i.ibb.co/FmSrMM0/pexels-min-an-694740.jpg" alt="" />

                {/* Dark overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>


                {/* content overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-lg md:text-2xl lg:text-4xl xl:text-6xl font-heading font-bold mb-2 md:mb-0">Search Your Desire Book</h1>

                    {/* input field for text input and category input */}
                    <form onSubmit={handleSearch}>
                        <div>
                            <div className="flex flex-row mx-6 md:mt-10">
                                <input
                                    name="bookName"
                                    type="text"
                                    placeholder="Search..."
                                    className="input input-bordered input-sm w-1/2 md:input-md md:w-full" />
                                <select
                                    name="category"
                                    className="select select-bordered select-sm w-1/2 md:select-md md:w-full"
                                >
                                    <option disabled selected>Category</option>
                                    <option value="Comics">Comics</option>
                                    <option value="Business">Business</option>
                                    <option value="Sci-fi">Sci-fi</option>
                                    <option value="Science and Math">Science and Math</option>
                                    <option value="Biographies">Biographies</option>
                                </select>
                                <button
                                    className="btn btn-sm md:btn-md">Search</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AllBooksBanner;


