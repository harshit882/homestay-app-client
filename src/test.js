import { test, expect } from "@playwright/test";

test("Registration", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator("svg").nth(1).click();
  await page.getByText("Sign Up").click();
  await page.locator("#name").click();
  await page.locator("#name").fill("Professor Dumbledore");
  await page.locator("#name").press("Tab");
  await page.locator("#email").fill("dumbledore@hogwarts.email");
  await page.locator("#email").press("Tab");
  await page.locator("#password").fill("123456");
  await page.getByRole("button", { name: "Continue" }).click();

  // Expect registration success message or navigate to the next page
  await expect(page).toHaveSelector(".registration-success-message");
});
