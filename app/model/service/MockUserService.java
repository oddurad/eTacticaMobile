package model.service;

import java.util.ArrayList;

import model.general.User;

public class MockUserService {

	//List of mock users
	private ArrayList<String> users;
	
	//Add some users that can login
	public MockUserService() {
		users = new ArrayList<String>();
		users.add("oddur09");
		users.add("gudrunht");
		users.add("runarr09");
	}
	
	/**@return: a user object containing login info for valid user, null for invalid user
	 * @param username: username of a user trying to login
	 * @param password: password of a user trying to login (this is discarded in the mock test)*/
    public User login(String username, String password) {
        
	    User user = new User(username, password);	
	    
	    if(users.contains(username))
	    	return user;
	    
        return null;
    }
}
