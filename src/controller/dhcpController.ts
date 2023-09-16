import { dhcpBusiness } from "../business_logic/dhcpBusiness"

const dhcpController = (conName: string) =>{
    try{
        return dhcpBusiness(conName)
    }
    catch(err){
        return {
            status: 500,
            msg: "FAILED IN CONTROLLER LOGIC",
            data: err
        }
    }
}

export { dhcpController }

