import { fetchConNamesBusiness } from "../business_logic/fetchConNamesBusiness"

const fetchConNamesController = async() =>{
    try{
        return await fetchConNamesBusiness()
    }
    catch(err){
        return {
            status: 500,
            msg: "FAILED IN CONTROLLER LOGIC",
            data: err
        }
    }
}

export { fetchConNamesController }

