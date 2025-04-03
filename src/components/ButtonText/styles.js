import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.ROSE};
  
  > svg {
      font-size: 1.8rem;
    }
`;