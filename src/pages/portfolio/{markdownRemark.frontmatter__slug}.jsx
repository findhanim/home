import * as React from "react";
import { graphql } from "gatsby";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function BlogPostTemplate({
  data,
  // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter } = markdownRemark;

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
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-[28px] font-light"
          >
            {frontmatter.title}{" "}{frontmatter.description}
          </p>

          {/* Roles */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
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
          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
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
        </div>

        <div className="col-span-2"></div>
      </div>

      {/* Flower */}
      <span
        id="flower"
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

export const Head = () => <title>Hanim J.</title>
