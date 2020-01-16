import styled from 'styled-components';
import * as Color from '../../../Modules/Color';
import * as Font from '../../../Modules/Font';
import { device } from '../../../Modules/Responsive';
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

  @media ${device.laptopL} {
    width: 400px;
  }

  @media ${device.laptop} {
    width: 300px;
  }
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableArticles = styled(Table)`
  background: ${props => props.theme.background_table_1};

  thead th {
    padding: 2px 5px 20px 5px;
    border-bottom: 1px solid ${props => props.theme.border_table};
    text-align: center;
    color: ${props => props.theme.text_color_1};

    :nth-child(2) {
      text-align: left;
    }
  }

  th {
    border-top: none;
    font-size: ${Font.font_size};
  }

  tbody tr:nth-of-type(odd) {
    background: ${props => props.theme.background_table_1};
    transition: all 0.4s;

    :hover {
      background: ${props =>
        props.theme.background_table_1 === Color.white
          ? Color.gray_04
          : Color.black_01};
    }
  }

  tbody tr:nth-of-type(even) {
    background: ${props => props.theme.background_table_2};
    transition: all 0.4s;
    :hover {
      background: ${props =>
        props.theme.background_table_2 === Color.black_03
          ? Color.black_01
          : Color.gray_04};
    }
  }

  tr {
    .check-status,
    .btn-td {
      text-align: center;
    }
  }

  td {
    border-top: none;
    font-size: ${Font.font_size};
    padding: ${Font.padding_02};
    text-align: center;

    @media ${device.laptop} {
      font-size: ${Font.font_size_laptop};
    }

    @media ${device.tablet} {
      font-size: ${Font.font_size_tablet};
    }
  }

  .name-td {
    text-align: left;
    width: calc(100% * 0.4);
    color: ${Color.gray};
  }

  .id-td {
    text-align: center;
    width: calc(100% * 0.05);
    color: ${Color.gray};

    @media ${device.laptopL} {
      width: calc(100% * 0.1);
    }
  }

  .check-status {
    width: calc(100% * 0.1);
    color: ${props => props.theme.text_color_2};
  }

  .view-td {
    width: calc(100% * 0.2);
    color: ${props => props.theme.text_color_2};
  }

  .btn-td {
    padding-left: 50px;
    padding-right: 50px;

    @media ${device.tablet} {
      font-size: ${Font.padding_02};
    }
  }
`;

export const CheckStatus = styled.i`
  color: ${props =>
    props.status === 'true' ? Color.turquoise_01 : Color.gray_09};
`;
