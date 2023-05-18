import BasePage from "./BasePage";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get stackIcon() {
    return cy.get("#react-burger-menu-btn");
  }
  static get sideBar() {
    return cy.get('.bm-menu-wrap');
  }
  static get logoutButton() {
    return cy.get('#logout_sidebar_link');
  }
  static get addToCartSauceLabsBackpack() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
  static get SauceLabOnesieAddCartButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
  }
  static get ShopingCartBadge() {
    return cy.get(".shopping_cart_badge");
  }
  static get removeButton() {
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
}
static get clickOnItem(){
    return cy.get('#item_4_img_link');
}
static get clickOnItemNanesArray(){
    return cy.get('.inventory_item_name');
}
static get validateItem() {
   return cy.get(".inventory_details_name");
}
static get validateCart() {
    return cy.get(".header_secondary_container");
}
static get checkoutButton() {
    return cy.get(".checkout_button");
}
static get validItemInCart() {
    return cy.get(".inventory_item_name");
}


}
export default HomePage;