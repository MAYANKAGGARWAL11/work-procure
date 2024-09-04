
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:lRLvGNoV2Bm9@ep-jolly-bush-a541exnf.us-east-2.aws.neon.tech/pocera?sslmode=require',
    }
  };