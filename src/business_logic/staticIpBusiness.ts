import { staticIp } from "../models/types"
import { terminalExec } from "../service/terminalExec"
import { prepareCommandForSetStaticIp, conupCommand } from "../modules/staticIp/prepareSetCommand"

const setStaticIpBusiness = (payload: staticIp) => {
    try{
        const command = prepareCommandForSetStaticIp(payload, 'end0')
        const setIp = terminalExec(command)
        if(setIp?.code == "SUCCESS"){
            const conup_command = conupCommand(payload?.con_name)
            const conup = terminalExec(conup_command)
            if(conup.code == "SUCCESS"){
                return {
                    status: 200,
                    msg: "SUCCESS",
                    data: { command, conup_command }
                }
            }
            else{
                return {
                    status: 500,
                    msg: "FAILED TO ACTIVATE CONNECTION",
                    data: conup
                }
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