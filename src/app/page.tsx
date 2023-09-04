'use client'

import PartnersSection from './components/PartnersSection/PartnersSection';
import AimSection from './components/aimSection/AimSection';
import AuthorSection from './components/authorSection';
import CarouselSection from './components/carouselSection/CarouselSection';
import CourseCard from './components/courseCard/CourseCard';
import CustomCarousel from './components/customCarousel/CustomCarousel';
import customCarouselSettingsConstants from './components/customCarousel/customCarouselSettingsConstants';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ImageTextSection from './components/imageTextSection/ImageTextSection';
import OpinionSection from './components/opinionSection/OpinionSections';
import Preloader from './components/preloader/Preloader';
import TiktokVidsSection from './components/tiktokVids/TikTokVidsSection';
import { useRef, useState } from 'react';
import { Course } from './utils/models/Course';
import { ImageTextBlock } from './utils/models/ImageTextBlock';

export default function Home() {

  const coursesCarouselRef = useRef<any>(null);
  const contactRef = useRef<any>(null);
  const [preloader, setPreloader] = useState<boolean>(false);
  const [courses, setCourses] = useState<Array<Course>>([]);
  const [ authorCourseBlock, setAuthorCourseBlock ] = useState<ImageTextBlock>();
  const [ imageTextBlocks, setImageTextBlocks ] = useState<Array<ImageTextBlock>>([]);
  const executeScroll = () => coursesCarouselRef.current.scrollIntoView();
  
  return (
    <>
    {preloader ? (
      <Preloader />
    ) : (
      <div className="home">
        <Header contactref={contactRef} coursesCarouselRef={coursesCarouselRef} />
        <AimSection />
        { imageTextBlocks.map((block) => {
          return(
            <div key={block?.id}>
              <ImageTextSection
                  buttonAction={ executeScroll }
                  buttonName={"Dołącz do webinaru"}
                  imageLink={block.image}
                  title={block.title}
                  text={block.text}
                  reverse={block?.reverse}
                  />
            </div>
          )
        })}
        <AuthorSection/>
        <CarouselSection title="Co wyróżnia nasz webinar?" />
        <div
          id="courses"
          className="home-course-title"
          data-aos={"fade-down"}
          data-aos-duration="1500"
          data-aos-delay="150">
          <p ref={coursesCarouselRef} className=" blueSecondaryHeader">Zapraszamy na Webinar!</p>
        </div>
        <div className="home-course-types">
          <CustomCarousel settings={customCarouselSettingsConstants.customCourseCarouselSettings}>
            {courses.map((course, index) => {
              return (
                <CourseCard
                  key={index}
                  course={course}
                />
              );
            })}
          </CustomCarousel>
        </div>
        <PartnersSection/>
        <TiktokVidsSection/>
        <OpinionSection/>
        <Footer />
      </div>
    )}
  </>
  )
}
