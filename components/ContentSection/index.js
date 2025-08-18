import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ContentSection = ({ content }) => {
  return (
    <div className="flex justify-center">
      <div className="markdown-class">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ContentSection;