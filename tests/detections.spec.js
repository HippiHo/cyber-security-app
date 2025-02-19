// @ts-check

// npx playwright test

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
