/* eslint-env detox/detox, mocha */

const tapAddNewInMenu = async () => {
  // Open menu and click on 'Add new' button
  await element(by.id('add-menu-btn')).tap();
  await element(by.id('add-new-btn')).tap();
};

describe('Adding New Code', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Tapping "Add New" button should open ChooseType screen, tapping option should move to AddEdit Screen ', async () => {
    await tapAddNewInMenu();
    await expect(element(by.id('choose-type'))).toBeVisible();

    // Click on QR code type
    await element(by.id('type-qrcode')).atIndex(0).tap();

    await expect(element(by.id('add-edit'))).toBeVisible();
  });

  it('Filling "Value" and "Title" should allow adding code', async () => {
    await tapAddNewInMenu();

    await element(by.id('type-qrcode')).atIndex(0).tap();

    await element(by.id('code-value')).typeText('http://mocky-url.com');
    await element(by.id('code-title')).typeText('Mocky Title');
    await element(by.id('add-edit-btn')).tap();
    await expect(element(by.id('code-list-item'))).toBeVisible();
  });
});
