import React, { useState } from "react";
import styles from "./Infoslides.module.css";
import star from "../../../assets/Home/star.png";

export default function InfoSlides() {
  const [checkClick, setCheckClick] = useState("LEARNING PATHWAYS");
  const [slide, setSlide] = useState(
    <div className={styles.main_slide_div}>
      <h3>Interlinking Pathways</h3>
      <h5>
        This programme gives us 5 important interlinking Learning Pathways.
      </h5>
      <ul className={styles.ul_slide}>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>COMPUTATIONAL THINKING</h4>
            <p>
              Within the programme the students are enabled to express problems
              and form solutions that will be designed so a computer can be used
              to create diverse and encapsulating applications.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>DEVELOPING DIGITAL OUTCOMES</h4>
            <p>
              This programme is designed to strengthen the outcomes of each
              students personally to form strong applications.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>DESIGNING PROCESSED OUTCOMES</h4>
            <p>
              Students will be taught the ways of how outcomes are processed,
              thought about, and produced.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>DEVELOP VISUAL AND SOCIAL COMMUNICATIONS</h4>
            <p>
              Students will learn to design visually pleasing applications used
              to both keep the user aware of what is happening on the screen.
            </p>
          </div>
        </li>

        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>STRONG TECHNOLOGICAL PRACTICES</h4>
            <p>
              The programme will show students the best practices to think and
              solve the problems brought on by using technology.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );

  // slides content
  const learningPathwaysSlide = (
    <div className={styles.main_slide_div}>
      <h3>Interlinking Pathways</h3>
      <h5>
        This programme gives us 5 important interlinking Learning Pathways.
      </h5>
      <ul className={styles.ul_slide}>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>COMPUTATIONAL THINKING</h4>
            <p>
              Within the programme the students are enabled to express problems
              and form solutions that will be designed so a computer can be used
              to create diverse and encapsulating applications.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>DEVELOPING DIGITAL OUTCOMES</h4>
            <p>
              This programme is designed to strengthen the outcomes of each
              students personally to form strong applications.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>DESIGNING PROCESSED OUTCOMES</h4>
            <p>
              Students will be taught the ways of how outcomes are processed,
              thought about, and produced.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>DEVELOP VISUAL AND SOCIAL COMMUNICATIONS</h4>
            <p>
              Students will learn to design visually pleasing applications used
              to both keep the user aware of what is happening on the screen.
            </p>
          </div>
        </li>

        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>STRONG TECHNOLOGICAL PRACTICES</h4>
            <p>
              The programme will show students the best practices to think and
              solve the problems brought on by using technology.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
  const digitalTechnologiesSlide = (
    <div className={styles.main_slide_div}>
      <h3>Expands Digital Knowledge Base</h3>
      <h5>
        This programme gives you the 5 major capabilities to be confident in
        Digital Technologies.
      </h5>
      <ul className={styles.ul_slide}>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>PROBLEM SOLVING</h4>
            <p>
              The programme challenges are designed to think around multiple
              issues and challenges the way students interact with computers and
              other related technology.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>DECISION-MAKING</h4>
            <p>
              The programme uses technology to make the lives of many people
              happier through the decisions made when creating digital
              applications.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>CONFIDENCE</h4>
            <p>
              When having the skills to manipulate the applications and learning
              to use it brings self-confidence into your life.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>HIGHER SELF-EXPECTATIONS</h4>
            <p>
              This programme develops students to think the best of themselves
              to bring higher expectations to their learning and lives as young
              adults.
            </p>
          </div>
        </li>

        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>COHERENCE</h4>
            <p>
              This programme offers all students a broader education that makes
              links within and across learning areas.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
  const keyCompetenciesSlide = (
    <div className={styles.main_slide_div}>
      <h3>Enhance key competencies</h3>
      <h5>
        The programme enhances capabilities of students in the 5 Key
        Competencies identified in the New Zealand Curriculum:
      </h5>
      <ul className={styles.ul_slide}>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>THINKING</h4>
            <p>
              In particular the programme focused on problem solving, design
              thinking and computational thinking.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>DISCERNING CODES</h4>
            <p>
              Analysing language, symbols, and texts in order to understand and
              make sense of the codes in which knowledge is expressed.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>SELF-MANAGEMENT</h4>
            <p>
              Projects and challenges are designed to motivate students to
              explore and experiment with self-motivation.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>RELATIONSHIPS WITH PEERS</h4>
            <p>
              The programme is designed with unplugged sessions where students
              interact in a range of different situations, including things like
              being able to listen well, recognise different points of view, and
              share ideas.
            </p>
          </div>
        </li>

        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>PARTICIPATION AND COLLABORATION</h4>
            <p>
              The programme encourages students to be involved in communities,
              such as family, whanau, school, and contribute and make
              connections with other people.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
  const ir4Slides = (
    <div className={styles.main_slide_div}>
      <h3>IR4.0</h3>
      <h5>
        Designed with IT industry experts, the programme develops the students
        to find applicable jobs and careers in the Fourth Industrial Revolution.
        (IR4.0)
      </h5>
      <ul className={styles.ul_slide}>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>LEARNING TO LEARN</h4>
            <p>
              The programme will set challenges at the end of every project to
              encourage students to explore and learn how to learn.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>COMMUNITY ENGAGEMENT</h4>
            <p>
              The programme encourages students to be involved in the
              communities, such as family, friends, and in school, to contribute
              and make connections with other people.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>CULTURAL DIVERSITY</h4>
            <p>
              This programme is designed in New Zealand and reflects NZ's
              cultural diversity.
            </p>
          </div>
        </li>
        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>INCLUSION</h4>
            <p>
              In particular the programme is designed with acknowledgement to
              the student's identities and talents, allowing them to be creative
              to their personal ability.
            </p>
          </div>
        </li>

        <li className={styles.bullet_image}>
          <img src={star} alt="" />
          <div className={styles.li_text_content}>
            <h4>FUTURE FOCUS</h4>
            <p>
              The programme leads students to explore future themes such as
              artificial intelligence and augmented reality.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
  // slides content end

  // function to change slide content on button click and update active button for styling
  const handleClick = (e) => {
    if (e.target.innerText === "LEARNING PATHWAYS") {
      setSlide(learningPathwaysSlide);
      setCheckClick("LEARNING PATHWAYS");
    } else if (e.target.innerText === "DIGITAL TECHNOLOGIES") {
      setSlide(digitalTechnologiesSlide);
      setCheckClick("DIGITAL TECHNOLOGIES");
    } else if (e.target.innerText === "KEY COMPETENCIES") {
      setSlide(keyCompetenciesSlide);
      setCheckClick("KEY COMPETENCIES");
    } else if (e.target.innerText === "IR4.0") {
      setSlide(ir4Slides);
      setCheckClick("IR4.0");
    }
  };

  return (
    <div className={styles.main_div}>
      <h2>How our programme helps teachers and schools</h2>
      <div className={styles.buttons_div}>
        <button
          className={
            checkClick === "LEARNING PATHWAYS" ? styles.when_clicked : ""
          }
          onClick={handleClick}
        >
          LEARNING PATHWAYS
        </button>
        <button
          className={
            checkClick === "DIGITAL TECHNOLOGIES" ? styles.when_clicked : ""
          }
          onClick={handleClick}
        >
          DIGITAL TECHNOLOGIES
        </button>
        <button
          className={
            checkClick === "KEY COMPETENCIES" ? styles.when_clicked : ""
          }
          onClick={handleClick}
        >
          KEY COMPETENCIES
        </button>
        <button
          className={checkClick === "IR4.0" ? styles.when_clicked : ""}
          onClick={handleClick}
        >
          IR4.0
        </button>
      </div>
      {slide}
    </div>
  );
}
