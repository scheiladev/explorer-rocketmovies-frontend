import styled from 'styled-components';


export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 10.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  display: flex;
  align-items: center;

  > div {
    width: 100%;
    max-width: 113.6rem;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6.4rem;
  
    > a:first-of-type {
      color: ${({ theme }) => theme.COLORS.ROSE};
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-shrink: 0;

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300}
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2rem;
    
    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      background: none;
      border: none;
      text-align: left;
    }
  }
`;