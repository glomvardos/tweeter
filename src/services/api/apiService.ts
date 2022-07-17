import AuthService from '../auth/authService'
import TweetsService from '../tweets/tweetsService'
import { applyMixins } from '../../mixins/applyMixins'

class ApiService {}

// eslint-disable-next-line no-redeclare
interface ApiService extends AuthService, TweetsService {}

applyMixins(ApiService, [AuthService, TweetsService])

export default new ApiService()

