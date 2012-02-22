package model.data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import model.general.User;

public class UserDataGateway {

		private ArrayList<String> users;
		
		
		public UserDataGateway() {
			users = new ArrayList<String>();
			users.add("oddur09");
			users.add("gudrunht");
		}


		/*Mock response*/
	    public User getUserByUsername(String username, String password) {
			
	    User user = new User(username, password);	
	    if(users.contains(username))
					return user;
		return null;
	    	
	    }

	 
}

