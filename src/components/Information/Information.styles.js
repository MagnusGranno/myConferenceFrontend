import styled from 'styled-components';

export const InfoBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1300px) {
    flex-direction: column;
    max-width: 720px;
  }
`;

export const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
