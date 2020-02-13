import React, { useState, useEffect } from "react";
import { getData } from "./source";
import { getFeed } from "./rssToJson";

export const SOURCE_STATUS_LOADING = "SOURCE_STATUS_LOADING";
export const SOURCE_STATUS_SUCCESS = "SOURCE_STATUS_SUCCESS";
export const SourceContext = React.createContext({
  status: SOURCE_STATUS_LOADING
});
export const {
  Consumer: SourceContextConsumer,
  Provider: SourceContextProvider
} = SourceContext;
const Sources = ({ children }) => {
  const [source, setSource] = useState();
  const [status, setStatus] = useState(SOURCE_STATUS_LOADING);
  useEffect(() => {
    getFeed().then(console.log);
    getData(data => {
      setSource(data);
      setStatus(SOURCE_STATUS_SUCCESS);
    });
  }, []);
  return (
    <SourceContext.Provider value={{ status, source }}>
      {status === SOURCE_STATUS_SUCCESS && children}
    </SourceContext.Provider>
  );
};
export default Sources;
