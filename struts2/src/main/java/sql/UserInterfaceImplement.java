package sql;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserInterfaceImplement implements UserInterface {
	public boolean register(User usr) {
		DataBase db = new DataBase();
		Connection conn = db.openConnection();
		String sql = "insert into User(id,userName,password) values(?,?,?)";
		PreparedStatement stat = null;
		try {
			stat = conn.prepareStatement(sql);
			stat.setInt(1, usr.getId());
			stat.setString(2, usr.getUserName());
			stat.setString(3, usr.getPassword());
			stat.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		} finally {
			try {
				assert stat != null;
				stat.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
			db.closeConnection(conn);
		}
		return true;
	}

	public boolean check(User usr) {
		DataBase db = new DataBase();
		Connection conn = db.openConnection();
		String sql = "select * from User where id=? and userName=? and password=?";
		try {
			PreparedStatement stat = conn.prepareStatement(sql);
			stat.setInt(1, usr.getId());
			stat.setString(2, usr.getUserName());
			stat.setString(3, usr.getPassword());
			ResultSet rs = stat.executeQuery();
			return rs.next();
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public User login(String userName, String password) {
		DataBase db = new DataBase();
		Connection conn = db.openConnection();
		String sql = "select * from User where userName=? and password=?";
		PreparedStatement stat = null;
		User u = null;
		try {
			stat = conn.prepareStatement(sql);
			stat.setString(1, userName);
			stat.setString(2, password);
			ResultSet rs = stat.executeQuery();
			if (rs.next()) {
				u = new User();
				u.setId(rs.getInt("id"));
				u.setUserName(userName);
				u.setPassword(password);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			try {
				assert stat != null;
				stat.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
			db.closeConnection(conn);
		}
		return u;
	}
}