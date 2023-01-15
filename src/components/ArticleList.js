import { useState } from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const articles = useState (posts && posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      )));
      return <main>{articles}</main>;
}

export default ArticleList;
