import { useEffect, useState, React } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`${process.env.REACT_APP_API_URL}/search/${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                            <img 
                                src={item.image} 
                                alt="" 
                                className={searchedRecipes.length === 1 ? "single" : ""} 
                            />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    height: 15rem; /* Set a fixed height for consistency */
    object-fit: cover; /* Ensures the image fills the area while maintaining aspect ratio */
    border-radius: 1rem; /* Smaller border-radius for a rectangular shape */
  }

  /* Additional styles for a single image */
  .single {
    width: 30rem; /* Fixed width for single item */
    margin: 0 auto; /* Center the image */
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
