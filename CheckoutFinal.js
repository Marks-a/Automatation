import BasePage from "./BasePage";

class CheckoutFinal extends BasePage {
    static get url() {
        return "/checkout-step-two.html";
    }
    static get validCheckout(){
        return cy.get(".complete-header");
    }


}
    export default CheckoutFinal;