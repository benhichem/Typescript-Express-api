/** @format */

console.log("[+] Starting The Script Mate");
import Log from "./middlewares/Log";
import Locals from "./providers/locals";
import App from "./providers/App";

App.ClearConsole();
App.LoadConfiguration();
App.LoadServer();
