// @ts-check

// run npx playwright test
// these tests don't work yet.
//  I assume there is something to be set up more in the playwright.config and package.json

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Cyber Security App/);
});

test("No data page", async ({ page }) => {
  await page.goto("/");

  // Expects page to have a heading with the name of Detections.
  await expect(page.getByRole("heading", { name: "Detections" })).toBeVisible();
});
