import Black from "../Black/Black";
import CardSection from "../CardSection/CardSection";
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
        </div>
    );
};

export default Home;