import { Router } from 'express'
import { staticIpController } from '../controller/staticIpController'
import { activateConController } from '../controller/activateConController'
import { fetchConNamesController } from '../controller/fetchConNamesController'
import { staticIp, resp } from '../models/types'
const staticIpRouter = Router()

staticIpRouter.post('/setStaticIp',async(req,res,next)=>{
    try{
        const body: staticIp = req?.body
        const result:resp = await staticIpController(body)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
})

staticIpRouter.post('/activateCon',async(req,res,next)=>{
    try{
        const conName: string = req?.body?.conName
        const result:resp = await activateConController(conName)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
})

staticIpRouter.get('/fetchConNames',async(req,res,next)=>{
    try{
        const result:resp = await fetchConNamesController()
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
})

export { staticIpRouter }