import React from "react"

import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import BlogRoll from "../components/BlogRoll"

export const ProfileTemplate = ({ image, title, subheading, mainpitch, intro }: any) => {
  const heroImage = getImage(image) || image
  heroImage
  return (
    <div>
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      <section className="section section--gradient">
        <div className="container">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="content">
                <div className="tile">
                  <h1 className="title">{mainpitch.title}</h1>
                </div>
                <div className="tile">
                  <h3 className="subtitle">{mainpitch.description}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const Profile = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProfileTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

Profile.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Profile

export const pageQuery = graphql`
  query ProfileTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`
