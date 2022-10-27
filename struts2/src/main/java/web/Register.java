package web;

import com.opensymphony.xwork2.ActionSupport;
import sql.User;
import sql.UserInterface;
import sql.UserInterfaceImplement;

import java.util.regex.Pattern;

public class Register extends ActionSupport {
	private int id;
	private String userName;
	private String password;
	private String repeatPassword;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRepeatPassword() {
		return repeatPassword;
	}

	public void setRepeatPassword(String repeatPassword) {
		this.repeatPassword = repeatPassword;
	}

	@Override
	public String execute() throws Exception {
		UserInterface ui = new UserInterfaceImplement();
		User u = new User(id, userName, password);
		boolean res = ui.register(u);
		if (res) return "success";
		else return "fail";
	}

	@Override
	public void validate() {
		if (id < 1 || id >= 100000000) {
			this.addFieldError("id", "ID不合法，应在1-99999999之间");
		}
		if (userName == null || userName.isEmpty()) {
			this.addFieldError("userName", "用户名为空");
		} else if (!Pattern.matches("\\w{6,16}?", userName)) {
			this.addFieldError("userName", "用户名不合法，应为6-16位的大小写字母、数字、下划线任意组合");
		}
		if (password == null || password.isEmpty()) {
			this.addFieldError("password", "密码为空");
		} else if (!Pattern.matches("\\w{6,16}?", password)) {
			this.addFieldError("password", "密码不合法，应为6-16位的大小写字母、数字、下划线任意组合");
		}
		if (repeatPassword == null || repeatPassword.isEmpty()) {
			this.addFieldError("repeatPassword", "重复密码为空");
		} else if (!Pattern.matches("\\w{6,16}?", repeatPassword)) {
			this.addFieldError("repeatPassword", "重复密码不合法，应为6-16位的大小写字母、数字、下划线任意组合");
		}
		if (!password.equals(repeatPassword)) {
			this.addFieldError("repeatPassword", "重复密码与密码不符");
		}
	}
}
