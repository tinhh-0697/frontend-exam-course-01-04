import styled from 'styled-components';
import { Table, Button } from 'reactstrap';

export const ContentTable = styled.div`
  padding: 30px;
`;

export const ArticlesTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px 20px 15px 21px;
  border-radius: 10px;
  color: ${props => props.theme.color_title_articles};
  background: ${props => props.theme.background_table};
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-right: 5px;
  color: #ffffff;
  background-color: #6ad36e;
  font-size: 17px;
  border: transparent;
`;

export const ButtonDelete = styled(Button)`
  height: 37px;
  width: 83px;
  margin-left: 5px;
  color: #ffffff;
  background-color: #fb5867;
  font-size: 17px;
  border: transparent;
`;

export const Articles = styled.div`
  background: ${props => props.theme.background_table_1};
  border-radius: 10px;
  padding-bottom: 30px;

  p {
    margin-bottom: 0px;
    padding-top: 10px;
    font-size: 20px;
  }
`;

export const NameTruncate = styled.span`
  display: inline-block;
  width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TableArticles = styled(Table)`
  background: ${props => props.theme.background_table_1};

  thead th {
    padding-top: 15px;
    border-bottom: 1px solid ${props => props.theme.border_table};
    color: ${props => props.theme.text_color_1};
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
    background: ${props => props.theme.background_table_1};
  }

  tbody tr:nth-of-type(even) {
    background: ${props => props.theme.background_table_2};
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
    color: ${props => props.theme.text_color_2};
  }

  .view-td {
    width: calc(100% * 0.2);
    color: ${props => props.theme.text_color_2};
  }

  .btn-td {
    display: flex;
    justify-content: space-between;
  }
`;
