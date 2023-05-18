import BasePage from "./BasePage";

class loginPage {
    //
    static get url() {
        return "https://www.saucedemo.com/"
    }
    static visit() {
        cy.visit(this.url);
    }
    static get usernameField() {
        return cy.get('[data-test="username"]');
    }
    static get passwordField() {
        return cy.get('[data-test="password"]');
    }
    static get loginButton() {
        return  cy.get('[data-test="login-button"]');
    }
    static get erroMessage() {
        return cy.get('[data-test="error"]'); 
    }
    static logIntoPage(username,password){
        this.usernameField.type(username);
        this.passwordField.type(password);
        this.loginButton.click();
    }
}
export default loginPage;