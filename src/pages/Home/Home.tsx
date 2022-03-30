import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useScrollPosition } from '../../utils/hooks';
import { getImages, openLink } from '../../utils/helpers';
import { Direction } from '../../models/models';
import { TabletSize } from '../../models/variables';

import Header from '../../components/Header';
import ContentBlock from '../../components/ContentBlock';
import Footer from '../../components/Footer';

import pattern_001 from '../../assets/backgrounds/pattern_001.png';
import pattern_002 from '../../assets/backgrounds/pattern_002.png';
import oak_room_001 from '../../assets/nursery/oak-room-001.jpeg';
import chestnut_room_004 from '../../assets/nursery/chestnut-room-001.jpeg';

import image_001 from '../../assets/photos/image-001.png';
import image_002 from '../../assets/photos/image-002.png';
import image_003 from '../../assets/photos/image-003.png';
import image_004 from '../../assets/photos/image-004.png';
import image_006 from '../../assets/photos/image-006.png';
import image_009 from '../../assets/photos/image-009.png';

import { GREEN_200, SPACE_XL, HEADER_HEIGHT, PLATINUM_800 } from '../../styles/global';
import { Row, Column, Quote, Paragraph_1, Subheading } from '../../styles/shared';
import { Wrapper, HoverButton, Tagline, GalleryWrapper } from './Home.styles';

