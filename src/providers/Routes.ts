import { Application } from "express";
import apiroutes from "../routes/Api"
import Locals from "./locals";
import Log from "../middlewares/Log";
class Routes {
    public mountApi(_express:Application):Application{
        Log.info('Routes :: Mounting API Routes...')
        return _express.use(`/${Locals.config().apiPrefix}`,apiroutes)
    }
}

export default new Routes