import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};

class EthereumBook extends React.PureComponent<Props, State> {
  getStyle() {
    const ComponentStyle = {
    };
    return {
      ComponentStyle,
    };
  }
  render() {
    const style = this.getStyle();
    //const {  } = this.props;
    return (
      <div style={style.ComponentStyle}>
        <a href="https://github.com/ethereumbook/ethereumbook" className="href">ethereumbook</a>
      </div>
    );
  }
}
export default EthereumBook;
