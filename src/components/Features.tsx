import * as React from "react"
import PreviewCompatibleImage from "./PreviewCompatibleImage"
import { IGatsbyImageData } from "gatsby-plugin-image"

type Props = {
  gridItems: {
    text: string
    alt: string
    readonly childImageSharp?: {
      gatsbyImageData: IGatsbyImageData
    }
    image: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      post?: {
        frontmatter: {
          featureimage: IGatsbyImageData
        }
      }
    }
    width: number
    height: number
  }[]
}

const FeatureGrid = ({ gridItems }: Props) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: "240px",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

export default FeatureGrid
