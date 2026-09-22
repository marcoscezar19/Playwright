import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/login.page";

let loginPage: LoginPage;

test.beforeEach(async({page}) =>{
    loginPage = new LoginPage(page);
    await loginPage.acessarSite();
})