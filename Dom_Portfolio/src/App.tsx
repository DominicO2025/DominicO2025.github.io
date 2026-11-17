import './index.css'
import { useEffect, useState } from 'react'
import profile from './images/ProfilePicture.jpg'
import CMOSC from './images/cmosc-logo.jpg'
import WorldMarket from './images/WorldMarketSR.jpg'
import LARC from './images/Larc.png'
import ArcadeMachine from './images/ArcadeMachine.jpeg'
import Webscraper from './images/Webscraper.png'
import HuffmanTree from './images/Huffman-tree.png'
import Website from './images/Website.png'

const navItems = [
  ['Welcome', 'welcome'],
  ['Projects', 'projects'],
  ['Work Experience', 'experience'],
  ['Skills', 'skills'],
  ['About Me', 'about'],
]

function App() {
  const [projectKey, setProjectKey] = useState<string | null>(() => new URLSearchParams(window.location.search).get('project'))

  useEffect(() => {
    const syncProject = () => setProjectKey(new URLSearchParams(window.location.search).get('project'))
    window.addEventListener('popstate', syncProject)
    return () => window.removeEventListener('popstate', syncProject)
  }, [])

  const openProject = (key: string) => {
    window.history.pushState({}, '', `${window.location.pathname}?project=${key}`)
    setProjectKey(key)
  }

  const project = projectKey ? projects[projectKey as keyof typeof projects] : undefined

  if (project) {
    const openHome = (hash = '') => {
      window.history.pushState({}, '', `${window.location.pathname}${hash}`)
      setProjectKey(null)
    }
    return <ProjectPage project={project} onHome={openHome} onProjectChange={openProject} />
  }

  return (
    <>
      <header className="centered">
        <img className="profile" src={profile} alt="Portrait of Dominic Ortiz" />
        <h1 className="text">Dominic Ortiz</h1>
      </header>

      <div className="layout">
        <aside className="sidebar" aria-label="Page navigation">
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} className="nav-link" key={id}>
              <span className="text nav-button">{label}</span>
            </a>
          ))}
        </aside>

        <main className="content">
          <section>
            <h2 className="main-text" id="welcome">Welcome!</h2>
            <p className="main-text">Welcome to my website, where I share my work, projects, and professional journey. This space reflects my experience, skills, and the ideas I’m actively exploring. I’m glad you’re here and invite you to take a look around.</p>
          </section>

          <hr />

          <section>
            <h2 className="main-text" id="projects">Projects!</h2>
            <div className="project-text">
              <Project href="?project=arcade" projectKey="arcade" title="Arcade Machine!" onProjectChange={openProject}>Revamped arcade machine able to handle multiple different arcade games.</Project>
              <Project href="?project=website" projectKey="website" title="Website" onProjectChange={openProject}>This website created to give deeper information on who I am.</Project>
              <Project href="?project=webscraper" projectKey="webscraper" title="League Arena Tracker" onProjectChange={openProject}>Using an API to scrape video game information for personal use!</Project>
              <Project href="?project=huffman" projectKey="huffman" title="Huffman Encoder" onProjectChange={openProject}>Uses a Huffman tree to encode a txt file into binary.</Project>
            </div>
          </section>

          <hr />

          <section>
            <h2 className="main-text" id="experience">Work Experience!</h2>
            <Job title="Children's Museum of Sonoma County Internship" image={CMOSC} imageClass="proj-img">Led and supervised hands-on STEM activities for groups of children in a structured camp setting, helping them work through interactive stations focused on science and problem-solving. Followed a detailed daily schedule to transition groups smoothly between activities and keep sessions running on time. Prepared materials and activity spaces each day to ensure a safe and organized environment, and assisted with check-in, parent pickup, after-care supervision, and safety procedures. Worked closely with other interns and staff in a fast-paced environment, building strong communication and teamwork skills while maintaining a positive and supportive atmosphere for participants.</Job>
            <Job title="World Market" image={WorldMarket} imageClass="proj-img">Provided customer service in a busy retail environment by answering questions, helping customers find products, and ensuring a positive shopping experience. Operated the cash register responsibly by accurately processing transactions and handling payments while maintaining an organized checkout area. Restocked food and merchandise to keep shelves full and clearly labeled, and regularly recovered product displays to maintain a clean and organized store. Worked closely with coworkers and supervisors to complete daily tasks efficiently, demonstrating reliability by consistently supporting team operations and maintaining store standards.</Job>
            <Job title="SSU LARC" image={LARC} imageClass="job-img">Support students during Computer Science lectures and lab sessions by providing one-on-one and small-group assistance with programming concepts, assignments, and problem-solving. Collaborate with faculty to reinforce course material and provide additional support through scheduled tutoring and drop-in sessions. Help students develop stronger technical skills and independent problem-solving strategies while maintaining a supportive and engaging learning environment.</Job>
          </section>

          <hr />

          <section>
            <h2 className="main-text" id="skills">Skills!</h2>
            <ul className="main-text skills-list"><li>Languages: C++, Python, TypeScript</li><li>Frameworks/Libraries: Qt, Crow, React</li><li>Web: HTML and CSS</li><li>Tools: Git, GitHub, Vite, VS Code, CLion, Vim</li></ul>
          </section>

          <hr />

          <section>
            <h2 className="main-text" id="about">About Me!</h2>
            <p className="main-text">I am a Junior Computer Science major at Sonoma State University, expecting to graduate in Spring 2028 with a Bachelor’s degree in Computer Science and a minor in Electrical Engineering. I am interested in pursuing opportunities in backend or full-stack development, where I can apply my technical skills to build efficient and scalable systems.<br /><br />I am actively strengthening my programming abilities through both academic coursework and independent projects. These experiences have allowed me to deepen my understanding of problem-solving, software design, and collaborative development.<br /><br />In addition to my technical growth, I am involved in several campus and community organizations. I am a member of MESA (Mathematics, Engineering, Science Achievement), I was the Events Coordinator for ASBMB (Association of Biology and Microbiology), I am currently the Treasurer for the Computer Science Club at Sonoma State University, and I co-founded the Sonoma County Chess Club. Through these roles, I have developed leadership, organization, and communication skills that complement my technical background.</p>
          </section>
        </main>
      </div>
    </>
  )
}

