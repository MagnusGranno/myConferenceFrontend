import styled from 'styled-components';

export const TalkByIdDiv = styled.div`
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  img {
    width: 20%;
    height: 20%;
  }

  .talkHeadline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    h2 {
      font-size: var(--fs-500);
      color: hsl(var(--primary-color));
    }
  }
  .talkHeadlineHighest {
    display: flex;
    justify-content: space-between;
    background-color: hsl(var(--primary-color));
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    h2 {
      font-size: var(--fs-500);
      color: #fff;
    }
  }
`;

export const TalkByIdTable = styled.table`
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
  .centerMe {
    background-color: #fff;
    color: hsl(var(--primary-color));
    text-align: center;
    font-size: var(--fs-600);
    font-weight: 800;
    padding: 1rem;
    letter-spacing: 5px;
  }
`;
