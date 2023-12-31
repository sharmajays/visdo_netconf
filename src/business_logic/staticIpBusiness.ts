import { staticIp } from "../models/types"
import execute from "../service/terminalExec"
import { prepareCommandForSetStaticIp } from "../modules/staticIp/prepareSetCommand"
import { interfaceName } from "../modules/staticIp/prepareSetCommand"

const setStaticIpBusiness = async(payload: staticIp) => {
    try{
        let interfaceCon = await execute(interfaceName)
        typeof(interfaceCon)==="string" ? interfaceCon.replace(/[\r\n]+/gm, ""): ""
        const command = prepareCommandForSetStaticIp(payload, interfaceCon)
        const setIp = await execute(command)
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
        return {
            status: 500,
            msg: "FAILED IN BUSINESS LOGIC",
            data: err
        }
    }
}

export { setStaticIpBusiness }
