package com.geral.springboot01.domain;

public class Link {

	private String url;
	private String title;
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Link(String url, String title) {
		this.url = url;
		this.title = title;
	}
	
}
