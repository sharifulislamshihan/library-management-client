import { Link } from "react-router-dom";
import DarkModeButton from "../../DarkModeButton/DarkModeButton";

const Navbar = () => {
    const NavItem = <>
        <Link to='/' ><li className="text-lg font-body font-normal mx-3">Home</li></Link>

        <Link to='/allBooks' ><li className="text-lg font-body font-normal mx-3">All Books</li></Link>

        <Link to='/addBooks' ><li className="text-lg font-body font-normal mx-3">Add Book</li></Link>

        <Link to='/borrowedBooks' ><li className="text-lg font-body font-normal mx-3">Borrowed Books</li></Link>

        <Link to='/login' ><li className="text-lg font-body font-normal mx-3 md:hidden">Login</li></Link>
    </>
    return (
        <div>
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
                    <img className=" w-20 md:w-40 h-8 md:h-24 mx-5" src="https://i.ibb.co/QcqYKm1/logo-light-removebg-preview.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItem}
                    </ul>
                </div>
                <div className="navbar-end gap-8">
                    <DarkModeButton></DarkModeButton>
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;