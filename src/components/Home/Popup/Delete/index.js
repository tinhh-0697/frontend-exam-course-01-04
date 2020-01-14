import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { PopupEdit } from './style';
import { deleteData } from '../../../../Store/Articles/action';
import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup
} from 'reactstrap';

const Delete = props => {
  const { modal, onClickPopupDelete, handleSubmit } = props;

  return (
    <PopupEdit isOpen={modal} toggle={onClickPopupDelete} className="modal-lg">
      <form onSubmit={handleSubmit}>
        <ModalHeader toggle={onClickPopupDelete}>Edit articles</ModalHeader>
        <ModalBody>
          <FormGroup row></FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="success">
            Delete
          </Button>
          <Button color="danger" onClick={onClickPopupDelete}>
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

  handleSubmit: (values, { props }) => {
    props.deleteData(values.id);
    props.onClickPopupDelete();
  }
})(Delete);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    deleteData: id => {
      dispatch(deleteData(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupEditArticles);
