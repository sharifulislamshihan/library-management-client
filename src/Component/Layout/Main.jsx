import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="max-w-7xl">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;