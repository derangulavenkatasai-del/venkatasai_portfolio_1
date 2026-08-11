function togglePhotoFlip() {
    const card = document.getElementById('profileCard');
    card.classList.toggle('flipped');
}

const words = ["SQL Developer", "Subject Matter Expert", "Data Operations Specialist", "Prompt Engineer"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}

typingEffect();

// RESUME DOWNLOAD FUNCTION
function downloadResume() {
    const resumeContent = `VENKATA SAI DERANGULA
Tirupati, Andhra Pradesh, India | +91 8074267018 | derangulavenkatasai@gmail.com | LinkedIn: linkedin.com/in/venkata-sai-derangula-b232b6243

PROFESSIONAL SUMMARY
Computer Science graduate with hands-on experience in technical operations, data pipelines, prompt engineering, and relational database management. Backed by an IBM certification in Databases and SQL for Data Science, practical academic project work in database design, and professional experience managing data operations teams, client communications, and technical support. Detail-oriented and analytical, seeking an entry-level SQL Developer position to leverage database design, query writing, prompt optimization, and data management skills.

EDUCATION
B.Tech in Computer Science and Systems Engineering
Sree Vidyanikethan Engineering College, Tirupati (2019 – 2023) | 71%

WORK EXPERIENCE
Adept Talent Acquisition | Subject Matter Expert (SME) – Data Annotation
May 2025 – Present
- Handled and coordinated a team of around 25+ annotators, managing workload distribution, quality checks, and performance tracking.
- Served as the primary client Point of Contact (POC), participating Weekly sync-up calls to communicate production milestones and quality metrics. Managed daily operational follow-ups and resolved project escalations to maintain high client satisfaction and standards.
- Led multiple LIDAR annotation projects for autonomous driving datasets, improving labeling accuracy by up to 25% through process optimization.
- Trained and mentored junior annotators on 2D/3D labeling, segmentation, and polyline annotation best practices.
- Performed in-depth point cloud analysis for object detection and lane marking projects.

MNV Solutions (Client: Marg ERP Ltd) | Technical Associate
July 2024 – March 2025
- Delivered technical support and database troubleshooting for end-users operating Marg ERP software. 
- Conducted system configurations, database updates, and software installations via remote management tools. 
- Resolved technical and system-level issues to ensure operational stability and data accuracy. 

TECHNICAL SKILLS
Languages & Web: Python, SQL, HTML, Prompt Engineering.
Tools & Platforms: AWS Concepts, Marg ERP Software, Coda AI automation. 
Data annotation tools: (HCP tool, Labeling, Label box, Scale AI, etc.) 
Data set Quality Assurance & Validation.
Core Competencies: Data Analysis, Database Troubleshooting, Technical Support, Team Leadership, Workload Management, System Configuration, Problem Solving 

PROJECTS
Legal & Administrative Case Management Hub | Vanilla JS, HTML5, CSS3, Chart.js, Prompt Engineering
- Designed and built an interactive administrative dashboard leveraging prompt engineering to structure single-page web workflows and data storage.
- Implemented live dynamic search filtering, PDF document attachment previews, inline table updates, and offline JSON data export/import capabilities.
- Integrated dynamic Graphical Analytics using Chart.js to map pending case distributions visually across multiple administrative divisions.

Academic Project Stock Market Evaluation using Supervised Machine Learning
Technologies: Python, Machine Learning Algorithms (SVM, Decision Tree, Linear Regression) 
- Structured, cleaned, and processed raw financial datasets to perform comparative performance evaluation. 
- Evaluated confidence and accuracy metrics across multiple algorithms to select the optimal model for prediction tasks. 

Academic Project E-Commerce Web Application 
Technologies: SQL, HTML, CSS, JavaScript 
- Designed and configured a relational database to store user records, product details, and transaction data for a direct sales platform. 
- Defined entity relationships using primary and foreign keys, and wrote optimized SQL queries for data retrieval and manipulation. 

CERTIFICATIONS
- IBM Certificate in Databases and SQL for Data Science – Coursera 
- Simplilearn Certification in Python
- Web Development Using Django Certificate
- Salesforce Certification

DECLARATION
I hereby declare that the information furnished above is true up to my knowledge and bear the responsibility for the correctness of the above mentioned particulars.`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Venkata_Sai_Derangula_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}