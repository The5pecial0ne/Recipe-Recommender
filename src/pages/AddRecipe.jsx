import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function RecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    cuisine: "",
    summary: "",
    instruction: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api-65kvjb6kfq-uc.a.run.app/api/addNew`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        toast.success("Recipe created successfully!");
        // Optionally reset the form after successful submission
        setFormData({
          title: "",
          image: "",
          cuisine: "",
          summary: "",
          instruction: "",
        });
      } else {
        toast.error("Failed to create recipe");
      }
    } catch (error) {
      toast.error("An error occurred while creating the recipe");
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Create a New Recipe</h2>
        <label>Title:</label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Image Link:</label>
        <Input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <label>Cuisine:</label>
        <Input
          type="text"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />

        <label>Summary:</label>
        <TextArea
          name="summary"
          rows="3"
          value={formData.summary}
          onChange={handleChange}
          required
        />

        <label>Instructions (Separated by commas):</label>
        <TextArea
          name="instruction"
          rows="5"
          value={formData.instruction}
          onChange={handleChange}
          required
        />

        <SubmitButton type="submit">Create Recipe</SubmitButton>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  label {
    margin: 0.5rem 0;
    font-weight: 600;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export default RecipeForm;
