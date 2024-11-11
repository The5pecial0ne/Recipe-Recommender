import { useEffect, useState, React } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    console.log(name);
    const data = await fetch(`${process.env.REACT_APP_API_URL}/cuisine/${name}`);
    const recipes = await data.json();
    console.log(recipes);
    setCuisine(recipes);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id}>
              <img
                src={item.image}
                alt=""
                className={cuisine.length === 1 ? "single" : ""}
              />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
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

export default Cuisine;
