import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = (): Pick<GatsbyTypes.SiteSiteMetadata, "title" | "description"> => {
  const { site } = useStaticQuery<GatsbyTypes.SITE_METADATA_QUERYQuery>(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return site?.siteMetadata
}

export default useSiteMetadata
