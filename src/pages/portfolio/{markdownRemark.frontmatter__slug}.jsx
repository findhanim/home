import * as React from "react";
import { graphql } from "gatsby";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
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
          <p className="monospace text-[12px] uppercase">About The Project</p>
          <p className="text-[28px] font-light pt-[30px]">
            {frontmatter.description}
          </p>
          <p className="mt-[40px] text-[12px] uppercase">
            <a className="mr-[12px]">UI/UX Design</a> ☻
            <a className="ml-[12px]">Front End Development</a>
          </p>
        </div>

        <div className="col-span-2"></div>
      </div>

      {/* Flower */}
      <span className="absolute lg:block hidden text-[#CDDE91] text-[120px] -rotate-45 mt-[-200px] ml-[1200px]">
        ❋
      </span>

      {/* Skills */}
      <div className="bg-white text-black rounded-t-[40px] px-[100px] py-[200px]"></div>

      {/* Footer */}
      <Footer></Footer>
    </main>
    // <div>
    //   <div>
    //     <h1>{frontmatter.title}</h1>
    //     <h2>{frontmatter.date}</h2>
    //     <div dangerouslySetInnerHTML={{ __html: html }} />
    //   </div>
    // </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`;
