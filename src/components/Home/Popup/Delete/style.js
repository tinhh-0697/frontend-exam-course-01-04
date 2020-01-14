import styled from 'styled-components';
import { Modal, InputGroupText } from 'reactstrap';

export const PopupEdit = styled(Modal)`
  .modal-content {
    -webkit-border-radius: 20px !important;
    -moz-border-radius: 20px !important;
    border-radius: 20px !important;
  }

  .modal-header {
    border-bottom: transparent;
  }

  .modal-footer {
    border-top: transparent;
  }
`;

export const IconText = styled(InputGroupText)`
  font-family: FontAwesome;
`;
