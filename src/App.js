import Pages from "./pages/Pages";
import Category from "./components/Category";
import { HashRouter, Link } from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

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
        <CreateRecipeButton to="/create-recipe">Create New Recipe</CreateRecipeButton>
      </HashRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Montserrat', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const CreateRecipeButton = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 0.75rem 1.5rem;
  margin: 2rem auto;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #45a049;
  }
`;

export default App;
