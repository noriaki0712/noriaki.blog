import React from "react"
export const HTMLContent = ({ content, className }: { content: string; className: string }): JSX.Element => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }: { content: string; className: string }): JSX.Element => (
  <div className={className}>{content}</div>
)

export default Content
