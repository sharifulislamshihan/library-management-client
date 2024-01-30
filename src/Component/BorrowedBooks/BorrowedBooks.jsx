import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const BorrowedBooks = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-5xl font-heading font bold my-7 text-center">Borrowed book</h3>

            <div className="overflow-x-auto mx-3 md:mx-20" >
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Borrowed Date</th>
                            <th>Return Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            {/* image */}
                            <td>
                                <div className="avatar">
                                    <div className=" w-32 h-48">
                                        <img src="https://i.thriftbooks.com/api/imagehandler/m/20D9001FE324D914E06DE2360A039C9A95BCA671.jpeg" alt="" />
                                    </div>
                                </div>
                            </td>

                            {/* name */}
                            <td className="text-base font-body">
                                Zemlak, Daniel and Leannon
                            </td>

                            {/* quantity */}
                            <td className="text-base font-body">5</td>

                            {/* return date */}
                            <td className="text-base font-body">
                                12/12/12
                            </td>

                            {/* return Date */}
                            <td>
                                12/12/12
                            </td>

                            <td>
                                <button className="btn btn-circle btn-outline text-black hover:bg-black hover:text-white ">X</button>
                            </td>
                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className="text-xl">
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Return Date</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BorrowedBooks;