import { Problems } from '../resource'
import * as types from './mutation-types'

// Problems
export const getRecentProblems = ({ commit, state }) => {
  return Problems.recent().then(res => {
    commit(types.RECEIVE_RECENT_PROBLEMS, res.data)
  })
}
