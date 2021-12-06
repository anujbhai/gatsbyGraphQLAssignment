import * as React from "react"
import { graphql, Link } from "gatsby";

import { sidebarNav } from "../../components/Layout.module.css";
import Layout from "../../components/Layout";

// markup
const HomePage = props => {
  const { data } = props;

  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>Integer vel tortor a elit ultrices mollis. Cras convallis, tortor tincidunt mattis imperdiet, dolor lorem tristique dolor, eu luctus tellus ante molestie nunc. Aenean aliquet bibendum leo, vitae tincidunt metus consequat et. Aliquam justo dui, elementum vel lorem eu, elementum volutpat dui. Fusce sit amet metus a enim rhoncus egestas. Pellentesque eget lobortis mauris. Vivamus id bibendum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien erat, mattis nec luctus vel, auctor et urna. Nunc vulputate semper mauris, eget aliquet erat condimentum ac. Etiam imperdiet id mi a faucibus. Suspendisse accumsan turpis ut urna volutpat, vel dictum leo vehicula. Nullam quis dolor molestie, tristique arcu pretium, euismod ante. Maecenas in justo eu nibh blandit gravida bibendum vel lectus. Praesent ut risus et dolor interdum pharetra.</p>

        <sidebar>
          <nav className={ sidebarNav }>
            <ul>
            {
              data.allMdx.nodes.map(node => (
                <li key={ node.id }><Link to={ `/home/${ node.slug }` }>{ node.frontmatter.title }</Link></li>
              ))
            }
            </ul>
          </nav>
        </sidebar>
      </Layout>
    </main>
  );
};

export const query = graphql`
  query  {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

export default HomePage
