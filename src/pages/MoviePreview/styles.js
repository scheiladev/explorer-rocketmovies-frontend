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
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2.4rem 0;

  > h2 {
    font-size: 3.6rem;
    font-weight: 500;
  }
  > span {
    font-size: 2.6rem;
    display: flex;
    gap: 1rem;

  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;

  > img {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    border: 1px solid ${({ theme}) => theme.COLORS.GRAY_200};
    margin-right: 1rem;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
    margin: 0 1rem 0 2rem;
  }
`;

export const Tags = styled.div`
margin-bottom: 4rem;
  > span {
    background-color: ${({ theme }) => theme.COLORS.DARK_ROSE};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Film = styled.div`
  grid-area: content;
  overflow-y: auto;
  width: 100%;
  max-width: 113.6rem;
  margin: 0 auto;
  padding: 0 1rem;

  > p {
    margin-bottom: 1.6rem;
  }
`;