import { staticIp } from "../models/types"
import execute from "../service/terminalExec"
import { prepareCommandForSetStaticIp, conupCommand } from "../modules/staticIp/prepareSetCommand"
import { interfaceName } from "../modules/staticIp/prepareSetCommand"

const setStaticIpBusiness = async(payload: staticIp) => {
    try{
                let interfaceCon = await execute(interfaceName)
typeof(interfaceCon)==="string" ? interfaceCon.replace(/[\r\n]+/gm, ""): ""
console.log("this is interface: ", interfaceCon)
        const command = prepareCommandForSetStaticIp(payload, interfaceCon)
console.log("this is command: ", command)
        const setIp = await execute(command)
console.log("after execution: ", setIp)
        if(setIp){
            return {
                status: 200,
                msg: "SUCCESS",
                data: { command, setIp }
            }
        }
        else{
            return {
                status: 500,
                msg: "FAILED TO CREATE STATIC IP",
                data: setIp
            }
        }    
    }
    catch(err){
console.log("its errr bro: ", err)
        return {
            status: 500,
            msg: "FAILED IN BUSINESS LOGIC",
            data: err
        }
    }
}

export { setStaticIpBusiness }
