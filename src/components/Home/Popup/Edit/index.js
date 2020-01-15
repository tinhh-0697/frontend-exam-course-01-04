import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { PopupEdit, IconText } from './style';
import { ErrorValidate } from '../../../Login/style';
import { editData } from '../../../../Store/Articles/action';
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

const Edit = props => {
  const {
    modal,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    onClickPopupEdit,
    handleSubmit
  } = props;

  return (
    <PopupEdit isOpen={modal} toggle={onClickPopupEdit} className="modal-lg">
      <form onSubmit={handleSubmit}>
        <ModalHeader toggle={onClickPopupEdit}>Edit articles</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label for="nameUpdate" sm={2}>
              Name articles
            </Label>
            <Col sm={10}>
              <InputGroup>
                <Input
                  placeholder="Text"
                  name="nameUpdate"
                  id="nameUpdate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nameUpdate}
                />
                <InputGroupAddon addonType="prepend">
                  <IconText>&#xf040;</IconText>
                </InputGroupAddon>
              </InputGroup>
              {touched.nameUpdate && errors.nameUpdate ? (
                <ErrorValidate>{errors.nameUpdate}</ErrorValidate>
              ) : null}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="viewsUpdate" sm={2}>
              Views number
            </Label>
            <Col sm={10}>
              <InputGroup>
                <Input
                  placeholder="Number"
                  name="viewsUpdate"
                  id="viewsUpdate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.viewsUpdate}
                />
                <InputGroupAddon addonType="prepend">
                  <IconText>&#xf06e;</IconText>
                </InputGroupAddon>
              </InputGroup>
              {touched.viewsUpdate && errors.viewsUpdate ? (
                <ErrorValidate>{errors.viewsUpdate}</ErrorValidate>
              ) : null}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="statusUpdate" sm={2}>
              Status
            </Label>
            <Col sm={10} style={{ paddingTop: '10px' }}>
              <FormGroup>
                <input
                  type="checkbox"
                  name="statusUpdate"
                  onChange={handleChange}
                  checked={values.statusUpdate}
                />
              </FormGroup>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success">
            Update
          </Button>{' '}
          <Button color="danger" onClick={onClickPopupEdit}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </PopupEdit>
  );
};

const PopupEditArticles = withFormik({
  mapPropsToValues: ({ article }) => ({
    id: article.id,
    nameUpdate: article.name,
    viewsUpdate: article.views,
    statusUpdate: article.status
  }),

  enableReinitialize: true,

  validate: values => {
    const errors = {};

    if (!values.nameUpdate) {
      errors.nameUpdate = 'Required';
    }
    if (!values.viewsUpdate) {
      errors.viewsUpdate = 'Required';
    }

    if (isNaN(values.viewsUpdate)) {
      errors.viewsUpdate = 'This is number';
    }

    if (parseInt(values.viewsUpdate) < 0) {
      errors.viewsUpdate = 'Number more than 0';
    }
    return errors;
  },

  handleSubmit: (values, { props, resetForm }) => {
    const article = {
      id: values.id,
      name: values.nameUpdate,
      views: values.viewsUpdate,
      status: values.statusUpdate
    };

    props.editArticles(article);
    props.onClickPopupEdit();
  }
})(Edit);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    editArticles: article => {
      dispatch(editData(article));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupEditArticles);
