import { activateConBusiness } from "../business_logic/activateConBusiness"

const activateConController = async(conName: string) =>{
    try{
        return await activateConBusiness(conName)
    }
    catch(err){
        return {
            status: 500,
            msg: "FAILED IN CONTROLLER LOGIC",
            data: err
        }
    }
}

export { activateConController }

