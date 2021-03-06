import React from "react";
import {fetchWeChatUserProfile} from "../actions";
import {connect} from "react-redux";
import Cookies from 'universal-cookie';
import UserAvatar from "../components/UserAvatar";

class App extends React.Component {

  componentDidMount() {
    this.props.onload(this.props);
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
  let cookies = new Cookies();
  let headers = new Headers();
  headers.set("X-XSRF-TOKEN", cookies.get("XSRF-TOKEN"));

  return {
    onload: (props) => {
      fetch('/rel/wechat/user/profile/me', {
        method: 'get',
        credentials: "same-origin",
        headers: headers
      })
      .then((response) => {
        console.log(response.statusText);
        if (response.ok) {
          response.json().then(data => {
            dispatch(fetchWeChatUserProfile(data));
          });
        } else if (response.status === 401 || response.status === 403) {
          window.location.href = "/wechat/oauth/authorize?origin=" + encodeURIComponent(window.location.href); //hypermedia? or
        }
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);