const Home = () => {
  const navigate = useNavigate();
  const scrollY = useScrollPosition();
  const headerOffset = HEADER_HEIGHT + SPACE_XL;

  const IsTablet = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const direction = IsTablet ? Direction.Column : Direction.Row;
  const columns = IsTablet ? 1 : 2.1;

  const images = [image_001, image_002, image_003, image_004];

  return (
    <Wrapper id='wrapper'>
      <Header scrollY={scrollY} shadow />
      <ContentBlock
        backgroundImage={oak_room_001}
        scroll={{ start: 60, friction: 0.5 }}
        paddingTop={headerOffset}
        paddingBot={SPACE_XL}
        shadow
        fixedHeight={400}
        waveBottom
      >
        <Column centerH centerV>
          <Quote>Space to Explore and Grow</Quote>
          <Tagline color='white'>specialist providers of education &amp; childcare for 0-5 year olds</Tagline>
          <br />
          <HoverButton onClick={() => navigate('/contact-us')}>Contact Us</HoverButton>
        </Column>
      </ContentBlock>
      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Row between direction={direction}>
          <Column columns={columns}>
            <Subheading weight={700}>A Beautiful Space</Subheading>
            <Paragraph_1>
              The Grove Nursery & Preschool is a long-established and highly respected nursery located in a Victorian warehouse in the heart of Islington.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              The settings childcare philosophy has developed a unique system that draws on the best practices from Froebel, Montessori, and Reggio Emilia while
              adhering to the Early Years Foundation Stage framework
            </Paragraph_1>
            <br />
            <Paragraph_1>
              At The Grove we provide children with the opportunities and the help they need to become confident, happy, successful and fulfilled individuals.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              The Grove provides unique, quality care and education because it is independent of any chain. We are flexible and approachable and offer each
              child and parent personal attention.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              The Grove is a wonderfully spacious nursery; there are five rooms specifically equipped for the children who are grouped according to age so that
              babies, toddlers, and pre school children all have their own areas.{' '}
            </Paragraph_1>
          </Column>
          <br />
          <Column columns={columns}>
            <GalleryWrapper>
              <ImageGallery items={getImages(images)} showPlayButton={false} showNav={false} autoPlay slideInterval={3000} />
            </GalleryWrapper>
          </Column>
        </Row>
      </ContentBlock>
      <ContentBlock backgroundImage={pattern_001} repeatPattern shadow paddingTop={100} paddingBot={100} waveTop waveBottom>
        <Column centerH centerV>
          <Tagline>
            The Grove is a wonderfully spacious nursery; it is split into five main areas for the children. On the upper ground floor there are three areas: Oak
            Room, our school room for the upper preschool, Elm Room for our preschool children, and Chestnut Room for our 2-3 year olds.
            <br />
            <br />
            On the lower ground floor are Willow Room, our baby room for children from 3 months to 12 months and Maple Room, our toddler room for children from
            1 to 2 years.
            <br />
            <br />
          </Tagline>
          <HoverButton onClick={() => navigate('/our-nursery')}>Our Nursery</HoverButton>
        </Column>
      </ContentBlock>
      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Row between direction={direction}>
          <Column columns={columns}>
            <GalleryWrapper>
              <ImageGallery items={getImages([image_006])} showPlayButton={false} showNav={false} showFullscreenButton={false} />
            </GalleryWrapper>
          </Column>
          <br />
          <Column columns={columns}>
            <Subheading weight={700}>A Safe and Secure Place</Subheading>
            <Paragraph_1>
              The nursery is privately owned by Elaine Catchpole and Rebecca Browne, who founded the nursery in 1999. After years of working in both private and
              state nursery education, they set up The Grove to provide an enriched environment to meet the needs of both parents and children.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              It has close transport links with Angel, Highbury & Islington and Old Street tube station and Essex Road overground station. There are good bus
              links.
            </Paragraph_1>
            <br />
            <Paragraph_1>In 2005, The Grove was awarded Islington’s Quality Assurance in Childcare, an award it has retained ever since.</Paragraph_1>
            <br />
            <Paragraph_1>
              The nursery is currently part of Islington’s Letters and Sounds and ECAT (Every child’s a talker) and has an Early Language Lead Practitioner
              (ELLP) who leads on ECAT.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              In 2015, The Grove became the first nursery in Islington to be awarded Healthy Early Years (HEY) status. The nursery was awarded Outstanding by
              Ofsted in both 2010 and 2016, with the latest inspection in 2020 being Good.
            </Paragraph_1>
          </Column>
        </Row>
      </ContentBlock>
      <ContentBlock backgroundImage={pattern_002} repeatPattern shadow paddingTop={100} paddingBot={100} waveTop waveBottom>
        <Column centerH centerV>
          <Tagline>
            At The Grove we have always upheld green ideologies, using organic food, cloth nappies and teaching the children to love and respect the natural
            world. 2017 saw the introduction of Forest School to the delivery model, and in 2021 The Grove registered to become an Eco nursery and Plastic Free
            Nursery.
            <br />
            <br />
            We are currently planting a grove outside of The Grove as they sponsor the planting of a tree with the National Forest for every one of their school
            leavers.
            <br />
            <br />
          </Tagline>
          <HoverButton onClick={() => navigate('/forest-school')}>Forest School</HoverButton>
        </Column>
      </ContentBlock>
      <ContentBlock paddingTop={SPACE_XL} paddingBot={SPACE_XL}>
        <Row between direction={direction}>
          <Column columns={columns}>
            <Subheading weight={700}>A Space to Explore and Grow</Subheading>
            <Paragraph_1>
              The Grove is founded on clear educational principles. The nursery follows the Early Years Foundation Stage framework and has developed a
              well-defined system that implements the best practices from Froebel, Montessori, and Reggio Emilia.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              The Grove’s philosophy is underscored by children learning through play, all of which is child-led and teacher supported. Children are provided
              with space to explore and learn about their world, feelings, abilities, and interactions with others. We believe to make full use of these
              experiences, children need love, reassurance, and guidance.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              We provide children with the opportunities and the help they need to become confident, happy, successful, and fulfilled individuals. The bespoke
              design and physical environment of The Grove encourages children to explore freely and make full use of all their senses. This enables boundless
              potential as a learner whilst providing a deeper understanding of themselves, others, and their environment.
            </Paragraph_1>
            <br />
            <Paragraph_1>
              The Grove offers extra lessons taught by specialised teachers in French, Spanish, music, drama, baby and toddler yoga, and Sports school sessions.
              All our staff are trained Forest School practitioners and take the children out for Forest School sessions.
            </Paragraph_1>
            <br />
            <Row centerH centerV>
              <HoverButton onClick={() => navigate('/our-classes')}>Our Classes</HoverButton>
            </Row>
          </Column>
          <br />
          <Column columns={columns}>
            <GalleryWrapper>
              <ImageGallery items={getImages([image_009])} showPlayButton={false} showNav={false} showFullscreenButton={false} />
            </GalleryWrapper>
          </Column>
        </Row>
      </ContentBlock>
      <ContentBlock
        backgroundImage={chestnut_room_004}
        scroll={{ start: 0, friction: 0.8 }}
        fixedHeight={300}
        paddingTop={SPACE_XL}
        paddingBot={SPACE_XL}
        shadow
        waveTop
      />
      <Footer color={GREEN_200}></Footer>
    </Wrapper>
  );
};

export default Home;
