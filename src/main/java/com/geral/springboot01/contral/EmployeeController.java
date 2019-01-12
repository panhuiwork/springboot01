package com.geral.springboot01.contral;

import java.util.Collection;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.geral.springboot01.domain.dao.DepartmentDao;
import com.geral.springboot01.domain.dao.EmployeeDao;
import com.geral.springboot01.domain.entities.Department;
import com.geral.springboot01.domain.entities.Employee;

/**
 * 员工操作页面
 * @author Panhui
 *
 */
@Controller
public class EmployeeController {
	@Autowired
	EmployeeDao employeeDao;
	@Autowired
	DepartmentDao departmentDao;
	/**
	 * 查询所有员工
	 * @return
	 */
	@GetMapping("/emps")
	public String list(Model model) 
	{
		Collection<Employee> employees=employeeDao.getAll();
		model.addAttribute("emps", employees);
		return "emp/list";
	}
	
	/**
	 * 到达员工添加页面
	 * @return
	 */
	@GetMapping("/emp")
	public String toAddPage(Model model) 
	{
		System.out.println("到达员工添加页面");
		Collection<Department> depts=departmentDao.getDepartments();
		model.addAttribute("depts", depts);
		return "emp/add";
	}
	/**
	 * 到达员工修改页面
	 * @return
	 */
	@GetMapping("/emp/{id}")
	public String toUpdatePage(Model model,@PathVariable Integer id) 
	{
		System.out.println("员工修改");
		Collection<Department> depts=departmentDao.getDepartments();
		model.addAttribute("emp", employeeDao.get(id));
		model.addAttribute("depts", depts);
	
		return "emp/add";
	}
	
	/**
	 * 添加
	 * @return
	 */
	@PostMapping("/emp")
	public String addEmp(Employee employee) 
	{
		System.out.println("---------添加----------");
		employeeDao.save(employee);
		//redirect:重定向一个地址
		//forward转发一个的地址
		return "redirect:/emps";
	}
	
	
	/**
	 * 更新
	 * @return
	 */
	@PutMapping("/emp")
	public String updateEmp(Employee employee) 
	{
		
		System.out.println("------更新---------"+employee.toString());
		employeeDao.save(employee);
		//redirect:重定向一个地址
		//forward转发一个的地址
		return "redirect:/emps";
	}
	/**
	 * delete删除
	 * @return
	 */
	@DeleteMapping("/emp/{id}")
	public String deleteEmp(@PathVariable Integer id) 
	{
		
		System.out.println("-------删除---------"+id);
		employeeDao.delete(id);
		//redirect:重定向一个地址
		//forward转发一个的地址
		return "redirect:/emps";
	}
}
