import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from "./TopicListItem";

const TopicList = (props=TopicList.defaultProps) => {
  const {topics} = props;
  const topicsElements = topics.map((topic) => {
    return <TopicListItem key={topic.id} {...topic} />;
  });
  return (<div className="top-nav-bar__topic-list">
    {topicsElements}
  </div>)
}

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },  
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
}
export default TopicList