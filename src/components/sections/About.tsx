'use client';

import { motion } from 'framer-motion';
import { Code, Puzzle, Globe, Smartphone, Palette, Blend } from 'lucide-react';

const skills = [
  {
    name: 'Web开发',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    description: 'Vue3, Next.js, TypeScript',
  },
  {
    name: '组件库',
    icon: Puzzle,
    color: 'from-green-500 to-emerald-500',
    description: 'Elementplus, WotUI, DataV',
  },
  {
    name: '数据可视化',
    icon: Palette,
    color: 'from-pink-500 to-purple-500',
    description: 'Canvas, Echarts, Three.js',
  },
  {
    name: '建模工具',
    icon: Blend,
    color: 'from-purple-500 to-pink-500',
    description: 'Blender, UE',
  },
  {
    name: '移动端',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    description: 'Uni-app',
  },
  {
    name: 'Webgis',
    icon: Globe,
    color: 'from-yellow-500 to-orange-500',
    description: 'Leaflet',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Passionate developer crafting digital experiences with modern
            technologies
          </p>
        </motion.div> */}

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-6 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-white">
              {/* Turning Ideas Into{' '} */}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {/* Reality */}技能介绍
              </span>
            </h3>
            <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                我是一名前端开发工程师，热衷于助力企业数字化、智能化转型，打造沉浸式数字体验。目前，我具备1-2年的前端开发工作经验，凭借 Vue3、React、Next.js、Uni-app、Three.js 和现代 Web 技术方面的专业知识，我能够通过简洁的代码和创新的解决方案，将创意变为现实。
              </p>
              <p>
                我对 3D 视觉呈现与交互充满热情，具备 WebGL 基础，并自学了 Blender 建模与 UE 游戏编程，了解建模流程及着色器等核心概念，能够参与三维场景的构建与实现。
              </p>
              <p>
                在日常工作中，我积极拥抱 AI 工具，如 CodeX、Trea、Framer AI 等，持续探索人机协作的开发模式以提升效率。工作之外，我乐于参与开源项目、钻研新兴技术，并与开发者社区积极交流、分享心得，共同成长。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-2xl`}
                >
                  <skill.icon size={36} className="text-white" />
                </div>
                <h4 className="text-white font-bold text-xl mb-3">
                  {skill.name}
                </h4>
                <p className="text-gray-400 text-sm font-light">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-16 text-white">
            专业技能
          </h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {[
              'Vue3',
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'Three.js',
              'Tailwind CSS',
              'Git',
              'Uni-app',
              'Leaflet',
              'Echarts',
              'Blender',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 font-medium text-lg"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
