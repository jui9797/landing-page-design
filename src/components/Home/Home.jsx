import Black from "../Black/Black";
import CardSection from "../CardSection/CardSection";
import FullService from "../FullService/FullService";
import Service from "../Service/Service";
import Support from "../Support/Support";



const Home = () => {
    return (
        <div>
           <div className="my-10 lg:my-28">
           <Service></Service>
           </div>
           <Support></Support>
           <CardSection></CardSection>
           <Black></Black>
           <FullService></FullService>
        </div>
    );
};

export default Home;