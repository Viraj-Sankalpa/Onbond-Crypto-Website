import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogPostContent from "../containers/blog/BlogPostContent";
import LayoutTwo from "../layouts/LayoutTwo";

const BlogPost = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>OneBond | News Details</title>
        <meta
          name="description"
          content="News details page of OneBond WebSite."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="NEWS DETAILS" />
        {/* blog post content */}
        <BlogPostContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default BlogPost;
