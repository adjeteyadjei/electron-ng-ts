interface ILoginParams {
	username: string
	password: string
	rememberMe: boolean
}

interface IResponse{
	data: any
	success: boolean
	message: string
	count: number
}

interface IUser{
	username: string
	role: string
	privileges: Array<string>
}


export {ILoginParams, IResponse, IUser}