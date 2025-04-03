import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 0.8rem;
  border-radius: 1rem;

  > input {
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
  
  > svg {
    margin-left: 1.6rem;
  }
`;