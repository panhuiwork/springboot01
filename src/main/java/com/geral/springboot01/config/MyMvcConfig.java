package com.geral.springboot01.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.geral.springboot01.filter.LoginHandlerInterceptor;
@Configuration
public class MyMvcConfig implements WebMvcConfigurer {

	@Bean
	public LocaleResolver localeResolver() 
	{
		return new MyLocaleResolver();
	}
	
	 //所有的WebMvcConfigurerAdapter组件都会一起起作用
    @Bean //将组件注册在容器
    public WebMvcConfigurer webMvcConfigurer(){
        WebMvcConfigurer adapter = new WebMvcConfigurer() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
              registry.addViewController("/index.html").setViewName("login");
              registry.addViewController("/").setViewName("login");
              //登录成功后
              registry.addViewController("/main.html").setViewName("dashboard");
            }

            //注册拦截器
            @Override
            public void addInterceptors(InterceptorRegistry registry) {
                //super.addInterceptors(registry);
                //静态资源；  *.css , *.js
                //SpringBoot已经做好了静态资源映射
        		//添加拦截器并且添加拦截地址，然后排序登录页面
        		//springbott也就做好了静态资源的映射所以不能排除
//        		registry.addInterceptor(new LoginHandlerInterceptor()).addPathPatterns("/*")
//        		.excludePathPatterns("/index.html").excludePathPatterns("/login").excludePathPatterns("/");
            }
        };
        return adapter;
    }
}
