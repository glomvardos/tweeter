import AuthService from '../auth/authService'
import { applyMixins } from '../../mixins/applyMixins'

class ApiService {}

// eslint-disable-next-line no-redeclare
interface ApiService extends AuthService {}

applyMixins(ApiService, [AuthService])

export default new ApiService()

