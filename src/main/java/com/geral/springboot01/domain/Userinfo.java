package com.geral.springboot01.domain;

import java.io.Serializable;

public class Userinfo implements Serializable{

	private String username;
	private String userpass;
	
	public Userinfo() {}
	public Userinfo(String username, String userpass) {
		this.username = username;
		this.userpass = userpass;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserpass() {
		return userpass;
	}
	public void setUserpass(String userpass) {
		this.userpass = userpass;
	}
	
	public String xxMethod() 
	{
		return "thymleaf方法";
	}
}
