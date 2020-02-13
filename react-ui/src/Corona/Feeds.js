import React, {
  useEffect,
  useContext,
  useCallback,
  useRef,
  useState
} from "react";
import * as JsSearch from "js-search";
import { SourceContext } from "./Sources";
import { getFeed } from "./rssToJson";

export const FeedContext = React.createContext({
  getSearchData: value => []
});
export const { Consumer: FeedConsumer, Provider: FeedProvider } = FeedContext;
const Feeds = ({ children }) => {
  const [feed, setFeed] = useState();

  useEffect(() => {
    getFeed().then(setFeed);
  }, []);

  return <FeedProvider value={feed}>{children}</FeedProvider>;
};
export default Feeds;
