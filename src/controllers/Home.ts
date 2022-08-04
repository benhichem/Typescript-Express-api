import Locals from "../providers/locals";

class Home{
    public static index(req:any, res:any, next:any):any{
        return res.json({
            message:Locals.config().name
        })   
    }
}

export default Home;