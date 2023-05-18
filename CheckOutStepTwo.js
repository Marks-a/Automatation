import BasePage from "./BasePage";

class CheckOutStepTwo extends BasePage {
    static get url() {
        return "/checkout-step-two.html";
    }
    static get totalPriceVisible() {
        return cy.get(".summary_info_label");
    }
    static get finishButton() {
        return cy.get('[id="finish"]');
    }



}
    export default CheckOutStepTwo;