import { terminalExec } from "../service/terminalExec"
import { conupCommand } from "../modules/staticIp/prepareSetCommand"

const dhcpBusiness = (conName: string) => {
    try{
        const conup_command = conupCommand(conName)
            const conup = terminalExec(conup_command)
            if(conup.code == "SUCCESS"){
                return {
                    status: 200,
                    msg: "SUCCESS",
                    data: { conup_command }
                }
            }
            else{
                return {
                    status: 500,
                    msg: "FAILED TO ACTIVATE DHCP",
                    data: conup
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

export { dhcpBusiness }