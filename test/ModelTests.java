import model.general.User;
import model.service.MockUserService;

import org.junit.Test;

import play.test.FunctionalTest;


public class ModelTests extends FunctionalTest {
	
    @Test
    public void testCreateUser() {
    	User user = new User(0, "Guðrún Hauksdóttir", "gudrunht", "1234", "gudrunht@ru.is");
    	assertNotNull(user);
    	assertEquals(0, user.getId());
    	assertEquals("Guðrún Hauksdóttir", user.getName());
    	assertEquals("gudrunht", user.getUsername());
    	assertEquals("1234", user.getPassword());
    	assertEquals("gudrunht@ru.is", user.getEmail());
   
    }

}
