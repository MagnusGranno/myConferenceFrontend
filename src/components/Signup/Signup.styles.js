import styled, { css } from 'styled-components';
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  height: 100vh;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  max-width: 700px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h1 {
    text-align: center;
    color: hsl(var(--primary-color));
    font-size: var(--fs-700);
    margin: 0;
    padding: 0;
  }

  .headline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    img {
      width: 15%;
    }
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
  &:nth-child(3) {
    margin-bottom: 0;
  }
`;

export const StyledButton = styled.button`
  display: block;
  background-color: hsl(var(--primary-color));
  color: #fff;
  font-size: 1.2rem;
  border: 0;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;

  :hover {
    background-color: hsl(var(--primary-color), 0.8);
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const StyledSuccess = styled.div`
  color: green;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const StyledLink = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const LinkButton = styled.button`
  display: block;
  border: 0;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  box-sizing: border-box;
  color: hsl(var(--primary-color));
  font-size: var(--fs-200);
  font-weight: 800;
  background-color: hsl(var(--secondary-color));

  :hover {
    /* background-color: hsl(var(--secondary-color), 0.5); */
    transform: scale(1.05);
  }
`;
export const ShowPW = styled.button`
  display: block;
  border: 0;
  border-radius: 5px;
  color: hsl(var(--primary-color));
  cursor: pointer;
  box-sizing: border-box;
  background-color: hsl(var(--secondary-color));
  margin: 0.5rem 0;
  padding: 0.2rem 1rem;

  :hover {
    background-color: hsl(var(--secondary-color), 0.5);
  }
`;
