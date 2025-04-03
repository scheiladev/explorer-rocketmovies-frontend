import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled(Link)`
  width: 100%;
  display: block;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_ROSE};
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;

  > h2 {
    font-size: 2.4rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    height: 4.6ren;
    display: block; 
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 1rem 0 3rem;
  }
`;

