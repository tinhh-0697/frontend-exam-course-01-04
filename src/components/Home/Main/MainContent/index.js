import React, { useState, useEffect } from 'react';
import { ContentTable } from './style';
import { connect } from 'react-redux';
import { loadDataAPI } from '../../../../Store/Articles/action';
import PopupAddArticles from '../../Popup/Add';
import { ButtonEdit } from './style';
import PopupEditArticles from '../../Popup/Edit/index';
import {
  Articles,
  TableArticles,
  ArticlesTop,
  ButtonAdd,
  ButtonDelete,
  NameTruncate,
  GroupButton
} from './style';

const MainContent = props => {
  const [modal, setModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [article, setArticle] = useState({
    name: '',
    views: '',
    status: '',
    id: ''
  });
  const toggleEdit = index => {
    if (index) {
      setArticle(articles[index]);
    }
    setModalEdit(!modalEdit);
  };

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    props.loadData();
    console.log('did');
  }, []);

  useEffect(() => {
    console.log('Update');
    setArticles(props.articlesData.articles);
  }, [props.articlesData.articles]);

  return (
    <>
      <ContentTable>
        <Articles>
          <ArticlesTop>
            <p>Articles</p>
            <ButtonAdd onClick={toggle}> Add new +</ButtonAdd>
            <PopupAddArticles
              modal={modal}
              onClickPopupAdd={toggle}
            ></PopupAddArticles>
          </ArticlesTop>
          <TableArticles responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Views</th>
                <th className="check-status"> Status</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((value, index) => {
                return (
                  <tr key={index}>
                    <th scope="row" className="id-td">
                      {index}
                    </th>
                    <td className="name-td">
                      <NameTruncate>{value.name}</NameTruncate>
                    </td>
                    <td className="view-td">{value.views}</td>
                    <td className="check-status">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </td>
                    <td className="btn-td">
                      <GroupButton>
                        <ButtonEdit onClick={() => toggleEdit(index)}>
                          Edit
                        </ButtonEdit>
                        <ButtonDelete>Delete</ButtonDelete>
                      </GroupButton>
                    </td>
                  </tr>
                );
              })}
              {article.name !== '' && (
                <PopupEditArticles
                  modal={modalEdit}
                  article={article}
                  onClickPopupEdit={toggleEdit}
                ></PopupEditArticles>
              )}
            </tbody>
          </TableArticles>
        </Articles>
      </ContentTable>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
