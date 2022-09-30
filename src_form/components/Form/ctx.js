import React from "react";
const ctx = React.createContext();//创建上下文
export const {Provider,Consumer} = ctx; //具名导出
export default ctx;