import AuthService from "../auth/authService";
import { applyMixins } from "../../mixins/applyMixins";
import ExceptionsService from "../exceptions/ExceptionsService";

class ApiService {}

// eslint-disable-next-line no-redeclare
interface ApiService extends AuthService {}

applyMixins(ApiService, [AuthService, ExceptionsService]);

export default new ApiService();
