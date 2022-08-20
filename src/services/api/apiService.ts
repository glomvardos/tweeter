import { applyMixins } from '../../mixins/applyMixins'
import AuthService from '../auth/authService'
import TweetsService from '../tweets/tweetsService'
import CommentsService from '../comments/commentsService'
import LikesService from '../likes/likesService'
import SaveTweetsService from '../save-tweets/saveTweetsService'

class ApiService {}

// eslint-disable-next-line no-redeclare
interface ApiService extends AuthService, TweetsService, CommentsService, LikesService, SaveTweetsService {}

applyMixins(ApiService, [AuthService, TweetsService, CommentsService, LikesService, SaveTweetsService])

export default new ApiService()

