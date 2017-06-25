/**
 * 所有 XHR 请求都写在这里
 * 请求返回值通过 COMMIT 一个 MUTATION-TYPE 修改状态树
 */
import { Problem, Submission, Recommend, SubmissionIsAccepted, User } from '../resource'
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
    commit(types.SUBMISSION, res)
  }).catch(() => {})
}

/** 查看该题提交情况 */
export const submitUserCondition = ({ commit, state }, { offset, limit, all, problemId }) => {
  return Submission.get({ offset, limit, all, problemId }).then(res => {
    commit(types.SUBMISSIONS, res.data)
  }).catch(() => {})
}
/** 查看该题提交后是否accepted */
export const submitisaccepted = ({ commit, state }, {id}) => {
  return SubmissionIsAccepted.get({ id }).then(res => {
    commit(types.SUBMISSIONISACCEPTED, res)
  }).catch(() => {})
}

/** 提交用户信息进行注册 */
export const submitUserMsg = ({ commit, state }, { name, email, password }) => {
  return User.save({ name, email, password }).then(res => {
    commit(types.RECEIVE_REGISTERMSG, res.message)
  }).catch(() => {})
}

/** 根据用户邮箱获取用户信息 */
export const getUserByEmail = ({ commit, state }, { email }) => {
  return User.get({ email }).then(res => {
    commit(types.RECEIVE_USER, res.data)
  }).catch(() => {})
}
