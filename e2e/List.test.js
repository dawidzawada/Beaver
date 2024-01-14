/* eslint-env detox/detox, mocha */
describe('List', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should open on List Screen and show "No codes added" label', async () => {
    await expect(element(by.id('list-screen'))).toBeVisible();
    await expect(element(by.id('no-codes'))).toBeVisible();
  });

  it('tapping "+" button should show Scan and "Add new" buttons', async () => {
    const menuBtn = element(by.id('add-menu-btn'));

    await menuBtn.tap();

    await expect(element(by.id('scan-btn'))).toBeVisible();
    await expect(element(by.id('add-new-btn'))).toBeVisible();
  });
});
