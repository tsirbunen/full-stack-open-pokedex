/* eslint-disable no-undef */
const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    // The base url is defined in the config file
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('one can navigate to the page of a particular Pokemon', async ({ page }) => {
    // The base url is defined in the config file
    await page.goto('')
    await page.click('text=ivysaur')
    await expect(page.getByText('Chlorophyll')).toBeVisible()
  })
})
