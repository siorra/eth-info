import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};


import jss from 'jss';
import preset from 'jss-preset-default';
import Accounts from './Accounts';
import Paradigm from './Paradigm';
import GlobalState from './GlobalState';
jss.setup(preset());


class Phrases extends React.PureComponent<Props, State> {
  getStyle() {
    const style = {
      maxWidth: '800px',
      '& > div > a': {
        display: 'inline-block',
        padding: '10px',
      }
    };
    return {
      style,
    };
  }
  render() {
    const sheet = jss.createStyleSheet(this.getStyle()).attach();
    const { classes } = sheet;

    return (
      <div className={classes.style}>
        <div>
          <Link to={`/phrases/paradigm`}>Paradigm</Link>
          <Link to={`/phrases/accounts`}>Accounts</Link>
          <Link to={`/phrases/global-state`}>GlobalState</Link>
        </div>
        <div style={{ padding: '10px 0 0 20px' }}>
          <Switch>
            <Route path="/phrases/paradigm" component={Paradigm} />
            <Route path="/phrases/accounts" component={Accounts} />
            <Route path="/phrases/global-state" component={GlobalState} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Phrases;
