import React from 'react';
// import { theme } from 'ui/theme';

import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());


type Props = {
};
type State = {
};

const getStyle = (): any => {
  const style = {
    '& > a': {
      fontSize: '14px',
      display: 'block',
      lineHeight: '21px',
    }
  };

  return {
    style,
  };
};

class AwesomeLinks extends React.PureComponent<Props, State> {
  render() {
    const sheet = jss.createStyleSheet(getStyle()).attach();
    const { classes } = sheet;

    return (
      <div className={classes.style}>
        <a href="https://ethclassic.ru/2017/11/08/kak-rabotayet-ethereum-1/" className="href">Как работает эфир часть 1?</a>
        <a href="https://ethclassic.ru/2017/11/11/kak-rabotayet-ethereum-4/" className="href">Как работает эфир часть 4?</a>
        <a href="https://github.com/ethereum/yellowpaper" className="href">Yellow book Ethereum?</a>
        <a href="https://github.com/btomashvili/awesome-ethereum" className="href">Awesome Ethereum</a>
        <a href="https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369" className="href">How does Ethereum work, anyway?</a>
        <a href="https://medium.com/bitcraft/so-you-want-to-build-an-ethereum-hd-wallet-cb2b7d7e4998" className="href">How to Build an Ethereum HD Wallet in node.js</a>

      </div>
    );
  }
}
export default AwesomeLinks;
