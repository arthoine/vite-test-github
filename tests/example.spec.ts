import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.setViewportSize({width: 560, height: 800});

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title mobile', async ({ page }) => {
  await page.setViewportSize({width: 560, height: 500});
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('https://www.mydigitalschool.com/bachelor-developpeur-digital-web');
  await page.getByRole('button', { name: 'Avec plaisir' }).click();
  await page.getByRole('link', { name: 'Parler à un conseiller' }).click();
  await page.getByLabel('École envisagée').selectOption('457');
  await page.getByPlaceholder('Prénom *').click();
  await page.getByPlaceholder('Prénom *').fill('Enzo');
  await page.getByPlaceholder('Nom *', { exact: true }).click();
  await page.getByPlaceholder('Nom *', { exact: true }).fill('Enzo');
  await page.getByPlaceholder('Téléphone *').click();
  await page.getByPlaceholder('Téléphone *').fill('+33 0678787878');
  await page.getByPlaceholder('Email *').click();
  await page.getByPlaceholder('Email *').fill('aze@aze.fr');
  await page.getByLabel('Pour valider le formulaire,').check();
  await page.getByRole('button', { name: 'Etre appelé' }).click();
  await expect(page.locator('#block-mds-content')).toContainText('Confirmation demande de rappel');
  await page.getByRole('link', { name: 'Retour à l\'accueil' }).click();
});