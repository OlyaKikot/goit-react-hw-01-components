import PropTypes from 'prop-types';
import './FriendList.css';

export default function FriendListItem({ isOnline = false, avatar, name, id }) {
  //const style = { color };
  // const color = isOnline ? 'red' : 'green';
  const className = isOnline ? 'status offline' : 'status';
  return (
    <li key={id} className="item-friend">
      <span className={className}>
        {/* style={{ backgroundColor: color }} */}
        {isOnline}
      </span>
      <img className="avatar-friends" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
