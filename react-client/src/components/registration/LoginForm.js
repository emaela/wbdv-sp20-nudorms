import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/UserActions";
import { loginUser } from "../../services/UserService";
import { loginStaff } from "../../services/StaffService";
import userService from "../../services/UserService";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: "student",
      username: "",
      password: ""
    };

    this.login = this.login.bind(this);
  }

  login() {
    if (this.state.userType === 'student') {
      loginUser({
        username: this.state.username,
        password: this.state.password,
      }).then((result) => {
        if (result === 1) {
          this.props.history.push("/home");
        } else {
          alert("Your username and password don't match. Please try again.")
        }
      });
    } else if (this.state.userType === 'staff') {
      loginStaff({
        username: this.state.username,
        password: this.state.password,
      }).then((result) => {
        if (result === 1) {
          this.props.history.push("/home");
        } else {
          alert("Your username and password don't match. Please try again.")
        }
      });
    }
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group row">
            <label htmlFor="userTypeFld" className="col-sm-2 col-form-label">
              Log in as...
            </label>
            <div className="col-sm-10">
              <select class="form-control"
                id="userTypeFld"
                onChange={() => {
                  this.setState({ userType: document.getElementById("userTypeFld").value })
                }}>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="usernameFld"
                placeholder="josephaoun"
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="passwordFld"
                placeholder="*********"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group row mt-4">
            <label className="col-sm-2 col-form-label"></label>
            <button
              className="btn btn-primary col ml-3 mr-4"
              onClick={this.login}
              type="button"
            >
              Log In
            </button>
            <button
              href="../home"
              className="btn btn-outline-secondary col mr-3"
              onClick={() => this.props.history.push("/home")}
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const dispatchToPropertyMapper = (dispatch) => ({
  createUser: (user) => {
    userService
      .createUser(user)
      .then((actualUser) => dispatch(createUser(actualUser)));
  },
});

const stateToPropertyMapper = (state) => ({
  // users: state.buildings.buildings
});

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(LoginForm);
