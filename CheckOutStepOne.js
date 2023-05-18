import BasePage from "./BasePage";

class CheckOutStepOne extends BasePage {
    static get url() {
        return "/cart.html";
    }
    static get ifChecktrue() {
        return cy.get(".title");
    }
    static get firstName() {
        return cy.get('[data-test="firstName"]');
    }
    static get lastName() {
        return cy.get('[data-test="lastName"]');
    }
    static get zipCode() {
        return cy.get('[data-test="postalCode"]');
    }
    static putInfo(name,lname,zip){
        this.firstName.type(name);
        this.lastName.type(lname);
        this.zipCode.type(zip);
    }
    static get isContinueVisible() {
        return cy.get('[id="continue"]');
    }



}

export default CheckOutStepOne;