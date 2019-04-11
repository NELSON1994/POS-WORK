package com.udemy.udemmy.USER;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findUserByUsername(String username);
    List findAll();
    User save(User user);
}
