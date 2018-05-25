import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};


import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());


class Other extends React.PureComponent<Props, State> {
  getStyle() {
    const style = {
      maxWidth: '800px',
      '& > p': {
        borderBottom: '1px solid rgba(0,0,0,.3)',
        fontSize: '16px',
        lineHeight: '26px',
        margin: '0',
        paddingBottom: '10px',
        paddingTop: '10px',
      },
      '& li': {
        fontSize: '16px',
        lineHeight: '26px',
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
        <h3>What exactly is an HD wallet?</h3>
        <p>Hierarchical Deterministic Wallets (or HD wallets for short) were introduced by BIP 32 and later improved by BIP 44. BIPs (if you’re not familiar with them) stand for Bitcoin Improvement Proposal. </p>
        <p>The default for Ethereum is m/44'/60'/0'/0. Each number in that path represents a certain level in the tree above.</p>
        <p>m / purpose' / coin_type' / account' / change / address_index</p>

        <ol>
          <li>44 — BIP 44 Purpose</li>
          <li>60 — Ethereum’s coin type (
      According to Reddit and a pull request about SLIP-0044, it's because the symbol for Ether is Ξ, which is 60 in greek numerals.)</li>
          <li>0 — Account 0</li>
          <li>0 — Chain 0</li>
        </ol>

        <p>
        Requirements
        </p>
        <ul>
          <li>bip39 (for mnemonic generation)</li>
          <li>hdkey (implementation of BIP 32)</li>
          <li>ethereumjs-util (henceforth ethUtil)</li>
          <li>ethereumjs-tx (henceforth ethTx)</li>
          <li>web3 (for communicating to an Ethereum node)</li>
        </ul>

        <p className="caption">Test networks list</p>
        <ul>
          <li>0: Olympic, Ethereum public pre-release testnet</li>
          <li>1: Frontier, Homestead, Metropolis, the Ethereum public main network</li>
          <li>1: Classic, the (un)forked public Ethereum Classic main network, chain ID 61</li>
          <li>1: Expanse, an alternative Ethereum implementation, chain ID 2</li>
          <li>2: Morden, the public Ethereum testnet, now Ethereum Classic testnet</li>
          <li>3: Ropsten, the public cross-client Ethereum testnet</li>
          <li>4: Rinkeby, the public Geth PoA testnet</li>
          <li>8: Ubiq, the public Gubiq main network with flux difficulty chain ID 8</li>
          <li>42: Kovan, the public Parity PoA testnet</li>
          <li>77: Sokol, the public POA Network testnet</li>
          <li>99: Core, the public POA Network main network</li>
          <li>7762959: Musicoin, the music blockchain</li>
          <li>[Other]: Could indicate that your connected to a local development test network.</li>
        </ul>



      </div>
    );
  }
}
export default Other;
