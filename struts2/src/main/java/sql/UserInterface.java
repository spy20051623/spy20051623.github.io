package sql;

public interface UserInterface {
	boolean register(User usr);

	boolean check(User usr);

	User login(String userName, String password);
}
