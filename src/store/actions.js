/**
 * 所有 XHR 请求都写在这里
 * 在 mutation.types.js 定义好动作常量, commit 后由对应的 module 接收
 * 并定义好 getter 由视图接收
 */
import { Problems, Problem } from '../resource'
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

/** 根据题目ID获取题目信息 */
export const getProblemById = ({ commit, state }, { id }) => {
  return Problem.get({ id }).then(res => {
    commit(types.RECEIVE_PROBLEM, res.data)
  })
}
