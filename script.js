/* -------------------------------------------------------------
 * Application Logic for VS Code Portfolio (Abhishek Kumar)
 * ------------------------------------------------------------- */

// --- FILE SYSTEM CONFIGURATION ---
const fileSystem = {
  "about": {
    id: "about",
    name: "about.md",
    path: "about.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["bio", "mca", "intro", "haryana", "patna"],
    related: ["education-mca", "contact", "experience-coding-club"],
    content: `
      <h1>About Me</h1>
      <p class="subtitle">Abhishek Kumar — Tech Enthusiast & MCA Student</p>
      
      <div class="about-grid">
        <div class="profile-card">
          <img src="profile.jpg" alt="Abhishek Kumar" class="profile-img">
          <div class="social-buttons">
            <a href="https://github.com/Abhikrr2" target="_blank" class="social-button-item" title="GitHub">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/pandey-abhi" target="_blank" class="social-button-item" title="LinkedIn">
              <i class="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
        
        <div class="quick-facts-box">
          <h4><i class="fas fa-bolt"></i> Quick Facts</h4>
          <div class="fact-item">
            <i class="fas fa-graduation-cap"></i>
            <span><strong>Education:</strong> Master of Computer Applications (MCA) at Central University of Haryana</span>
          </div>
          <div class="fact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span><strong>Location:</strong> Patna, Bihar / Mahendergarh, Haryana</span>
          </div>
          <div class="fact-item">
            <i class="fas fa-keyboard"></i>
            <span><strong>Interests:</strong> Full-Stack Development, Cloud Computing, AI/ML Applications</span>
          </div>
          <div class="fact-item">
            <i class="fas fa-users"></i>
            <span><strong>Community:</strong> Coding Club Lead & GDG Campus Member</span>
          </div>
        </div>
      </div>

      <h2>Hello, World!</h2>
      <p>I am a passionate and goal-driven tech enthusiast currently pursuing a <strong>Master of Computer Applications (MCA)</strong> from Central University of Haryana. I hold a strong academic foundation with a Bachelor's degree in Computer Applications (BCA) from T.P.S College, Patliputra University.</p>
      
      <p>My interests lie beautifully at the intersection of <strong>full-stack development, cloud architecture, and AI/ML applications</strong>. I love turning complex ideas into functional products, and I am driven by the impact technology can have on the world.</p>
      
      <p>When I'm not coding, you'll find me engaging with technical communities like the Coding Club CUH and GDG on Campus, where I help foster an environment of peer learning and modern skill development.</p>
      
      <h2>Technical Competencies</h2>
      <blockquote>
        "Constantly learning and building to solve real-world problems."
      </blockquote>
      <p>Check the <code>skills/</code> folder in the Explorer sidebar to inspect my competencies across languages, frontend frameworks, database systems, AI/ML, and cloud services.</p>
    `
  },
  "skills-languages": {
    id: "skills-languages",
    name: "languages.md",
    path: "skills/languages.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["skills", "c++", "java", "python", "c"],
    related: ["skills-frontend", "skills-databases", "about"],
    content: `
      <h1>Programming Languages</h1>
      <p class="subtitle">Core languages used for scripting, backend development, and algorithms</p>
      
      <p>I use a variety of programming languages depending on the application context. Here is a summary of the languages I write:</p>
      
      <div class="skills-container-grid">
        <div class="skill-card-widget">
          <h4><i class="fab fa-python" style="color: #3776ab;"></i> Python</h4>
          <p>Used heavily for Machine Learning applications, data processing, and scripting. Experienced with Pandas, NumPy, Scikit-learn, and Flask backends.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fab fa-java" style="color: #f89820;"></i> Java</h4>
          <p>Strong understanding of object-oriented principles, multithreading, and file systems. Built a desktop Address Book Management System in Java.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="develop-icon">C++</i> C / C++</h4>
          <p>Core language for Data Structures, Algorithms, and academic foundations. Used for solving problem-solving questions.</p>
        </div>
      </div>
      
      <h2>Snippet: Simple Multi-Layer Perceptron (MLP) Structure in Python</h2>
      <pre><code>import numpy as np

class MLP:
    def __init__(self, input_size, hidden_size, output_size):
        # Initialize weights and biases
        self.W1 = np.random.randn(input_size, hidden_size) * 0.01
        self.b1 = np.zeros((1, hidden_size))
        self.W2 = np.random.randn(hidden_size, output_size) * 0.01
        self.b2 = np.zeros((1, output_size))
        
    def forward(self, X):
        self.z1 = np.dot(X, self.W1) + self.b1
        self.a1 = 1 / (1 + np.exp(-self.z1))  # Sigmoid Activation
        self.z2 = np.dot(self.a1, self.W2) + self.b2
        return self.z2  # Output layer activations</code></pre>
    `
  },
  "skills-frontend": {
    id: "skills-frontend",
    name: "web-frontend.md",
    path: "skills/web-frontend.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["skills", "html", "css", "javascript", "react", "bootstrap"],
    related: ["skills-languages", "projects-one-card-clone"],
    content: `
      <h1>Web & Frontend</h1>
      <p class="subtitle">Building responsive, accessible, and interactive user interfaces</p>
      
      <p>My frontend stack centers on modern web standards and building smooth user experiences:</p>
      
      <div class="skills-container-grid">
        <div class="skill-card-widget">
          <h4><i class="fab fa-js-square" style="color: #f7df1e;"></i> JavaScript</h4>
          <p>DOM manipulation, asynchronous operations (Promises/Async-Await), and ES6+ features.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fab fa-react" style="color: #61dafb;"></i> React</h4>
          <p>Familiar with basic concepts: component rendering, state management (hooks like useState, useEffect), and virtual DOM architecture.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fab fa-html5" style="color: #e34f26;"></i> HTML5 & CSS3</h4>
          <p>Semantic markup, layouts (Flexbox, Grid), media queries for responsiveness, and dynamic CSS styling.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fab fa-bootstrap" style="color: #7952b3;"></i> Bootstrap</h4>
          <p>Quick styling prototyping, grid layouts, and utilizing pre-styled UI components.</p>
        </div>
      </div>
      
      <h2>Core Web Design Principles</h2>
      <ul class="project-spec-list">
        <li><strong>Responsive First:</strong> Interfaces adapt smoothly from small mobile viewports to large desktops.</li>
        <li><strong>Modern Aesthetics:</strong> Leverage glassmorphism, shadows, gradients, and custom themes to appeal to users.</li>
        <li><strong>Clean DOM Hierarchy:</strong> Maintain SEO-friendly semantic layouts.</li>
      </ul>
    `
  },
  "skills-databases": {
    id: "skills-databases",
    name: "databases.md",
    path: "skills/databases.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["skills", "sql", "mongodb", "database"],
    related: ["skills-languages", "projects-student-predictor"],
    content: `
      <h1>Databases</h1>
      <p class="subtitle">Relational and Document-based storage solutions</p>
      
      <p>Handling data efficiently requires choosing the correct database engine. I work with relational and non-relational databases:</p>
      
      <div class="skills-container-grid">
        <div class="skill-card-widget">
          <h4><i class="fas fa-database" style="color: #336791;"></i> SQL / Relational</h4>
          <p>Structured query language, table schemas, relationships, indexing, and complex queries. Used for organizing structured data.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fas fa-leaf" style="color: #4db33d;"></i> MongoDB / Document</h4>
          <p>NoSQL storage utilizing JSON-like document structures. Flexible schema models for rapid app prototyping.</p>
        </div>
      </div>
      
      <h2>Key Database Practices</h2>
      <ul class="project-spec-list">
        <li>Design clear relationship structures (One-to-Many, Many-to-Many).</li>
        <li>Optimize SQL queries to ensure quick responses.</li>
        <li>Maintain proper indexing for frequent query fields.</li>
      </ul>
    `
  },
  "skills-ml": {
    id: "skills-ml",
    name: "machine-learning.md",
    path: "skills/machine-learning.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["skills", "ml", "python", "pandas", "scikit-learn", "numpy"],
    related: ["projects-student-predictor", "projects-langchain-chatbot", "skills-languages"],
    content: `
      <h1>Machine Learning & Data</h1>
      <p class="subtitle">Training pipelines, data analysis, and predictive modeling</p>
      
      <p>I build ML models to interpret data patterns and provide predictions. Core toolkit details:</p>
      
      <div class="skills-container-grid">
        <div class="skill-card-widget">
          <h4><i class="fas fa-brain" style="color: #ff6b6b;"></i> Scikit-Learn</h4>
          <p>Used for standard ML tasks: preprocessing data, scaling, pipelines, classification, regression, and model validation metrics.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fas fa-chart-line" style="color: #1f77b4;"></i> Pandas & NumPy</h4>
          <p>Data cleaning, aggregation, manipulation, mathematical operations, and preparing datasets for training runs.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fas fa-network-wired" style="color: #61dafb;"></i> Neural Networks (MLP)</h4>
          <p>Basic understanding and utilization of Multi-Layer Perceptrons for classification tasks (e.g., student performance grouping).</p>
        </div>
      </div>
      
      <h2>Preprocessing Pipeline Pattern</h2>
      <pre><code>from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder

# Define pipelines for numerical and categorical attributes
num_pipeline = Pipeline([
    ('scaler', StandardScaler())
])
cat_pipeline = Pipeline([
    ('encoder', OneHotEncoder(handle_unknown='ignore'))
])

preprocessor = ColumnTransformer([
    ('num', num_pipeline, num_features),
    ('cat', cat_pipeline, cat_features)
])</code></pre>
    `
  },
  "skills-tools": {
    id: "skills-tools",
    name: "tools-cloud.md",
    path: "skills/tools-cloud.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["skills", "git", "cloud", "render", "vscode", "google-cloud"],
    related: ["projects-student-predictor", "about"],
    content: `
      <h1>Tools & Cloud Services</h1>
      <p class="subtitle">Deployment pipelines, version control, and development environments</p>
      
      <p>Deploying code and collaborating effectively requires the right set of tools:</p>
      
      <div class="skills-container-grid">
        <div class="skill-card-widget">
          <h4><i class="fab fa-git-alt" style="color: #f1502f;"></i> Git & GitHub</h4>
          <p>Version control, branch management, pull requests, and hosting code repositories.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fab fa-google" style="color: #4285f4;"></i> Google Cloud</h4>
          <p>Basics of compute services, virtual machines, cloud instances, and hosting simple services.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fas fa-cloud-upload-alt" style="color: #46e3b7;"></i> Render Cloud</h4>
          <p>Deploying full-stack applications (Flask, Node) with automated GitHub hook rebuilds.</p>
        </div>
        <div class="skill-card-widget">
          <h4><i class="fas fa-laptop-code" style="color: #007acc;"></i> VS Code</h4>
          <p>Primary editor configured with extensions for speed, debugging, and terminal automation.</p>
        </div>
      </div>
      
      <h2>Certifications & Skills</h2>
      <p>Completed <strong>The Basics of Google Cloud Compute</strong> skill badge training, validating fundamentals in VM deployments and basic networks.</p>
    `
  },
  "projects-predictor": {
    id: "projects-predictor",
    name: "student-performance-predictor.md",
    path: "projects/student-performance-predictor.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["project", "python", "flask", "ml", "render", "pandas"],
    related: ["skills-ml", "skills-languages", "education-mca"],
    content: `
      <h1>AI Student Performance Predictor</h1>
      <p class="subtitle">Full-stack Machine Learning application to evaluate academic performance (2025)</p>
      
      <p><strong>Deployment:</strong> <a href="https://ai-student-predictory.onrender.com/" target="_blank">Live Web Application <i class="fas fa-external-link-alt"></i></a></p>
      
      <div class="badge-container">
        <span class="tech-badge">Python</span>
        <span class="tech-badge">Flask</span>
        <span class="tech-badge">MLP Classifier</span>
        <span class="tech-badge">Pandas</span>
        <span class="tech-badge">Scikit-learn</span>
        <span class="tech-badge">Plotly</span>
        <span class="tech-badge">Render</span>
      </div>
      
      <h2>Project Overview</h2>
      <p>A web application built to assist educators in predicting students' final academic performance (e.g., Excellent, Average, At Risk) based on various factors. It features a complete pipeline from raw CSV inputs to visual predictions, helping teachers identify students requiring early assistance.</p>
      
      <h2>Key Features</h2>
      <ul class="project-spec-list">
        <li><strong>Dataset Upload:</strong> Accepts custom CSV files containing student statistics, preprocessing the records automatically.</li>
        <li><strong>ML Engine:</strong> Powered by a Multi-Layer Perceptron (MLP) network built in Scikit-Learn to evaluate multi-feature student datasets.</li>
        <li><strong>Interactive Dashboards:</strong> Uses Plotly to render analytical charts showing class-wide performance scores.</li>
        <li><strong>Report Generation:</strong> Generates downloadable PDF summaries of student evaluations.</li>
        <li><strong>Render Deployment:</strong> Configured web server setup deployed to Render cloud with automated build hooks.</li>
      </ul>
      
      <h2>Architecture Flow</h2>
      <pre><code>[CSV Dataset / Form Inputs]
          │
          ▼
    [Flask Backend] ──► [ML Preprocessing Pipeline] ──► [MLP Predictor Model]
          │                                                    │
          ▼                                                    ▼
[Plotly Chart Engine] ◄───────────────────────────────── [Class Predictions]
          │
          ▼
[HTML Dashboard & PDF Export]</code></pre>
    `
  },
  "projects-chatbot": {
    id: "projects-chatbot",
    name: "langchain-chatbot.md",
    path: "projects/langchain-chatbot.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["project", "python", "langchain", "ai", "web-scraping"],
    related: ["skills-ml", "skills-languages"],
    content: `
      <h1>LangChain Internet Chatbot</h1>
      <p class="subtitle">AI chatbot utilizing tool-based search workflows to augment answers (2025)</p>
      
      <p><strong>Deployment:</strong> <a href="https://langchainchatbot-app.streamlit.app/" target="_blank">Live Application Demo <i class="fas fa-external-link-alt"></i></a></p>
      
      <div class="badge-container">
        <span class="tech-badge">Python</span>
        <span class="tech-badge">LangChain</span>
        <span class="tech-badge">Streamlit</span>
        <span class="tech-badge">Web Scraping</span>
        <span class="tech-badge">AI Agents</span>
      </div>
      
      <h2>Project Overview</h2>
      <p>A smart chatbot application built to address the knowledge cutoff of standard LLMs. By combining LangChain with search tools, the bot dynamically determines when it needs to retrieve real-time facts from the web to answer user inquiries accurately.</p>
      
      <h2>Key Features</h2>
      <ul class="project-spec-list">
        <li><strong>Real-time Information Retrieval:</strong> Crawls and scrapes web data on-the-fly to supplement prompts.</li>
        <li><strong>Agent-based Decision Workflows:</strong> Employs LangChain agents to process inputs and choose appropriate search tools.</li>
        <li><strong>Streamlit Interface:</strong> Features a responsive, lightweight UI to display conversations and tool steps in real-time.</li>
      </ul>
      
      <h2>Sample Logic Flow</h2>
      <p>The agent decides whether to answer from internal weights or execute a search query based on query complexity:</p>
      <pre><code>User: "What was the score of the game yesterday?"
Agent:
  - Thinks: Requires current facts.
  - Action: Execute 'Google Search' tool.
  - Observation: Fetch page results -> "Team A beat Team B 3-1".
  - Response: "Team A won the match 3-1 yesterday..."</code></pre>
    `
  },
  "projects-onecard": {
    id: "projects-onecard",
    name: "one-card-clone.md",
    path: "projects/one-card-clone.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["project", "mern", "react", "css"],
    related: ["skills-frontend"],
    content: `
      <h1>One Card Webpage Clone</h1>
      <p class="subtitle">High-fidelity frontend clone replicating professional UI layouts (2021)</p>
      
      <div class="badge-container">
        <span class="tech-badge">React</span>
        <span class="tech-badge">CSS Grid</span>
        <span class="tech-badge">MERN Stack Concepts</span>
        <span class="tech-badge">Responsive Design</span>
      </div>
      
      <h2>Project Overview</h2>
      <p>A web page replica built to demonstrate styling precision and responsive frontend skills. The interface recreates the look, animations, and typography of the One Card credit card landing page.</p>
      
      <h2>Key Features</h2>
      <ul class="project-spec-list">
        <li><strong>Accurate UI Reconstruction:</strong> Pixel-perfect reproduction of card descriptions, flex grids, and custom font weights.</li>
        <li><strong>Interactive Elements:</strong> Incorporates CSS transitions and animations to represent professional landing page transitions.</li>
        <li><strong>Responsive Structure:</strong> Scales smoothly from mobile viewports to wide displays.</li>
      </ul>
    `
  },
  "experience-coding-club": {
    id: "experience-coding-club",
    name: "coding-club-lead.md",
    path: "experience/coding-club-lead.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["experience", "cuh", "leadership", "community"],
    related: ["about", "experience-gdg"],
    content: `
      <h1>Coding Club Lead</h1>
      <p class="subtitle">Central University of Haryana — Mahendergarh, Haryana (Sep 2024 - Present)</p>
      
      <div class="badge-container">
        <span class="tech-badge">Leadership</span>
        <span class="tech-badge">Mentoring</span>
        <span class="tech-badge">Algorithmic Training</span>
        <span class="tech-badge">Community Organizing</span>
      </div>
      
      <h2>Role and Contribution</h2>
      <p>As the Lead of the Coding Club, I coordinate technical activities and peer mentoring programs within the university's computer science department:</p>
      
      <ul class="project-spec-list">
        <li><strong>Peer Sessions:</strong> Organize programming practice sessions, discussing data structures, logic formulation, and problem-solving.</li>
        <li><strong>Project Guidance:</strong> Guide juniors and peers in selecting tech stacks, designing projects, and deploying web applications.</li>
        <li><strong>Hackathons & Coding Runs:</strong> Help organize intra-university programming challenges to encourage active development.</li>
      </ul>
      
      <h2>Key Achievements</h2>
      <p>Fostered an environment of peer learning, leading to a significant increase in students actively building personal projects and practicing algorithms on platforms like LeetCode and HackerRank.</p>
    `
  },
  "experience-gdg": {
    id: "experience-gdg",
    name: "gdg-on-campus.md",
    path: "experience/gdg-on-campus.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["experience", "gdg", "cloud", "community"],
    related: ["about", "experience-coding-club", "skills-tools"],
    content: `
      <h1>Google Developer Group Member</h1>
      <p class="subtitle">GDG on Campus (CUH) — Mahendergarh, Haryana</p>
      
      <div class="badge-container">
        <span class="tech-badge">Google Technologies</span>
        <span class="tech-badge">Cloud Compute</span>
        <span class="tech-badge">Developer Network</span>
        <span class="tech-badge">Collaborations</span>
      </div>
      
      <h2>Role and Contribution</h2>
      <p>Active participant and coordinator helper in GDG activities at Central University of Haryana:</p>
      
      <ul class="project-spec-list">
        <li><strong>Workshops:</strong> Participated in hands-on workshops studying Google Cloud Compute, Firebase integrations, and AI developer workflows.</li>
        <li><strong>Event Coordination:</strong> Assisted in coordinating guest speaker sessions and technical seminars, boosting student attendance.</li>
        <li><strong>Collaborative Projects:</strong> Partnered with members to build and explore web integrations using Google APIs.</li>
      </ul>
    `
  },
  "education-mca": {
    id: "education-mca",
    name: "mca.md",
    path: "education/mca.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["education", "cuh", "mca", "post-grad"],
    related: ["education-bca", "projects-predictor", "about"],
    content: `
      <h1>Master of Computer Applications (MCA)</h1>
      <p class="subtitle">Central University of Haryana — Mahendergarh, Haryana (Jul 2024 - Jun 2026)</p>
      
      <div class="quick-facts-box">
        <div class="fact-item">
          <i class="fas fa-university"></i>
          <span><strong>Institution:</strong> Central University of Haryana (A Central University established by Ministry of Education)</span>
        </div>
        <div class="fact-item">
          <i class="fas fa-calendar-alt"></i>
          <span><strong>Duration:</strong> July 2024 - June 2026</span>
        </div>
        <div class="fact-item">
          <i class="fas fa-star"></i>
          <span><strong>Specialization Focus:</strong> Artificial Intelligence, Full-Stack Pipelines, Algorithms & Databases</span>
        </div>
      </div>
      
      <h2>Key Studies & Projects</h2>
      <p>During my postgraduate studies, I have focused on translating computer science theory into executable code:</p>
      
      <ul class="project-spec-list">
        <li><strong>AI/ML Integration:</strong> Built an academic predictor using Neural Networks (MLP Classifier) to analyze and predict student risk levels.</li>
        <li><strong>Advanced Algorithms:</strong> Studied complex data structures, search algorithms, and space-time complexity analysis.</li>
        <li><strong>Full-Stack Architectures:</strong> Developed skills in creating web backends (Flask) connected to analytical ML pipelines.</li>
      </ul>
    `
  },
  "education-bca": {
    id: "education-bca",
    name: "bca.md",
    path: "education/bca.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["education", "patna", "bca", "undergrad"],
    related: ["education-mca", "skills-languages"],
    content: `
      <h1>Bachelor of Computer Applications (BCA)</h1>
      <p class="subtitle">T.P.S College, Patliputra University — Patna, Bihar (Jul 2021 - Jun 2024)</p>
      
      <div class="quick-facts-box">
        <div class="fact-item">
          <i class="fas fa-university"></i>
          <span><strong>Institution:</strong> T.P.S College, Patliputra University, Patna</span>
        </div>
        <div class="fact-item">
          <i class="fas fa-calendar-alt"></i>
          <span><strong>Duration:</strong> July 2021 - June 2024</span>
        </div>
        <div class="fact-item">
          <i class="fas fa-certificate"></i>
          <span><strong>Key Foundations:</strong> Object-Oriented Programming (Java/C++), Relational Database Management Systems (SQL), Operating Systems, Software Engineering</span>
        </div>
      </div>
      
      <h2>Featured Undergraduate Work</h2>
      <p>My undergraduate studies laid a strong foundation in programmatic logical flows and software engineering concepts:</p>
      
      <ul class="project-spec-list">
        <li><strong>Address Book Management System:</strong> Designed and implemented a desktop application in Java. Integrated file storage, city-based sorting, and binary search functions to retrieve contact details quickly.</li>
        <li><strong>Database Schema Design:</strong> Formulated relational database schemas, normal forms (1NF/2NF/3NF), and practiced writing robust SQL joins.</li>
      </ul>
    `
  },
  "education-certs": {
    id: "education-certs",
    name: "certifications.md",
    path: "education/certifications.md",
    type: "file",
    icon: "fab fa-markdown",
    tags: ["education", "certifications", "security", "cloud", "langchain"],
    related: ["skills-tools", "skills-ml", "projects-chatbot"],
    content: `
      <h1>Certifications & Accolades</h1>
      <p class="subtitle">Professional certificates, skills training badges, and course completions</p>
      
      <div class="timeline-list">
        <div class="timeline-node">
          <div class="timeline-marker"></div>
          <div class="timeline-header">
            <span class="timeline-title">Fundamentals of Information Security</span>
            <span class="timeline-date">Jan 2026</span>
          </div>
          <p class="timeline-subtitle">Infosys Springboard</p>
          <p>Studied cryptography, network security architectures, basic security protocols, and secure scripting rules.</p>
        </div>
        
        <div class="timeline-node">
          <div class="timeline-marker"></div>
          <div class="timeline-header">
            <span class="timeline-title">LangChain Course for Beginners</span>
            <span class="timeline-date">2025</span>
          </div>
          <p class="timeline-subtitle">Certificate of Completion</p>
          <p>Learned schema designs for LLMs, prompt template chaining, vector databases, memory models, and agent workflows.</p>
        </div>
        
        <div class="timeline-node">
          <div class="timeline-marker"></div>
          <div class="timeline-header">
            <span class="timeline-title">The Basics of Google Cloud Compute</span>
            <span class="timeline-date">2025</span>
          </div>
          <p class="timeline-subtitle">Google Cloud Skill Badge</p>
          <p>Familiarized with Google Cloud Console, setting up virtual compute machines, network subnetworks, and basic cloud security.</p>
        </div>
      </div>
    `
  },
  "contact": {
    id: "contact",
    name: "contact.md",
    path: "contact.md",
    type: "file",
    icon: "fas fa-envelope",
    tags: ["contact", "email", "form", "patna"],
    related: ["about"],
    content: `
      <h1>Get In Touch</h1>
      <p class="subtitle">Let's connect! Always open to queries, project ideas, or discussions</p>
      
      <div class="quick-facts-box" style="margin-bottom: 25px;">
        <div class="fact-item">
          <i class="fas fa-at"></i>
          <span><strong>Email:</strong> <a href="mailto:pandey.cuh@gmail.com">pandey.cuh@gmail.com</a></span>
        </div>
        <div class="fact-item">
          <i class="fas fa-map-marked-alt"></i>
          <span><strong>Location:</strong> Kankarbagh, Patna, Bihar, India</span>
        </div>
      </div>
      
      <h2>Send a Message</h2>
      <p>Submit your message using the form below. It is integrated directly with FormSubmit and will reach my inbox instantly:</p>
      
      <div class="contact-form-widget">
        <form action="https://formsubmit.co/pandey.cuh@gmail.com" method="POST">
          <!-- FormSubmit configuration -->
          <input type="hidden" name="_subject" value="🔥 New message from your VS Code Portfolio!">
          <input type="hidden" name="_template" value="box">
          
          <div class="form-group-field">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" class="input-text-field" placeholder="John Doe" required>
          </div>
          
          <div class="form-group-field">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" class="input-text-field" placeholder="john@example.com" required>
          </div>
          
          <div class="form-group-field">
            <label for="message">Message</label>
            <textarea id="message" name="message" class="input-text-field" rows="5" placeholder="Let's build something cool together..." style="resize: vertical;" required></textarea>
          </div>
          
          <button type="submit" class="submit-btn-field">
            Send Message <i class="fas fa-paper-plane" style="margin-left: 5px;"></i>
          </button>
        </form>
      </div>
    `
  },
  "settings": {
    id: "settings",
    name: "Settings",
    path: "Settings",
    type: "file",
    icon: "fas fa-cog",
    tags: [],
    related: [],
    content: `
      <div class="settings-page">
        <!-- Settings Form Area -->
        <div class="settings-content" style="padding: 25px 30px;">
          <div class="settings-top-bar">
            <div class="settings-title">Settings</div>
            <div class="settings-search-wrapper">
              <i class="fas fa-search settings-search-icon"></i>
              <input type="text" class="settings-search-input" placeholder="Search settings..." oninput="filterSettingsThemes(this.value)">
            </div>
          </div>
          
          <div class="settings-section">
            <div class="settings-section-title">Workbench: Color Theme</div>
            <div class="settings-section-desc">Specifies the color theme used in the workbench.</div>
            
            <select id="settings-theme-select" class="settings-select-dropdown" onchange="selectTheme(this.value)">
              <option value="dark">Default Dark</option>
              <option value="light">Default Light</option>
              <option value="monokai">Monokai Pro</option>
              <option value="dracula">Dracula</option>
              <option value="cyberpunk">Cyberpunk</option>
              <option value="solarized-dark">Solarized Dark</option>
              <option value="solarized-light">Solarized Light</option>
              <option value="great-wave">Great Wave Dark</option>
              <option value="great-wave-light">The Great Wave (Light)</option>
              <option value="matrix">The Matrix</option>
            </select>
            
            <!-- Grid 1: AUTO -->
            <div class="settings-theme-category-title">Auto</div>
            <div class="settings-themes-grid">
              <div id="settings-theme-card-dark" class="settings-theme-card" onclick="selectTheme('dark')">
                <div class="settings-theme-card-title">System Default</div>
                <div class="settings-theme-mockup-editor split">
                  <div class="mockup-titlebar" style="background-color: #eee8d5;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #268bd2; width: 40%;"></div>
                    <div class="mockup-line" style="background-color: #859900; width: 70%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #007acc;"></div>
                </div>
              </div>
            </div>
            
            <!-- Grid 2: LIGHT THEMES -->
            <div class="settings-theme-category-title">Light Themes</div>
            <div class="settings-themes-grid">
              <div id="settings-theme-card-light" class="settings-theme-card" onclick="selectTheme('light')">
                <div class="settings-theme-card-title">Light Modern</div>
                <div class="settings-theme-mockup-editor" style="background-color: #ffffff;">
                  <div class="mockup-titlebar" style="background-color: #f3f3f3;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #008000; width: 50%;"></div>
                    <div class="mockup-line" style="background-color: #0000ff; width: 80%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #007acc;"></div>
                </div>
              </div>
              <div id="settings-theme-card-great-wave-light" class="settings-theme-card" onclick="selectTheme('great-wave-light')">
                <div class="settings-theme-card-title">The Great Wave (Light)</div>
                <div class="settings-theme-mockup-editor" style="background-color: #fffef7;">
                  <div class="mockup-titlebar" style="background-color: #f2f0e4;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #82b0b2; width: 40%;"></div>
                    <div class="mockup-line" style="background-color: #1a3657; width: 60%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #2e3257;"></div>
                </div>
              </div>
              <div id="settings-theme-card-solarized-light" class="settings-theme-card" onclick="selectTheme('solarized-light')">
                <div class="settings-theme-card-title">Solarized Light</div>
                <div class="settings-theme-mockup-editor" style="background-color: #fdf6e3;">
                  <div class="mockup-titlebar" style="background-color: #eee8d5;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #859900; width: 30%;"></div>
                    <div class="mockup-line" style="background-color: #268bd2; width: 70%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #268bd2;"></div>
                </div>
              </div>
            </div>
            
            <!-- Grid 3: DARK THEMES -->
            <div class="settings-theme-category-title">Dark Themes</div>
            <div class="settings-themes-grid">
              <div id="settings-theme-card-dark-modern" class="settings-theme-card" onclick="selectTheme('dark')">
                <div class="settings-theme-card-title">Dark Modern</div>
                <div class="settings-theme-mockup-editor" style="background-color: #1e1e1e;">
                  <div class="mockup-titlebar" style="background-color: #252526;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #6a9955; width: 50%;"></div>
                    <div class="mockup-line" style="background-color: #569cd6; width: 70%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #007acc;"></div>
                </div>
              </div>
              <div id="settings-theme-card-monokai" class="settings-theme-card" onclick="selectTheme('monokai')">
                <div class="settings-theme-card-title">Monokai Pro</div>
                <div class="settings-theme-mockup-editor" style="background-color: #272822;">
                  <div class="mockup-titlebar" style="background-color: #1e1f1c;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #75715e; width: 60%;"></div>
                    <div class="mockup-line" style="background-color: #f92672; width: 40%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #75715e;"></div>
                </div>
              </div>
              <div id="settings-theme-card-dracula" class="settings-theme-card" onclick="selectTheme('dracula')">
                <div class="settings-theme-card-title">Dracula</div>
                <div class="settings-theme-mockup-editor" style="background-color: #282a36;">
                  <div class="mockup-titlebar" style="background-color: #21222c;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #6272a4; width: 40%;"></div>
                    <div class="mockup-line" style="background-color: #ff79c6; width: 80%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #bd93f9;"></div>
                </div>
              </div>
              <div id="settings-theme-card-cyberpunk" class="settings-theme-card" onclick="selectTheme('cyberpunk')">
                <div class="settings-theme-card-title">Cyberpunk</div>
                <div class="settings-theme-mockup-editor" style="background-color: #000b1e;">
                  <div class="mockup-titlebar" style="background-color: #000c1d;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #00b8ff; width: 60%;"></div>
                    <div class="mockup-line" style="background-color: #ff0055; width: 50%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #ff0055;"></div>
                </div>
              </div>
              <div id="settings-theme-card-solarized-dark" class="settings-theme-card" onclick="selectTheme('solarized-dark')">
                <div class="settings-theme-card-title">Solarized Dark</div>
                <div class="settings-theme-mockup-editor" style="background-color: #002b36;">
                  <div class="mockup-titlebar" style="background-color: #073642;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #586e75; width: 50%;"></div>
                    <div class="mockup-line" style="background-color: #859900; width: 70%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #268bd2;"></div>
                </div>
              </div>
              <div id="settings-theme-card-great-wave" class="settings-theme-card" onclick="selectTheme('great-wave')">
                <div class="settings-theme-card-title">Great Wave</div>
                <div class="settings-theme-mockup-editor" style="background-color: #1a1b26;">
                  <div class="mockup-titlebar" style="background-color: #16161e;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #565f89; width: 50%;"></div>
                    <div class="mockup-line" style="background-color: #bb9af7; width: 60%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #7aa2f7;"></div>
                </div>
              </div>
              <div id="settings-theme-card-matrix" class="settings-theme-card" onclick="selectTheme('matrix')">
                <div class="settings-theme-card-title">The Matrix</div>
                <div class="settings-theme-mockup-editor" style="background-color: #000000;">
                  <div class="mockup-titlebar" style="background-color: #050505;"></div>
                  <div class="mockup-lines-box">
                    <div class="mockup-line" style="background-color: #008f11; width: 70%;"></div>
                    <div class="mockup-line" style="background-color: #00ff41; width: 50%;"></div>
                  </div>
                  <div class="mockup-statusbar" style="background-color: #008f11;"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    `
  }
};

