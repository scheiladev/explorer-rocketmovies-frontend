import styled from "styled-components";
import bacgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  `;

export const Form = styled.form`
  padding: 0 16.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin: 4.2rem auto 0;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${bacgroundImg}) no-repeat center center;
  background-size: cover;
`;