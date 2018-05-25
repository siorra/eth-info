import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};


import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());


class GlobalState extends React.PureComponent<Props, State> {
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
        <h3>Глобальное состояние сети или patricia-дерево Меркла</h3>
        <p>
          <b>
            лёгкие ноды загружают только цепочку заголовков блоков, от генезисного до текущего верхнего блока, без подробной информации о транзакциях или получения какого-либо ассоциированного с ними состояния.
          </b>
        </p>
        <p>В случае с Эфириумом, ключ/значение для дерева состояний отображается между адресами и ассоциированными с ними счетами, включая balance, nonce, codeHash и storageRoot для каждого счёта (где storageRoot сам также является деревом).</p>
        <img src="https://ethclassic.files.wordpress.com/2017/11/1-n8ytacaqdthtzuazajgujq.png?w=700" alt="" />
        <p>Та же самая trie-структура используется для хранения транзакций и квитанций (они же чеки, англ. receipt). Точнее говоря, каждый блок имеет «заголовок», в котором хранится хэш корневых узлов трёх различных trie-структур, включая:
        </p>
        <ol>
          <li>trie-дерево состояний;</li>
          <li>trie-дерево транзакций;</li>
          <li>trie-дерево квитанций.</li>
        </ol>
        <img src="https://ethclassic.files.wordpress.com/2017/11/1-4eqfjxd2-dbivgvv-8si8g1.png" alt="" />
      </div>
    );
  }
}
export default GlobalState;
