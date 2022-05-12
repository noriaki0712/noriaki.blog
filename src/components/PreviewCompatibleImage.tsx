import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { IGatsbyImageData } from "gatsby-plugin-image"

type Props = {
  imageInfo: {
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
  }
}

const PreviewCompatibleImage = (props: Props): JSX.Element | null => {
  const imageStyle: { borderRadius: string } = { borderRadius: "5px" }
  const { alt = "", childImageSharp, image } = props.imageInfo

  if (!!image && !!image.childImageSharp) {
    return <GatsbyImage image={image.childImageSharp.gatsbyImageData} style={imageStyle} alt={alt} />
  } else if (childImageSharp) {
    return <GatsbyImage image={childImageSharp.gatsbyImageData} style={imageStyle} alt={alt} />
    // for Netlify CMS
  } else {
    return null
  }
}

export default PreviewCompatibleImage
