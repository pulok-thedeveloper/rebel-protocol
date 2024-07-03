import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import PrivateSale from "./PrivateSale";
import Roadmap from "./Roadmap";
// import Tokenization from "./Tokenization";
import Why from "./Why";

const Home = () => {
  return (
    <div>
      <Hero />
      <Why />
      <HowItWorks />
      <Roadmap />
      {/* <Tokenization /> */}
      {/* <Team /> */}
      <PrivateSale />
    </div>
  );
};

export default Home;
