import { applyMixins } from '../../mixins/applyMixins'
import AuthService from '../auth/authService'
import TweetsService from '../tweets/tweetsService'
import CommentsService from '../comments/commentsService'
import LikesService from '../likes/likesService'

class ApiService {}

// eslint-disable-next-line no-redeclare
interface ApiService extends AuthService, TweetsService, CommentsService, LikesService {}

applyMixins(ApiService, [AuthService, TweetsService, CommentsService, LikesService])

export default new ApiService()

