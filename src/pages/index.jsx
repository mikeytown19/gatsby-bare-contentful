import React from 'react'
import { graphql, Link } from 'gatsby'


const index = ({data}) => {
console.log("🚀 ~ file: index.jsx ~ line 5 ~ index ~ data", data.allContentfulLesson.nodes)


  return (
    <div>
      Gatsby Contentful bare
      <div>
        {data.allContentfulLesson.nodes.map(item => <p>
          <Link to={item.slug}>
          {item.title}
        </Link>
        </p>
        )}
      </div>
    </div>
  )
}

export default index



export const query = graphql`

    query MyQuery {
      allContentfulLesson {
        nodes {
          title
          slug
        }
      }
    }
  `