// --- APPLICATION STATE ---
let activeFile = "about";
let openTabs = ["about"];
let sidebarView = "explorer"; // 'explorer', 'search', 'tags', 'settings'
let sidebarCollapsed = false;

// --- ELEMENT REFERENCES ---
const rootHtml = document.documentElement;
const treeContentContainer = document.getElementById("tree-content-container");
const tabBar = document.getElementById("tab-bar");
const editorWindow = document.getElementById("editor-window");
const outlineContainer = document.getElementById("outline-container");
const relatedContainer = document.getElementById("related-container");
const tagsCloudContainer = document.getElementById("tags-cloud-container");
const activeThemeText = document.getElementById("active-theme-text");
const sidePane = document.getElementById("side-pane");
const paneHeaderTitle = document.getElementById("pane-header-title");
const searchResultsContainer = document.getElementById("search-results");
const searchInput = document.getElementById("search-input");
const tagsCountContainer = document.getElementById("tags-count-container");

// Theme configurations
const themes = [
  { id: "dark", name: "Default Dark", colors: ["#1e1e1e", "#252526", "#333333"] },
  { id: "light", name: "Default Light", colors: ["#ffffff", "#f3f3f3", "#e8e8e8"] },
  { id: "monokai", name: "Monokai Pro", colors: ["#272822", "#1e1f1c", "#171814"] },
  { id: "dracula", name: "Dracula", colors: ["#282a36", "#21222c", "#191a21"] },
  { id: "cyberpunk", name: "Cyberpunk", colors: ["#000b1e", "#000c1d", "#00050d"] },
  { id: "solarized-dark", name: "Solarized Dark", colors: ["#002b36", "#073642", "#001e26"] },
  { id: "solarized-light", name: "Solarized Light", colors: ["#fdf6e3", "#eee8d5", "#e4dec7"] },
  { id: "great-wave", name: "Great Wave", colors: ["#1a1b26", "#16161e", "#0f0f14"] },
  { id: "great-wave-light", name: "Great Wave Light", colors: ["#fffef7", "#f2f0e4", "#e6e2d0"] },
  { id: "matrix", name: "The Matrix", colors: ["#000000", "#050505", "#000000"] }
];

