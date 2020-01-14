import PopupEditArticles from './index';
import { ButtonEdit } from '../../Main/MainContent/style';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadDataAPI } from '../../../../Store/Articles/action';

const GroupPopup = props => {
  const [modalEdit, setModalEdit] = useState(false);
  const toggleEdit = () => {
    setModalEdit(!modalEdit);
  };

  return (
    <div>
      <ButtonEdit onClick={() => toggleEdit()}>Edit</ButtonEdit>
      <PopupEditArticles
        modal={modalEdit}
        article={props.object}
        onClickPopupEdit={toggleEdit}
      ></PopupEditArticles>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articlesData: state.Articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => {
      dispatch(loadDataAPI());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupPopup);
