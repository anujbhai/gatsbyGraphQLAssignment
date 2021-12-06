import * as React from "react";
import { graphql, Link } from "gatsby";

import { sidebarNav } from "../../components/Layout.module.css";
import Layout from "../../components/Layout";

const AuthorsPage = props => {
  const { data } = props;

  return (
    <>
      <Layout pageTitle="Post Page">
        <h2>Select an author to read their bio.</h2>

        <p>Morbi nec dui erat. Cras eget nisl cursus, ultrices quam eget, semper nunc. Nunc placerat nibh non congue facilisis. Quisque ullamcorper fringilla placerat.</p>

        <sidebar>
          <nav className={ sidebarNav }>
            <ul>
            {
              data.allFile.nodes.map(node => (
                <li key={ node.id }><Link to={ `/authors/${ node.childMdx.slug }` }>{ node.childMdx.frontmatter.author }</Link></li>
              ))
            }
            </ul>
          </nav>
        </sidebar>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "authors"}}) {
      nodes {
        id
        childMdx {
          frontmatter {
            author
          }
          slug
        }
      }
    }
  }
`;

export default AuthorsPage;
