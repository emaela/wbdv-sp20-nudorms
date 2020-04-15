package com.example.course_editor.services;

import com.example.course_editor.models.*;
import com.example.course_editor.repositories.ReviewRepository;
import com.example.course_editor.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
  @Autowired
  UserRepository userRepository;
  @Autowired
  ReviewRepository reviewRepository;

  public User createUser(User user) {
    return userRepository.save(user);
  }

  public List<User> findAllUsers() {
    return (List<User>) userRepository.findAll();
  }

  public User findUserById(Integer userId) {
    return userRepository.findUserById(userId);
  }

  public User findUserByUsername(String username) {
    return userRepository.findUserByUsername(username);
  }

  public Integer addReviewForUser(Integer userId, Review review) {
    User user = this.findUserById(userId);
    user.addReview(review);
    return 1;
  }

  public Integer addBookmarkForUser(Integer userId, Building building) {
    User user = this.findUserById(userId);
    user.addBookmark(building);
    return 1;
  }

  public List<Building> findBookmarksForUser(Integer userId) {
    return userRepository.findBookmarksForUser(userId);
  }

  public Integer updateUser(String username, User user) {
    // make sure user exists
    int userIdIndex = -1;
    List<User> userList = this.findAllUsers();
    for (int i = 0; i < userList.size(); i++) {
      User u = userList.get(i);
      if (u.getUsername().equals(username)) {
        userIdIndex = i;
        break;
      }
    }

    if (userIdIndex == -1) {
      return 0;
    } else {
      // User b = this.findUserById(userIdIndex);
      this.deleteUser(username);
      this.createUser(user);
      return 1;
    }
  }

  public Integer deleteUser(String username) {
    User user = this.findUserByUsername(username);
    userRepository.deleteById(user.getId());
    return 1;
  }
}