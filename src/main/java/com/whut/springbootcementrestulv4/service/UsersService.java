package com.whut.springbootcementrestulv4.service;
import com.whut.springbootcementrestulv4.model.User;
import com.whut.springbootcementrestulv4.dao.UsersMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
@Service
public class UsersService {

    @Autowired
    UsersMapper usersMapper;

    //按照用户名 模糊查询
    public  User selectUserById(@RequestParam("id") Integer id){
        System.out.println(usersMapper+"sxaasa");
        return usersMapper.getUserById(id);

    }

}
