# JSON-LD Schema Validation Guide

This guide explains how to validate the JSON-LD schema implementation on the AIO Consulting website using Google's Rich Results Test tool. Proper validation ensures that search engines and AI assistants can correctly interpret our structured data.

## Why Validate Schema?

Validating your schema is crucial to ensure:
1. The schema is properly formatted and has no syntax errors
2. All required properties are included
3. The schema follows Schema.org standards
4. Google and other search engines can correctly interpret the data
5. The schema qualifies for rich results in search listings

## Validation Tools

### Google Rich Results Test

The primary tool for validating schema is Google's Rich Results Test:

1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter the URL of the page you want to test, or paste the JSON-LD code directly
3. Click "Test URL" or "Test Code"
4. Review the results for errors, warnings, and eligibility for rich results

### Schema.org Validator

For additional validation, you can use the Schema.org Validator:

1. Go to [Schema.org Validator](https://validator.schema.org/)
2. Paste your JSON-LD code
3. Click "Validate"
4. Review the results for compliance with Schema.org standards

## Step-by-Step Validation Process

### 1. Prepare for Validation

Before testing, ensure:
- Your website is deployed and accessible
- The pages containing JSON-LD are live
- You have access to the source code if fixes are needed

### 2. Test Service Pages

Test each service page individually:

- `/leistungen/ki-content-marketing`
- `/leistungen/ki-seo`
- `/leistungen/llm-optimierung`
- `/leistungen/prompt-engineering`

### 3. Validate FAQ Schema

Special attention should be paid to FAQ schema, as it's eligible for rich results:

1. Test each page with FAQ schema
2. Ensure all questions have complete answers
3. Verify that the FAQ schema is properly nested and formatted

### 4. Interpret Test Results

When reviewing results, look for:

**Errors**: Must be fixed immediately as they indicate critical issues.
- Common errors include missing required properties or invalid values

**Warnings**: Should be addressed but won't prevent the schema from being understood.
- Common warnings include recommended properties that are missing

**Eligibility**: Check which rich results your pages are eligible for.
- Service pages should be eligible for service-specific rich results
- FAQ sections should be eligible for FAQ rich results

### 5. Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Missing required property | Add the missing property to the schema |
| Invalid URL format | Ensure URLs include the full path with https:// |
| Duplicate IDs | Make sure each @id is unique across the site |
| Invalid price format | Format prices as strings with decimal points (e.g., "100.00") |
| Incorrect nesting | Check the structure against Schema.org documentation |

### 6. Post-Validation Actions

After successful validation:

1. **Monitor**: Regularly check Google Search Console for structured data status
2. **Update**: When content changes, revalidate the schema
3. **Improve**: Add additional schema types as appropriate
4. **Track**: Monitor the appearance of rich results in search listings

## Example Validation Workflow

1. Deploy the updated website
2. Go to Google Rich Results Test
3. Enter the URL: `https://www.aio-consulting.de/leistungen/ki-content-marketing`
4. Review the results
5. If errors are found, update the code in `/app/leistungen/ki-content-marketing/page.tsx`
6. Redeploy and retest
7. Repeat for all service pages

## Troubleshooting

If validation fails:

1. **Check source code**: Ensure the JSON-LD is properly rendered in the page source
2. **Verify syntax**: Check for missing commas, brackets, or quotes
3. **Validate nested objects**: Ensure all nested objects are properly formatted
4. **Check for dynamic content**: If using dynamic data, ensure it's properly escaped
5. **Compare with examples**: Reference working examples from Schema.org

## Resources

- [Google's Structured Data Guidelines](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
- [Schema.org Documentation](https://schema.org/docs/schemas.html)
- [Google Search Console](https://search.google.com/search-console) (for monitoring live results)
- [Google's Rich Results Documentation](https://developers.google.com/search/docs/advanced/structured-data/rich-results)