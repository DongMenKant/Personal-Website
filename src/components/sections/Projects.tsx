'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    title: '智能电网巡检系统',
    description:
      '负责系统前端框架搭建、文档撰写，参与3D模型交互与海康摄像机视频管理。',
    technologies: [
      'Vue3',
      'Three.js',
      'Scoket',
      'RTSP',
      'Blender',
    ],
    image: '/api/placeholder/400/250',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: '工业AI视觉算法平台',
    description:
      '负责该项目数据集管理、数据标注等前端开发，实现2D/3D数据Web可视化，并调研相关新技术。',
    technologies: ['Vue3','Three.js','Echarts','TailWindCss','Canvas',],
    image: '/api/placeholder/400/250',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: '农村集体三资管理平台',
    description:
      '负责前期的需求调研，可视化大屏、管理平台和小程序的前端开发工作。',
    technologies: ['Vue3', 'UniApp','WotUI','Leaflet','DataV','Echarts'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'Real-time task management application with collaborative features. Built with React, Node.js, and Socket.io for real-time updates.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with real-time data and interactive charts. Integrates with OpenWeather API for accurate weather information.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'AI Chat Application',
    description:
      'Modern chat application powered by AI with real-time messaging, file sharing, and intelligent responses.',
    technologies: ['Next.js', 'OpenAI API', 'WebSocket', 'PostgreSQL'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Crypto Tracker',
    description:
      'Real-time cryptocurrency tracking application with price alerts, portfolio management, and market analysis.',
    technologies: ['React', 'CoinGecko API', 'Chart.js', 'Firebase'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-5 mb-10"
        >
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              项目经历
            </span>
          </h3>
          {/* <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Here are some of the projects I&apos;ve worked on, showcasing my
            skills and creativity
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-black text-white/10">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={28} className="text-white" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Eye size={28} className="text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-3xl font-black text-white mb-6">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/10 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* <div className="flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 font-bold"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-bold"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-white">
            更多作品
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <h4 className="text-2xl font-black text-white mb-4">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-base mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/10 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20"
                    >
                      <Github
                        size={18}
                        className="text-gray-300 hover:text-white"
                      />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20"
                    >
                      <ExternalLink
                        size={18}
                        className="text-gray-300 hover:text-white"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
