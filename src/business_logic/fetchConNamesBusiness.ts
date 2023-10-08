import execute from "../service/terminalExec"
import { fetchConNamesCommand } from "../modules/staticIp/prepareSetCommand"

const fetchConNamesBusiness = async() => {
    try{
        const conNames = await execute(fetchConNamesCommand)
        if(conNames){
typeof(conNames)=='string' ? conNames.replace('\n', ',') : ''
            return {
                status: 200,
                msg: "SUCCESS",
                data: { conNames }
            }
        }
        else{
            return {
                status: 500,
                msg: "FAILED TO FETCH CON NAMES",
                data: conNames
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

export { fetchConNamesBusiness }
