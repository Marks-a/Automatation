//const { type } = require("cypress/types/jquery");
//const { default: loginPage } = require("../../pageObjects/Login.page");

import HomePage from "../../pageObjects/Home.page";
import loginPage from "../../pageObjects/Login.page";
import CheckOutStepOne from "../../pageObjects/CheckOutStepOne";
import CheckOutStepTwo from "../../pageObjects/CheckOutStepTwo";
import CheckoutFinal from "../../pageObjects/CheckoutFinal";
describe("Saucedemo", () => {
    beforeEach(() => {
     // cy.visit("https://www.saucedemo.com/");
     loginPage.visit();
    });
    //it.skip(....)..  or it.only(...)
    it.skip("Login scenario", () => {
    //cy.get('[data-test="username"]').type("standard_user");
      loginPage.usernameField.type("standard_user");
     // cy.get('[data-test="password"]').type("secret_sauce");
      loginPage.passwordField.type("secret_sauce");
      loginPage.loginButton.should("be.visible");
      loginPage.loginButton.click();
      loginPage.loginButton.should("not.exist");
      // cy.get('[data-test="login-button"]').click();
      // cy.get('[data-test="login-button"]').should("not.exist");
    });


    it.skip("2 Login scenario - negative case", () =>{
      loginPage.usernameField.type("standard_user");
      loginPage.passwordField.type("xxxx");
      loginPage.loginButton.click();
      loginPage.erroMessage.should(
        	"have.text","Epic sadface: Username and password do not match any user in this service"
      );
    }) 
    it.skip("3 Logout scenario", () =>{
      loginPage.usernameField.type("standard_user");
      loginPage.passwordField.type("secret_sauce");
      loginPage.loginButton.click();
      HomePage.stackIcon.click();
      HomePage.logoutButton.should("be.visible");
      HomePage.logoutButton.click();
        	
    });
    it.skip("Login buy comsetics scenario", () =>{
      loginPage.usernameField.type("standard_user");
      loginPage.passwordField.type("secret_sauce");
      loginPage.loginButton.click();
      HomePage.addToCartSauceLabsBackpack.click();
      HomePage.SauceLabOnesieAddCartButton.click();
      HomePage.ShopingCartBadge.should("have.text","2");
        	
    });
    it.skip("Login buy comsetics scenario V2", () =>{
      loginPage.logIntoPage("standard_user","secret_sauce");
      HomePage.addToCartSauceLabsBackpack.click();
      HomePage.SauceLabOnesieAddCartButton.click();
      HomePage.ShopingCartBadge.should("have.text","2");
      HomePage.removeButton.click(); 	
      HomePage.ShopingCartBadge.should("have.text","1");
    });


    it.skip("Open specific item,and validate title", () =>{
      loginPage.logIntoPage("standard_user","secret_sauce");
    //  HomePage.clickOnItem.click();
      HomePage.clickOnItemNanesArray.contains('Sauce Labs Backpack').click();
     // HomePage.validateItem.should("be.visible");
     HomePage.validateItem.should("have.text","Sauce Labs Backpack");
    });
    
    it("Open specific item,and validate title", () =>{
      loginPage.logIntoPage("standard_user","secret_sauce");
      HomePage.addToCartSauceLabsBackpack.click();
      HomePage.SauceLabOnesieAddCartButton.click();
      HomePage.ShopingCartBadge.click();
      HomePage.validateCart.should("have.text","Your Cart");
      HomePage.validItemInCart.contains("Sauce Labs Backpack");
      HomePage.validItemInCart.contains("Sauce Labs Onesie");
      HomePage.checkoutButton.click();
      CheckOutStepOne.ifChecktrue.contains("Checkout: Your Information");
      CheckOutStepOne.putInfo("Marks","A","22842");
      CheckOutStepOne.isContinueVisible.should("be.visible");
      CheckOutStepOne.isContinueVisible.click();
      CheckOutStepTwo.totalPriceVisible.contains("41.02");
      CheckOutStepTwo.finishButton.should("be.visible");
      CheckOutStepTwo.finishButton.click();
      CheckoutFinal.validCheckout.should("have.text","Thank you for your order!");

    })

    }) 

  