import * as React from "react";
import { graphql } from "gatsby";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Smiley */}
      {/* <span className="absolute lg:block hidden text-[#CDDE91] text-[300px] -rotate-45 mt-[-80px] ml-[-30px]">
        ☺
      </span> */}

      {/* Header */}
      <div className="grid lg:grid-cols-12 lg:pt-[180px] lg:pb-[200px] py-[100px] lg:px-[100px] px-[40px] flex items-center">
        {/* Hello */}
        <div className="col-span-2"></div>
        <div
          className="lg:col-span-8"
          // data-aos="fade-right"
          // data-aos-duration="800"
        >
          <p className="text-[28px] font-light">
            {frontmatter.title} {frontmatter.description}
          </p>

          {/* Roles */}
          <div>
            <p className="monospace mt-[40px] mb-[10px] text-[#CDDE91] text-[12px] uppercase">
              Contributions
            </p>
            <p className=" text-[13px] uppercase">
              {frontmatter.contributions.map((item) => (
                <b key={item.role} className="mr-[20px]">
                  {item.role}
                </b>
              ))}
            </p>
          </div>

          {/* Tools */}
          <div>
            <p className="monospace mt-[40px] mb-[10px] text-[#CDDE91] text-[12px] uppercase">
              Tools and technologies
            </p>
            <p className=" text-[13px] uppercase">
              {frontmatter.technologies.map((item) => (
                <b key={item.tool} className="mr-[20px]">
                  {item.tool}
                </b>
              ))}
            </p>
          </div>

          {frontmatter.url ? (
            <div className="mt-[50px]">
              <a
                href={frontmatter.url}
                target="_blank"
                rel="noreferrer"
                className="py-[12px] px-[40px] border rounded-[50px] text-[12px] uppercase hover:bg-gradient-to-r from-white to-[#CDDE90] hover:text-black hover:border-black font-bold"
              >
                {frontmatter.button}
              </a>
            </div>
          ) : null}
        </div>

        <div className="col-span-2"></div>
      </div>

      {/* Flower */}
      <span
        //id="flower"
        className="absolute lg:block hidden text-[#CDDE91] text-[120px] -rotate-45 mt-[-200px] ml-[1200px]"
      >
        ❋
      </span>

      {/* Screenshots */}
      <div className="py-[0px] lg:py-[50px]">
        {frontmatter.featuredImages.map((item) => (
          <img alt="img" id="shot" src={item.image.publicURL} />
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
        slug
        title
        url
        button
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

export const Head = () => <title>Hanim J.</title>;