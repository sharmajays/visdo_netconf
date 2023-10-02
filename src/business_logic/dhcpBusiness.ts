import execute from "../service/terminalExec"
import { conupCommand } from "../modules/staticIp/prepareSetCommand"

const dhcpBusiness = async(conName: string) => {
    try{
        const conup_command = conupCommand(conName)
            const conup = await execute(conup_command)
            if(conup){
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