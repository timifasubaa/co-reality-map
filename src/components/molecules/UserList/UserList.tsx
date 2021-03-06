import React, { useState } from "react";
import UserProfileModal from "components/organisms/UserProfileModal";

import "./UserList.scss";

interface User {
  id: string;
  gratefulFor?: string;
  islandCompanion?: string;
  likeAboutParties?: string;
  partyName?: string;
  pictureUrl?: string;
}

interface PropsType {
  users: User[];
  limit?: number;
  imageSize?: number;
}

const UserList: React.FunctionComponent<PropsType> = ({
  users,
  limit = 60,
  imageSize = 40,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedUserProfile, setSelectedUserProfile] = useState<User>();

  const usersToDisplay = isExpanded ? users : users.slice(0, limit);

  return (
    <>
      <div className="userlist-container">
        <div className="row header no-margin">
          <p>
            <span className="bold">{users.length}</span> people partying
          </p>
          {users.length > limit && (
            <p
              className="clickabke-text"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              See {isExpanded ? "less" : "all"}
            </p>
          )}
        </div>
        <div className="row no-margin">
          {usersToDisplay.map(
            (user) =>
              user && (
                <img
                  onClick={() => setSelectedUserProfile(user)}
                  key={user.id}
                  className="profile-icon"
                  src={user.pictureUrl || "/anonymous-profile-icon.jpeg"}
                  title={user.partyName}
                  alt={`${user.partyName} profile`}
                  width={imageSize}
                  height={imageSize}
                />
              )
          )}
        </div>
      </div>
      <UserProfileModal
        show={selectedUserProfile !== undefined}
        onHide={() => setSelectedUserProfile(undefined)}
        userProfile={selectedUserProfile}
      />
    </>
  );
};

export default UserList;
