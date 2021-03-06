import React from "react";
import { connect } from "react-redux";
import TextDetails from "../components/details/TextDetails";
import ImageDetails from "../components/details/ImageDetails";
import ReviewList from "../components/details/ReviewList";
import NavBar from "../components/home/NavBar";
import userService from "../services/UserService";
import staffService from "../services/StaffService";
import reviewService from "../services/ReviewService";
import { profile, logout, addUserBookmark } from "../actions/UserActions";
import buildingService from "../services/BuildingService";
import { findBuildingById } from "../actions/BuildingActions";
import { findAllReviews, filterReviews, deleteReview, clearReviews } from "../actions/ReviewActions";
import ReviewForm from "../components/details/ReviewForm";
import ImageForm from "../components/details/ImageForm";
import styled from "styled-components";
import "bootstrap/js/dist/modal";
import $ from "jquery";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

class DetailsContainer extends React.Component {

  writeReview = () => {
    if (this.props.loggedIn) {
      if (this.props.role === 'user') {
        $("#reviewModal").modal("show");
      } else {
        alert("Staff cannot write reviews")
      }

    } else {
      alert("Log in to write a review");
    }
  };

  addPhoto = () => {
    if (this.props.loggedIn) {
      if (this.props.role === 'user') {
        $("#photoModal").modal("show");
      } else {
        alert("Staff cannot add photos")
      }
    } else {
      alert("Log in to add a photo");
    }
  };

  addBookmark = () => {
    if (this.props.loggedIn) {
      if (this.props.role === 'user') {
        this.props.addUserBookmark(this.props.profile.username, this.props.building);
        alert("Bookmarked " + this.props.building.name);
      } else {
        alert("Staff cannot add bookmarks")
      }
    } else {
      alert("Log in to bookmark");
    }
  };

  submitReview = () => {
    $("#reviewModal").modal("hide");
    this.props.findBuildingById(this.props.match.params.buildingId);
    this.forceUpdate();
  };

  componentDidMount() {
    this.props.getProfile();
    this.props.findBuildingById(this.props.match.params.buildingId);
    this.props.findReviews(this.props.match.params.buildingId);
  }

  componentWillUnmount() {
    this.props.clearReviews();
  }

  render() {
    return (
      <div>
        <NavBar
          profile={this.props.profile}
          loggedIn={this.props.loggedIn}
          logout={this.props.logout}
          role={this.props.role}
        />
        {this.props.building && (
          <div>
            <ImageDetails building={this.props.building} />
            <div className="container">
              <TextDetails
                building={this.props.building}
                writeReview={this.writeReview}
                addPhoto={this.addPhoto}
                addBookmark={this.addBookmark}
              />
              <ReviewList 
                buildingId={this.props.match.params.buildingId}
                reviews={this.props.reviews} 
                filter={this.props.filterReviews}
                deleteReview={this.props.deleteReview}/>
            </div>
          </div>
        )}
        <ReviewForm
          building={this.props.building}
          submitReview={this.submitReview}
        />
        <ImageForm
          building={this.props.building}
          submitReview={this.submitReview}
        />
      </div>
    );
  }
}

const dispatchToPropertyMapper = (dispatch) => ({
  getProfile: () => {
    userService.profile().then((actualProfile) => {
      if (actualProfile && actualProfile.username) {
        dispatch(profile(actualProfile, "user"));
      } else {
        staffService.profile().then((staffProfile) => {
          if (staffProfile && staffProfile.username) {
            dispatch(profile(staffProfile, "staff"));
          } else {
            dispatch(logout());
          }
        });
      }
    });
  },
  findBuildingById: (buildingId) => {
    buildingService
      .findBuildingById(buildingId)
      .then((building) => dispatch(findBuildingById(building)));
  },
  logout: () => {
    userService.logout().then(dispatch(logout()));
    staffService.logout()
  },
  findReviews: (buildingId) => {
    buildingService.findReviewsForBuilding(buildingId)
      .then(reviews => dispatch(findAllReviews(reviews)))
  },
  addUserBookmark: (username, building) => {
    userService.addUserBookmark(username, building.id)
      .then(response => dispatch(addUserBookmark(username, building)));
  },
  filterReviews: (buildingId, preference) => {
    buildingService.findReviewsForBuilding(buildingId)
      .then(reviews => dispatch(filterReviews(reviews, preference)))
  },
  deleteReview: (reviewId) => {
    reviewService.deleteReview(reviewId)
      .then(status => dispatch(deleteReview(reviewId)))
  },
  clearReviews: () => {
    dispatch(clearReviews());
  },
});

const stateToPropertyMapper = (state) => ({
  profile: state.users.profile,
  loggedIn: state.users.loggedIn,
  building: state.buildings.building,
  reviews: state.reviews.reviews,
  pictures: state.pictures.pictures,
  role: state.users.role
});

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(DetailsContainer);
