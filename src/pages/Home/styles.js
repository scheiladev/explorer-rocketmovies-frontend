import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem 14rem auto;
  grid-template-areas: 
  "header"
  "title"
  "content";
`;

export const Fixed = styled.div`
  grid-area: title;
  width: 100%;
  max-width: 113.6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.7rem 1rem 3.7rem;

  h2 {
    font-size: 3.2rem;
    font-weight: 400;
  }

  a {
    padding: 0 3.2rem;
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    border-radius: 0.8rem;
    height: 4.8rem;
  } 
`;

export const Catalog = styled.div`
  grid-area: content;
  overflow-y: auto;
  width: 100%;
  max-width: 113.6rem;
  margin: 0 auto;
  padding: 0 1rem;
`;