// --- INITIALIZATION ---
function init() {
  setupEventListeners();
  loadSavedTheme();
  renderExplorerTree();
  openFile(activeFile);
  renderSettingsThemes();
  calculateTagsCount();
  
  // Initialize window resize collapse behavior
  if (window.innerWidth < 768) {
    toggleSidebar(true);
  }
}

// --- STATE MUTATORS & RENDERERS ---

// Toggle sidebar collapse
function toggleSidebar(forceCollapse) {
  if (forceCollapse !== undefined) {
    sidebarCollapsed = forceCollapse;
  } else {
    sidebarCollapsed = !sidebarCollapsed;
  }
  
  if (sidebarCollapsed) {
    sidePane.classList.add("collapsed");
    document.querySelectorAll(".activity-item").forEach(item => {
      if (item.id !== "settings-nav-item") {
        item.classList.remove("active");
      }
    });
  } else {
    sidePane.classList.remove("collapsed");
    // Mark the correct activity bar icon active
    activateActivityItem(sidebarView);
  }
}

// Switch Sidebar panel view
function switchSidebarView(view) {
  sidebarView = view;
  
  // Show right pane
  document.getElementById("explorer-pane-view").style.display = view === "explorer" ? "block" : "none";
  document.getElementById("search-pane-view").style.display = view === "search" ? "block" : "none";
  document.getElementById("tags-pane-view").style.display = view === "tags" ? "block" : "none";
  document.getElementById("settings-pane-view").style.display = view === "settings" ? "block" : "none";
  
  // Update Header Title
  let title = "Explorer";
  if (view === "search") title = "Search";
  if (view === "tags") title = "Tags";
  if (view === "settings") title = "Settings";
  paneHeaderTitle.innerText = title;
  
  // Mark activity item active
  activateActivityItem(view);
  
  if (sidebarCollapsed) {
    toggleSidebar(false);
  }
}

