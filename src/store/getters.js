
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
