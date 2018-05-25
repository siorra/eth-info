import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import EthereumBook from 'ethereumbook';
import AwesomeLinks from 'links';
import Phrases from 'phrases';

type Props = {
};
type State = {
};
class Main extends React.PureComponent<Props, State> {
  getStyle = () => {
    const link = {
      display: 'inline-block',
      padding: '10px',
    };
    return {
      link,
    };
  }
  render() {
    const style = this.getStyle();
    return (
      <div>
        <div>
          <Link style={style.link} to={`/`}>Home</Link>
          <Link style={style.link} to={`/links`}>Links</Link>
          <Link style={style.link} to={`/ethereumbook`}>EthereumBook</Link>
          <Link style={style.link} to={`/phrases`}>Phrases</Link>
        </div>
        <div style={{ padding: '10px 0 0 20px' }}>
          <Switch>
            <Route path="/links" component={AwesomeLinks} />
            <Route path="/ethereumbook" component={EthereumBook} />
            <Route path="/phrases" component={Phrases} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default Main;