function activateActivityItem(view) {
  document.querySelectorAll(".activity-item").forEach(item => {
    item.classList.remove("active");
  });
  
  if (view === "explorer") document.getElementById("explorer-nav-item").classList.add("active");
  if (view === "search") document.getElementById("search-nav-item").classList.add("active");
  if (view === "tags") document.getElementById("tags-nav-item").classList.add("active");
  if (view === "settings") document.getElementById("settings-nav-item").classList.add("active");
}

// Explorer File Tree Renderer
function renderExplorerTree() {
  const categories = {
    "root": { name: "ABHISHEK-KUMAR", open: true, files: ["about", "contact"] },
    "skills": { name: "skills", open: true, files: ["skills-languages", "skills-frontend", "skills-databases", "skills-ml", "skills-tools"] },
    "projects": { name: "projects", open: true, files: ["projects-predictor", "projects-chatbot", "projects-onecard"] },
    "experience": { name: "experience", open: true, files: ["experience-coding-club", "experience-gdg"] },
    "education": { name: "education", open: true, files: ["education-mca", "education-bca", "education-certs"] }
  };
  
  treeContentContainer.innerHTML = "";
  
  // Render categories and folders
  Object.keys(categories).forEach(catKey => {
    const cat = categories[catKey];
    
    if (catKey === "root") {
      // Root Title (fake folder containing about and contact at root level)
      cat.files.forEach(fileId => {
        const file = fileSystem[fileId];
        treeContentContainer.appendChild(createFileNode(file));
      });
    } else {
      // Normal Folder
      const folderHeader = document.createElement("div");
      folderHeader.className = "tree-node folder-node";
      folderHeader.innerHTML = `<i class="fas ${cat.open ? 'fa-folder-open' : 'fa-folder'}"></i> <span>${cat.name}</span>`;
      folderHeader.onclick = () => {
        cat.open = !cat.open;
        renderExplorerTree(); // Re-render tree on folder toggle
      };
      treeContentContainer.appendChild(folderHeader);
      
      if (cat.open) {
        cat.files.forEach(fileId => {
          const file = fileSystem[fileId];
          treeContentContainer.appendChild(createFileNode(file));
        });
      }
    }
  });
}

