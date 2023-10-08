import execute from "../service/terminalExec"
import { conupCommand } from "../modules/staticIp/prepareSetCommand"

const activateConBusiness = async(conName: string) => {
    try{
        const conup_command = conupCommand(conName)
        const conup = await execute(conup_command)
        return {
	    status: 200,
            msg: `CONNECTION SUCCESS ${conName}`
            data: {}
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

export { activateConBusiness }