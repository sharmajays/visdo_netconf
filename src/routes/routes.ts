import { Router } from 'express'
import { staticIpController } from '../controller/staticIpController'
import { dhcpController } from '../controller/dhcpController'
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

staticIpRouter.post('/setDhcp',async(req,res,next)=>{
    try{
        const conName: string = req?.body.conName
        const result:resp = await dhcpController(conName)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
})

export { staticIpRouter }