package com.whut.springbootcementrestulv4.dao;
import com.whut.springbootcementrestulv4.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestParam;


//@MapperScan   //@Mapper或者@Mapperscan 把接口扫描装配到容器
@Mapper
public interface UsersMapper {

      User getUserById(@RequestParam("id") Integer id);




}
