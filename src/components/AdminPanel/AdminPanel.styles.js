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
  width: 100%;
  flex-direction: column;
  margin: 0 1rem;
`;

export const CreateDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px 10px 10px 10px;
  margin-bottom: 1rem;

  h2 {
    color: hsl(var(--primary-color));
    width: 100%;
  }
`;

export const CreateForm = styled.form`
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
      background-color: hsl(var(--minor-color), 0.8);
    }
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
  p {
    padding: 0;
    text-align: left;
  }
  .radioDiv {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
    .radioAnswers {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
