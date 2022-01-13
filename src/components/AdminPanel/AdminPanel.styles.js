import styled from 'styled-components';

export const AdminBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  color: hsl(var(--minor-color));
  padding: 1rem 0;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
`;

export const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreateConferenceDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px 10px 10px 10px;

  h2 {
    width: 100%;
  }
`;

export const CreateConferenceForm = styled.form`
  width: 100%;
  height: 100%;
  max-width: 700px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    background-color: #eee;
    height: 2rem;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid hsl(var(--primary-color));
  }

  button {
    display: block;
    background-color: hsl(var(--minor-color));
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
      background-color: hsl(var(--minor-color), 0.8);
    }
  }
`;