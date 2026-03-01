import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkSupersub from "remark-supersub";

const ContentSection = ({ content }) => {
  return (
    <div className="flex justify-center">
      <div className="markdown-class">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkSupersub]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ContentSection;