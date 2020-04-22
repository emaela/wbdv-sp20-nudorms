import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EditBuildingForm from "./EditBuildingForm";
import $ from "jquery";

class BuildingCard extends React.Component {
  state = {
    building: this.props.building,
  };

  getSizeClass() {
    if (this.props.topRated) {
      return "col col-xl-3";
    } else if (this.props.inProfile) {
      return "col col-xl-6";
    } else {
      return "col-6 col-xl-4";
    }
  }

  render() {
    return (
      <div className={`card-container mt-3 mb-2 ${this.getSizeClass()} d-flex align-items-stretch`}>
        {this.state.building && (
          <EditBuildingForm building={this.state.building} submitUpdate={this.submitUpdate} />
        )}
        <div className="card">
          <Link className="card-link" to={`/details/${this.state.building.id}`}>
            <img
              className="card-img-top"
              src={this.state.building.thumbnailImageUrl}
              alt="Card image cap"
            />
          </Link>

          <div className="card-body">
            <h5 className="card-title">{this.state.building.name}</h5>
            {
              (this.state.building.rating <= 0) &&
              <h6 className="card-subtitle mb-2 text-muted">No reviews yet!</h6>
            }
            {
              (this.state.building.rating > 0) &&
              <h6 className="card-subtitle mb-2 text-muted">this.state.building.rating %</h6>
            }
            <p className="card-text">Description</p>
            <Link
              className="card-link"
              to={`/details/${this.state.building.id}`}
            >
              <button className="btn btn-outline-primary mr-3">Open</button>
            </Link>

            {this.props.role === "staff" && (
              <button
                className="btn btn-outline-secondary mr-3"
                onClick={() => {
                  $(`#editBuildingModal${this.state.building.id}`).modal("show");
                }}
                type="button"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const stateToPropertyMapper = (state) => ({
  profile: state.users.profile,
  loggedIn: state.users.loggedIn,
  buildings: state.buildings.buildings,
  role: state.users.role
});

export default connect(
  stateToPropertyMapper
)(BuildingCard);
