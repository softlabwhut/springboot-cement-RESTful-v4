package com.whut.springbootcementrestulv4.config;


import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.sql.DataSource;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Configuration
@ConfigurationProperties(prefix = "spring.datasource")
public class DruidConfig {

    @Bean
    public DataSource druid(){
       return new DruidDataSource();
    }

    /*配置 druid 监控
    * 1 配置监控的servlet
    * 2 配置监控的filter
     */
    @Bean
    public ServletRegistrationBean  statViewServlet(){
         ServletRegistrationBean bean= new ServletRegistrationBean(new StatViewServlet(),"/druid/*");
         Map<String,String> initParams=new HashMap<>();

         initParams.put("loginUsername","admin");
         initParams.put("loginPassword","123456");
         initParams.put("allow",""); //默认就是允许所有访问
         initParams.put("deny","192.168.5.21");
         bean.setInitParameters(initParams);

         return bean;
    }
    @Bean
    public FilterRegistrationBean webStatFilter(){

        FilterRegistrationBean bean=new FilterRegistrationBean<>();
        Map<String,String> initParams=new HashMap<>();
        initParams.put("exclusion","*.js,*.css,*.html,/druid/*");
        bean.setFilter(new WebStatFilter());
        bean.setInitParameters(initParams);
        bean.setUrlPatterns(Arrays.asList("/*"));

        return bean;
    }
}
