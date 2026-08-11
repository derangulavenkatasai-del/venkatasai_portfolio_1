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

// DYNAMIC PDF GENERATION WITH FIXED PAGE BREAKS & PROPER FORMATTING
function downloadResumePDF() {
    // Create a temporary hidden container to render clean PDF layout
    const element = document.createElement('div');
    element.innerHTML = `
    <div style="width: 750px; padding: 20px; font-family: Arial, Helvetica, sans-serif; color: #111827; line-height: 1.4; font-size: 11.5px; background: #ffffff;">
        
        <!-- HEADER -->
        <div style="text-align: center; border-bottom: 2px solid #0284c7; padding-bottom: 8px; margin-bottom: 12px;">
            <h1 style="margin: 0; font-size: 20px; color: #0284c7; text-transform: uppercase; letter-spacing: 0.5px;">VENKATA SAI DERANGULA</h1>
            <p style="margin: 4px 0 0 0; font-size: 10.5px; color: #4b5563;">
                Tirupati, Andhra Pradesh, India | +91 8074267018 | derangulavenkatasai@gmail.com<br>
                LinkedIn: linkedin.com/in/venkata-sai-derangula-b232b6243
            </p>
        </div>

        <!-- PROFESSIONAL SUMMARY -->
        <div style="margin-bottom: 12px; page-break-inside: avoid;">
            <h2 style="font-size: 12px; color: #0284c7; border-bottom: 1px solid #d1d5db; padding-bottom: 2px; margin-bottom: 4px; text-transform: uppercase;">Professional Summary</h2>
            <p style="margin: 0; text-align: justify; color: #374151;">
                Computer Science graduate with hands-on experience in technical operations, data pipelines, prompt engineering, and relational database management. Backed by an IBM certification in Databases and SQL for Data Science, practical academic project work in database design, and professional experience managing data operations teams, client communications, and technical support. Detail-oriented and analytical, seeking an entry-level SQL Developer position to leverage database design, query writing, prompt optimization, and data management skills.
            </p>
        </div>

        <!-- EDUCATION -->
        <div style="margin-bottom: 12px; page-break-inside: avoid;">
            <h2 style="font-size: 12px; color: #0284c7; border-bottom: 1px solid #d1d5db; padding-bottom: 2px; margin-bottom: 4px; text-transform: uppercase;">Education</h2>
            <div style="display: flex; justify-content: space-between; font-weight: bold;">
                <span>B.Tech in Computer Science and Systems Engineering</span>
                <span>2019 – 2023</span>
            </div>
            <div style="display: flex; justify-content: space-between; color: #4b5563; font-style: italic;">
                <span>Sree Vidyanikethan Engineering College, Tirupati</span>
                <span>Aggregate: 71%</span>
            </div>
        </div>

        <!-- WORK EXPERIENCE -->
        <div style="margin-bottom: 12px;">
            <h2 style="font-size: 12px; color: #0284c7; border-bottom: 1px solid #d1d5db; padding-bottom: 2px; margin-bottom: 4px; text-transform: uppercase;">Work Experience</h2>
            
            <div style="margin-bottom: 8px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; font-weight: bold;">
                    <span>Adept Talent Acquisition | Subject Matter Expert (SME) - Data Annotation</span>
                    <span>May 2025 – Present</span>
                </div>
                <ul style="margin: 2px 0 0 16px; padding: 0; color: #374151;">
                    <li>Handled and coordinated a team of around 25+ annotators, managing workload distribution, quality checks, and performance tracking.</li>
                    <li>Served as primary client Point of Contact (POC), participating in weekly sync-up calls to communicate production milestones and quality metrics. Managed daily operational follow-ups and resolved project escalations.</li>
                    <li>Led multiple LIDAR annotation projects for autonomous driving datasets, improving labeling accuracy by up to 25% through process optimization.</li>
                    <li>Trained and mentored junior annotators on 2D/3D labeling, segmentation, and polyline annotation best practices.</li>
                    <li>Performed in-depth point cloud analysis for object detection and lane marking projects.</li>
                </ul>
            </div>

            <div style="page-break-inside: avoid;">
                <div style="display: flex; justify-content: space-between; font-weight: bold;">
                    <span>MNV Solutions (Client: Marg ERP Ltd) | Technical Associate</span>
                    <span>July 2024 – March 2025</span>
                </div>
                <ul style="margin: 2px 0 0 16px; padding: 0; color: #374151;">
                    <li>Delivered technical support and database troubleshooting for end-users operating Marg ERP software.</li>
                    <li>Conducted system configurations, database updates, and software installations via remote management tools.</li>
                    <li>Resolved technical and system-level issues to ensure operational stability and data accuracy.</li>
                </ul>
            </div>
        </div>

        <!-- TECHNICAL SKILLS -->
        <div style="margin-bottom: 12px; page-break-inside: avoid;">
            <h2 style="font-size: 12px; color: #0284c7; border-bottom: 1px solid #d1d5db; padding-bottom: 2px; margin-bottom: 4px; text-transform: uppercase;">Technical Skills</h2>
            <ul style="margin: 2px 0 0 16px; padding: 0; color: #374151;">
                <li><b>Languages & Web:</b> Python, SQL, HTML, Prompt Engineering.</li>
                <li><b>Tools & Platforms:</b> AWS Concepts, Marg ERP Software, Coda AI automation.</li>
                <li><b>Data Annotation Tools:</b> HCP Tool, Labeling, Labelbox, Scale AI, etc.</li>
                <li><b>Dataset Quality Assurance:</b> Dataset QA & Validation.</li>
                <li><b>Core Competencies:</b> Data Analysis, Database Troubleshooting, Technical Support, Team Leadership, Workload Management, System Configuration, Problem Solving.</li>
            </ul>
        </div>

        <!-- PROJECTS -->
        <div style="margin-bottom: 12px;">
            <h2 style="font-size: 12px; color: #0284c7; border-bottom: 1px solid #d1d5db; padding-bottom: 2px; margin-bottom: 4px; text-transform: uppercase;">Projects</h2>
            
            <div style="margin-bottom: 8px; page-break-inside: avoid;">
                <p style="margin: 0; font-weight: bold;">Legal & Administrative Case Management Hub <span style="font-weight: normal; font-style: italic; color: #4b5563;">| Vanilla JS, HTML5, CSS3, Chart.js, Prompt Engineering</span></p>
                <ul style="margin: 2px 0 0 16px; padding: 0; color: #374151;">
                    <li>Designed and built an interactive administrative dashboard leveraging prompt engineering to structure single-page web workflows and data storage.</li>
                    <li>Implemented live dynamic search filtering, PDF document attachment previews, inline table updates, and offline JSON data export/import capabilities.</li>
                    <li>Integrated dynamic Graphical Analytics using Chart.js to map pending case distributions visually across multiple administrative divisions.</li>
                </ul>
            </div>

            <div style="margin-bottom: 8px; page-break-inside: avoid;">
                <p style="margin: 0; font-weight: bold;">Academic Project: Stock Market Evaluation using Supervised Machine Learning <span style="font-weight: normal; font-style: italic; color: #4b5563;">| Python, SVM, Decision Tree, Linear Regression</span></p>
                <ul style="margin: 2px 0 0 16px; padding: 0; color: #374151;">
                    <li>Structured, cleaned, and processed raw financial datasets to perform comparative performance evaluation.</li>
                    <li>Evaluated confidence and accuracy metrics across multiple algorithms to select the optimal model for prediction tasks.</li>
                </ul>
            </div>

            <div style="page-break-inside: avoid;">
                <p style="margin: 0; font-weight: bold;">Academic Project: E-Commerce Web Application <span style="font-weight: normal; font-style: italic; color: #4b5563;">| SQL, HTML, CSS, JavaScript</span></p>
                <ul style="margin: 2px 0 0 16px; padding: 0; color: #374151;">
                    <li>Designed and configured a relational database to store user records, product details, and transaction data for a direct sales platform.</li>
                    <li>Defined entity relationships using primary and foreign keys, and wrote optimized SQL queries for data retrieval and manipulation.</li>
                </ul>
            </div>
        </div>

        <!-- CERTIFICATIONS -->
        <div style="margin-bottom: 12px; page-break-inside: avoid;">
            <h2 style="font-size: 12px; color: #0284c7; border-bottom: 1px solid #d1d5db; padding-bottom: 2px; margin-bottom: 4px; text-transform: uppercase;">Certifications</h2>
            <ul style="margin: 2px 0 0 16px; padding: 0; color: #374151;">
                <li>IBM Certificate in Databases and SQL for Data Science – Coursera</li>
                <li>Simplilearn Certification in Python</li>
                <li>Web Development Using Django Certificate</li>
                <li>Salesforce Certification</li>
            </ul>
        </div>

        <!-- DECLARATION -->
        <div style="page-break-inside: avoid;">
            <h2 style="font-size: 12px; color: #0284c7; border-bottom: 1px solid #d1d5db; padding-bottom: 2px; margin-bottom: 4px; text-transform: uppercase;">Declaration</h2>
            <p style="margin: 0; font-style: italic; color: #4b5563;">
                I hereby declare that the information furnished above is true up to my knowledge and bear the responsibility for the correctness of the above mentioned particulars.
            </p>
        </div>
    </div>
    `;

    const opt = {
        margin:       [0.3, 0.3, 0.3, 0.3],
        filename:     'VENKATA_SAI_DERANGULA_resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
}

// ANIMATION & SCROLL HANDLERS
document.addEventListener('DOMContentLoaded', () => {
    const heroHeader = document.querySelector('header');
    
    const setupPopups = () => {
        const rows = document.querySelectorAll('.experience-row, .project-row, .education-row');
        rows.forEach(row => {
            const leftCol = row.querySelector('.timeline-item-body');
            const rightCol = row.querySelector('.experience-graphic, .project-graphic, .education-graphic');
            if (leftCol) leftCol.classList.add('scroll-popup-left');
            if (rightCol) rightCol.classList.add('scroll-popup-right');
        });

        const cards = document.querySelectorAll('.card, .cert-card');
        cards.forEach((card, index) => {
            if (index % 2 === 0) {
                card.classList.add('scroll-popup-left');
            } else {
                card.classList.add('scroll-popup-right');
            }
        });
    };

    setupPopups();

    const handleScrollPopups = () => {
        const heroBottom = heroHeader ? heroHeader.getBoundingClientRect().bottom : 0;
        const targetElements = document.querySelectorAll('.scroll-popup-left, .scroll-popup-right');

        targetElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.88 && rect.bottom >= 0;

            if (heroBottom < window.innerHeight / 2 && isVisible) {
                el.classList.add('show-popup');
            } else {
                el.classList.remove('show-popup');
            }
        });
    };

    window.addEventListener('scroll', handleScrollPopups);
    handleScrollPopups();
});
