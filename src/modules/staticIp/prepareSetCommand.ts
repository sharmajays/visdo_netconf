import { staticIp, ipAddress } from "../../models/types"

const makeIP = (ip: ipAddress) =>{
    return `${ip.network_id_1}.${ip.network_id_2}.${ip.network_id_3}.${ip.host_id}`
}

const prepareCommandForSetStaticIp = (payload: staticIp, interfaceName: unknown) =>{

    const static_ip = makeIP(payload.static_ip)
    const gateway_ip = makeIP(payload.gateway_ip)

    return `sudo nmcli connection add con-name ${payload?.con_name} ifname ${interfaceName} type ethernet ipv4.method manual ipv4.addresses ${static_ip}/${payload.subnet_mask} ipv4.gateway ${gateway_ip} ipv4.dns 8.8.8.8`
}

const conupCommand = (conName: string) =>{
    return `nmcli con up ${conName}`
}

const interfaceName = `nmcli device show | head -n 1 | awk '{print $2}' | tr -d '\n'`

const fetchConNamesCommand = "nmcli connection show | grep -E '\\s+ethernet\\s+' | awk '{print $1}'"
export { prepareCommandForSetStaticIp, conupCommand, fetchConNamesCommand, interfaceName }

