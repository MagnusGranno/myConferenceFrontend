import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: hsl(var(--primary-color));
  width: 100%;
  max-width: 1440px;
  padding: 0 3rem;
  border-radius: 0 0 12px 12px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1440px) {
    flex-direction: column;
    h1 {
      font-size: var(--fs-600);
      padding: 0;
      margin-top: 3rem;
    }
  }

  img {
    background-size: cover;
    width: 10%;
    height: 10%;
  }

  .headerDiv {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  gap: 2rem;
  align-items: center;
  font-size: var(--fs-600);
  @media (max-width: 1440px) {
    font-size: var(--fs-500);
    gap: 1.5rem;
    justify-content: center;
  }
`;

export const StyledLogout = styled.div`
  cursor: pointer;
  text-align: center;
  justify-content: center;
`;
