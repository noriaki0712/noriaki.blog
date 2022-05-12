import * as React from "react"

import { v4 } from "uuid"
type Props = {
  quote: string
  author: string
}

const Testimonials = (testimonials: Props[]): JSX.Element => (
  <div>
    {testimonials.map((testimonial) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

export default Testimonials
