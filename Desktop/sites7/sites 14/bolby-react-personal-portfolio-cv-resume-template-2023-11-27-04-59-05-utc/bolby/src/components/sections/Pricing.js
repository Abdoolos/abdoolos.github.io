import React from "react";
import Pagetitle from "../elements/Pagetitle";

const trainingPrograms = [
  {
    id: 1,
    title: "AI & Machine Learning Fundamentals",
    icon: "fas fa-brain",
    color: "#6C6CE5",
    topics: [
      "Introduction to Machine Learning concepts",
      "Supervised & Unsupervised Learning",
      "Neural Networks fundamentals",
      "Practical AI applications in business",
      "Hands-on projects with real datasets",
    ],
    duration: "2-3 Days",
    format: "On-site / Remote",
  },
  {
    id: 2,
    title: "Full-Stack Development Bootcamp",
    icon: "fas fa-code",
    color: "#FF4C60",
    topics: [
      "Modern React & Next.js development",
      "Node.js & Express backend",
      "MongoDB & database design",
      "API development & integration",
      "Deployment & DevOps basics",
    ],
    duration: "3-5 Days",
    format: "On-site / Remote",
    featured: true,
  },
  {
    id: 3,
    title: "AI Integration for Business",
    icon: "fas fa-robot",
    color: "#44D7B6",
    topics: [
      "ChatGPT & LLM integration",
      "Building AI-powered chatbots",
      "RAG systems & knowledge bases",
      "Automation with AI agents",
      "AI strategy for enterprises",
    ],
    duration: "1-2 Days",
    format: "On-site / Remote",
  },
];

function Pricing() {
  return (
    <section id="prices">
      <div className="container">
        <Pagetitle title="Corporate Training Programs" />
        <p className="text-center mb-5" style={{color: '#8b88b1', maxWidth: '600px', margin: '0 auto 40px'}}>
          Empower your team with cutting-edge skills in AI, Machine Learning, and Modern Web Development. 
          Customized training programs tailored to your company's needs.
        </p>
        <div className="row">
          {trainingPrograms.map((program) => (
            <div key={program.id} className="col-md-4 mb-4">
              <div 
                className="rounded bg-white shadow-dark p-4 h-100"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: program.featured ? `2px solid ${program.color}` : 'none',
                }}
              >
                {program.featured && (
                  <span 
                    style={{
                      position: 'absolute',
                      top: '15px',
                      right: '-30px',
                      background: program.color,
                      color: '#fff',
                      padding: '5px 40px',
                      fontSize: '12px',
                      transform: 'rotate(45deg)',
                    }}
                  >
                    Popular
                  </span>
                )}
                <div 
                  className="text-center mb-4"
                  style={{
                    width: '70px',
                    height: '70px',
                    background: `${program.color}20`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                  }}
                >
                  <i className={program.icon} style={{fontSize: '28px', color: program.color}}></i>
                </div>
                <h4 className="text-center mb-3" style={{color: '#454360', fontSize: '18px'}}>
                  {program.title}
                </h4>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 20px'}}>
                  {program.topics.map((topic, index) => (
                    <li 
                      key={index} 
                      style={{
                        padding: '8px 0',
                        borderBottom: '1px solid #eee',
                        color: '#5e5c7f',
                        fontSize: '14px',
                      }}
                    >
                      <i className="fas fa-check" style={{color: program.color, marginRight: '10px'}}></i>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-auto">
                  <p style={{color: '#8b88b1', fontSize: '13px', marginBottom: '5px'}}>
                    <i className="fas fa-clock" style={{marginRight: '5px'}}></i>
                    {program.duration}
                  </p>
                  <p style={{color: '#8b88b1', fontSize: '13px', marginBottom: '15px'}}>
                    <i className="fas fa-laptop" style={{marginRight: '5px'}}></i>
                    {program.format}
                  </p>
                  <a 
                    href="#contact" 
                    className="btn btn-default"
                    style={{
                      background: program.color,
                      border: 'none',
                      padding: '10px 25px',
                      fontSize: '14px',
                    }}
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p style={{color: '#8b88b1', fontSize: '14px'}}>
            <i className="fas fa-info-circle" style={{marginRight: '8px'}}></i>
            All programs can be customized based on your team's experience level and specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
