package com.whut.springbootcementrestulv4.model;

import org.apache.ibatis.type.Alias;

@Alias("user")
public class User
{

    private Integer id;
    private String email;
    private String username;
    private String location;



    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String userName) {
        this.username = userName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


}