function Project({ href, projectKey, title, onProjectChange, children }: { href: string; projectKey: string; title: string; onProjectChange: (key: string) => void; children: string }) {
  return <a href={href} className="proj-link" onClick={(event) => { event.preventDefault(); onProjectChange(projectKey) }}><div className="text proj-box"><h3>{title}</h3><p>{children}</p></div></a>
}

const projects = {
  arcade: {
    title: 'Arcade Machine!',
    githubUrl: null,
    description: 'Restored and repurposed a legacy arcade cabinet by integrating a Raspberry Pi–based emulation system. Configured and deployed multi-console gaming environments, optimized hardware interfacing, and customized system software to create a fully functional multi-platform arcade machine.',
    image: ArcadeMachine,
    imageClass: 'proj-arcade-img',
  },
  website: {
    title: 'This Website!',
    githubUrl: 'https://github.com/DominicO2025/DominicO2025.github.io',
    description: 'Designed and developed a personal portfolio website to showcase my academic background, technical skills, and project experience. Built using HTML and CSS to create a clean, accessible layout. Implemented structured navigation and reusable styling components for scalability. Deployed the site using GitHub Pages with version control through Git.',
    image: Website,
    imageClass: 'proj-img',
  },
  webscraper: {
    title: 'League Arena Tracker',
    githubUrl: 'https://github.com/DominicO2025/LolArena',
    description: 'Developed a web application that allows League of Legends players to track their performance in Arena mode. Built a C++ backend using the Crow framework and Riot Games API to retrieve match history, calculate champion-specific statistics, and track wins and playtime. The application provides players with an accessible way to review their Arena performance and identify their most-played and most-successful champions.',
    image: Webscraper,
    imageClass: 'proj-img',
  },
  huffman: {
    title: 'Huffman Encoder!',
    githubUrl: 'https://github.com/DominicO2025/Huffman_Encoder',
    description: 'A file compression tool that uses Huffman coding to efficiently encode text files into binary, reducing file size through frequency-based encoding. Built with a C++ backend and a React, TypeScript, and Tailwind CSS frontend to provide an intuitive interface for file compression.',
    image: HuffmanTree,
    imageClass: 'proj-huff-img',
  },
} as const

