import styled from 'styled-components';

const Spinner = styled.div`
  border: 5px solid hsl(var(--secondary-color));
  border-top: 5px solid hsl(var(--primary-color));
  border-radius: 50%;
  height: ${(props) => props.size || '50px'};
  width: ${(props) => props.size || '50px'};
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
