// import React, { useContext, useReducer } from "react";
// import ReactDOM from 'react-dom'
//
// // 创建Context
// const AppContext = React.createContext();
// const AppDispatch = (state, action) => {
//   switch (action.type) {
//     case "count.add":
//       return { ...state, count: state.count + 1 };
//     case "count.reduce":
//       return { ...state, count: state.count - 1 };
//     case "color":
//       return { ...state, color: colorArr[getRandom()] };
//     default:
//       return state;
//   }
// };
// // 创建Provider
// const AppProvider = props => {
//   let [state, dispatch] = useReducer(AppDispatch, AppContext);
//   return (
//     <AppContext.Provider value={{ state, dispatch }}>
//       {props.children}
//     </AppContext.Provider>
//   );
// };
//
// function App() {
//   // 使用 Context
//   const { state, dispatch } = useContext(AppContext);
//   return (
//     <div
//       className="demo"
//       style={{ backgroundColor: state.color }}
//       onClick={() => {
//         dispatch({ type: "count.add" });
//         dispatch({ type: "color" });
//       }}
//     >
//       <div className="font">{state.count}</div>
//     </div>
//   );
// }
//
// // 将 AppProvider 放到根组件
// ReactDOM.render(
//   <AppProvider>
//     <App />
//   </AppProvider>,
//   document.getElementById("root")
// );
//
//
//
