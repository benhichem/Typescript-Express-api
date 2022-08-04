/** @format */

import { Application } from "express";
import * as dotenv from "dotenv";
import * as path from "path";
class Locals {
  public static config(): any {
    dotenv.config({ path: path.join(__dirname, "../../.env") });
    const AppUrl = process.env.APPURL || `http://localhost:${process.env.PORT}`;
    const PORT = process.env.PORT || 4000;
    const appSecret = process.env.APPSECRET || "Am loving This so far";
    const mongooseURL = process.env.MONGOOSE_URL;

    const name = process.env.APP_NAME || "NodeTS Dashboard";
    const keywords = process.env.APP_KEYWORDS || "somethings";
    const year = new Date().getFullYear();
    const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
    const company = process.env.COMPANY_NAME || "GeekyAnts";
    const description =
      process.env.APP_DESCRIPTION || "Here goes the app description";

    const isCORSEnabled = process.env.CORS_ENABLED || true;
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
    const apiPrefix = process.env.API_PREFIX || "api/v1";

    const logDays = process.env.LOG_DAYS || 10;
    return {
      appSecret,
      apiPrefix,
      company,
      copyright,
      description,
      isCORSEnabled,
      jwtExpiresIn,
      keywords,
      logDays,
      name,
      PORT,
      AppUrl,
      mongooseURL,
    };
  }
  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
