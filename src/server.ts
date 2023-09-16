import express, {Request, Response, Application} from 'express'
import { config } from 'dotenv'
import { staticIpRouter } from './routes/routes'
import bodyParser from 'body-parser'

config()

const port = process.env.PORT || 3000

const app:Application = express()

app.use(bodyParser())
app.use("/staticIp", staticIpRouter)

app.get("/",(req: Request, res:Response)=>{
    return res.send(200)
})

app.listen(port, ()=>{
    console.log(`good to go on port ${port}`)
})