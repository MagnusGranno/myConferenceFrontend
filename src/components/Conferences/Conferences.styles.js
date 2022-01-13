import styled from 'styled-components';

export const ConferenceDiv = styled.div`
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-height: 100%;
  img {
    width: 20%;
  }

  .conferenceHeadline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    h2 {
      font-size: var(--fs-600);
      color: hsl(var(--primary-color));
    }
  }
`;

export const ConferenceTable = styled.table`
  border-collapse: collapse;
  font-size: var(--fs-300);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead {
    background-color: hsl(var(--primary-color));
  }
  thead tr {
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
    cursor: pointer;
    :hover {
      background-color: hsl(var(--minor-color));
    }
  }
  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
    :hover {
      background-color: hsl(var(--minor-color));
    }
  }
  tbody tr:last-of-type {
    border: none;
  }
`;
