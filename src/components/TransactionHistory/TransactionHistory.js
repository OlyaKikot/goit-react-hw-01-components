import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.tableTh}>Type</th>
          <th className={s.tableTh}>Amount</th>
          <th className={s.tableTh}> Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return (
          <tbody key={item.id} className={s.tableTbodyTr}>
            <tr>
              <td className={s.tableTd}>{item.type}</td>
              <td className={s.tableTd}>{item.amount}</td>
              <td className={s.tableTd}>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
