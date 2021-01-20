/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import StartGoalPage from './containers/StartGoalPage';
import StatusSubmitPage from './containers/StatusSubmitPage';
import FinalStatusPage from './containers/FinalStatusPage';
// import StatusSubmitPage from './containers/StatusSubmitPage';

// Lazily load routes and code split with webpack
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
);

const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.HOME} component={HomePage} exact />
        <Route path={routes.START_GOAL} component={StartGoalPage} exact />
        <Route path={routes.COUNTER} component={CounterPage} exact />
        <Route path={routes.STATUS_UPDATE} component={StatusSubmitPage} exact />
        <Route path={routes.FINAL_STATUS} component={FinalStatusPage} exact />
        {/* <Route path={routes.HOME} component={StatusSubmitPage} /> */}
      </Switch>
    </App>
  );
}
