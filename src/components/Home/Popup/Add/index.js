import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { PopupAdd, IconText } from './style';
import { ErrorValidate } from '../../../Login/style';
import { addData } from '../../../../Store/Articles/action';
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

const Add = props => {
  const {
    modal,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    onClickPopupAdd,
    handleSubmit
  } = props;

  return (
    <PopupAdd isOpen={modal} toggle={onClickPopupAdd} className="modal-lg">
      <form onSubmit={handleSubmit}>
        <ModalHeader toggle={onClickPopupAdd}>Add articles</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label for="name" sm={2}>
              Name articles
            </Label>
            <Col sm={10}>
              <InputGroup>
                <Input
                  placeholder="Text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <InputGroupAddon addonType="prepend">
                  <IconText>&#xf040;</IconText>
                </InputGroupAddon>
              </InputGroup>
              {touched.name && errors.name ? (
                <ErrorValidate>{errors.name}</ErrorValidate>
              ) : null}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="views" sm={2}>
              Views number
            </Label>
            <Col sm={10}>
              <InputGroup>
                <Input
                  placeholder="Number"
                  name="views"
                  id="views"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.views}
                />
                <InputGroupAddon addonType="prepend">
                  <IconText>&#xf06e;</IconText>
                </InputGroupAddon>
              </InputGroup>
              {touched.views && errors.views ? (
                <ErrorValidate>{errors.views}</ErrorValidate>
              ) : null}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="status" sm={2}>
              Status
            </Label>
            <Col sm={10} style={{ paddingTop: '10px' }}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="status"
                    id="status"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  />{' '}
                  Status of articles
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success">
            Add
          </Button>{' '}
          <Button color="danger" onClick={props.onClickPopupAdd}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </PopupAdd>
  );
};

const PopupAddArticles = withFormik({
  mapPropsToValues: () => ({ name: '', views: '', status: false }),

  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.views) {
      errors.views = 'Required';
    }

    if (isNaN(values.views)) {
      errors.views = 'This is number';
    }

    if (parseInt(values.views) < 0) {
      errors.views = 'Number more than 0';
    }
    return errors;
  },

  handleSubmit: (values, { props, resetForm }) => {
    const article = {
      name: values.name,
      views: values.views,
      status: values.status
    };

    props.addArticles(article);
    props.onClickPopupAdd();
    resetForm();
  }
})(Add);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addArticles: object => {
      dispatch(addData(object));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupAddArticles);
