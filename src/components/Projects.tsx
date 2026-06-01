'use client';

import SectionReveal from './SectionReveal';

interface MiniProject {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'live' | 'coming-soon';
  icon: string;
}

interface WorkProject {
  title: string;
  company: string;
  description: string;
  tags: string[];
  icon: string;
}

const miniProjects: MiniProject[] = [
  {
    title: 'AI Task Manager',
    description:
      'Full-stack Kanban task manager with AI-powered subtask breakdown, priority suggestions, and deadline estimation using Claude AI.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind', 'Claude AI'],
    liveUrl: 'https://ai-task-manager-rose.vercel.app/',
    githubUrl: 'https://github.com/vigneshvenkat/ai-task-manager',
    status: 'live',
    icon: '⚡',
  },
  {
    title: 'Finance Dashboard',
    description:
      'Personal expense tracker with charts, category breakdowns, and monthly summaries. Built with Next.js and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Charts'],
    status: 'coming-soon',
    icon: '📊',
  },
  {
    title: 'Real-time Chat App',
    description:
      'Full-stack chat application with rooms and real-time messaging using WebSockets. Node.js backend with React frontend.',
    tags: ['React', 'Node.js', 'TypeScript', 'WebSockets'],
    status: 'coming-soon',
    icon: '💬',
  },
];

const workProjects: WorkProject[] = [
  {
    title: 'CRM & ERP System',
    company: 'WI Energy',
    description:
      'Architected a bespoke CRM & ERP system resulting in 40% efficiency gain across sales, fleet, and field teams. ISO 27001 compliant with full GDPR coverage.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'ISO 27001'],
    icon: '🏢',
  },
  {
    title: 'Zoho CRM Integrations',
    company: 'Zoho Corporation',
    description:
      'Orchestrated third-party integrations doubling the number of connected apps and driving a 30% increase in product revenue.',
    tags: ['React', 'Vue.js', 'Node.js', 'REST APIs'],
    icon: '🔗',
  },
  {
    title: 'Zoho Vault Modernisation',
    company: 'Zoho Corporation',
    description:
      'Migrated legacy stack to React and Node.js, improving performance by 30% and contributing to a 20% increase in paid subscriptions.',
    tags: ['React', 'Node.js', 'Security', 'Browser Extensions'],
    icon: '🔐',
  },
];

const tagColors: Record<string, string> = {
  'Next.js': 'bg-purple-950 text-purple-300 border border-purple-800/60',
  TypeScript: 'bg-purple-950 text-purple-300 border border-purple-800/60',
  Tailwind: 'bg-purple-950 text-purple-300 border border-purple-800/60',
  'Claude AI': 'bg-green-950 text-green-300 border border-green-800/60',
  MongoDB: 'bg-blue-950 text-blue-300 border border-blue-800/60',
  Charts: 'bg-blue-950 text-blue-300 border border-blue-800/60',
  WebSockets: 'bg-blue-950 text-blue-300 border border-blue-800/60',
  React: 'bg-blue-950 text-blue-300 border border-blue-800/60',
  'Node.js': 'bg-green-950 text-green-300 border border-green-800/60',
  PostgreSQL: 'bg-blue-950 text-blue-300 border border-blue-800/60',
  'ISO 27001': 'bg-amber-950 text-amber-300 border border-amber-800/60',
  'Vue.js': 'bg-blue-950 text-blue-300 border border-blue-800/60',
  'REST APIs': 'bg-blue-950 text-blue-300 border border-blue-800/60',
  Security: 'bg-amber-950 text-amber-300 border border-amber-800/60',
  'Browser Extensions': 'bg-purple-950 text-purple-300 border border-purple-800/60',
};

const defaultTagColor = 'bg-gray-800 text-gray-400 border border-gray-700';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="w-full px-12 md:px-20">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Projects
          </h2>
          <p className="text-center text-gray-500 mb-12 text-sm">
            A mix of personal builds and professional work
          </p>
        </SectionReveal>

        {/* Mini Projects */}
        <SectionReveal delay={100}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs text-purple-400 uppercase tracking-widest">Mini Projects</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {miniProjects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 100}>
              <div
                className={`h-full bg-gray-900 border rounded-2xl p-6 flex flex-col transition-colors duration-300 ${
                  project.status === 'coming-soon'
                    ? 'border-gray-800/50 opacity-60'
                    : 'border-gray-800 hover:border-purple-800/60'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-lg flex-shrink-0">
                    {project.icon}
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      project.status === 'live'
                        ? 'bg-green-950 text-green-400 border border-green-800/60'
                        : 'bg-gray-800 text-gray-500 border border-gray-700'
                    }`}
                  >
                    {project.status === 'live' ? '● Live' : 'Coming Soon'}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-0.5 rounded-md ${tagColors[tag] ?? defaultTagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.status === 'live' && (
                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center gap-1"
                      >
                        Live ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200 flex items-center gap-1"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Work Projects */}
        <SectionReveal delay={100}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs text-blue-400 uppercase tracking-widest">Work Projects</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {workProjects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 100}>
              <div className="h-full bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col hover:border-blue-800/60 transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-lg flex-shrink-0 mb-4">
                  {project.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-blue-400 text-xs mb-3">{project.company}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-0.5 rounded-md ${tagColors[tag] ?? defaultTagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;