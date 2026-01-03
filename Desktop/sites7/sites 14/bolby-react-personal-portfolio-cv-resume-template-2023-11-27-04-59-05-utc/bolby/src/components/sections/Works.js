import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const filters = [
  {
    id: 1,
    text: "Everything",
  },
  {
    id: 2,
    text: "ai-ml",
  },
  {
    id: 3,
    text: "web",
  },
  {
    id: 4,
    text: "saas",
  },
  {
    id: 5,
    text: "mobile",
  },
];

const allData = [
  {
    id: 1,
    title: "Cybersecurity Analysis Platform",
    category: "ai-ml",
    image: "images/works/1.svg",
    description: "ML-powered vulnerability scanning and threat detection system with real-time monitoring dashboard.",
    link: "https://github.com/Abdoolos",
  },
  {
    id: 2,
    title: "Call Center Analytics System",
    category: "ai-ml",
    image: "images/works/2.svg",
    description: "AI platform for sentiment analysis and conversation quality scoring at scale.",
    link: "https://github.com/Abdoolos",
  },
  {
    id: 3,
    title: "NAV AI Assistant (RAG System)",
    category: "ai-ml",
    image: "images/works/3.svg",
    description: "Intelligent assistant using RAG architecture for public service information retrieval.",
    link: "https://github.com/Abdoolos",
  },
  {
    id: 4,
    title: "AI-Powered SaaS Platforms",
    category: "saas",
    image: "images/works/4.svg",
    description: "Multiple intelligent SaaS applications with authentication, payments, and AI integration.",
    link: "https://github.com/Abdoolos",
  },
  {
    id: 5,
    title: "InnoMind AI Platform",
    category: "saas",
    image: "images/works/5.svg",
    description: "AI system for generating innovative product ideas and market insights.",
    link: "https://github.com/Abdoolos",
  },
  {
    id: 6,
    title: "Emotion Detection AI",
    category: "ai-ml",
    image: "images/works/6.svg",
    description: "Real-time AI system for detecting emotional states from user input.",
    link: "https://github.com/Abdoolos",
  },
  {
    id: 7,
    title: "React Native Mobile Apps",
    category: "mobile",
    image: "images/works/1.svg",
    description: "Cross-platform apps including restaurant discovery, booking systems, and AI chat.",
    link: "https://github.com/Abdoolos",
  },
  {
    id: 8,
    title: "Digital Marketing Intelligence",
    category: "web",
    image: "images/works/2.svg",
    description: "AI tools for content analysis, competitive intelligence, and campaign optimization.",
    link: "https://github.com/Abdoolos",
  },
];

function Works() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setActiveFilter(e.target.textContent.toLowerCase());
    let tempData;
    if (e.target.textContent.toLowerCase() === filters[0].text.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter(
        (data) =>
          data.category === e.target.textContent.toLowerCase() &&
          data.id <= dataVisibleCount
      );
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        console.log("they are same");
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(
          getAllItems.filter(
            (data) => data.category === activeFilter && data.id <= tempCount
          )
        );
      }
    }
  };

  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Filters */}
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
        >
          <ul className="portfolio-filter list-inline">
            {filters.map((filter) => (
              <li className="list-inline-item" key={filter.id}>
                <button
                  onClick={handleChange}
                  className={
                    filter.text.toLowerCase() === activeFilter
                      ? "text-capitalize current"
                      : "text-capitalize"
                  }
                >
                  {filter.text}
                </button>
              </li>
            ))}
          </ul>
        </ScrollAnimation>
        {/* End Portfolio Filters */}

        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}

        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
            onClick={handleLoadmore}
            disabled={noMorePost ? "disabled" : null}
          >
            {noMorePost ? (
              "No more items"
            ) : (
              <span>
                <i className="fas fa-spinner"></i> Load more
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
