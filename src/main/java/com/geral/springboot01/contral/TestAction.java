package com.geral.springboot01.contral;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.servlet.ModelAndView;

import com.geral.springboot01.domain.Link;
import com.geral.springboot01.domain.User;
import com.geral.springboot01.domain.Userinfo;

//@RestController
@Controller
public class TestAction {


	Logger logger=LoggerFactory.getLogger(getClass());
	@Autowired
	private User user;

	
	
	@GetMapping("/helloworld")
	@ResponseBody
	public String helloworld(HttpSession session) 
	{
		System.out.println(user.getEmail());
		System.out.println(user.getUsername());
		logger.debug("xxx");
		logger.info("xxx");
		
		Userinfo user=new Userinfo();
		user.setUsername("myname");
		user.setUserpass("mypass");
		session.setAttribute("panpan", user);
		return "helloworld";
	}
	
	@GetMapping("/thymeleaf")
	public String thymeleaf(Model model) 
	{
		model.addAttribute("mytest", "潘潘");
		model.addAttribute("mytest2", "<font color='red'>红色潘潘</font>");
		List<Userinfo> mylist=new ArrayList<Userinfo>();
		mylist.add(new Userinfo("on1", "pass1"));
		mylist.add(new Userinfo("on2", "pass2"));
		mylist.add(new Userinfo("on3", "pass3"));
		mylist.add(new Userinfo("on4", "pass4"));
		mylist.add(new Userinfo("on5", "pass5"));
		mylist.add(new Userinfo("on6", "pass6"));
		model.addAttribute("mylist", mylist);
		model.addAttribute("uinfo", new Userinfo("on1", "pass1").xxMethod());
		return "res";
	}
	
	@GetMapping("/myindex")
	public String index(Model model) 
	{
		model.addAttribute("swf1", "newpage/index.swf");
		List<Link> mylist=new ArrayList<Link>();
		mylist.add(new Link("newpage/content/SK20181224130828708.html", "测试标题1"));
		mylist.add(new Link("newpage/content/SK20181224130828709.html", "测试标题2"));
		mylist.add(new Link("newpage/content/SK20181224130828710.html", "测试标题3"));
		mylist.add(new Link("newpage/content/SK20181224130828711.html", "测试标题4"));
		model.addAttribute("mylist", mylist);
		
		
		Map<String, List<Link>> mymap=new HashMap<String, List<Link>>(); 
		List<Link> mylist2=new ArrayList<Link>();
		mylist2.add(new Link("newpage/content/SK201812241308287111.html", "闪客快打7佣兵帝国暑假活动测试标题A"));
		mylist2.add(new Link("newpage/content/SK201812241308287111.html", "闪客快打7佣兵帝国暑假活动测试标题B"));
		mylist2.add(new Link("newpage/content/SK201812241308287111.html", "闪帝国暑假活动测试标题C"));
		mylist2.add(new Link("newpage/content/SK201812241308287111.html", "闪客快打7佣兵帝国暑假活动测试标题D"));
		mylist2.add(new Link("newpage/content/SK201812241308287111.html", "闪客佣兵帝国暑假活动测试标题E"));
		mylist2.add(new Link("newpage/content/SK201812241308287111.html", "闪客快打7佣兵帝国暑假活动测试标题F"));
		mymap.put("新闻1", mylist2);
		mymap.put("攻略2", new ArrayList<Link>());
		mymap.put("必答3", mylist2);
		mymap.put("视频4", mylist2);
		mymap.put("动漫5", mylist2);
		mymap.put("小说6", mylist2);
		
		model.addAttribute("jst", "panpanjavascript");
		model.addAttribute("mymap", mymap);
		return "thmplatesindex";
	}
	
	
	@GetMapping("/thymeleaf1")
	public String thymeleaf1() 
	{

//		ModelAndView view=new ModelAndView("res");
//		model.set("mytest", "盼盼");
//		return view;
		return "res";
	}
	//////测试
//	/**
//	 * 这是第一种方式，这样就会进入模板的index.html不会进入static的
//	 * 第二种方式看MyMvcConfig类
//	 * @return
//	 */
//	@GetMapping({"/","/index.html"})
//	public String index() 
//	{
//		return "login";
//	}
	
	@PostMapping("/login")
	public String login(Model model,String username,String userpass,HttpSession session) 
	{
		System.out.println(username+"登录中...."+userpass);
		if(StringUtils.isEmpty(username) || !username.equals("panpan")) 
		{
			//错误
			model.addAttribute("msg", "登陆失败！");
			return "login";
		}else 
		{
			Userinfo userinfo=new Userinfo(username, userpass);
			session.setAttribute("loginuser", userinfo);
			 return "redirect:/main.html";
		}
	}
	
	@GetMapping("/exit")
	public String exitlogin(Model model,HttpSession session) 
	{
		session.removeAttribute("loginuser");
		model.addAttribute("msg", "退出成功！");
		return "login";
	}
	
}
