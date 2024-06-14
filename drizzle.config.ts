import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
// import path from "path";

// const result = dotenv.config({ path: path.resolve(__dirname, ".env.local") });
// if (result.error) {
//   throw result.error; // This will show you if there's an error loading the .env file
// }
dotenv.config({ path: ".env.local" });
// console.log("Loaded POSTGRES_URL:", process.env.NEXT_PUBLIC_POSTGRES_URL); // This should display the URL

export default {
  schema: "./server/schema.ts",
  out: "./server/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_POSTGRES_URL!,
  },
} satisfies Config;
