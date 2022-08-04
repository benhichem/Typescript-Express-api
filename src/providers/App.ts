import Log from "../middlewares/Log";
import Locals from "./locals";
import Express from "./Express";
import * as dotenv from "dotenv"
import * as path from "path"
class App{

    public ClearConsole():void{
        process.stdout.write('\x1B[2J\x1B[0f');
    }

    public LoadConfiguration():void{
        Log.info('Configuration :: Booting @ Master...');
        dotenv.config({ path: path.join(__dirname, '../../.env') });
    }

    public LoadServer():void{
        Log.info('server :: Booting @ Master')
        Express.init()
    }

      
  
}

export default new App