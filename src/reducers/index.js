import {combineReducers, createStore} from "redux";
import weChatUserProfile from "./weChatUserProfile";

const reducers = combineReducers({
  weChatUserProfile
});

let store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//to enable chrome redux-devtool app

export default store;