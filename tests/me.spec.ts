import { test, expect } from '@playwright/test';

test('test formulaire MDS', async ({ page }) => {
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


test('test navigation page rust', async ({ page }) => {
  await page.goto('https://rust.fandom.com/fr/wiki/Commande_pour_le_serveur');
  await page.getByText('ACCEPT ALL').click();
  await expect(page.getByRole('cell', { name: 'global.ent unlock' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'nametags.enabled' })).toBeVisible();
  await page.locator('.fandom-community-header > .fandom-community-header__local-navigation > .wds-tabs > li:nth-child(2) > .wds-tabs__tab-label').click();
  await page.getByRole('link', { name: 'faire une recherche sur ce' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('armes');
  await page.getByRole('button', { name: 'Rechercher' }).click();
});


test('test lapin', async ({ page }) => {
  await page.goto('https://www.jardiland.com/');
  await page.getByLabel('Accepter les cookies').click();
  await page.getByRole('link', { name: 'Mon panier' }).click();
  await expect(page.getByRole('heading')).toContainText('Votre panier est vide !');
  await page.getByLabel('search').click();
  await page.getByLabel('search').fill('lapin');
  await page.getByLabel('search').press('Enter');
});

test('test dofus book', async ({ page }) => {
  await page.goto('https://www.dofusbook.net/fr/');
  await page.getByRole('link', { name: 'Notre Discord' }).click();
  await page.getByRole('button', { name: 'Continuer vers Discord' }).click();
  await page.getByRole('button', { name: 'Continuer vers Discord' }).click();
});