import { createStore, applyMiddleware, compose } from "redux";

import reducer from "./reducer";
import thunk from "redux-thunk";

//这里让项目支持浏览器插件Redux DevTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
//以上是store的核心代码，支持了Redux DevTools。同时，
// 利用redux的集成中间件（applyMiddleware）功能将redux-thunk集成进来，最终创建了store。
export default store
