import PopupEditArticles from './index';
import { ButtonDelete } from '../../Main/MainContent/style';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadDataAPI } from '../../../../Store/Articles/action';

const GroupPopup = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <ButtonDelete onClick={() => toggle()}>Delete</ButtonDelete>
      <PopupEditArticles
        modal={modal}
        article={props.object}
        onClickPopupDelete={toggle}
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
