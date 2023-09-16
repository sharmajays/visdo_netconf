import { Router } from 'express'
import { staticIpController } from '../controller/staticIpController'
import { dhcpController } from '../controller/dhcpController'
import { staticIp, resp } from '../models/types'
const staticIpRouter = Router()

staticIpRouter.post('/setStaticIp',(req,res,next)=>{
    try{
        const body: staticIp = req?.body
        const result:resp = staticIpController(body)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
})

staticIpRouter.post('/setDhcp',(req,res,next)=>{
    try{
        const conName: string = req?.body.conName
        const result:resp = dhcpController(conName)
        res.json(result)
    }
    catch(err){
        res.json(err)
    }
})

export { staticIpRouter }