import { staticIp } from "../models/types"
import execute from "../service/terminalExec"
import { prepareCommandForSetStaticIp, conupCommand } from "../modules/staticIp/prepareSetCommand"

const setStaticIpBusiness = async(payload: staticIp) => {
    try{
        const command = prepareCommandForSetStaticIp(payload, 'end0')
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