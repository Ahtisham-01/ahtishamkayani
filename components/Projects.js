
import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../data/constant";
import ProjectDetails from "../components/ProjectDetails"

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: rgb(23, 23, 33);
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  &:hover ${Button} {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`;
const Projects = () => {
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    console.log(openModal);
  return (
    <div className="max-w-[1280px] flex flex-col gap-4 mx-auto pt-20 px-4">
      <p className="subheading">Project</p>
      <p className="text-base text-gray-700">
        These projects exemplify my skills and expertise through real-world
        examples of my work. Each project is accompanied by a concise
        description, along with links to code repositories and live demos. They
        serve as a testament to my proficiency in tackling intricate challenges,
        adeptness with diverse technologies, and successful project management.
      </p>

      {/* <div class="max-w-sm bg-transparent p-1  bd rounded-lg  hover:shadow-2xl shadow-black">
                <a href="#">
                    <img class="rounded-t-lg" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/puzzleappdemo.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tighttext-white">Puzzle App</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The “Number Puzzle” practices number sequencing, counting, and recognizing numerals from 1 to 100. It also builds problem-solving and cognitive skills by teaching children to develop strategies to assemble each piece correctly, one at a time.</p>
                    <a href="https://puzzle-app-eight.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-indigo-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600">
                        Demo link
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div> */}
      {/* <div className="container">
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>Puzzle App</h2>
                        <p>The “Number Puzzle” practices number sequencing, counting, and recognizing numerals from 1 to 100.</p>
                        <a href="https://puzzle-app-eight.vercel.app/">Demo link</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>3DShirt Customizer</h2>
                        <p>In this 3D shirt customizer project you can Customize your shirt according to your need.</p>
                        <a href="https://3-d-tshirt-customizer-eight.vercel.app/">Demo link</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>GeekFlare</h2>
                        <p>Your personal Ai assistant in which you can write your email , letter and whatever you want.</p>
                        <a href="https://geekflare-fe.vercel.app/">Demo link</a>
                    </div>
                </div>
            </div> */}
      <CardContainer>
        {projects.map((project) => {
          return (
            <Card
              onClick={() => setOpenModal({ state: true, project: project })}
            >
              <Image src={project.image} />
              <Tags>
                {project.tags?.map((tag, index) => (
                  <Tag>{tag}</Tag>
                ))}
              </Tags>
              <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
              </Details>
              <Members>
                {project.member?.map((member) => (
                  <Avatar src={member.img} />
                ))}
              </Members>
              {/* <Button>View Project</Button> */}
            </Card>
          );
        })}
      </CardContainer>

      {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
    </div>
  );
};

export default Projects;
