package web;

import sql.User;
import sql.UserInterface;
import sql.UserInterfaceImplement;

public class Login {
	private String userName;
	private String password;

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

	public String execute() {
		UserInterface ui = new UserInterfaceImplement();
		User u = ui.login(this.userName, this.password);
		if (u != null)
			return "success";
		else
			return "fail";
	}
}
