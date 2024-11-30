import Banner from '../components/banner'
import SocialConnect from "../components/socialConnect";
import Quote from "../components/quote";
import DirectMessage from "../components/directMessage";
import AboutContainer from '../components/aboutContainer';

function Home() {
  return (
    <>
      <Banner />
      <AboutContainer />
      <SocialConnect />
      <Quote />
      <DirectMessage />
    </>
  );
}

export default Home;
