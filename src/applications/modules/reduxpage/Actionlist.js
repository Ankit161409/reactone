import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0, 
}

export const counterSlice =createSlice({
name:'counter',
initialState,   
reducers: {
increment: (state)=>{
    state.value +=1
},
decrement :(state)=>
{
    state.value -=1
}

},


})

export const {increment,decrement}=counterSlice.actions

export default counterSlice.reducer

// Yes — exactly! You're describing the **standard way** to use Redux with Redux Toolkit (`@reduxjs/toolkit`) in a React application. Let me break it down and confirm each step you mentioned:

// ---

// ### ✅ 1. **Create a Slice (with actions + reducers)**

// You create a file (e.g., `counterSlice.js`) with a slice like this:

// ```js
// // counterSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => { state.value += 1 },
//     decrement: (state) => { state.value -= 1 },
//     reset: (state) => { state.value = 0 },
//   }
// });

// export const { increment, decrement, reset } = counterSlice.actions;
// export default counterSlice.reducer;
// ```

// ---

// ### ✅ 2. **Add the slice to your configured store**

// ```js
// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// const store = configureStore({
//   reducer: {
//     counter: counterReducer, // name used in useSelector: state.counter
//   },
// });

// export default store;
// ```

// ---

// ### ✅ 3. **Wrap your app in the Redux `<Provider>`**

// ```js
// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import App from './App';
// import store from './store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// ```

// ---

// ### ✅ 4. **Access state with `useSelector()` and dispatch actions with `useDispatch()`**

// ```js
// // In a component
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './counterSlice';

// const Counter = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch(increment())}>+1</button>
//       <button onClick={() => dispatch(decrement())}>-1</button>
//     </div>
//   );
// };

// export default Counter;
// ```

//  -------------------------------------------------------------------------------------------------------------

//  ✅ Conclusion:

// Yes, you're absolutely right in your understanding:

// * Slice contains reducers and actions
// * You export the reducer and actions
// * Add reducer to the store using `configureStore`
// * Use `<Provider>` to make the store available to the app
// * Use `useSelector` and `useDispatch` to interact with the store in components

// Let me know if you’d like a full working folder structure or a quick starter template!

// --------------------------------------------------------------------------------------------------------------

// useSelector() → reads data from the Redux store.

// useDispatch() → (use for calling the actions)updates data in the Redux store by dispatching actions. 

//  --------------------------------------------------------------------------------------------------------------

// ✅ What initialState does:

// It defines the default values of the data in your Redux slice.
// This is the data you want to share globally across your whole app.

// Yes — exactly! 🙌 You're getting it.

// Let’s make it super clear:

 

 
// Example:

// ```js
// const initialState = {
//   value: 0,
//   userName: 'Guest',
//   isLoggedIn: false
// };
// ```

//  ----------------------------------------------------------------------------------------------

//   ✅ You can:

// 1. **Store any kind of data** in `initialState` (numbers, strings, arrays, objects).
// 2. **Update that data** using reducer actions (like `login`, `logout`, `increment`, etc.).
// 3. **Access the data anywhere** in your app using `useSelector()`.
// 4. **Change the data** from any component using `useDispatch()`.

 

//   ✅ Example:

//   🔹 counterSlice.js

// ```js
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//     userName: 'Guest'
//   },
//   reducers: {
//     increment: (state) => { state.value += 1 },
//     setUserName: (state, action) => {
//       state.userName = action.payload;
//     }
//   }
// });
// ```

//   🔹 In one component:

// ```js
// const dispatch = useDispatch();
// dispatch(setUserName("Alice"));
// ```

//   🔹 In another component:

// ```js
// const name = useSelector((state) => state.counter.userName);
// console.log(name); // "Alice"
// ```

// ----------------------------------------------------------------------------------------------

// ### 🎯 Summary:

// Yes, you can store shared/global data in `initialState`, and then:

// * **Read it** from any component (`useSelector`)
// * **Change it** from any component (`useDispatch`)
// * All components will re-render automatically when the state changes

// Redux is perfect for this kind of **global state management** across your app.

// Let me know if you want a complete working example or want to add things like login/logout, theme toggle, etc.
// 🔄 Component A updates the Redux store

// 📦 Redux holds the shared data

// 📤 Component B reads it, even without directly receiving it via props
