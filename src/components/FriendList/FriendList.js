import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './FriendList.css';
export default function FriendList({ friends }) {
  return (
    <ul className="friendList">
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            id={friend.id}
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
