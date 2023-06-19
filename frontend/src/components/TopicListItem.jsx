import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props = TopicListItem.defaultProps) => {
  const {id, slug, title} = props;
  return(
  <div className="topic-list__item">
    {title}
  </div>
  )
}

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "title": "Nature"
}
export default TopicListItem