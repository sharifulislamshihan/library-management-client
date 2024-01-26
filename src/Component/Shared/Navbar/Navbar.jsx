import { Link } from "react-router-dom";
import DarkModeButton from "../../DarkModeButton/DarkModeButton";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    // destructing user from authcontext
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(
                Swal.fire("Log out Successfully")
            )
            .catch()
    }

    const NavItem = <>
        <Link to='/' ><li className="text-lg font-body font-normal mx-4">Home</li></Link>

        <Link to='/allBooks' ><li className="text-lg font-body font-normal mx-4">All Books</li></Link>

        <Link to='/addBooks' ><li className="text-lg font-body font-normal mx-4">Add Book</li></Link>

        <Link to='/borrowedBooks' ><li className="text-lg font-body font-normal mx-4">Borrowed Books</li></Link>

        <Link to='/login' ><li className="text-lg font-body font-normal mx-4 md:hidden">Login</li></Link>
    </>
    return (
        <div className="mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavItem}
                        </ul>
                    </div>
                    {/* logo */}
                    <Link to='/'><img className=" w-20 md:w-40 h-8 md:h-24 mx-5" src="https://i.ibb.co/VpMC1rS/Modern-Minimalist-Graffiti-Dream-Brand-Logo-removebg-preview.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItem}
                    </ul>
                </div>
                <div className="navbar-end gap-3 md:gap-8">
                    {
                        user ?

                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                                    {/* ?set image dynamically */}
                                    <img src={
                                        user?.photoURL ?

                                            "user?.photoURL"

                                            :

                                            "https://i.ibb.co/z5K8XCk/image.png"
                                    } />
                                </div>
                            </div>

                            :

                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.ibb.co/z5K8XCk/image.png" />
                                </div>
                            </div>
                    }
                    <DarkModeButton></DarkModeButton>
                    <div className="pr-2 md:pr-10 lg:pr-20">
                        {
                            user ?
                                <Link><a onClick={handleSignOut} className="btn">Logout</a></Link>
                                :
                                <Link to='/login'><a className="btn">Login</a></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;