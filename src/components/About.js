import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import background from './assets/about-background.svg'
import Entry from './Entry'
import { breakpoint } from '@aragon/ui'
const medium = css => breakpoint('medium', css)

const About = () => (
  <AboutSection id="about">
    <Container>
      <RoadmapContainer>
        <Entry entrypoint>
          <Title>ANJ Pre-Activation Begins</Title>
          <Subtitle>
            During this period potential jurors will be able to get the same
            amount of ANJ per ANT. When disputes begin, ANJ will only be
            accessible by staking ANT on a bonding curve for a variable market
            rate.
          </Subtitle>
        </Entry>
        <Entry entrypoint>
          <Title>First Disputes Begin</Title>
          <Subtitle>
            Jurors with at least 100 activated ANJ earn subscription fees as
            they await being drafted onto juries to adjudicate disputes.
          </Subtitle>
        </Entry>
        <Entry lastpoint />
      </RoadmapContainer>
    </Container>
  </AboutSection>
)

const AboutSection = styled.section`
  padding: 207px 15px 207px 15px;
  background: #f9fafc;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 700px;
`
const Container = styled.div`
  text-align: center;
  margin: auto;
  width: 525px;
`

const RoadmapContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 870px;
  padding: 0;
  position: relative;
  margin: auto;
  ${medium('padding: 5px 50px;')};

  &:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 9px;
    bottom: 20px;
    width: 2px;
    background: #ff9780;
    ${medium('left: 21.5px;')};
  }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-family: 'FontMedium';
  font-weight: 500;
  font-size: 37px;
  line-height: 38px;
  display: flex;
  align-items: center;
  color: #1c1c1c;
  padding-left: 40px;
`

const Subtitle = styled.h6`
  max-width: 350px;
  padding-left: 40px;
  font-family: 'FontRegular';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 31px;
  color: #8a96a0;
  margin: 0 0 100px 0;
`

export default About
