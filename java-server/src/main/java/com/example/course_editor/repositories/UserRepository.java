package com.example.course_editor.repositories;

import com.example.course_editor.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {

  @Query("SELECT user FROM User user")
  public List<User> findAllUsers();

  @Query("SELECT user FROM User user WHERE user.id=:userId")
  public User findUserById(@Param("userId") Integer userid);
 
  // @Query("SELECT topic FROM Topic topic WHERE topic.lessonId=:lessonId")
  // public List<Topic> findTopicsForLesson(@Param("lessonId") String lessonId);
}