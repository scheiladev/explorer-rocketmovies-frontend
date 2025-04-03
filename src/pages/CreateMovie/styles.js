import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem 16.4rem auto;
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
  padding: 4.7rem 1rem 0;

  > h2 {
    margin-top: 2.4rem;
  } 
`;

export const Form = styled.form`
  grid-area: content;
  overflow-y: auto;
  width: 100%;
  max-width: 113.6rem;
  margin: 0 auto;
  padding: 0 1rem;

  > div:first-of-type,
  > div:last-of-type {
    display: flex;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 2rem;
    margin-bottom: 2.4rem;
  }

  > .tags {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 1.6rem;
    border-radius: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
    margin-bottom: 4rem;
  }

  .bt-delete {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;