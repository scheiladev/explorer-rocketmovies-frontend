import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_ROSE};
    display: flex;
    align-items: center;

    > div {
      width: 100%;
      max-width: 113.6rem;
      margin: 0 auto;
      padding: 0 1rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 0 auto;

  > div:nth-child(4) {
    margin-top: 2rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -9.8rem auto 6.4rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }
`;