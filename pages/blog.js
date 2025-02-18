import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blog() {

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10">
      <div className="max-w-15xl mx-auto px-4 md:px-8 bg-white shadow-lg rounded-lg p-6 md:p-12">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          My College Life – A Journey of Growth and Learning
        </h1>

        <p className="text-gray-700 leading-relaxed text-small">
          My journey at <strong>Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTUGV)</strong>
          has been a transformative experience filled with learning, challenges, and opportunities. Over the past four years,
          college has been more than just academics—it has been a platform for skill development, professional growth, and
          personal transformation.
        </p>

        <h2 className="text-xl font-semibold mt-8 text-gray-800">Academics – A Constant Learning Curve</h2>
        <p className="text-gray-700 leading-relaxed text-small">
          During my B.Tech, I explored various technical domains, including <strong>Cybersecurity, Database Management,
          Web Development, Artificial Intelligence, and Machine Learning</strong>. Each semester introduced new challenges,
          pushing me to enhance my problem-solving skills.
        </p>

        <h2 className="text-xl font-semibold mt-8 text-gray-800">Internships – The First Step into the Industry</h2>
        <p className="text-gray-700 leading-relaxed text-small">
          My internships in <strong>Cybersecurity, Software Testing, and Full-Stack Development</strong> provided real-world
          exposure and helped bridge the gap between theoretical knowledge and practical applications.
        </p>

        <h2 className="text-xl font-semibold mt-8 text-gray-800">Projects – A Practical Approach to Learning</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed text-small pl-4 md:pl-6">
          <li><strong>Full-Stack Web Development Projects</strong> – Building websites, developing RESTful APIs</li>
          <li><strong>Cybersecurity Projects</strong> – Real-time threat analysis, malware detection</li>
          <li><strong>AI & ML Projects</strong> – AI-based traffic management solutions</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 text-gray-800">College Activities – Leadership and Engagement</h2>
        <p className="text-gray-700 leading-relaxed text-small">
          Beyond academics, I actively contributed to <strong>developing the official JNTUGV University website as a Full-Stack Developer</strong>
          and also served as a <strong>coordinator for a React.js workshop</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 text-gray-800">Placements – Preparing for the Next Step</h2>
        <p className="text-gray-700 leading-relaxed text-small">
          As I approach the final phase of my college life, I have been focusing on strengthening my skills in <strong>Linux, AWS, and DevOps</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-8 text-gray-800">Conclusion – Four Years of Growth and Experience</h2>
        <p className="text-gray-700 leading-relaxed text-small">
          These four years have shaped me into a better problem-solver, a more confident professional, and a lifelong learner.
          <strong>My college life will always remain a memorable chapter in my journey.</strong>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
  
}
