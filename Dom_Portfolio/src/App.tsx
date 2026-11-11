import './index.css'
import profile from 'images/ProfilePicture.jpg';
import CMOSC from "../images/cmosc-logo.jpg";
import WorldMarket from "../images/WorldMarketSR.jpg"
import LARC from "../images/Larc.png"


function App() {
  return (
    <>
      <section id="center">
      <img 
        className="profile"
        src={profile}
        alt="Portrait of Dominic Ortiz"
      />
      <h1 className="text">Dominic Ortiz</h1>
    
  
  <div className="layout">
    <aside className="sidebar">

      <div>
        <a href="#welcome" className="nav-link">
          <button className="text nav-button">Welcome</button>
        </a>
      </div>
      
      <div>
        <a href="#projects" className="nav-link">
          <button className="text nav-button">Projects</button>
        </a>
      </div>

      <div>
        <a href="#experience" className="nav-link">
          <button className="text nav-button">Work Expierence</button>
        </a>
      </div>

      <div>
        <a href="#skills" className="nav-link">
          <button className="text nav-button">Skills</button>
        </a>
      </div>

      
      <div>
        <a href="#about" className="nav-link">
          <button className="text nav-button">About Me</button>
        </a>
      </div>


      
    </aside>
  
    <main className="content">
      <div>
        <h1 className="main-text" id="welcome">Welcome!<br /></h1>
        <p className="main-text">
          Welcome to my website, where I share my work, projects, and professional journey. This space reflects my experience, skills, and the ideas I’m actively exploring. I’m glad you’re here and invite you to take a look around.
        </p>
      </div>

      
      <div>
          <h1 id="projects" className="main-text">Projects!<br /></h1>
          
          <div className="project-text">
            
            <a href="projects/Arcade-proj.html" className="proj-link">
                <div className="text proj-box">
                    <h2>Arcade Machine!</h2>
                    <p>Revamped arcade machine able to handle multiple different arcade games.</p>
                </div>
            </a>
            
            <a href="projects/Website-proj.html" className="proj-link">
                <div className="text proj-box">
                    <h2>Website</h2>
                    <p>This website created to give deeper information on who I am.</p>
                </div>
            </a>
            
            <a href="projects/Webscraper-proj.html" className="proj-link">
                <div className="text proj-box">
                    <h2>League Arena Tracker</h2>
                    <p>Using a API to scrape video game information for personal use!</p>
                </div>
            </a>

            <a href="projects/Huffman-proj.html" className="proj-link">
                <div className="text proj-box">
                    <h2>Huffman Encoder</h2>
                    <p>Uses a huffman tree to encode a txt file into binary.</p>
                </div>
            </a>
            
          </div>
          
        </div>
      <hr style={{ border: 0, borderTop: '1px solid white', width: '100%' }} />

      <div>
        <h1 id="experience" className="main-text">Work Experience!<br /></h1>
        <h1 className="main-text">Children's Museum of Sonoma County Internship<br /></h1>
      <div className="txt-img">
        <div className="ws-divided-text">
          <p>
            Led and supervised hands-on STEM activities for groups of children in a structured camp setting, helping them work through interactive stations focused on science and problem-solving. Followed a detailed daily schedule to transition groups smoothly between activities and keep sessions running on time. Prepared materials and activity spaces each day to ensure a safe and organized environment, and assisted with check-in, parent pickup, after-care supervision, and safety procedures. Worked closely with other interns and staff in a fast-paced environment, building strong communication and teamwork skills while maintaining a positive and supportive atmosphere for participants.
          </p>
        </div>
        <img
          className="proj-img"
          src={CMOSC}
        />
      </div>

      <h1 className="main-text">World Market<br /></h1>
      <div className="txt-img">
        <div className="ws-divided-text">
          <p>
            Provided customer service in a busy retail environment by answering questions, helping customers find products, and ensuring a positive shopping experience. Operated the cash register responsibly by accurately processing transactions and handling payments while maintaining an organized checkout area. Restocked food and merchandise to keep shelves full and clearly labeled, and regularly recovered product displays to maintain a clean and organized store. Worked closely with coworkers and supervisors to complete daily tasks efficiently, demonstrating reliability by consistently supporting team operations and maintaining store standards.
          </p>
        </div>
        <img
          className="proj-img"
          src={WorldMarket}
        />
      </div>
    </div>

    <h1 className="main-text">SSU LARC<br /></h1>
      <div className="txt-img">
        <div className="ws-divided-text">
          <p>
            Support students during Computer Science lectures and lab sessions by providing one-on-one and small-group assistance with programming concepts, assignments, and problem-solving. Collaborate with faculty to reinforce course material and provide additional support through scheduled tutoring and drop-in sessions. Help students develop stronger technical skills and independent problem-solving strategies while maintaining a supportive and engaging learning environment.
          </p>
        </div>
        <img
          className="job-img"
          src={LARC}
        />
      </div>

      
      <hr style={{ border: 0, borderTop: '1px solid white', width: '100%' }} />

    <div>
        <h1 className="main-text" id="skills">Skills!<br /></h1>
      <div className="main-text">
        
        <ul>
           <p className="main-text">Languages: C++ and Python</p>
          <p className="main-text">Markup Languages: HTML and CSS</p>
        </ul>
      
      </div>
    </div>

      <hr style={{ border: 0, borderTop: '1px solid white', width: '100%' }} />

    <div>
        <h1 className="main-text" id="about">About Me!<br /></h1>
      <p className="main-text">
        I am a sophomore Computer Science major at Sonoma State University, expecting to graduate in Spring 2028 with a Bachelor’s degree in Computer Science and a minor in Electrical Engineering. I am interested in pursuing opportunities in backend or full-stack development, where I can apply my technical skills to build efficient and scalable systems.<br /><br />
I am actively strengthening my programming abilities through both academic coursework and independent projects. These experiences have allowed me to deepen my understanding of problem-solving, software design, and collaborative development.<br /><br />
In addition to my technical growth, I am involved in several campus and community organizations. I am a member of MESA (Mathematics, Engineering, Science Achievement), serve as the Events Coordinator for ASBMB (Association of Biology and Microbiology), and co-founded the Sonoma County Chess Club. Through these roles, I have developed leadership, organization, and communication skills that complement my technical background.<br /><br />
      </p>
    </div>
    </main>
  </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