function createFileNode(file) {
  const node = document.createElement("div");
  node.className = `tree-node file-node ${activeFile === file.id ? 'active' : ''}`;
  node.innerHTML = `<i class="${file.icon}"></i> <span>${file.name}</span>`;
  node.onclick = () => openFile(file.id);
  return node;
}

// Open File in Editor
function openFile(fileId) {
  if (!fileSystem[fileId]) return;
  
  activeFile = fileId;
  
  // Add to open tabs list if not exists
  if (!openTabs.includes(fileId)) {
    openTabs.push(fileId);
  }
  
  // Re-render Explorer Tree to update active state selection
  renderExplorerTree();
  
  // Render Tab Bar
  renderTabBar();
  
  // Render Document Content
  renderEditorContent(fileId);
  
  // Parse Outlines
  generateOutline(fileId);
  
  // Populate related documents
  renderRelated(fileId);
  
  // Populate Tags list
  renderTagsCloud(fileId);

  // Collapse Outline Panel on Settings page load and switch sidebar nav
  const infoPanel = document.querySelector(".info-panel");
  if (infoPanel) {
    if (fileId === "settings") {
      infoPanel.classList.add("collapsed");
      switchSidebarView("settings");
    } else {
      infoPanel.classList.remove("collapsed");
      switchSidebarView("explorer");
    }
  }

  // Settings active theme setups
  if (fileId === "settings") {
    const currentTheme = getThemeCookie() || "dark";
    setTimeout(() => {
      const dropdown = document.getElementById("settings-theme-select");
      if (dropdown) dropdown.value = currentTheme;
      
      document.querySelectorAll(".settings-theme-card").forEach(card => {
        card.classList.remove("active");
      });
      
      if (currentTheme === "dark") {
        const c1 = document.getElementById("settings-theme-card-dark");
        const c2 = document.getElementById("settings-theme-card-dark-modern");
        if (c1) c1.classList.add("active");
        if (c2) c2.classList.add("active");
      } else {
        const activeCard = document.getElementById(`settings-theme-card-${currentTheme}`);
        if (activeCard) activeCard.classList.add("active");
      }
    }, 50);
  }
}

