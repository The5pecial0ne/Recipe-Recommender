import { useEffect, useState, React } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_API_URL}/search/single/${params.name}`
    );
    const detailData = await data.json();
    console.log(detailData);
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <InstructionList>
            {details.instruction &&
              details.instruction.map((step, index) => (
                <InstructionItem key={index}>
                  <NumberCircle>{index + 1}</NumberCircle>
                  <span>{step}</span>
                </InstructionItem>
              ))}
          </InstructionList>
        </div>
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;

  h2 {
    margin-bottom: 2rem;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  img {
    width: 400px; /* Set a fixed width */
    height: 250px; /* Set a fixed height for rectangular shape */
    object-fit: cover; /* Crops the image to fill the dimensions */
    border-radius: 1rem; /* Optional: adds rounded corners */
    margin-bottom: 2rem; /* Adds spacing below the image */
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
  flex: 1; /* Allows Info to resize relative to the container */

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const InstructionList = styled.div`
  margin-top: 2rem;
`;

const InstructionItem = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 1.2rem;
  line-height: 2rem;
  margin-bottom: 1rem;
  width: 100%; /* Ensure that the width of each instruction is the same */
  box-sizing: border-box; /* To ensure padding doesn't affect layout */
`;

const NumberCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #313131;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  font-weight: bold;
  flex-shrink: 0; /* Prevents shrinking of the circle */
  flex-grow: 0;   /* Prevents the circle from growing */
`;

export default Recipe;
