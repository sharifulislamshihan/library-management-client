import Swal from "sweetalert2";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const AddBooks = () => {

    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const newBook = { name, author, category, quantity, description, rating, image };
        console.log(newBook);

        // send phone data to server
        fetch(' https://library-management-server-seven.vercel.app/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire("Book added successfully!");
                }
                form.reset();
            })
    }

    return (
        <div>
            <Navbar></Navbar>

            <div>
                <div>

                    <h3 className="text-5xl font-heading font-bold text-center my-9">Add Books</h3>
                    <div className=" mx-12 lg:mx-40">
                        <form onSubmit={handleAddBook}>
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

                            {/* description and rating */}

                            <div className="md:flex gap-10 my-3">

                                {/* description */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold ">Description</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                {/* Rating */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold">Rating</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" required />
                                    </label>
                                </div>
                            </div>

                            {/* image url */}
                            <div className="md:flex gap-10 my-3">

                                {/* image URL */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold">Image URL</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="image" placeholder="image URL" className="input input-bordered w-full" required />
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