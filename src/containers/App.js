import React from "react";
import {fetchWeChatUserProfile} from "../actions";
import {connect} from "react-redux";
import UserAvatar from "../components/UserAvatar";

class App extends React.Component {

  componentDidMount() {
    this.props.onload();
  }

  render() {
    return (
        <div>
          <UserAvatar uri={this.props.uri}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uri: state.weChatUserProfile.avatar
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onload: () => {
      fetch('/rel/wechat/me', {
        method: 'get',
      })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(fetchWeChatUserProfile(data))
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);