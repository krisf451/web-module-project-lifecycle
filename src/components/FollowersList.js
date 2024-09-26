import React from "react";
import "./FollowersList.css";
import { FollowerCard } from "./FollowerCard";

export const FollowersList = props => {
  return (
    <div className="followers">
      {/* map through followers array to display all followers to the dom */}
      {props.followersData.map(follower => {
        return <FollowerCard key={follower.id} follower={follower} />;
      })}
    </div>
  );
};
