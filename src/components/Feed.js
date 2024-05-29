import React, { useState } from "react";
import { fetchFeed } from "../api/feedApi";
import InfiniteScroll from "react-infinite-scroller";

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const limit = 5;

  const loadMore = async (page) => {
    try {
      const data = await fetchFeed(limit, feed.length);
      setFeed((prevFeed) => [...prevFeed, ...data.data]);
      console.log("feed ---->>>>  ", feed);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error("Error fetching feed:", error);
    }
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<div key={0}>Loading...</div>}
    >
      <div>
        {feed.map((item, index) => (
          <div key={index}>{item.content}</div>
        ))}
        {!hasMore && <div>No more items to load</div>}
      </div>
    </InfiniteScroll>
  );
};

export default Feed;
