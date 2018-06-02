package com.whut.springbootcementrestulv4.controller;

import com.whut.springbootcementrestulv4.model.User;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping(value = "/users")  //下面的映射都在 URL /users 下
public class UserController {
     //创建线程安全的Map
   static  Map<Integer,User> users=Collections.synchronizedMap(new HashMap<Integer,User>());

    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    public User getUser(@PathVariable Integer id){
        //处理 /users/{id}的get请求，用来获取相应单个id的用户
         return users.get(id);
    }

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public List<User> getUserList(){
        //处理 /users/ 的get请求，获取用户列表
        List<User> userList=new ArrayList<User>(users.values());
        return  userList;
    }

    @RequestMapping(value = "/",method = RequestMethod.POST)
    public String postUser(@ModelAttribute User user){
        //处理 /users/的post请求 用来创建用户
        //除了 @ModelAttribute 绑定参数外，还可以通过@RequestParam来传递页面参数
        users.put(user.getId(),user);
        return "添加用户成功！";
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.PUT)
    public  String putUser(@PathVariable Integer id,@ModelAttribute User user){
        //处理 /users/{id} 的put请求，用来更新用户信息
        User u=users.get(id);
        u.setUserName(user.getUserName());
        u.setLocation(user.getLocation());
        users.put(id,u);
        return "修改成功！";
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public String deleteUser(@PathVariable Integer id){
        //处理 /users/{id} 的delete请求，用来删除相应id的用户
        users.remove(id);
        return  "删除成功！";

    }


}
