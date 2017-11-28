# redux-action-generator
A redux action generator

### Less constants, less unique name definition, less confusion. MORE CLEAR !


### Example

```javascript
import React from 'react'
import { connect } from 'react-redux'
import { eventCreator, actionCreator } from './actionGenerator.js'


/* Action Creator */

const actionsConfig = {
  prefix: 'example/foo/',
  actions: ['plus', 'reduce', 'fetch', 'set']
}

/*export for some other middlewares like redux-saga */
export const EVENTS = eventCreator(actionsConfig);
export const ACTIONS = actionCreator(actionsConfig);

/* Reducer */
export const reducer = (state = { count: 0 }, action) => {
  const { type, payload } = action

  switch (type) {
    case EVENTS['plus']:
      return {...state, count: state.count + 1 };
    ...
    default:
      return state;
  }
}

/* View */
class Example extends React.Component {
  render() {
    return (
      <button onClick={this.props.plus}>ClickToAdd</button>
    )
  }
}

const mapStateToProps = state => ({ foo: state.foo })

/* 
* Recommend 
* Dispatch will be passed to this.props
*/
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...actionCreator({
    ...actionsConfig,
    dispatch
  })
})

/* Or like this
const mapDispatchToProps = {...ACTIONS}
*/

export default connect(null, mapDispatchToProps)(Example);

```
