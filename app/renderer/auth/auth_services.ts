import { ILoginParams, IResponse, IUser } from "../models";

interface IAuthService {
	isLogin(): boolean
	login(params: ILoginParams): angular.IPromise<IResponse>
	checkLogin(): void
	logOut(): void
	setUser(user: IUser): void
	currentUser: IUser
}

class AuthService implements IAuthService {
	currentUser: IUser;
	private get USER_KEY() { return "currentUser" };

	static $inject = ["$q", "$http", "$state", "BASEAPI"]
	constructor(private $q: angular.IQService,
		private $http: angular.IHttpService,
		private $state: angular.ui.IStateService,
		private baseUrl: string) {
		if (localStorage.getItem(this.USER_KEY)) {
			this.currentUser = JSON.parse(localStorage.getItem(this.USER_KEY))
		}
	}

	login(loginDetails: ILoginParams) {
		let defer = this.$q.defer()
		this.$http.post(`${this.baseUrl}/account/login`,
			loginDetails).then((response) => {
				defer.resolve(response.data)
			})
		return defer.promise
	}

	logOut() {
		localStorage.removeItem(this.USER_KEY)
		this.currentUser = null
	}

	checkLogin() {
		if (!this.isLogin()) { this.$state.go('login') }
	}

	isLogin() { return !!this.currentUser }

	setUser(user: IUser) {
		this.currentUser = user
		localStorage.setItem(this.USER_KEY, JSON.stringify(user))
	}

}

export {AuthService, IAuthService}