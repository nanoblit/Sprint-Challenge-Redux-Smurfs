1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

filter, map, reduce. Object.assign.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - they are functions returning data for reducers to determine the next state.
reducers - they return new state slice based on the old state and the data from it's action.
store - It hold current state used by component in the whole app.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state can be used by all components by dispatching actions.
Component state can only be used by the component it appears in and components it's been passed to by props.

1.  What is middleware?

Middleware changes what actions do by implanting it between the actions and reducers. It can be used to add new functionality to actions like asynchronous actions and logging.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to have asynchronous actions using the "dispatch" function.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()
