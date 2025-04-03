import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 2.4rem;

  &:disabled {
    opacity: 0.5;
  }
`;