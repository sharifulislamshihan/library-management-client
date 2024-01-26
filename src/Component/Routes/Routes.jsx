import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Home/Home';
import AllBooks from '../AllBooks/AllBooks';
import AddBooks from '../AddBooks/AddBooks';
import BorrowedBooks from '../BorrowedBooks/BorrowedBooks';
import Login from '../Login/Login';
import BookDetails from '../BookDetails/BookDetails';
import UpdateBook from '../UpdateBook/UpdateBook';
import Register from '../Register/Register';
import PrivateRoute from './PrivateRoute';



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allBooks',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/booksCount')
                // loader: () => fetch('http://localhost:5000/books')
            },
            {
                path: '/addBooks',
                element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>,

            },
            {
                path: '/borrowedBooks',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
            },
            {
                path: '/books/:id',
                element: <PrivateRoute> <BookDetails></BookDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`),
            },
            {
                path: '/updateBooks/:id',
                element: <UpdateBook></UpdateBook>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    },

])

export default Routes;