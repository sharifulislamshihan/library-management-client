import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Home/Home';
import AllBooks from '../AllBooks/AllBooks';
import AddBooks from '../AddBooks/AddBooks';
import BorrowedBooks from '../BorrowedBooks/BorrowedBooks';
import Login from '../Login/Login';


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
            },
            {
                path: 'addBook',
                element: <AddBooks></AddBooks>,

            },
            {
                path: 'borrowedBooks',
                element: <BorrowedBooks></BorrowedBooks>,
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            
        ]
    },

])

export default Routes;