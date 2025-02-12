import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story main-story main-story secondary-stories'
      'advertisement advertisement advertisement advertisement'
      'opinion-stories opinion-stories opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story main-story secondary-stories opinion-stories'
      'main-story main-story secondary-stories opinion-stories'
      'main-story main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: solid 1px var(--color-gray-300);
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > a:not(:last-child) {
    border-bottom: solid 1px var(--color-gray-300);
  }

  @media ${QUERIES.tabletOnly} {
    & > a:not(:last-child) {
      border-bottom: none;
    }
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletOnly} {
    margin-left: -32px;

    & ${StoryList} {
      & > a:not(:last-child) {
        border-bottom: solid 1px var(--color-gray-300);
      }
    }
  }

  @media ${QUERIES.laptopAndUp} {
    border-right: solid 1px var(--color-gray-300);
    padding-right: 16px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly} {
    & ${StoryList} {
      flex-direction: row;
      justify-content: space-between;
      gap: 16px;
    }
  }

  @media ${QUERIES.laptopAndUp} {
    margin-left: -32px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: solid 1px var(--color-gray-300);
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
