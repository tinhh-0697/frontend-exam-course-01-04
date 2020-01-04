import styled from 'styled-components';
import { Table, Button } from 'reactstrap';

export const ContentTable = styled.div`
  padding: 30px;
`;

export const ArticlesTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px 20px 15px 21px;
`;

export const ButtonAdd = styled(Button)`
  margin-bottom: 10px;
  height: 51px;
  width: 157px;
  background: #38c6da;
  border: transparent;
`;
export const ButtonEdit = styled(Button)`
  height: 37px;
  width: 83px;
  color: #ffffff;
  background-color: #6ad36e;
  font-size: 17px;
  border: transparent;
`;

export const ButtonDelete = styled(Button)`
  height: 37px;
  width: 83px;
  color: #ffffff;
  background-color: #fb5867;
  font-size: 17px;
  border: transparent;
`;

export const Articles = styled.div`
  background: #fafbfc;
  border-radius: 10px;
  padding-bottom: 30px;

  p {
    margin-bottom: 0px;
    padding-top: 10px;
    font-size: 20px;
  }
`;

export const TableArticles = styled(Table)`
  background: #fafbfc;

  thead th {
    padding-top: 15px;
    border-bottom: 1px solid #dee2e6;

    color: #606060;
  }

  tr {
    .check-status {
      text-align: center;
    }
  }

  td,
  th {
    padding: 32px 45px 25px 45px;
    border-top: none;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #fafbfc;
  }

  tbody tr:nth-of-type(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .name-td {
    width: calc(100% * 0.26);
    color: #a0a0a0;
    padding-right: 100px;
  }

  .id-td {
    width: calc(100% * 0.04);
  }

  .check-status {
    width: calc(100% * 0.3);
  }

  .view-td {
    width: calc(100% * 0.2);
  }

  .btn-td {
    display: flex;
    justify-content: space-between;
  }
`;
