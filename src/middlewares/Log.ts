import * as fs from "fs"
import * as path from "path"

class Log {
    public baseDir: string
    public fileName: string
    public linePrefic :string
    public today :Date = new Date()

    constructor(){
       let _dateString = `${this.today.getFullYear()}-${(this.today.getMonth() + 1)}-${this.today.getDate()}`;
		let _timeString = `${this.today.getHours()}:${this.today.getMinutes()}:${this.today.getSeconds()}`;
        this.baseDir =path.join(__dirname, "../../.logs")
        this.fileName = `${_dateString}.log`
        this.linePrefic=`[${_dateString} ${_timeString}]`
    }
    public info(_msg:string):void{
        this.addLog('INFO', _msg)
    }

    public warn (_msg:string):void{
        this.addLog("WARN", _msg)
    }
    
    public error (_msg:string):void{
        	// Line break and show the first line
		console.log('\x1b[31m%s\x1b[0m', '[ERROR] :: ' + _msg.split(/r?\n/)[0]);

		this.addLog('ERROR', _msg);
    }
    
    public custom (_filename: string, _string: string): void {
		this.addLog(_filename, _string);
	}

    private addLog(_kind:string, _msg:string):void{
        const _that = this
        _kind = _kind.toUpperCase()

        fs.open(`${_that.baseDir}${_that.fileName}`,'a',(_err,_fileDescriptor)=>{
            if(!_err && _fileDescriptor){
                fs.appendFile(_fileDescriptor,`${_that.linePrefic} [${_kind}] : ${_msg}\n`,(err)=>{
                    if(!err){
                        fs.close(_fileDescriptor,(_err)=>{
                            if(!_err){
                                return true
                            }else{
                                console.log('\x1b[31m%s\x1b[0m', 'Error closing log file that was being appended')
                            }
                        })
                    }else{
                        return console.log('\x1b[31m%s\x1b[0m', 'Error appending to the log file')
                    }
                })
            }else{
                return console.log('\x1b[31m%s\x1b[0m', 'Error cloudn\'t open the log file for appending');
            }
        })
    }
}
export default new Log