/**
 * 所有 XHR 请求都写在这里
 * 请求返回值通过 COMMIT 一个 MUTATION-TYPE 修改状态树
 */
import { Problem, Submission, Recommend } from '../resource'
import * as types from './mutation-types'

/** 获取题目列表 */
export const getProblems = ({ commit, state }, { limit, offset, sortby, order }) => {
  return Problem.get({ limit, offset, sortby, order }).then(res => {
    commit(types.RECEIVE_PROBLEMS, res.data)
  }).catch(() => {})
}

/** 根据题目ID获取题目信息 */
export const getProblemById = ({ commit, state }, { id }) => {
  return Problem.get({ id }).then(res => {
    commit(types.RECEIVE_PROBLEM, res.data)
  }).catch(() => {})
}

/** 根据题目ID获取题目相关的其他问题（相关推荐） */
export const getProblemRecommendById = ({ commit, state }, { id }) => {
  return Recommend.get({ id }).then(res => {
    commit(types.RECEIVE_PROBLEM_RECOMMEND, res.data)
  }).catch(() => {})
}

/** 提交用户代码进行判题 */
export const submitUserCode = ({ commit, state }, { id, code, lang }) => {
  return Submission.save({ id, code, lang }).then(res => {
    console.log(res)
  }).catch(() => {})
}

/** 查看该题提交情况 */
export const submitUser = ({ commit, state }, { offset, limit, all, problemId }) => {
  return Submission.get({ offset, limit, all, problemId }).then(res => {
    commit(types.SUBMISSIONS, res.data)
  }).catch(() => {})
}