const projectLinks = [
  ['Arcade Machine!', '?project=arcade', 'arcade'],
  ['Website', '?project=website', 'website'],
  ['League Arena Tracker', '?project=webscraper', 'webscraper'],
  ['Huffman Encoder', '?project=huffman', 'huffman'],
] as const

function ProjectPage({ project, onHome, onProjectChange }: { project: (typeof projects)[keyof typeof projects]; onHome: (hash?: string) => void; onProjectChange: (key: string) => void }) {
  const [isImageOpen, setIsImageOpen] = useState(false)

  useEffect(() => {
    if (!isImageOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsImageOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isImageOpen])

  return (
    <>
      <header className="centered">
        <a href="./" aria-label="Return to portfolio home"><img className="profile" src={profile} alt="Portrait of Dominic Ortiz" /></a>
        <h1 className="text">Dominic Ortiz</h1>
      </header>
      <div className="layout">
        <aside className="sidebar" aria-label="Page navigation">
          <a href="./#welcome" className="nav-link" onClick={(event) => { event.preventDefault(); onHome('#welcome') }}><span className="text nav-button">Welcome</span></a>
          <a href="./#projects" className="nav-link" onClick={(event) => { event.preventDefault(); onHome('#projects') }}><span className="text nav-button">Projects</span></a>
          <a href="./#experience" className="nav-link" onClick={(event) => { event.preventDefault(); onHome('#experience') }}><span className="text nav-button">Work Experience</span></a>
          <a href="./#skills" className="nav-link" onClick={(event) => { event.preventDefault(); onHome('#skills') }}><span className="text nav-button">Skills</span></a>
          <a href="./#about" className="nav-link" onClick={(event) => { event.preventDefault(); onHome('#about') }}><span className="text nav-button">About Me</span></a>
        </aside>
        <main className="content project-page">
          <h2 className="main-text">{project.title}</h2>
          <div className="txt-img project-detail">
            <p className="ws-divided-text">{project.description}</p>
            <button className="project-image-button" type="button" onClick={() => setIsImageOpen(true)} aria-label={`Enlarge ${project.title} image`} aria-expanded={isImageOpen}>
              <img className={project.imageClass} src={project.image} alt={`${project.title} project`} />
            </button>
          </div>
          {project.githubUrl && <a className="github-button" href={project.githubUrl} target="_blank" rel="noreferrer">View on GitHub</a>}
          <nav className="project-nav" aria-label="Project navigation">
            {projectLinks.map(([title, href, key]) => (
              <a href={href} className="proj-link" key={href} onClick={(event) => { event.preventDefault(); onProjectChange(key) }}>
                <div className="text in-proj-box"><h2>{title}</h2></div>
              </a>
            ))}
          </nav>
        </main>
      </div>
      {isImageOpen && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} enlarged image`} onClick={() => setIsImageOpen(false)}>
          <button className="lightbox-close" type="button" onClick={() => setIsImageOpen(false)} aria-label="Close enlarged image">×</button>
          <img src={project.image} alt={`${project.title} enlarged`} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  )
}

function Job({ title, image, imageClass, children }: { title: string; image: string; imageClass: string; children: string }) {
  return <article className="job"><h2 className="main-text">{title}</h2><div className="txt-img"><p className="ws-divided-text">{children}</p><img className={imageClass} src={image} alt={`${title} logo`} /></div></article>
}

export default App
