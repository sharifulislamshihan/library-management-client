import Navbar from "../Shared/Navbar/Navbar";
import BestSellingBooks from "./BestSellingBooks/BestSellingBooks";
import Carousel from "./Carousel/Carousel";
import Facilities from "./Facilities/Facilities";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Facilities></Facilities>
            <BestSellingBooks></BestSellingBooks>
        </div>
    );
};

export default Home;