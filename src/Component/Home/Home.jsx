import Navbar from "../Shared/Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Facilities from "./Facilities/Facilities";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;