
// const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  return graphql(`
  query MyQuery {
    allContentfulLesson {
      nodes {
        title
        slug
      }
    }
  }


    `, { limit: 1000 }).then(result => {
      if (result.errors) {
        throw result.errors
      }

      const projects = result.data.allContentfulLesson.nodes || [];
      console.log(projects)
      projects.forEach((edge, index) => {

        console.log(edge.slug)
        const path = `/${edge.slug}`
        createPage({
          path,
          component: require.resolve('./src/templates/index.jsx'),
          context: {slug: edge.slug},
          pageData: result.data
        })
      })
    })

}
