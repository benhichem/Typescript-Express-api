import * as express from "express"
import Locals from "./locals"
import Routes from "./Routes"
class Express {
    public express : express.Application

    constructor(){
        this.express = express()
        this.mountEnv()
        this.mountRotes()
    }

    private mountEnv():void{
        this.express = Locals.init(this.express)
    }
    private mountRotes():void{
        console.log('Routes Mounted')
        this.express = Routes.mountApi(this.express)
    }
    public init():any{
        const port: number = Locals.config().PORT
        this.express.listen(port,()=>{
            return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`)
        }).on("error",(_err)=>{return console.log('Error: ', _err.message)})
    }
}

export default new Express()