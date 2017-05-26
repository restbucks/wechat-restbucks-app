const weChatUserProfile = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_WECHAT_USER_PROFILE':
      return action.userProfile;
    default:
      return state;
  }
};

export default weChatUserProfile;