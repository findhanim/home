import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#F6F6F6] text-black">
      {/* Navigation */}
      <Navigation></Navigation>

      {/* Title */}
      <div className="lg:px-[60px] px-[24px]">
        <div className="grid lg:grid-cols-12 grid-cols-6 lg:pt-[120px] pt-[60px] lg:pb-[100px] pb-[50px]">
          <span className="heading lg:col-span-12 col-span-6 lg:text-[70px] text-[40px] font-bold uppercase">
            {frontmatter.title}
          </span>
        </div>
        {/* Description */}
        <div className="grid lg:grid-cols-12 grid-cols-6 flex justify-between">
          <div className="lg:col-span-2 text-[18px] font-medium lg:mb-[0px] mb-[10px]">
            ({frontmatter.year})
          </div>
          <div className="lg:col-span-3"></div>
          <div className="col-span-6">
            <span className="lg:text-[26px] text-[22px] font-light lg:leading-[40px]">
              {frontmatter.title} {frontmatter.description}
            </span>
          </div>
          <div className="col-span-5"></div>
          {frontmatter.button ? (
            <div className="col-span-6 lg:mt-[100px] mt-[50px]">
              <span className="pt-[50px]">
                <a href={frontmatter.url} target="_blank" rel="noreferrer">
                  <span className="text-[18px] font-medium uppercase border-b border-black pb-[4px]">
                    {frontmatter.button}
                  </span>
                  <span> &#8599;</span>
                </a>
              </span>
            </div>
          ) : null}
        </div>
        {/* Header image */}
        <div className="lg:py-[150px] py-[100px]">
          {frontmatter.headerImage.map((item) => (
            <img
              alt="img"
              src={item.image.publicURL}
              className="rounded-[10px]"
            />
          ))}
        </div>
        {/* Involvement */}
        <div className="grid lg:grid-cols-12 grid-cols-6 flex justify-between">
          <div className="lg:col-span-2 text-[18px] uppercase font-bold lg:mb-[0px] mb-[20px]">
            (Involvement)
          </div>
          <div className="lg:col-span-2"></div>
          <div className="col-span-7">
            <span className="lg:text-[26px] text-[22px] font-light lg:leading-[40px]">
              {frontmatter.involvement}
            </span>
          </div>
        </div>
      </div>

      {/* Contributions */}
      <div className="bg-white grid lg:grid-cols-12 grid-cols-6 flex justify-between py-[100px]  lg:my-[150px] my-[100px]">
        <div className="lg:col-span-4"></div>
        <div className="col-span-7 px-[24px]">
          {/* Roles */}
          <div className="grid grid lg:grid-cols-7 border-b-2 pb-[50px]">
            <span className="col-span-3 text-[18px] font-bold lg:mb-[0px] mb-[20px]">
              Contributions
            </span>
            <div className="col-span-4">
              {frontmatter.contributions.map((item) => (
                <span
                  key={item.role}
                  className="lg:text-[16px] text-[18px] leading-[26px] mr-[4px]"
                >
                  {item.role}
                  {","}
                </span>
              ))}
            </div>
          </div>
          {/* Tools */}
          <div className="grid grid lg:grid-cols-7 pt-[50px]">
            <span className="col-span-3 text-[18px] font-bold lg:mb-[0px] mb-[20px]">
              Tools and technologies
            </span>
            <div className="col-span-4">
              {frontmatter.technologies.map((item) => (
                <span
                  key={item.tool}
                  className="lg:text-[16px] text-[18px] leading-[26px] mr-[4px]"
                >
                  {item.tool}
                  {","}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="lg:px-[60px] px-[24px]">
        <div className="pt-[0px] lg:pt-[40px]">
          {frontmatter.featuredImages.map((item) => (
            <img
              className="mt-[10px] rounded-[10px]"
              alt="img"
              src={item.image.publicURL}
            />
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid lg:grid-cols-12 grid-cols-6 gap-4 lg:pt-[150px] pt-[100px]">
          <span className="heading col-span-12 lg:text-[60px] text-[40px] uppercase lg:mb-[50px] mb-[30px]">
            <b>Other</b> <srf>Projects</srf>
          </span>
          <a
            href="/home/portfolio/pryce"
            className="lg:col-span-6 col-span-12 flex items-center lg:py-[50px] py-[30px] border-y border-[#BBBBBB]"
          >
            <span className="monospace font-bold text-[18px] mr-[80px]">
              01
            </span>
            <span className="font-bold lg:text-[30px] text-[26px]">Pryce</span>
            {/* Smiley */}
          </a>
          <a
            href="/home/portfolio/we-celcom"
            className="lg:col-span-6 col-span-12 flex items-center lg:py-[50px] py-[30px] lg:border-y border-b border-[#BBBBBB] lg:mt-[0px] mt-[-17px]"
          >
            <span className="monospace font-bold text-[18px] mr-[80px]">
              02
            </span>
            <span className="font-bold lg:text-[30px] text-[26px]">
              We<srf>@Celcom</srf>
            </span>
          </a>
          <a
            href="/home/portfolio/beige"
            className="lg:col-span-6 col-span-12 flex items-center lg:py-[50px] py-[30px] lg:border-b border-b border-[#BBBBBB] mt-[-17px]"
          >
            <span className="monospace font-bold text-[18px] mr-[80px]">
              03
            </span>
            <span className="font-bold lg:text-[30px] text-[26px]">Beige</span>
          </a>
          <a
            href="/home/portfolio/boxyshapes"
            className="lg:col-span-6 col-span-12 flex items-center lg:py-[50px] py-[30px] lg:border-b border-b border-[#BBBBBB] mt-[-17px]"
          >
            <span className="monospace font-bold text-[18px] mr-[80px]">
              04
            </span>
            <span className="font-bold lg:text-[30px] text-[26px]">
              Boxy<srf>Shapes</srf>
            </span>
          </a>
          <a
            href="/home/portfolio/prisma"
            className="lg:col-span-6 col-span-12 flex items-center lg:py-[50px] py-[30px] lg:border-b border-b border-[#BBBBBB] mt-[-17px]"
          >
            <span className="monospace font-bold text-[18px] mr-[80px]">
              05
            </span>
            <span className="font-bold lg:text-[30px] text-[26px]">Prisma</span>
          </a>
        </div>
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
        year
        description
        url
        button
        involvement
        headerImage {
          image {
            publicURL
          }
        }
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