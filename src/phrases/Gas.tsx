import React from 'react';
// import { theme } from 'ui/theme';

type Props = {
};
type State = {
};


import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());


class Gas extends React.PureComponent<Props, State> {
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
        <h3>Газ и комиссии сети</h3>
        <p>Ещё одно важное для Эфириума понятие – это комиссионные платежи.
          <b>За каждое вычисление, выполняемое в сети Эфириума в результате транзакции, взимается комиссия – ничто не происходит бесплатно! </b>
          Эта комиссия выплачивается в единицах стоимости, называемых «газом».</p>
        <p>Газ – это единица, используемая для обозначения размера комиссии за определённое вычислительное действие. </p>
        <p>Цена газа представляет собой то количество эфиров, которое вы готовы потратить на каждую единицу газа. Она измеряется в «Gwei». «Wei» – это наименьшая единица эфира, 1 эфир = 1⁰¹⁸ Wei. Один Gwei равен 1 000 000 000 Wei.</p>
        <p>Для каждой транзакции отправитель устанавливает лимит газа и цену газа. Произведение цены газа и лимита газа даёт максимальное количество Wei, которое отправитель готов заплатить за выполнение транзакции.</p>
        <img src="https://ethclassic.files.wordpress.com/2017/11/1-xsotr_qvcskcf5c3apmipa1.png" alt="" />


        <p><b>Запомните, что</b></p>
        <ol>
          <li>лимит газа представляет собой максимальное количество газа, которое отправитель готов оплатить</li>
          <li>на счету отправителя должно находиться достаточное для оплаты максимального количества газа количество эфиров</li>
          <li>после выполнения транзакции эквивалент любого количества неиспользованного газа возвращается на счёт отправителя в эфирах</li>
        </ol>

        <img src="https://ethclassic.files.wordpress.com/2017/11/1-uncas12sspln7denrvconq1.png" alt="" />

        <p>Если отправитель не предоставляет необходимого для выполнения транзакции количества газа и оно исчерпывается в процессе её выполнения, то такая транзакция признаётся недействительной. В этом случае выполнение транзакции прерывается, любые произведённые ею изменения в состоянии сети отменяются и Эфириум возвращается в состояние, в котором он находился перед началом транзакции – как если бы её вовсе не было.</p>
        <p>Поскольку к тому моменту, как отпущенное на транзакцию количество газа было исчерпано, машина уже затратила ресурсы на выполнение вычислений, <b>логично, что в этом случае плата за газ отправителю транзакции не возвращается.</b></p>

        <h3>Куда именно уходит плата за газ?</h3>
        <p><b>Bсе средства, уплачиваемые за газ отправителем транзакции, отправляются на адрес выгодоприобретателя (обычно это адрес майнера). </b></p>
        <img src="https://ethclassic.files.wordpress.com/2017/11/1-bgzrzkyyrmlfehz3-djv6w1.png" alt="" />

        <p>Как правило, чем выше цена газа, которую отправитель готов заплатить, тем большее вознаграждение получит майнер за выполнение транзакции, и следовательно, тем выше вероятность того, что майнер выберет именно эту транзакцию. <b>Таким образом, майнеры могут выбирать, какие транзакции они хотят подтвердить либо проигнорировать.</b></p>

        <p>Для того чтобы помочь отправителю понять, какую стоимость газа ему следует установить, у майнеров есть возможность сообщить публично о минимальной цене газа, при которой они будут выполнять транзакции.</p>

        <h3>Плата за хранение данных</h3>

        <p><b>Газ используется для оплаты не только вычислительных действий, но и хранения данных.</b> Общая плата за хранение пропорциональна наименьшему использованному кратному 32 байтам числу.</p>
        <p>Стимул к сокращению количества хранимых данных до необходимого минимума. Поэтому, если транзакция инициирует выполнение действия, в результате которого объём занимаемого хранилища сокращается, <b>то комиссия за выполнение этой операции не взимается, ПЛЮС производится возврат средств за освобождённый объём.</b></p>

        <h3>В чём заключается цель сбора комиссий?</h3>
        <p><b>Каждая операция в сети выполняется одновременно всеми полными нодами.</b> Однако выполнение вычислительных действий в виртуальной машине Эфириума стоит очень дорого. Таким образом, смарт-контракты Эфириума больше подходят для решения простых задач, таких, как реализация простой бизнес-логики или проверки цифровой подписи и других криптографических объектов, чем для реализации более сложных сценариев, как хранение файлов, email или машинного обучения, которые могут послужить источником высокой нагрузки на сеть. </p>
        <p><b>Комиссионные платежи помогают предотвратить чрезмерную нагрузку на сеть.</b></p>
        <p>
          Эфириум – Тьюринг-полный язык программирования. (Вкратце, машина Тьюринга может симулировать любой алгоритм работы вычислительной машины.
          Те, кто не имеет представления о машинах Тьюринга, могут ознакомиться с
          <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%B0_%D0%A2%D1%8C%D1%8E%D1%80%D0%B8%D0%BD%D0%B3%D0%B0">этой</a>
          <a href="http://mathworld.wolfram.com/TuringMachine.html"> и этой</a>
           статьями.) Это позволяет использовать циклы и делает Эфириум подверженным проблеме остановки, когда вы не можете определить, будет ли программа продолжать выполняться бесконечно. Если бы в сети не было комиссионных платежей, злоумышленник легко мог бы нарушить работу сети, без каких-либо последствий инициировав посредством транзакции выполнение бесконечного цикла вычислительных действий. Таким образом, комиссии также защищают сеть от преднамеренных атак.
        </p>

      </div>
    );
  }
}
export default Gas;
