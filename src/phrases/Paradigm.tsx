import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};


import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());


class Paradigm extends React.PureComponent<Props, State> {
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
        <p>
          Proof-of-Work (доказательство выполнения работы).
        </p>

        <p>“GHOST” = “Greedy Heaviest Observed Subtree” («Жадное и самое весомое видимое поддерево»)</p>
        <img src="https://ethclassic.files.wordpress.com/2017/11/1-mzcujtezvgqstdypqow_vg1.png" alt="" />

        <p>
        Компоненты, из которых состоит система Эфириума:
          <ol>
            <li>
              счета (аккаунты)
            </li>
            <li>
              состояние
            </li>
            <li>
              газ и комиссии
            </li>
            <li>
              транзакции
            </li>
            <li>
              блоки
            </li>
            <li>
              выполнение транзакций
            </li>
            <li>
              майнинг
            </li>
            <li>
              Proof-of-Work
            </li>
          </ol>
        </p>
        <p>
          В Эфириуме используется хэш <a href="https://ethereum.stackexchange.com/questions/550/which-cryptographic-hash-function-does-ethereum-use">KECCAK-256</a>
        </p>
        <p>
          Блокчейн – это "криптографически защищённый одноэлементный механизм записи транзакций с совместно используемым состоянием"
        </p>
        <p>
          “Криптографически защищённый” означает, что создание цифровой валюты обеспечивается сложным математическим алгоритмом, который чрезвычайно сложно взломать. Представьте себе своего рода файервол. Это делает обман и злоупотребление системой (напр., создание поддельных или удаление существующих транзакций) практически невозможным.
        </p>
        <p>
          “Одноэлементный механизм записи транзакций”означает, что существует только один канонический экземпляр механизма, ответственного за создание всех транзакций в системе. Иными словами, в этой системе есть только одна глобальная истина, которая принимается всеми участниками системы.
        </p>
        <p>
          “С совместно используемым состоянием” означает, что состояние этого механизма в каждый момент времени открыто для всех и используется совместно всеми участниками сети.
        </p>
        <p>
          <b>“Cryptographically secure” </b> means that the creation of digital currency is secured by complex mathematical algorithms that are obscenely hard to break. Think of a firewall of sorts. They make it nearly impossible to cheat the system (e.g. create fake transactions, erase transactions, etc.)
        </p>
        <p>
          <b>“Transactional singleton machine” </b> means that there’s a single canonical instance of the machine responsible for all the transactions being created in the system. In other words, there’s a single global truth that everyone believes in.
        </p>
        <p>
          <b>“With shared-state” </b> means that the state stored on this machine is shared and open to everyone.
        </p>
        <p>
          <b>
          For a transaction to be considered valid, it must go through a validation process known as mining.
          </b>
        </p>
        <p>
          blockchain as a <b>"transactional singleton machine with shared-state"</b>
        </p>
        <p>
          Whenever multiple paths are generated, a “fork” occurs. We typically want to avoid forks, because they disrupt the system and force people to choose which chain they “believe” in.
        </p>
        <p>В разделе «Блоки» мы уже вкратце ознакомились с концепцией сложности блоков. Алгоритм, придающий смысл сложности блоков, называется Proof-of-Work (PoW).</p>

      </div>
    );
  }
}
export default Paradigm;
