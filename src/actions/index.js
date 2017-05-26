export const fetchWeChatUserProfile = (profile) => {
  return {
    type: 'FETCH_WECHAT_USER_PROFILE',
    userProfile: profile
  }
};
