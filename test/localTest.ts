import { handler } from "../src/index.js";

await handler({} as Parameters<typeof handler>[0]);
