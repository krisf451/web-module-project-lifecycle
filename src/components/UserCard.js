import React from "react";
import "./UserCard.css";

export const UserCard = props => {
  const {
    avatar_url,
    bio,
    followers,
    following,
    location,
    name,
    login
  } = props.userData;
  return (
    <>
      <h2>Current User</h2>
      <div className="user_card">
        <img className="user_img" src={avatar_url} alt="user avatar" />
        <h2>Name: {name}</h2>
        <p>Bio: {bio}</p>
        <p>Location: {location}</p>
        <p>Login: {login}</p>
        <p>Following: {following}</p>
        <p>Followers: {followers}</p>
      </div>
    </>
  );
};
