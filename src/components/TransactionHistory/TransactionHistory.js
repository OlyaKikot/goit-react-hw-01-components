import PropTypes from 'prop-types';
import './TransactionHistory.css';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="table-th">Type</th>
          <th className="table-th">Amount</th>
          <th className="table-th"> Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return (
          <tbody key={item.id} className="table-tbody-tr">
            <tr>
              <td className="table-td">{item.type}</td>
              <td className="table-td">{item.amount}</td>
              <td className="table-td">{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
