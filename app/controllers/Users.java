package controllers;

import model.general.User;
import model.service.MockUserService;
import play.data.validation.Validation;
import play.mvc.Controller;
import play.mvc.Scope;

public class Users extends Controller {

	public static void dashboard() {
		render();
	}

	/**
	 * @param username
	 *            : of a user trying to login
	 * @param password
	 *            : of a user trying to login
	 */
	public static void login(String username, String password) {
		// Check if all information has been filled in
		Validation.required("username", username).message(
				"Please fill in a username");
		Validation.required("password", password).message(
				"Please fill in a password");

		// Return to index view if validation fails
		if (Validation.hasErrors()) {
			params.flash();
			Validation.keep();
			Application.index();
		}

		// todo: write a final version of this
		MockUserService userService = new MockUserService();
		User user = userService.login(username, password);

		if (user == null) {
			Validation.addError("error", "Username or password is incorrect.");
			params.flash();
			Validation.keep();
			Application.index();
		}

		Scope.Session.current().put("user", user.getUsername());

		dashboard();
	}

}
