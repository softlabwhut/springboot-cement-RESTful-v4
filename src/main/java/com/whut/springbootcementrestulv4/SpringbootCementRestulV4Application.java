package com.whut.springbootcementrestulv4;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(value = "com.whut.springbootcementrestulv4.dao")
public class SpringbootCementRestulV4Application {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootCementRestulV4Application.class, args);
    }
}
