import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ isOnline = false, avatar, name, id }) {
  const className = isOnline ? s.status + ' ' + s.offline : s.status;
  return (
    <li key={id} className={s.itemFriend}>
      <span className={className}>{isOnline}</span>
      <img className={s.avatarFriends} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};
