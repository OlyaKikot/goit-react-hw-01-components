import PropTypes from 'prop-types';
import './FriendList.css';

export default function FriendListItem({ isOnline = false, avatar, name, id }) {
  const className = isOnline ? 'status offline' : 'status';
  return (
    <li key={id} className="itemFriend">
      <span className={className}>{isOnline}</span>
      <img className="avatarFriends" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
