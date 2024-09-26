import React from "react";
import "./FollowerCard.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export const FollowerCard = props => {
  console.log(props);
  const { login, html_url, avatar_url } = props.follower;
  return (
    <div className="follower">
      <Card>
        <CardImg
          top
          width="100%"
          height={200}
          src={avatar_url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Follower Card</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {login}
          </CardSubtitle>
          <Button>
            {" "}
            <a href={html_url} target="_blank" rel="noreferrer">
              <img
                width={35}
                height={35}
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
              />
            </a>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
