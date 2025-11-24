'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box3, MeshStandardMaterial, Vector3, type Group } from 'three';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
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
    screenshots: ['/imgs/AI1.png', '/imgs/AI2.png', '/imgs/AI3.png'],
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
    screenshots: ['/imgs/AI1.png','/imgs/AI2.png', '/imgs/AI3.png', '/imgs/AI4.png','/imgs/AI5.png'],
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
    title: 'Task Management App',
    description:
      'Real-time task management application with collaborative features. Built with React, Node.js, and Socket.io for real-time updates.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    image: '/imgs/AI4.png',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    model: '/models/GasolineBarrel.glb',
    screenshots: ['/imgs/AI1.png', '/imgs/AI4.png'],
  },
  {
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with real-time data and interactive charts. Integrates with OpenWeather API for accurate weather information.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    image: '/imgs/AI5.png',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    model: '/models/Roadblock.glb',
    screenshots: ['/imgs/AI2.png', '/imgs/AI5.png'],
  },
  {
    title: 'AI Chat Application',
    description:
      'Modern chat application powered by AI with real-time messaging, file sharing, and intelligent responses.',
    technologies: ['Next.js', 'OpenAI API', 'WebSocket', 'PostgreSQL'],
    image: '/imgs/AI1.png',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    model: '',
    screenshots: ['/imgs/AI3.png', '/imgs/AI4.png'],
  },
  {
    title: 'Crypto Tracker',
    description:
      'Real-time cryptocurrency tracking application with price alerts, portfolio management, and market analysis.',
    technologies: ['React', 'CoinGecko API', 'Chart.js', 'Firebase'],
    image: '/imgs/AI2.png',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    model: '',
    screenshots: ['/imgs/AI4.png', '/imgs/AI5.png'],
  },
];

function ProjectModelCanvas({ modelUrl }: { modelUrl?: string }) {
  const [model, setModel] = useState<Group | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!modelUrl) {
      setModel(null);
      setStatus('idle');
      setErrorMessage(null);
      return;
    }

    let cancelled = false;
    const loader = new GLTFLoader(); // \u4f7f\u7528 GLTFLoader \u8bfb\u53d6 glb \u6a21\u578b
    setStatus('loading');
    setErrorMessage(null);
    setModel(null);

    loader.load(
      modelUrl,
      (gltf) => {
        if (cancelled) {
          return;
        }

        const scene = (gltf as GLTF).scene || (gltf as GLTF).scenes?.[0];
        if (!scene) {
          setStatus('error');
          setErrorMessage('\u6a21\u578b\u5185\u5bb9\u4e3a\u7a7a');
          return;
        }

        const box = new Box3();
        const center = new Vector3();
        const size = new Vector3();

        scene.traverse((child) => {
          if ((child as any).isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (!child.material) {
              child.material = new MeshStandardMaterial({ color: 0xffffff });
            } else if ((child.material as any).color) {
              (child.material as any).color.convertSRGBToLinear();
            }
          }
        });

        box.setFromObject(scene);
        box.getSize(size);
        const maxAxis = Math.max(size.x, size.y, size.z) || 1;
        const targetSize = 3;
        const scale = targetSize / maxAxis;
        scene.scale.setScalar(scale);

        box.setFromObject(scene);
        box.getCenter(center);
        scene.position.sub(center);

        setModel(scene);
        setStatus('ready');
      },
      undefined,
      (error) => {
        if (cancelled) {
          return;
        }
        setStatus('error');
        setErrorMessage(error.message || '\u6a21\u578b\u52a0\u8f7d\u5931\u8d25');
      },
    );

    return () => {
      cancelled = true;
    };
  }, [modelUrl]);

  if (!modelUrl) {
    return (
      <div className="mb-6 flex h-56 items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 text-sm text-gray-300">
        No model preview available
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="mb-6 flex h-56 items-center justify-center rounded-xl border border-dashed border-red-400/40 bg-red-500/10 text-sm text-red-200">
        Model failed to load: {errorMessage}
      </div>
    );
  }

  return (
    <div className="mb-6 h-56 overflow-hidden rounded-xl border border-white/10 bg-black/40 relative">
      {status === 'loading' && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 text-sm text-gray-200">
          Loading model...
        </div>
      )}
      {model ? (
        <Canvas camera={{ position: [2.5, 2.5, 2.5], fov: 50 }} shadows dpr={[1, 2]}>
<color attach="background" args={['#dcdcdc']} />
          <hemisphereLight skyColor={0xffffff} groundColor={0x101010} intensity={0.8} />
          <directionalLight castShadow position={[6, 10, 6]} intensity={1.6}>
            <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10, 1, 40]} />
          </directionalLight>
          <spotLight position={[0, 6, 4]} angle={0.45} penumbra={0.5} intensity={1.2} castShadow />
          <ambientLight intensity={0.6} /> {/* \u73af\u5883\u5149\u63d0\u5347\u57fa\u7840\u4eae\u5ea6 */}
          <primitive object={model} />
          <OrbitControls enablePan={false} makeDefault enableZoom autoRotate autoRotateSpeed={1.4} />
        </Canvas>
      ) : (
        status === 'loading' && <div className="h-full w-full" />
      )}
    </div>
  );
}

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
                    <img
                      src={currentScreenshotSrc ?? ''}
                      alt={`${selectedProject.title} preview image`}
                      className="h-full w-full object-cover transition-transform duration-500"
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
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <img
                    src={project.screenshots?.[0] ?? project.image}
                    alt={`${project.title} 预览图`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                  <ProjectModelCanvas modelUrl={project.model} />
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











