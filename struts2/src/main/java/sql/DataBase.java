package sql;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Objects;
import java.util.Properties;

public class DataBase {
	public Connection openConnection() {
		InputStream inStr = DataBase.class.getClassLoader().getResourceAsStream("jdbc.properties");
		Properties prop = new Properties();
		Connection conn = null;
		try {
			prop.load(inStr);
			String user = prop.getProperty("user");
			String password = prop.getProperty("password");
			String url = prop.getProperty("url");
			String driverClass = prop.getProperty("driverClass");
			Class.forName(driverClass);
			conn = DriverManager.getConnection(url, user, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}

	public void closeConnection(Connection conn) {
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
