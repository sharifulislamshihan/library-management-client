import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const AddBooks = () => {



    return (
        <div>
            <Navbar></Navbar>

            <div>
                <div>

                    <h3 className="text-5xl font-heading font-bold text-center my-9">Add Books</h3>
                    <div className=" mx-12 lg:mx-40">
                        <form>
                            {/* name and Author name */}
                            <div className="md:flex gap-10 my-3">

                                {/* name */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body  font-bold">Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                                    </label>
                                </div>

                                {/* Author Name */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold ">Author Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="author" placeholder="Author name" className="input input-bordered w-full" required />
                                    </label>
                                </div>
                            </div>

                            {/* Category and Quantity */}

                            <div className="md:flex gap-10 my-3">

                                {/* Category */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold ">Category</span>
                                    </label>
                                    <label className="input-group">
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
                                    </label>
                                </div>

                                {/* Quantity */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold">Quantity</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                                    </label>
                                </div>
                            </div>

                            {/* details and pic URL */}

                            <div className="md:flex gap-10 my-3">

                                {/* details */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold ">Description</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="description" placeholder="Details" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                {/* Rating */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold">Rating</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="rating" placeholder="Photo URL" className="input input-bordered w-full" required />
                                    </label>
                                </div>
                            </div>

                            {/* photo url */}
                            <div className="md:flex gap-10 my-3">

                                {/* photo URL */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold">Photo URL</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                                    </label>
                                </div>

                            </div>

                            <button className="btn btn-block bg-black hover:bg-black border-white border solid text-white font-paragraph text-xl my-10">ADD BOOK</button>

                        </form>


                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddBooks;