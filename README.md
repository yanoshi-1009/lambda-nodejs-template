# nodejs-template

A Node.js (TypeScript) template for AWS Lambda functions.

## Features

- Type-safe Lambda handler using **TypeScript**
- Fast bundling with **esbuild** outputting ESM format
- Pre-wired handler for `APIGatewayProxyEventV2`
- **pnpm** for package management
- **ESLint** + **Prettier** for code quality
- **Renovate** for automated dependency updates

## Requirements

- Node.js >= 24.0.0
- pnpm >= 10.0.0

## Project Structure

```text
.
├── src/
│   ├── index.ts          # Lambda handler entry point
│   └── config/
│       └── constant.ts   # Constants
├── common/               # Shared utilities (optional)
├── test/
│   └── localTest.ts      # Local invocation script
├── scripts/
│   └── esbuild/
│       └── build.mjs     # esbuild config
├── dist/                 # Build output (auto-generated)
│   ├── index.mjs
│   └── build.zip         # ZIP to upload to Lambda
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

## Setup

```bash
git clone https://github.com/yanoshi-1009/nodejs-template.git my-function
cd my-function
pnpm install
```

## Development

Implement your Lambda logic in `src/index.ts`.

```typescript
export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  // Add your logic here
  return {
    statusCode: 200,
    body: "Success"
  };
};
```

Define any constants in `src/config/constant.ts`.

## Build

```bash
pnpm build
```

The following files will be generated:

| File             | Description                  |
| ---------------- | ---------------------------- |
| `dist/index.mjs` | Bundled Lambda function      |
| `dist/build.zip` | ZIP file to upload to Lambda |

## Deploy

Upload `dist/build.zip` to AWS Lambda.

**Lambda configuration:**

| Setting | Value           |
| ------- | --------------- |
| Runtime | Node.js 24.x    |
| Handler | `index.handler` |

Using the AWS CLI:

```bash
aws lambda update-function-code \
  --function-name <function-name> \
  --zip-file fileb://dist/build.zip
```

## Local Testing

Use `test/localTest.ts` to invoke the handler locally with Node.js `--experimental-strip-types` (available from Node.js 22.6+).

```bash
node --experimental-strip-types test/localTest.ts
```

Edit the event data passed to the handler directly in `test/localTest.ts`.

## Lint & Format

```bash
# ESLint
pnpm eslint src/

# Prettier (check only)
pnpm prettier --check src/

# Prettier (auto-fix)
pnpm prettier --write src/
```

## Optional: Browser Automation (Playwright)

If your Lambda function requires browser automation or web scraping, install the following packages:

```bash
pnpm add @playwright/test playwright-core playwright-aws-lambda
```

| Package                 | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `@playwright/test`      | Playwright test runner and API                       |
| `playwright-core`       | Playwright core browser automation library           |
| `playwright-aws-lambda` | Playwright helper for running Chromium on AWS Lambda |

## License

MIT
