import { Problems } from '../resource'
import * as types from './mutation-types'

/** 获取首页最新发布题目 */
export const getRecentProblems = ({ commit }) => {
  return Problems.recent().then(res => {
    commit(types.RECEIVE_RECENT_PROBLEMS, res.data)
  })
}

/** 获取题目列表 */
export const getProblems = ({ commit, state }, { limit, offset }) => {
  return Problems.get({ limit, offset }).then(res => {
    commit(types.RECEIVE_PROBLEMS, res.data)
  })
}
