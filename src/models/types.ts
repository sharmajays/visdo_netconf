type staticIp = {
    con_name: string
    static_ip: ipAddress,
    subnet_mask: number,
    gateway_ip: ipAddress
}

type ipAddress = {
    network_id_1: number,
    network_id_2: number,
    network_id_3: number,
    host_id: number
}

type resp = {
    msg: string
    data: any
    status: number
}

type terminalExecReturns = {
    code: string,
    value: any
}

export { staticIp, resp, ipAddress, terminalExecReturns }