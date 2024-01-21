import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Home/Home';
import AllBooks from '../AllBooks/AllBooks';
import AddBooks from '../AddBooks/AddBooks';
import BorrowedBooks from '../BorrowedBooks/BorrowedBooks';
import Login from '../Login/Login';
import BookDetails from '../BookDetails/BookDetails';


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
                element: <AllBooks></AllBooks>,
                loader: () => fetch('http://localhost:5000/booksCount')
            },
            {
                path: '/addBooks',
                element: <AddBooks></AddBooks>,

            },
            {
                path: '/borrowedBooks',
                element: <BorrowedBooks></BorrowedBooks>,
            },
            {
                path: '/books/:id',
                element: <BookDetails></BookDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`),
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            
        ]
    },

])

export default Routes;