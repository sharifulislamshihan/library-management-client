import { Link } from "react-router-dom";
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                res.user
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
            })
            .catch(error => {
                // toast.error(error.message, { position: "top-right" });
                if (error.code === 'auth/invalid-email') {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Invalid email."
                    });

                }
                else if (error.code === 'auth/wrong-password') {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Invalid password."
                    });

                }
                else {

                    const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                    Toast.fire({
                        icon: "error",
                        title: "Invalid email or password."
                    });
                }
                console.log(error);
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col-reverse lg:flex-row my-20">
                <div className="mx-auto">
                    <img className="mx-auto" src="https://i.ibb.co/Cwz9Q9m/20547283-6310507.jpg" alt="" />
                </div>



                <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto lg:pr-20">
                    <h1 className="text-5xl font-heading font-bold text-center mb-auto">Log In</h1>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label className="text-xl font-body font-semibold">Email</label>
                            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="text-xl font-body font-semibold">Password</label>
                            <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md" required />
                            <div className="flex justify-end text-sm">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block btn w-full p-3 bg-black hover:bg-black text-white hover:text-white text-lg text-center rounded-lg">Log in</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 "></div>
                        <p className="px-3 text-xl">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 "></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button className="btn text-2xl"><FaGoogle></FaGoogle> </button>


                        <button className="btn text-2xl"><FaTwitter></FaTwitter> </button>


                        <button className="btn text-2xl"><FaGithub></FaGithub> </button>


                    </div>
                    <p className="text-lg text-center font-heading font-semibold sm:px-6 dark:text-gray-400">Don't have an account?
                        <Link to='/register'><span className="underline text-blue-600">Register</span></Link>
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
