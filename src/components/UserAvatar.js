import React from "react";

class UserAvatar extends React.Component {

  render() {
    return <img src={this.props.uri} alt="WeChat User Profile"/>
  };
}

export default UserAvatar;