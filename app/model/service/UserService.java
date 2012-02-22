package model.service;

import model.data.UserDataGateway;
import model.general.User;

public class UserService {
	
    public User login(String username, String password) {
        
    	UserDataGateway usg = new UserDataGateway();
    	User user = usg.getUserByUsername(username,password	);     
        if (user == null)
            return null;
        if (!user.getPassword().equals(password))
            return null;
        return user;
    }

}
