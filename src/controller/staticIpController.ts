import { staticIp } from "../models/types"
import { setStaticIpBusiness } from "../business_logic/staticIpBusiness"

const staticIpController = (payload: staticIp) =>{
    try{
        return setStaticIpBusiness(payload)
    }
    catch(err){
        return {
            status: 500,
            msg: "FAILED IN CONTROLLER LOGIC",
            data: err
        }
    }
}

export { staticIpController }

