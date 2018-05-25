import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};


import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());


class Blocks extends React.PureComponent<Props, State> {
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
        <h3>Блоки</h3>
        <p>Все транзакции объединяются в «блоки.» Блокчейн содержит множество таких блоков, соединённых в цепочку.</p>
        <p className="caption">Блок состоит из:</p>
        <ul>
          <li><b>заголовка блока;</b></li>
          <li>информации о <b>группе транзакций</b>, включённых в этот блок;</li>
          <li><b>набора заголовков других блоков для оммеров текущего блока.</b></li>
        </ul>

        <h3>Что такое «оммеры»?</h3>
      </div>
    );
  }
}
export default Blocks;