// Close File Tab
function closeFileTab(fileId, event) {
  if (event) event.stopPropagation(); // Avoid triggering open tab click
  
  openTabs = openTabs.filter(id => id !== fileId);
  
  if (activeFile === fileId) {
    if (openTabs.length > 0) {
      openFile(openTabs[openTabs.length - 1]);
    } else {
      // Show blank screen
      activeFile = "";
      renderTabBar();
      switchSidebarView("explorer");
      editorWindow.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--fg-secondary);">
          <i class="fab fa-markdown" style="font-size: 64px; margin-bottom: 15px; opacity: 0.3;"></i>
          <p>No editor is currently open. Select a file in the Explorer tree.</p>
        </div>
      `;
      outlineContainer.innerHTML = `<span class="outline-item">No outline available</span>`;
      relatedContainer.innerHTML = "";
      tagsCloudContainer.innerHTML = "";
    }
  } else {
    renderTabBar();
  }
}

// Tab Bar Renderer
function renderTabBar() {
  tabBar.innerHTML = "";
  openTabs.forEach(fileId => {
    const file = fileSystem[fileId];
    if (!file) return;
    
    const tab = document.createElement("div");
    tab.className = `editor-tab ${activeFile === fileId ? 'active' : ''}`;
    tab.innerHTML = `
      <i class="${file.icon}"></i>
      <span>${file.name}</span>
      <span class="close-icon" onclick="closeFileTab('${fileId}', event)">×</span>
    `;
    tab.onclick = () => openFile(fileId);
    tabBar.appendChild(tab);
  });
}

// Content Renderer
function renderEditorContent(fileId) {
  const file = fileSystem[fileId];
  if (!file) return;
  
  editorWindow.innerHTML = `<div class="markdown-body">${file.content}</div>`;
  editorWindow.scrollTop = 0;
}

// Outline Generator (TOC)
function generateOutline(fileId) {
  outlineContainer.innerHTML = "";
  const file = fileSystem[fileId];
  if (!file) return;
  
  // Temporary container to parse heading tags
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = file.content;
  
  const headings = tempDiv.querySelectorAll("h1, h2, h3");
  
  if (headings.length === 0) {
    outlineContainer.innerHTML = `<span class="outline-item">No outline headings found</span>`;
    return;
  }
  
  headings.forEach((h, index) => {
    const tag = h.tagName.toLowerCase();
    const text = h.innerText;
    
    // Create outline node
    const outlineNode = document.createElement("div");
    outlineNode.className = `outline-item ${tag}`;
    outlineNode.innerText = text;
    
    // Add anchor navigation on click
    outlineNode.onclick = () => {
      // Find actual element in active editor window
      const editorHeadings = editorWindow.querySelectorAll("h1, h2, h3");
      if (editorHeadings[index]) {
        editorHeadings[index].scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    outlineContainer.appendChild(outlineNode);
  });
}

// Related documents list
function renderRelated(fileId) {
  relatedContainer.innerHTML = "";
  const file = fileSystem[fileId];
  if (!file || !file.related || file.related.length === 0) {
    relatedContainer.innerHTML = `<span class="outline-item">No related files</span>`;
    return;
  }
  
  file.related.forEach(relId => {
    const relFile = fileSystem[relId];
    if (!relFile) return;
    
    const relNode = document.createElement("div");
    relNode.className = "related-item";
    relNode.innerHTML = `<i class="fas fa-link" style="font-size: 12px; transform: rotate(-45deg); color: var(--fg-secondary);"></i> <span>${relFile.name}</span>`;
    relNode.onclick = () => openFile(relId);
    relatedContainer.appendChild(relNode);
  });
}

// Document Tags Cloud Renderer
function renderTagsCloud(fileId) {
  tagsCloudContainer.innerHTML = "";
  const file = fileSystem[fileId];
  if (!file || !file.tags || file.tags.length === 0) {
    tagsCloudContainer.innerHTML = `<span class="outline-item">No tags for this file</span>`;
    return;
  }
  
  file.tags.forEach(tag => {
    const pill = document.createElement("span");
    pill.className = "tag-badge-pill";
    pill.innerHTML = `<i class="fas fa-tag" style="font-size: 10px; opacity: 0.6;"></i> <span>${tag}</span>`;
    pill.onclick = () => {
      switchSidebarView("search");
      searchInput.value = tag;
      executeSearch(tag);
    };
    tagsCloudContainer.appendChild(pill);
  });
}

// Calculate and render all tags and their frequency
function calculateTagsCount() {
  const tagCounts = {};
  Object.values(fileSystem).forEach(file => {
    if (file.tags) {
      file.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });
  
  tagsCountContainer.innerHTML = "";
  Object.keys(tagCounts).sort((a,b) => tagCounts[b] - tagCounts[a]).forEach(tag => {
    const count = tagCounts[tag];
    const tagItem = document.createElement("div");
    tagItem.className = "sidebar-tag-item";
    tagItem.innerHTML = `
      <span>#${tag}</span>
      <span class="sidebar-tag-count">${count}</span>
    `;
    tagItem.onclick = () => {
      switchSidebarView("search");
      searchInput.value = tag;
      executeSearch(tag);
    };
    tagsCountContainer.appendChild(tagItem);
  });
}

// Settings: Themes list setup
function renderSettingsThemes() {
  const container = document.getElementById("theme-options-list");
  container.innerHTML = "";
  
  themes.forEach(theme => {
    const card = document.createElement("div");
    card.id = `theme-card-${theme.id}`;
    card.className = "theme-option-card";
    card.innerHTML = `
      <span>${theme.name}</span>
      <div class="theme-preview-dots">
        <span class="theme-dot" style="background-color: ${theme.colors[0]}"></span>
        <span class="theme-dot" style="background-color: ${theme.colors[1]}"></span>
        <span class="theme-dot" style="background-color: ${theme.colors[2]}"></span>
      </div>
    `;
    card.onclick = () => selectTheme(theme.id);
    container.appendChild(card);
  });
  
  // Highlight active theme
  const current = getThemeCookie() || "dark";
  const activeCard = document.getElementById(`theme-card-${current}`);
  if (activeCard) activeCard.classList.add("active");
}

// Select Theme
function selectTheme(themeId) {
  // Update data-theme attribute on <html>
  rootHtml.setAttribute("data-theme", themeId);
  
  // Set theme cookie
  document.cookie = `theme=${themeId};path=/;max-age=31536000`;
  
  // Update bottom text
  activeThemeText.innerText = themeId.charAt(0).toUpperCase() + themeId.slice(1).replace("-", " ");
  
  // Update settings sidebar cards active highlight
  document.querySelectorAll(".theme-option-card").forEach(card => {
    card.classList.remove("active");
  });
  const activeCard = document.getElementById(`theme-card-${themeId}`);
  if (activeCard) activeCard.classList.add("active");

  // Sync with Settings Tab dropdown selection if open
  const dropdown = document.getElementById("settings-theme-select");
  if (dropdown) dropdown.value = themeId;

  // Sync with Settings Tab grid cards highlight if open
  document.querySelectorAll(".settings-theme-card").forEach(card => {
    card.classList.remove("active");
  });
  if (themeId === "dark") {
    const c1 = document.getElementById("settings-theme-card-dark");
    const c2 = document.getElementById("settings-theme-card-dark-modern");
    if (c1) c1.classList.add("active");
    if (c2) c2.classList.add("active");
  } else {
    const c = document.getElementById(`settings-theme-card-${themeId}`);
    if (c) c.classList.add("active");
  }
}

// Helper to get cookies
function getThemeCookie() {
  const match = document.cookie.match(new RegExp("(^| )theme=([^;]+)"));
  return match ? match[2] : null;
}

// Load Saved Theme
function loadSavedTheme() {
  const storedTheme = getThemeCookie() || "dark";
  selectTheme(storedTheme);
}

// Search Logic
function executeSearch(query) {
  searchResultsContainer.innerHTML = "";
  if (!query || query.trim() === "") {
    searchResultsContainer.innerHTML = `<div style="padding: 10px 15px; color: var(--fg-secondary); font-size: 13px;">Enter a search term...</div>`;
    return;
  }
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  const results = [];
  
  Object.values(fileSystem).forEach(file => {
    // 1. Search filename
    let nameScore = 0;
    if (file.name.toLowerCase().includes(query.toLowerCase())) {
      nameScore += 10;
    }
    
    // 2. Search tags
    let tagScore = 0;
    file.tags.forEach(tag => {
      if (searchTerms.includes(tag.toLowerCase())) {
        tagScore += 5;
      }
    });
    
    // 3. Search HTML content
    let contentMatches = [];
    const strippedContent = file.content.replace(/<[^>]*>/g, " "); // remove tags
    
    // Find matching snippets
    searchTerms.forEach(term => {
      let index = strippedContent.toLowerCase().indexOf(term);
      if (index !== -1) {
        let start = Math.max(0, index - 20);
        let end = Math.min(strippedContent.length, index + term.length + 30);
        let snippet = strippedContent.substring(start, end).trim();
        
        // Highlight terms
        const highlighted = snippet.replace(new RegExp(`(${term})`, "gi"), "<mark>$1</mark>");
        contentMatches.push(`...${highlighted}...`);
      }
    });
    
    const totalScore = nameScore + tagScore + (contentMatches.length * 2);
    if (totalScore > 0) {
      results.push({
        id: file.id,
        name: file.name,
        icon: file.icon,
        match: contentMatches[0] || `File match: ${file.name}`,
        score: totalScore
      });
    }
  });
  
  // Sort by score
  results.sort((a,b) => b.score - a.score);
  
  if (results.length === 0) {
    searchResultsContainer.innerHTML = `<div style="padding: 10px 15px; color: var(--fg-secondary); font-size: 13px;">No results found.</div>`;
    return;
  }
  
  results.forEach(res => {
    const card = document.createElement("div");
    card.className = "search-result-item";
    card.innerHTML = `
      <div class="search-result-title"><i class="${res.icon}"></i> ${res.name}</div>
      <div class="search-result-match">${res.match}</div>
    `;
    card.onclick = () => openFile(res.id);
    searchResultsContainer.appendChild(card);
  });
}

// --- EVENT LISTENERS CONFIG ---
function setupEventListeners() {
  // Activity bar switches
  document.getElementById("explorer-nav-item").onclick = (e) => {
    e.preventDefault();
    if (sidebarView === "explorer") {
      toggleSidebar();
    } else {
      switchSidebarView("explorer");
    }
  };
  
  document.getElementById("search-nav-item").onclick = (e) => {
    e.preventDefault();
    if (sidebarView === "search") {
      toggleSidebar();
    } else {
      switchSidebarView("search");
    }
  };
  
  document.getElementById("tags-nav-item").onclick = (e) => {
    e.preventDefault();
    if (sidebarView === "tags") {
      toggleSidebar();
    } else {
      switchSidebarView("tags");
    }
  };
  
  document.getElementById("settings-nav-item").onclick = (e) => {
    e.preventDefault();
    openFile("settings");
  };
  
  // Search input typing handler
  searchInput.oninput = (e) => {
    executeSearch(e.target.value);
  };
  
  // Sync collapse sidepane on click close button
  document.getElementById("close-side-pane-btn").onclick = () => {
    toggleSidebar(true);
  };
  
  // Status bar theme switch triggers settings menu
  document.getElementById("status-theme-trigger").onclick = () => {
    openFile("settings");
  };
  
  // Mobile responsive layout auto toggle on resize
  window.onresize = () => {
    if (window.innerWidth < 768 && !sidebarCollapsed) {
      toggleSidebar(true);
    }
  };
}

// Toggle right sidebar panel sections
function toggleRightSection(section) {
  const container = document.getElementById(`${section}-container` === 'tags-container' ? 'tags-cloud-container' : `${section}-container`);
  const chevron = document.getElementById(`${section}-chevron`);
  if (!container || !chevron) return;
  
  const isCollapsed = container.classList.toggle("collapsed");
  if (isCollapsed) {
    chevron.className = "fas fa-chevron-right";
  } else {
    chevron.className = "fas fa-chevron-down";
  }
}

// Search settings themes grid
function filterSettingsThemes(query) {
  const term = query.toLowerCase().trim();
  document.querySelectorAll(".settings-themes-grid .settings-theme-card").forEach(card => {
    const title = card.querySelector(".settings-theme-card-title").innerText.toLowerCase();
    if (title.includes(term)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Run application on load
window.addEventListener("DOMContentLoaded", init);
