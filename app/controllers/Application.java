package controllers;

import play.*;
import play.mvc.*;

import java.util.*;

public class Application extends Controller {

    /**Renders index.html view*/
    public static void index() {
        //Remove previous user from session if available
        session.current().remove("user");

        render();
    }
    
    
}