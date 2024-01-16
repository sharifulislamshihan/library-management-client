import Navbar from "../Shared/Navbar/Navbar";
import BestSellingBooks from "./BestSellingBooks/BestSellingBooks";
import Carousel from "./Carousel/Carousel";
import Business from "./Category/Business/Business";
import Comics from "./Category/Comics/Comics";
import ScienceAndMath from "./Category/ScienceAndMath/ScienceAndMath";
import Scifi from "./Category/Scifi/Scifi";
import TopRated from "./Category/TopRated/TopRated";
import Facilities from "./Facilities/Facilities";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Facilities></Facilities>
            <BestSellingBooks></BestSellingBooks>
            <Comics></Comics>
            <Business></Business>
            <ScienceAndMath></ScienceAndMath>
            <Scifi></Scifi>
            <TopRated></TopRated>
        </div>
    );
};

export default Home;