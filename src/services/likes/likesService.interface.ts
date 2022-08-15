import { AxiosResponse } from 'axios'

export interface LikesServiceInterface {
  likeComment(commentId: number): Promise<AxiosResponse | undefined>
  unlikeComment(likeId:number): Promise<AxiosResponse | undefined>
}