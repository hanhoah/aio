# Testing Checklist for Service Pages Implementation

This checklist provides a structured approach to verify the proper implementation of service pages, navigation, and structured data on the AIO Consulting website.

## Navigation Testing

- [ ] **Desktop Navigation:**
  - [ ] Hover over "Leistungen" to verify dropdown appears
  - [ ] Click "Alle Leistungen" to verify it leads to the services overview page
  - [ ] Click each service in the dropdown menu to verify it leads to the correct service page
  - [ ] Verify dropdown closes when moving mouse away

- [ ] **Mobile Navigation:**
  - [ ] Click hamburger menu to open mobile navigation
  - [ ] Click "Leistungen" to verify dropdown appears
  - [ ] Click each service in the dropdown to verify it leads to the correct service page
  - [ ] Verify navigation closes after clicking a link

## Service Pages Testing

- [ ] **Service Overview Page:**
  - [ ] Verify all service cards display correctly
  - [ ] Verify each "Mehr erfahren" link leads to the correct service page
  - [ ] Check responsiveness on different screen sizes

- [ ] **KI-Content-Marketing Page:**
  - [ ] Verify all content sections display correctly
  - [ ] Check that FAQ section displays all questions and answers
  - [ ] Test CTA button functionality
  - [ ] Verify responsive design

- [ ] **KI-SEO Page:**
  - [ ] Verify all content sections display correctly
  - [ ] Check that FAQ section displays all questions and answers
  - [ ] Test CTA button functionality
  - [ ] Verify responsive design

- [ ] **LLM-Optimierung Page:**
  - [ ] Verify all content sections display correctly
  - [ ] Check that FAQ section displays all questions and answers
  - [ ] Test CTA button functionality
  - [ ] Verify responsive design

- [ ] **Prompt-Engineering Page:**
  - [ ] Verify all content sections display correctly
  - [ ] Check that FAQ section displays all questions and answers
  - [ ] Test CTA button functionality
  - [ ] Verify responsive design

## Homepage Service Section

- [ ] Verify updated service cards display correctly
- [ ] Test each "Mehr erfahren" link leads to the correct service page
- [ ] Check responsiveness of service cards on different screen sizes

## Structured Data Verification

For each service page, verify the proper implementation of structured data:

1. Open the page in Chrome
2. Right-click and select "View Page Source"
3. Search for `application/ld+json` to find the structured data
4. Verify the following:

- [ ] **KI-Content-Marketing Page:**
  - [ ] Service schema is present and complete
  - [ ] FAQ schema is present with all questions and answers
  - [ ] No syntax errors in the JSON-LD

- [ ] **KI-SEO Page:**
  - [ ] Service schema is present and complete
  - [ ] FAQ schema is present with all questions and answers
  - [ ] No syntax errors in the JSON-LD

- [ ] **LLM-Optimierung Page:**
  - [ ] Service schema is present and complete
  - [ ] FAQ schema is present with all questions and answers
  - [ ] No syntax errors in the JSON-LD

- [ ] **Prompt-Engineering Page:**
  - [ ] Service schema is present and complete
  - [ ] FAQ schema is present with all questions and answers
  - [ ] No syntax errors in the JSON-LD

## Google Rich Results Test

For each service page, validate the structured data using Google's Rich Results Test:

1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter the URL of the deployed page
3. Verify the following:

- [ ] No errors are reported
- [ ] Service and FAQ schemas are detected
- [ ] The page is eligible for rich results

## Cross-Browser Testing

Verify the pages work correctly in different browsers:

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Performance Testing

- [ ] Check page load times for all service pages
- [ ] Verify no console errors
- [ ] Check for any layout shifts or rendering issues

## Final Checklist

- [ ] All links work correctly
- [ ] All structured data is valid
- [ ] Pages are responsive on all screen sizes
- [ ] Content is displayed correctly
- [ ] No visual or functional bugs

After completing this checklist, document any issues found and address them before the final deployment.