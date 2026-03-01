import React, { useRef } from "react";
import { getPostBySlug, getAllPosts } from "../utils/api";
import SimplePageHeader from "../components/SimplePageHeader"
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import CustomHead from "../components/CustomHead";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import { useTheme } from "next-themes";
import Button from "../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ViserEmbed from "../components/ViserEmbed";
import VideoEmbed from "../components/VideoEmbed";

const ProjectPage = ({ post }) => {

  const textOne = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger(
      textOne.current,
      1,
      { y: -40, x: -10, transform: "scale(0.8)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  const { theme } = useTheme();

  return (
    <div className={`relative
    ${theme === "dark" ? "bg-moonsoil text-black" : "bg-marssoil text-white"}
    `}>

      <CustomHead />

      <SimplePageHeader/>

      <div className="container mx-auto">
        <div className="flex mt-10 justify-center">
          <div>
            <h1
              ref={textOne}
              className="text-5xl text-center laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-till w-4/5 mob:w-full"
            >
              {post.title}
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <h2 className="text-md text-center laptop:text-xl laptopl:text-2xl p-1 tablet:p-2 font-till w-4/5 mob:w-full">
            {post.tagline}
            </h2>
          </div>
        </div>
        { post.repo && (
          <div className="flex justify-center">
          <Button onClick={() => window.open(`${post.repo}`)}>
            <FontAwesomeIcon icon={faGithub} />
            <p className="ml-2 text-md tablet:text-lg">Github Repo</p>
          </Button>
        </div>
        )}
        {post.video && (
        <div className="container tablet:w-4/5 mx-auto mt-10 px-2">
          <VideoEmbed
            videoPath={post.video.path}
            caption={post.video.caption}
          />
        </div>
      )}
        <ContentSection content={post.content}></ContentSection>
        { post.viserScenes && (
          <div className="container tablet:w-4/5 mx-auto mt-10 px-2">
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-6">
              {post.viserScenes.map((scene, idx) => (
                <ViserEmbed
                  key={idx}
                  scenePath={scene.path}
                  caption={scene.caption}
                />
              ))}
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "date",
    "title",
    "tagline",
    "coverImage",
    "slug",
    "content",
    "repo",
    "viserScenes",
    "video"
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default ProjectPage;
