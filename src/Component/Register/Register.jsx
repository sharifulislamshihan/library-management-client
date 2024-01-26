import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // creating user
        createUser(email, password)
            .then(res => {
                res.user
                Swal.fire("Account has been created.");
            })
            // new user has been created
            .catch(error => {
                console.error(error);
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);

                if (errorCode === 'auth/email-already-in-use') {
                    Swal.fire('Error', 'Email is already in use.', 'error');
                } else if (errorCode === 'auth/invalid-email') {
                    Swal.fire('Error', 'Invalid email address.', 'error');
                } else if (errorCode === 'auth/weak-password') {
                    Swal.fire('Error', 'Password is too weak. It should be at least 6 characters.', 'error');
                } else {
                    Swal.fire('Error', 'An error occurred during registration.', 'error');
                }
            })
        console.log(name, email, password);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col-reverse lg:flex-row my-20">
                <div className="mx-auto">
                    <img className="mx-auto" src="https://i.ibb.co/Cwz9Q9m/20547283-6310507.jpg" alt="" />
                </div>



                <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto lg:pr-20">
                    <h1 className="text-5xl font-heading font-bold text-center mb-10">Sign Up</h1>
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* name */}
                        <div className="space-y-1 text-sm">
                            <label className="text-xl font-body font-semibold">Name</label>
                            <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md" required />
                        </div>

                        {/* email */}
                        <div className="space-y-1 text-sm">
                            <label className="text-xl font-body font-semibold">Email</label>
                            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md" required />
                        </div>

                        {/* password */}
                        <div className="space-y-1 text-sm">
                            <label className="text-xl font-body font-semibold">Password</label>
                            <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md" required />
                            <div className="flex justify-end text-sm">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block btn w-full p-3 bg-black hover:bg-black text-white hover:text-white text-lg text-center rounded-lg">Sign up</button>
                    </form>

                    <p className="text-lg text-center font-heading font-semibold sm:px-6 ">Don't have an account?
                        <Link to='/login'><span className="underline text-blue-600">Log in</span></Link>
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;