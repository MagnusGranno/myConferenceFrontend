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
`;

export const OwnerDiv = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 20%;
    height: 20%;
  }

  .ownerHeadline {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    h2 {
      font-size: var(--fs-600);
      color: hsl(var(--primary-color));
    }
  }
`;

export const OwnersTable = styled.table`
  border-collapse: collapse;
  font-size: var(--fs-300);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead {
    background-color: hsl(var(--primary-color));
  }
  thead tr {
    background-color: ${(props) => props.color};
    color: hsl(var(--secondary-color));
    text-align: left;
    font-weight: bold;
    font-size: var(--fs-400);
  }
  th,
  td {
    padding: 1.25rem 1.5rem;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  tbody tr:last-of-type {
    border: none;
  }
`;
