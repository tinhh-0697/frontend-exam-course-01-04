import React, { useState, useEffect } from 'react';
import { ContentTable } from './style';
import { connect } from 'react-redux';
import Loading from '../../../Modules/Loading';
import { loadDataAPI } from '../../../../Store/Articles/action';
import PopupAddArticles from '../../Popup/Add';
import GroupPopupEdit from '../../Popup/Edit/GroupPopup';
import GroupPopupDelete from '../../Popup/Delete/GroupPopup';
import { editStatusCheckData } from '../../../../Store/Articles/action';

import {
  Articles,
  TableArticles,
  ArticlesTop,
  ButtonAdd,
  NameTruncate,
  GroupButton,
  CheckStatus
} from './style';

const MainContent = props => {
  const [modal, setModal] = useState(false);
  const [articles, setArticles] = useState(props.articlesData.articles);
  const { loadData } = props;
  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    setArticles(props.articlesData.articles);
  }, [props.articlesData.articles]);

  const editFastCheck = object => {
    props.editStatusCheck(object);
  };

  if (props.articlesData.flag === false) {
    return <Loading />;
  } else {
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
                  <th className="btn-td">Options</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((value, key) => {
                  return (
                    <tr key={key}>
                      <td className="id-td">{key}</td>
                      <td className="name-td">
                        <NameTruncate>{value.name}</NameTruncate>
                      </td>
                      <td className="view-td">{value.views}</td>
                      <td className="check-status">
                        <CheckStatus
                          status={value.status.toString()}
                          className="fa fa-check"
                          onClick={() => editFastCheck(value)}
                        ></CheckStatus>
                      </td>
                      <td className="btn-td">
                        <GroupButton>
                          <GroupPopupEdit
                            index={key}
                            object={value}
                          ></GroupPopupEdit>
                          <GroupPopupDelete
                            index={key}
                            object={value}
                          ></GroupPopupDelete>
                        </GroupButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </TableArticles>
          </Articles>
        </ContentTable>
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="id-td">1</td>
                  <td className="name-td">
                    <NameTruncate>abc</NameTruncate>
                  </td>
                  <td className="view-td">12345</td>
                  <td className="check-status">
                    <i className="fa fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </TableArticles>
          </Articles>
        </ContentTable>
      </>
    );
  }
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
    },
    editStatusCheck: object => {
      dispatch(editStatusCheckData(object));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
