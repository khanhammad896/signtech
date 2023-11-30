import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getRem } from "../../utils/helper";
import DashboardLayout from "../../components/dashboard/layout";
import { colors, fonts } from "../../utils/theme";

const Tutorial = () => {
  return (
    <DashboardLayout>
      <TutorialWrapper>
        <h1>A Step-by-Step Guide on How UPA sign Works</h1>
        <p>
          Welcome to our comprehensive product tutorial video! In this
          step-by-step guide, we will walk you through how our innovative{" "}
          <Link to="/">UPA sign</Link> works and showcase its incredible
          features. Whether you're a new user or simply curious about the inner
          workings of our product, this tutorial video will provide you with a
          clear understanding of its functionality and demonstrate how it can
          benefit you. Join us as we delve into the intricacies of{" "}
          <Link to="/">UPA sign</Link>, empowering you to make the most of this
          cutting-edge solution.
        </p>
        <div className="video-container">
          <video controls={true} autoPlay>
            <source src="https://ai-sign-tech-storage.s3.us-west-2.amazonaws.com/UPASignTutorial.mp4" />
          </video>
        </div>
      </TutorialWrapper>
    </DashboardLayout>
  );
};

export default Tutorial;

const TutorialWrapper = styled.div`
  h1 {
    font-family: ${fonts.semibold};
    font-size: ${getRem(32)};
    color: ${colors.black};
  }
  p {
    margin-top: ${getRem(12)};
    margin-bottom: ${getRem(24)};
    font-family: ${fonts.regular};
    font-size: ${getRem(16)};
    color: ${colors.foreBlack};
    line-height: ${getRem(24)};

    a {
      color: ${colors.themeBlue};

      &:hover {
        text-decoration: underline;
      }
    }
  }
  .video-container {
    width: 100%;
    display: flex;
    justify-content: center;
    width: 100%;
    video {
      max-height: ${getRem(540)};
      height: auto;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: ${getRem(24)};
    }

    p {
      font-size: ${getRem(14)};
      line-height: ${getRem(20)};
    }
    .video-container {
      video {
        width: 80%;
      }
    }
  }
`;
