/**
 * 所有 XHR 请求都写在这里
 * 请求返回值通过 COMMIT 一个 MUTATION-TYPE 修改状态树
 */
import { Problems, Problem, Submission } from '../resource'
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

/** 提交用户代码进行判题 */
export const submitUserCode = ({ commit, state }, { id, code, type }) => {
  return Submission.save({ id, code, type }).then(res => {
    console.log(res)
  })
}
