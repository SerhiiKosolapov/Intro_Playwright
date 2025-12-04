class GaragePage {
  constructor(page) {
    this.page = page;
    this.addCarButton = page.getByRole('button', { name: 'Add car' });
  }

  async goto() {
    await this.page.goto('/panel/garage');
  }

  async isLoaded() {
    return this.addCarButton.isVisible();
  }
}

module.exports = { GaragePage };