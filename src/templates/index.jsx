import React from 'react'
import { graphql } from 'gatsby'

const index = ({data}) => {
  console.log(data)
  const {course } = data.contentfulLesson
  const {shortDescription, skillLevel, title} = course[0]

  return (
    <div>

      <h1>{title}</h1>
      <h3>{skillLevel}</h3>
      <p>{shortDescription}</p>

    </div>
  )
}

export default index

export const query = graphql`
  query($slug: String!) {
    contentfulLesson(slug:  {eq: $slug}) {
      title
      slug
      course {
        shortDescription
        skillLevel
        title
      }
    }

  }
`