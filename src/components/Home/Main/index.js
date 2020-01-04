import React, { lazy, Suspense } from 'react';
import Search from '../Search';
import { Main } from './style';
import { Spinner } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

const MainContent = lazy(() => import('./MainContent'));
const Chart = lazy(() => import('./Chart'));

const index = () => {
  return (
    <Main>
      <Search></Search>
      <Switch>
        <Suspense fallback={<Spinner type="grow" />}>
          <Route path="/chart" component={Chart}></Route>
          <Route path="/table" component={MainContent}></Route>
        </Suspense>
      </Switch>
    </Main>
  );
};

export default index;
