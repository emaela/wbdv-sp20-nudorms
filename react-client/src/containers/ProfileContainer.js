import React from "react";
import {combineReducers, createStore} from "redux";
import userReducer from "../reducers/UserReducer";
import {Provider} from "react-redux";
import ProfileComponent from "../components/profile/ProfileComponent";

const rootReducer = combineReducers({
  users: userReducer
})

let store = createStore(rootReducer)

class ProfileContainer extends React.Component {
  state = {
    username: this.props.match.params.username
  }

  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mr-5" href="/home">
              neudorms
            </a>
          </nav>

          <Provider store={store}>
            <div className='container'>
              <ProfileComponent
                  username={this.state.username}
              />
            </div>
          </Provider>
        </div>
    );
  }
}

export default ProfileContainer