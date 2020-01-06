import React from 'react';
import {
  Button,
  InputGroup,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Col,
  Input,
  InputGroupAddon
} from 'reactstrap';
import { PopupAdd, IconText } from './style';

const Add = props => {
  // const { buttonLabel, className } = props;

  return (
    <PopupAdd
      isOpen={props.modal}
      toggle={props.onClickPopupAdd}
      className="modal-lg"
    >
      <ModalHeader toggle={props.onClickPopupAdd}>Add articles</ModalHeader>
      <ModalBody>
        <form>
          <FormGroup row>
            <Label for="name" sm={2}>
              Name articles
            </Label>
            <Col sm={10}>
              <InputGroup>
                <Input placeholder="Text" name="name" id="name" />
                <InputGroupAddon addonType="prepend">
                  <IconText>&#xf040;</IconText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              Views number
            </Label>
            <Col sm={10}>
              <InputGroup>
                <Input placeholder="Number" />
                <InputGroupAddon addonType="prepend">
                  <IconText>&#xf06e;</IconText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}>
              Status
            </Label>
            <Col sm={10} style={{ paddingTop: '10px' }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" /> Status of articles
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={props.onClickPopupAdd}>
          Add
        </Button>{' '}
        <Button color="danger" onClick={props.onClickPopupAdd}>
          Cancel
        </Button>
      </ModalFooter>
    </PopupAdd>
  );
};

export default Add;
