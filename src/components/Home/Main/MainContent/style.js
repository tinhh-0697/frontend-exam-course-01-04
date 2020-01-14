import styled from 'styled-components';
import * as Color from '../../../Modules/Color';
import { Table, Button } from 'reactstrap';

export const ContentTable = styled.div`
  padding: 30px;
  z-index: 10;
  position: relative;
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
  background: ${Color.turquoise};
  border: transparent;
`;

export const ButtonEdit = styled(Button)`
  height: 37px;
  width: 83px;
  margin-right: 5px;
  color: ${Color.white};
  background: ${Color.green};
  font-size: 17px;
  border: transparent;
`;

export const ButtonDelete = styled(ButtonEdit)`
  background: ${Color.red};
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
  width: 550px;
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
    .check-status,
    .btn-td {
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
    width: calc(100% * 0.4);
    color: ${Color.gray};
    padding-right: 100px;
  }

  .id-td {
    width: calc(100% * 0.01);
    color: ${Color.gray};
  }

  .check-status {
    padding: 32px 10px 25px 10px;
    width: calc(100% * 0.1);
    color: ${props => props.theme.text_color_2};
  }

  .view-td {
    width: calc(100% * 0.2);
    color: ${props => props.theme.text_color_2};
  }

  .btn-td {
    padding: 32px 70px 25px 25px;
  }
`;

export const CheckStatus = styled.i`
  color: ${props =>
    props.status === 'true' ? Color.turquoise_01 : Color.gray_010};
`;
