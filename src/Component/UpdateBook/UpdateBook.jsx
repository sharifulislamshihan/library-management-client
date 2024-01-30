import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Swal from "sweetalert2";


const UpdateBook = () => {

    const bookData = useLoaderData();
    console.log(bookData);
    const navigate = useNavigate();

    const handleUpdateBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const author = form.author.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const updateBook = { name, author, category, quantity, description, rating, image };
        console.log(updateBook);
        //console.log(bookData._id);
        // fetch(`http://localhost:5173/books/${bookData._id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updateBook)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         // if (data.modifiedCount) {
        //         //     Swal.fire('Book Information Updated Successfully!')
        //         // }

        //     })

        fetch(` https://library-management-server-seven.vercel.app/books/${bookData._id}`, {
            method: 'PUT' ,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire('Book Information Updated Successfully')
                navigate('/allBooks');
            }
            else{
                Swal.fire('Try again.')
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div>

                    <h3 className="text-5xl font-heading font-bold text-center my-9">Updata Book</h3>
                    <div className=" mx-12 lg:mx-40">
                        <form onSubmit={handleUpdateBook}>
                            {/* name and Author name */}
                            <div className="md:flex gap-10 my-3">

                                {/* name */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body  font-bold">Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" defaultValue={bookData?.name} name="name" placeholder="Name" className="input input-bordered w-full" required />
                                    </label>
                                </div>

                                {/* Author Name */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold ">Author Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" defaultValue={bookData?.author} name="author" placeholder="Author name" className="input input-bordered w-full" required />
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
                                            <option disabled selected>{bookData.category}</option>
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
                                        <input type="number" defaultValue={bookData?.quantity} name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
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
                                        <input type="text" defaultValue={bookData?.description} name="description" placeholder="Description" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                {/* Rating */}
                                <div className="form-control md:w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-xl font-body font-bold">Rating</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="number" defaultValue={bookData?.rating} name="rating" placeholder="Rating" className="input input-bordered w-full" required />
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
                                        <input type="text" defaultValue={bookData?.image} name="image" placeholder="image URL" className="input input-bordered w-full" required />
                                    </label>
                                </div>

                            </div>

                            <button className="btn btn-block bg-black hover:bg-black border-white border solid text-white font-paragraph text-xl my-10">UPDATE BOOK</button>

                        </form>


                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateBook;