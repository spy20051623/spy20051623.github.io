package sql;

import java.sql.Connection;

public class Main {
	public static void main(String[] args) {
		DataBase db = new DataBase();
		Connection conn = db.openConnection();
		System.out.println(conn);
		UserInterface Dao = new UserInterfaceImplement();
		User usr = new User(1, "zhangsan", "123456");
//		System.out.println(Dao.register(usr));
		System.out.println(Dao.check(usr));
		User log = Dao.login("zhangsan", "123456");
//		System.out.println(log);
	}
}
