import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkExperience from "../components/work-experience";
export const query = graphql`
  {
    sanityProfileSummary {
      id
      bio
      workExperiences {
        company
        link
        designation
        description
        startDate
        endDate
        logo {
          asset {
            fixed(height: 100, width: 100) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`

const IndexPage = () => {
  const pageName = "home";
  const data = useStaticQuery(query);
  const totalExperience = new Date(new Date() - new Date("2014/10/01")).getFullYear() - 1970;
  console.log(data);
  return (
    <Layout page={pageName}>
      <SEO title={"/" + pageName} />
      <div className="box">
        <h1 className="title">About Me</h1>
        {data.sanityProfileSummary.bio.split("\n").map((t, i) => (<p key={i}>{t.trim()}</p>))}
      </div>
      <div className="box">
        <h1 className="title">Work Experience <span className="subTitle">({totalExperience} years)</span></h1>

        {data.sanityProfileSummary.workExperiences.map((experience) => (
          <WorkExperience experience={experience}></WorkExperience>
        ))}

      </div>
      <div className="box">
        <h1>Test</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          ipsa animi quos fugit assumenda soluta minima rem qui voluptate
          perferendis eum sint a deleniti, expedita ut ad exercitationem earum
          quidem? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Officia corporis architecto nemo magnam nihil repellendus molestias?
          Eius aliquam perferendis quas nostrum nesciunt eum pariatur nulla
          doloremque, fugiat tempora tempore architecto? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aut dignissimos placeat aliquid
          magni eligendi itaque consequuntur expedita mollitia fuga sit quia
          possimus odio quaerat corrupti, illo quis quos eum a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quae suscipit unde quia
          quisquam amet. Perferendis explicabo fuga, aliquam optio deleniti
          aliquid nostrum quo, nesciunt doloremque voluptates eaque natus libero
          veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia rem, soluta debitis ad, fugiat sint vel, aperiam earum provident
          nesciunt facere enim. Similique, repudiandae! Quia natus impedit
          doloremque autem quas? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta, inventore in tenetur dolores incidunt ipsa
          excepturi laudantium harum et deserunt ad temporibus aut facilis
          architecto sit facere deleniti earum asperiores. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illo soluta provident nulla, magni
          ipsum nostrum sint dignissimos veniam ipsa hic placeat accusantium
          quibusdam praesentium a obcaecati dolore possimus quaerat veritatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptates id odio eligendi amet beatae non error esse voluptas nulla
          recusandae aut nostrum maxime sed alias quod dolore, earum qui?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          ipsa animi quos fugit assumenda soluta minima rem qui voluptate
          perferendis eum sint a deleniti, expedita ut ad exercitationem earum
          quidem? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Officia corporis architecto nemo magnam nihil repellendus molestias?
          Eius aliquam perferendis quas nostrum nesciunt eum pariatur nulla
          doloremque, fugiat tempora tempore architecto? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aut dignissimos placeat aliquid
          magni eligendi itaque consequuntur expedita mollitia fuga sit quia
          possimus odio quaerat corrupti, illo quis quos eum a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quae suscipit unde quia
          quisquam amet. Perferendis explicabo fuga, aliquam optio deleniti
          aliquid nostrum quo, nesciunt doloremque voluptates eaque natus libero
          veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia rem, soluta debitis ad, fugiat sint vel, aperiam earum provident
          nesciunt facere enim. Similique, repudiandae! Quia natus impedit
          doloremque autem quas? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta, inventore in tenetur dolores incidunt ipsa
          excepturi laudantium harum et deserunt ad temporibus aut facilis
          architecto sit facere deleniti earum asperiores. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illo soluta provident nulla, magni
          ipsum nostrum sint dignissimos veniam ipsa hic placeat accusantium
          quibusdam praesentium a obcaecati dolore possimus quaerat veritatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptates id odio eligendi amet beatae non error esse voluptas nulla
          recusandae aut nostrum maxime sed alias quod dolore, earum qui?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          ipsa animi quos fugit assumenda soluta minima rem qui voluptate
          perferendis eum sint a deleniti, expedita ut ad exercitationem earum
          quidem? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Officia corporis architecto nemo magnam nihil repellendus molestias?
          Eius aliquam perferendis quas nostrum nesciunt eum pariatur nulla
          doloremque, fugiat tempora tempore architecto? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aut dignissimos placeat aliquid
          magni eligendi itaque consequuntur expedita mollitia fuga sit quia
          possimus odio quaerat corrupti, illo quis quos eum a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quae suscipit unde quia
          quisquam amet. Perferendis explicabo fuga, aliquam optio deleniti
          aliquid nostrum quo, nesciunt doloremque voluptates eaque natus libero
          veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia rem, soluta debitis ad, fugiat sint vel, aperiam earum provident
          nesciunt facere enim. Similique, repudiandae! Quia natus impedit
          doloremque autem quas? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta, inventore in tenetur dolores incidunt ipsa
          excepturi laudantium harum et deserunt ad temporibus aut facilis
          architecto sit facere deleniti earum asperiores. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illo soluta provident nulla, magni
          ipsum nostrum sint dignissimos veniam ipsa hic placeat accusantium
          quibusdam praesentium a obcaecati dolore possimus quaerat veritatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptates id odio eligendi amet beatae non error esse voluptas nulla
          recusandae aut nostrum maxime sed alias quod dolore, earum qui?
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
