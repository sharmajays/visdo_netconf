import { exec, ExecException } from 'child_process';
import { terminalExecReturns } from "../models/types"

export const terminalExec = (command: string) =>{
	let result: terminalExecReturns = { code: "FAILED", value: ""}
	const abcd = exec(command, (error: ExecException | null, stdout: string, stderr: string) => {
		if (error) {
			result = { code: "ERROR", value: {...error} }
		}
		else if(stderr) {
			result = { code: "INVALID", value: stderr}
		}
		else{
			result = { code: "SUCCESS", value: stdout }
		}
	});
	console.log("its abcd: ",abcd)
	return result
}

exports = { terminalExec }