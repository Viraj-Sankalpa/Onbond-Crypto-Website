import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogContent from "../containers/blog/BlogContent";
import LayoutTwo from "../layouts/LayoutTwo";

const Blog = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | Latest News</title>
        <meta
          name="description"
          content="Blog page of OneBond WebSite."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="LATEST NEWS" />
        {/* blog content */}
        <BlogContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default Blog;
