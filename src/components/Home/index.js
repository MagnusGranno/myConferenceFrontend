// Styles
import { Content, Wrapper } from './Home.styles';

function Home({ loggedIn }) {
  return (
    <Wrapper>
      <Content>
        <h1>Welcome to MyConference</h1>
        <h3>Login to begin</h3>
      </Content>
    </Wrapper>
  );
}

export default Home;
