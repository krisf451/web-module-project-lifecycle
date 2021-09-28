import React from "react";
import "./FollowerCard.css";

export const FollowerCard = props => {
  console.log(props);
  const { login, html_url, avatar_url } = props.follower;
  return (
    <div className="follower">
      <img className="follower_image" src={avatar_url} alt="user avatar" />
      <h2>{login}</h2>

      <a href={html_url} target="_blank" rel="noreferrer">
        <img
          width={35}
          height={35}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="github"
        />
      </a>
    </div>
  );
};
