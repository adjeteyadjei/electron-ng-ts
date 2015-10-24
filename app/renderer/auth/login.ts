import {IAuthService} from "../auth/auth_services"
import { ILoginParams } from "../models";
import {MessageBox} from "../helpers/message_box"

class LoginCtrl {
	isLoading: boolean

	static $inject = ["$state", "AuthService"]

	constructor(private $state: angular.ui.IStateService,
		private auth: IAuthService) { }

	login(params: ILoginParams) {
		this.isLoading = true
		this.auth.login(params).then((res) => {
			this.isLoading = false
			if (res.success) {
				this.auth.setUser(res.data)
				this.$state.go('main')
			}else{
				MessageBox.error(res.message)
			}
		})
	}


}

export {LoginCtrl}