import "../styles/Home.css";
import { Banners } from "./Banners";

const Home = () => {
    return (
        <>
            <div className="home">
                <Banners />
                <div className="home__map">
                    <h3>View Map</h3>
                    <div className="home__map-container">
                        <img src="https://objects.ivant.dev/public/projects/tsp/imgs/map-map.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
};

export { Home };