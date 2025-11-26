'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    image: '/imgs/AI1.png',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    model: undefined,
    screenshots: ['/imgs/XJ0.png', '/imgs/XJ1.jpg', '/imgs/XJ2.jpg', '/imgs/XJ3.jpg', '/imgs/XJ4.jpg', '/imgs/XJ5.jpg'],
  },
  {
    title: '工业AI视觉算法平台',
    description:
      '负责该项目数据集管理、数据标注等前端开发，实现2D/3D数据Web可视化，并调研相关新技术。',
    technologies: ['Vue3','Three.js','Echarts','TailWindCss','Canvas',],
    image: '/imgs/AI2.png',
    github: 'https://github.com/DongMenKant/canvas-select-plus',
    live: 'https://www.npmjs.com/package/canvas-select-plus',
    featured: true,
    model: undefined,
    screenshots: ['/imgs/AI0.png', '/imgs/AI1.png','/imgs/AI2.png', '/imgs/AI3.png', '/imgs/AI4.png','/imgs/AI5.png'],
  },
  {
    title: '农村集体三资管理平台',
    description:
      '负责前期的需求调研，可视化大屏、管理平台和小程序的前端开发工作。',
    technologies: ['Vue3', 'UniApp','WotUI','Leaflet','DataV','Echarts'],
    image: '/imgs/SZ1.png',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    model: undefined,
    screenshots: ['/imgs/SZ1.png'],
  },
  {
    title: '健身日志APP',
    description:
      '自研开发健身日志APP，基于Pixso生成设计稿，并使用Uni-app + WotUI + UnoCSS框架开发，用于设置训练计划和记录训练日志。',
    technologies: ['Uni-app', 'WotUI', ' Next.js', 'MongoDB'],
    image: '/imgs/AI4.png',
    github: 'https://github.com/DongMenKant/fitness-diary-vue-uniapp',
    live: '',
    featured: false,
    model: '/models/GasolineBarrel.glb',
    screenshots: ['/imgs/JS1.png', '/imgs/JS2.png'],
  },
  {
    title: 'Canvas-Select-Plus',
    description:
      '基于Canvas开发的2D图像标注组件，简单轻量，支持矩形、多边形、点、折线、圆形、Mask标注，支持复制、撤销、重做、刷子、钢笔等操作，配备SAM智能标注接口。',
    technologies: ['Canvas', 'JavaScript'],
    image: '/imgs/AI5.png',
    github: 'https://github.com/DongMenKant/canvas-select-plus',
    live: 'https://dongmenkant.github.io/canvas-select-plus/',
    featured: false,
    model: '/models/Roadblock.glb',
    screenshots: ['/imgs/CSP.png'],
  },
  {
    title: 'UE搭建电影级别场景',
    description:
      '通过UE5.5.2引擎，利用开源素材和Tripo3D辅助生成的模型，搭建电影级公路场景。',
    technologies: ['UE5', 'Tripo 3D'],
    image: '/imgs/AI1.png',
    github: '',
    live: '',
    featured: false,
    model: undefined,
    screenshots: ['/imgs/UE1.png', '/imgs/UE2.png', '/imgs/UE3.png', '/imgs/UE4.png'],
  },
  {
    title: '2D像素风横版闯关游戏',
    description:
      '通过Unity引擎，利用开源素材开发的像素风游戏，涉及player动画、音效、转场。',
    technologies: ['Unity', 'C#'],
    image: '/imgs/AI1.png',
    github: '',
    live: '',
    featured: false,
    model: undefined,
    screenshots: ['/imgs/UE1.png', '/imgs/UE2.png', '/imgs/UE3.png', '/imgs/UE4.png'],
  },
];


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  const modalScreenshots =
    selectedProject?.screenshots?.length
      ? selectedProject.screenshots
      : selectedProject?.image
        ? [selectedProject.image]
        : [];

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const total = modalScreenshots.length;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if (key === 'Escape') {
        setSelectedProject(null);
        return;
      }

      if (total > 1 && (key === 'ArrowLeft' || key === 'ArrowRight')) {
        event.preventDefault();
        setCurrentScreenshotIndex((prev) => {
          if (total <= 0) {
            return prev;
          }
          return key === 'ArrowLeft'
            ? (prev - 1 + total) % total
            : (prev + 1) % total;
        });
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject, modalScreenshots.length]);

  useEffect(() => {
    if (selectedProject) {
      setCurrentScreenshotIndex(0);
    }
  }, [selectedProject]);

  const handleOpenPreview = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setCurrentScreenshotIndex(0);
  };

  const handleClosePreview = () => {
    setSelectedProject(null);
    setCurrentScreenshotIndex(0);
  };

  const handlePrevScreenshot = () => {
    if (modalScreenshots.length <= 1) {
      return;
    }
    setCurrentScreenshotIndex(
      (prev) => (prev - 1 + modalScreenshots.length) % modalScreenshots.length,
    );
  };

  const handleNextScreenshot = () => {
    if (modalScreenshots.length <= 1) {
      return;
    }
    setCurrentScreenshotIndex(
      (prev) => (prev + 1) % modalScreenshots.length,
    );
  };

  const hasScreenshots = modalScreenshots.length > 0;
  const currentScreenshotSrc = hasScreenshots
    ? modalScreenshots[currentScreenshotIndex % modalScreenshots.length]
    : null;

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

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10"
            onClick={handleClosePreview}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} preview gallery`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-7xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClosePreview}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="关闭预览"
              >
                <X size={20} />
              </button>

              <h4 className="text-2xl font-bold mb-6">{selectedProject.title}</h4>
              <p className="text-gray-200 mb-8 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="relative flex flex-col items-center">
                {hasScreenshots ? (
                  <div className="relative mx-auto h-[550px] w-[1150px] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <Image
                      src={currentScreenshotSrc ?? ''}
                      alt={`${selectedProject.title} preview image`}
                      fill
                      sizes="(min-width: 1280px) 1150px, 100vw"
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="flex h-[300px] w-[400px] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black/40 p-12 text-center text-gray-300">
                    No preview image available
                  </div>
                )}
                {modalScreenshots.length > 1 && (
                  <div className="mt-4 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={handlePrevScreenshot}
                      className="rounded-full bg-white/15 p-3 text-white transition hover:bg-white/25"
                          aria-label="Previous preview image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <p className="text-sm text-gray-300">
                      {currentScreenshotIndex + 1} / {modalScreenshots.length}
                    </p>
                    <button
                      type="button"
                      onClick={handleNextScreenshot}
                      className="rounded-full bg-white/15 p-3 text-white transition hover:bg-white/25"
                          aria-label="Next preview image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}

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
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden mb-4">
                  <Image
                    src={project.screenshots?.[0] ?? project.image}
                    alt={`${project.title} 预览图`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay opacity-60"></div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={28} className="text-white" />
                    </a> */}
                    <button
                      type="button"
                      onClick={() => handleOpenPreview(project)}
                      className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      aria-label={`Preview ${project.title} gallery`}
                    >
                      <Eye size={28} className="text-white" />
                    </button>
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

                  <div className="flex gap-6">
                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20 font-bold"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a> */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-bold"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
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
                  {/* <ProjectModelCanvas modelUrl={project.model} /> */}
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <Image
                      src={project.screenshots?.[0] ?? project.image}
                      alt={`${project.title} 预览图`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay opacity-60"></div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                      <button
                        type="button"
                        onClick={() => handleOpenPreview(project)}
                        className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                        aria-label={`Preview ${project.title} gallery`}
                      >
                        <Eye size={28} className="text-white" />
                      </button>
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-white mt-4 mb-4">
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
                    {project.github&&(<a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20"
                    >
                      <Github
                        size={18}
                        className="text-gray-300 hover:text-white"
                      />
                    </a>)}
                    {project.live&&(<a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/20"
                    >
                      <ExternalLink
                        size={18}
                        className="text-gray-300 hover:text-white"
                      />
                    </a>)}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}











