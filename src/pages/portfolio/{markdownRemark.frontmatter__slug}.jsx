import * as React from "react";
import { graphql } from "gatsby";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function BlogPostTemplate({
  data,
  featuredImages, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  let post = data.markdownRemark;

  console.log("HEREEEE", frontmatter);

  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Smiley */}
      <span className="absolute lg:block hidden text-[#CDDE91] text-[300px] -rotate-45 mt-[-80px] ml-[-30px]">
        ☺
      </span>

      {/* Header */}
      <div className="grid lg:grid-cols-12 lg:pt-[180px] lg:pb-[200px] py-[100px] lg:px-[100px] px-[40px] flex items-center">
        {/* Hello */}
        <div className="col-span-2"></div>
        <div className="lg:col-span-8">
          {/* <p className="serif text-[28px] text-[#CDDE91] font-light pb-[50px] font-bold uppercase">
            {frontmatter.title}
          </p> */}
          <p className="text-[28px] font-light">{frontmatter.description}</p>

          {/* Roles */}
          <p className="monospace mt-[40px] mb-[10px] text-[#CDDE91] text-[11px] uppercase">
            Contributions
          </p>
          <p className=" text-[12px] uppercase">
            {frontmatter.contributions.map((item) => (
              <b key={item.role} className="mr-[16px]">
                {item.role}
              </b>
            ))}
          </p>

          {/* Tools */}
          <p className="monospace mt-[40px] mb-[10px] text-[#CDDE91] text-[11px] uppercase">
            Tools and technologies
          </p>
          <p className=" text-[12px] uppercase">
            {frontmatter.technologies.map((item) => (
              <b key={item.tool} className="mr-[16px]">
                {item.tool}
              </b>
            ))}
          </p>
        </div>

        <div className="col-span-2"></div>
      </div>

      {/* Flower */}
      <span className="absolute lg:block hidden text-[#CDDE91] text-[120px] -rotate-45 mt-[-200px] ml-[1200px]">
        ❋
      </span>

      {/* Screenshots */}
      <div className="text-black rounded-t-[40px] py-[0px] lg:py-[50px]">
        {frontmatter.featuredImages.map((item) => (
          <img id="shot" src={item.image.publicURL} />
        ))}
      </div>

      {/* Footer */}
      <Footer></Footer>
    </main>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        contributions {
          role
        }
        technologies {
          tool
        }
        featuredImages {
          image {
            publicURL
          }
        }
      }
    }
  }
`;
