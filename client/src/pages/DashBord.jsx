import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PodcastCard from "../components/PodcastCard";
import PodcastDetails from "../utils/PodcastDetails.json";

const DashBord = () => {
  const genres = [
    "culture",
    "business",
    "education",
    "health",
    "comedy",
    "news",
    "science",
    "history",
    "religion",
    "development",
    "sports",
    "crime",
  ];
  console.log(PodcastDetails[genres[1]]);
  return (
    <MainDashBoard>
      {genres.map((category, i) => (
        <Filter key={i} id={category}>
          <Topic>
            {category.toLocaleUpperCase()}
            <Link className="categorys" to={"#"}>
              <span>Show all</span>
            </Link>
          </Topic>
          <PodCast>
            {PodcastDetails[category].map((podcast, j) => (
              <PodcastCard
                key={j}
                title={podcast.title}
                about={podcast.about}
                creator={podcast.creator.name}
                views={podcast.views}
              />
            ))}
          </PodCast>
        </Filter>
      ))}
    </MainDashBoard>
  );
};

export default DashBord;

const MainDashBoard = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  padding-bottom: 200px;
  height: 100%;
  flex-direction: scroll;
  gap: 10px;
  overflow-y: scroll;
  @media (max-width: 720px) {
    padding: 6px 10px;
    margin: 8px;
  }
`;
const Topic = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 2px;
  font-size: 24px;
  .categorys {
    text-decoration: none;
    font-weight: 300;
    color: ${({ theme }) => theme.primary};
    font-size: 20px;
    @media (max-width: 720px) {
      font-size: 14px;
    }
  }
  @media (max-width: 720px) {
    font-size: 18px;
  }
`;

const Filter = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.bg};
  border: none;
  border-radius: 5px;

  padding: 6px;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const PodCast = styled.div`
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  padding-left: 30px;
  background-color: ${({ theme }) => theme.bgLight};
  @media (max-width: 720px) {
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    gap: 30px;
  }
`;
