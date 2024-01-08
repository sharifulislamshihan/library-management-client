import { Navbar, Button } from "keep-react";
import { Link, NavLink } from "react-router-dom";
const NavbarComponent = () => {
    const NavItem = <>
        <Link to='/' ><NavLink exact activeClassName="active" className="text-lg font-body font-normal">Home</NavLink></Link>

        <Link to='/allBooks' ><NavLink activeClassName="active" className="text-lg font-body font-normal">All Books</NavLink></Link>

        <Link to='/addBooks' ><NavLink activeClassName="active" className="text-lg font-body font-normal">Add Book</NavLink></Link>

        <Link to='/borrowedBooks' ><NavLink activeClassName="active" className="text-lg font-body font-normal">Borrowed Books</NavLink></Link>
        
        <Link to='/login' ><NavLink activeClassName="active" className="text-lg font-body font-normal md:hidden">Login</NavLink></Link>
    </>
    return (
        <div>
            <Navbar fluid={true}>
                <Navbar.Container className="flex items-center justify-between">
                    <Navbar.Container className="flex items-center">
                        <Navbar.Brand>
                            <img className="w-20 md:w-40 h-20 md:h-40" src="https://i.ibb.co/v1bWQVQ/logo-light-removebg-preview.png" alt="" />
                        </Navbar.Brand>
                        <Navbar.Divider></Navbar.Divider>
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-8"
                        >
                            {NavItem}
                        </Navbar.Container>
                        <Navbar.Collapse collapseType="sidebar">
                            <Navbar.Container tag="ul" className="flex flex-col gap-5">
                                {NavItem}
                            </Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar.Container>

                    <Navbar.Container className="flex gap-2">
                        <Link to='/login' ><Button className="text-lg text-white bg-blue-700 font-body font-semibold hidden lg:inline-block " size="md" type="primary">
                            Login
                        </Button></Link>

                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;