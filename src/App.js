import Pages from "./pages/Pages";
import Category from "./components/Category";
import {HashRouter, Link} from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi";

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>
          Food-Reco
        </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </HashRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Montserrat', cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`
export default App;
