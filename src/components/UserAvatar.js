import React from "react";
import "../avatar.css"

class UserAvatar extends React.Component {

  render() {
    return <img src={this.props.uri} className="avatar" alt="WeChat User Avatar"/>
  };
}

export default UserAvatar;