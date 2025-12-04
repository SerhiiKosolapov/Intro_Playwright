const { expect } = require('@playwright/test');

class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.signInBtn = page.getByRole('button', { name: 'Sign In' });
    this.registrationBtn = page.getByRole('button', { name: 'Registration' });
    this.nameInput = page.locator('#signupName');
    this.lastNameInput = page.locator('#signupLastName');
    this.emailInput = page.locator('#signupEmail');
    this.passwordInput = page.locator('#signupPassword');
    this.repeatPasswordInput = page.locator('#signupRepeatPassword');
    this.registerBtn = page.getByRole('button', { name: 'Register' });
  }

  async open() {
    await this.page.goto('/');
    await this.signInBtn.click();
    await this.registrationBtn.click();
  }

  async fillForm({ name, lastName, email, password, repeatPassword }) {
    await this.nameInput.fill(name);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.repeatPasswordInput.fill(repeatPassword);
  }

  async submit() {
    await expect(this.registerBtn).toBeEnabled();
    await this.registerBtn.click();
  }
}

module.exports = { RegistrationPage };