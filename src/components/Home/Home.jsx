import About from "../About/About";
import Black from "../Black/Black";
import CardSection from "../CardSection/CardSection";
import Faq from "../Faq/Faq";
import FullService from "../FullService/FullService";
import Grid1 from "../Grid/Grid1";
import Grid2 from "../Grid/Grid2";
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
           <About></About>
           <Grid1></Grid1>
           <Grid2></Grid2>
           <Faq></Faq>
        </div>
    );
};

export default Home;