import { motion } from "framer-motion";
import { Download, MapPin, Mail } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Founder and Lead Developer",
      company: "SparkOS",
      period: "2021 - 2024",
      description: "Lead developer of SparkOS, a custom android operating system.",
      achievements: [
        "Managed a team of over 10 developers",
        "Implemented features used by 10000+ users",
      ]
    },
    {
      title: "Linux System Administrator",
      company: "GoIndi", 
      period: "2020 - 2022",
      description: "Managed Linux servers and provided technical support.",
      achievements: [
        "Maintained 99.9% uptime for critical systems",
        "Automated server management tasks using scripts", 
        "Set up and management of services like Nginx, Apache, Jenkins, Docker and Gerrit"
      ]
    }
  ];

  const skills = [
    { category: "Frontend", items: ["Tailwind CSS"] },
    { category: "Backend", items: ["Python", "PostgreSQL", "Sqlite", "C", "Java"] },
    { category: "Tools", items: ["Git", "Docker"] }
  ];

  const education = [
    {
      degree: "UnderGraduate student in Electrical and Computer Engineering",
      school: "University of Patras",
      period: "2024 - current"
    },
    {
      degree: "High School Diploma",
      school: "Ioneidios School of Peiraus",
      period: "2018-2024",
      gpa: "19.4/20"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Experienced developer with a passion for creating innovative solutions and leading teams.
          </p>
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // In a real application, you would link to your actual PDF resume
              window.open("/resume.pdf", "_blank");
            }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Resume
          </motion.button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Replaced grid with a more robust flexbox layout for better spacing */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-y-4 md:gap-x-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">kalligeross@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">Athens, Greece</span>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-blue-600 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="md:flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    </div>
                    <div className="md:flex-shrink-0 md:ml-4">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-blue-600 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="md:flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    </div>
                    <div className="md:flex-shrink-0 md:ml-4">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">{edu.school}</p>
                  {edu.gpa && (
                    <p className="text-gray-600 dark:text-gray-400 mb-2">GPA: {edu.gpa}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
