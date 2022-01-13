// Styles
import { Content, Wrapper } from './Home.styles';

function Home({ loggedIn }) {
  return (
    <Wrapper>
      <Content>
        <h1>Home page</h1>
        <h3>Login to begin</h3>
      </Content>
    </Wrapper>
  );
}

export default Home;
