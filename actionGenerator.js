/*
根据前缀和事件名列表生成的Event Name对象集合
*/
export function eventCreator({ prefix, actions }) {
  return actions.reduce(function(result, action) {
    result[action] = prefix + action
    return result;
  }, {});
}

/*
根据前缀和事件名列表生成的Action对象集合
*/
export function actionCreator({ prefix, actions, dispatch }) {
  return actions.reduce(function(result, action) {
    result[action] =
      dispatch ?
      (payload) => dispatch({ type: prefix + action, payload }) :
      (payload) => ({ type: prefix + action, payload })
    return result;
  }, {});
}
