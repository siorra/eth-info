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
import Gas from './Gas';
import Transactions from './Transactions';
import Blocks from './Blocks';
import Other from './Other';
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
          <Link to={`/phrases/paradigm`}>Парадигма</Link>
          <Link to={`/phrases/accounts`}>Счета</Link>
          <Link to={`/phrases/global-state`}>Глобальное состояние сети</Link>
          <Link to={`/phrases/gas`}>Газ</Link>
          <Link to={`/phrases/transactions`}>Транзакции</Link>
          <Link to={`/phrases/blocks`}>Блоки</Link>
          <Link to={`/phrases/other`}>Другое</Link>
        </div>
        <div style={{ padding: '10px 0 0 20px' }}>
          <Switch>
            <Route path="/phrases/paradigm" component={Paradigm} />
            <Route path="/phrases/accounts" component={Accounts} />
            <Route path="/phrases/global-state" component={GlobalState} />
            <Route path="/phrases/gas" component={Gas} />
            <Route path="/phrases/transactions" component={Transactions} />
            <Route path="/phrases/blocks" component={Blocks} />
            <Route path="/phrases/other" component={Other} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Phrases;
