import React from 'react';
import { ContentTable } from './style';
import {
  Articles,
  TableArticles,
  ArticlesTop,
  ButtonAdd,
  ButtonEdit,
  ButtonDelete
} from './style';

const index = () => {
  return (
    <>
      <ContentTable>
        <Articles>
          <ArticlesTop>
            <p>Articles</p>
            <ButtonAdd> Add new +</ButtonAdd>
          </ArticlesTop>
          <TableArticles responsive>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Views</th>
                <th className="check-status"> Status</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="id-td"></th>
                <td className="name-td">Creating Remarkable Poster...</td>
                <td className="view-td">2,567</td>
                <td className="check-status">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </td>
                <td className="btn-td">
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete>Delete</ButtonDelete>
                </td>
              </tr>
              <tr>
                <th scope="row" className="id-td"></th>
                <td className="name-td">Creating Remarkable Poster...</td>
                <td className="view-td">2,567</td>
                <td className="check-status">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </td>
                <td className="btn-td">
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete>Delete</ButtonDelete>
                </td>
              </tr>
              <tr>
                <th scope="row" className="id-td"></th>
                <td className="name-td">Creating Remarkable Poster...</td>
                <td className="view-td">2,567</td>
                <td className="check-status">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </td>
                <td className="btn-td">
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete>Delete</ButtonDelete>
                </td>
              </tr>
              <tr>
                <th scope="row" className="id-td"></th>
                <td className="name-td">Creating Remarkable Poster...</td>
                <td className="view-td">2,567</td>
                <td className="check-status">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </td>
                <td className="btn-td">
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete>Delete</ButtonDelete>
                </td>
              </tr>
            </tbody>
          </TableArticles>
        </Articles>
      </ContentTable>
      <ContentTable>
        <Articles>
          <ArticlesTop>
            <p>Articles</p>
            <ButtonAdd> Add new +</ButtonAdd>
          </ArticlesTop>
          <TableArticles responsive>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Views</th>
                <th className="check-status"> Status</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="id-td"></th>
                <td className="name-td">Creating Remarkable Poster...</td>
                <td className="view-td">2,567</td>
                <td className="check-status">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </td>
                <td className="btn-td">
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete>Delete</ButtonDelete>
                </td>
              </tr>
              <tr>
                <th scope="row" className="id-td"></th>
                <td className="name-td">Creating Remarkable Poster...</td>
                <td className="view-td">2,567</td>
                <td className="check-status">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </td>
                <td className="btn-td">
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete>Delete</ButtonDelete>
                </td>
              </tr>
              <tr>
                <th scope="row" className="id-td"></th>
                <td className="name-td">Creating Remarkable Poster...</td>
                <td className="view-td">2,567</td>
                <td className="check-status">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </td>
                <td className="btn-td">
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete>Delete</ButtonDelete>
                </td>
              </tr>
              <tr>
                <th scope="row" className="id-td"></th>
                <td className="name-td">Creating Remarkable Poster...</td>
                <td className="view-td">2,567</td>
                <td className="check-status">
                  <i class="fa fa-check" aria-hidden="true"></i>
                </td>
                <td className="btn-td">
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete>Delete</ButtonDelete>
                </td>
              </tr>
            </tbody>
          </TableArticles>
        </Articles>
      </ContentTable>
    </>
  );
};

export default index;
