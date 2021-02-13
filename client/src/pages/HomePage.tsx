import Directory from '../components/Directory';
import { HomePageContainer } from '../styles/HomePage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Welcome to my Homepage</h1>

      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
