
/**
 * 获取最新发布的问题
 */
export const recentProblems = state => {
  return [
    ...state.Problems.recentProblems
  ]
}

/**
 * 获取全部问题
 */
export const problems = state => {
  return [
    ...state.Problems.problems
  ]
}

/**
 * 根据题目ID获取一道题信息
 */
export const problem = state => {
  return {
    ...state.Problem.problem
  }
}
