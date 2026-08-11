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

// RESUME DOWNLOAD FUNCTION FOR MICROSOFT WORD
function downloadResume() {
    const resumeHTML = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' 
          xmlns:w='urn:schemas-microsoft-com:office:word' 
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <meta charset="utf-8">
        <title>Venkata Sai Derangula Resume</title>
        <!--[if gte mso 9]>
        <xml>
            <w:WordDocument>
                <w:View>Print</w:View>
                <w:Zoom>100</w:Zoom>
                <w:DoNotOptimizeForBrowser/>
            </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
            @page Section1 {
                size: 8.5in 11.0in;
                margin: 0.75in 0.75in 0.75in 0.75in;
                mso-header-margin: 0.5in;
                mso-footer-margin: 0.5in;
                mso-paper-source: 0;
            }
            div.Section1 { page: Section1; }
            
            body { 
                font-family: 'Calibri', 'Segoe UI', Arial, sans-serif; 
                color: #1f2937; 
                line-height: 1.35; 
                font-size: 10.5pt; 
            }
            h1 { 
                color: #0284c7; 
                font-size: 20pt; 
                font-weight: bold; 
                margin: 0 0 4pt 0; 
                text-transform: uppercase;
                letter-spacing: 0.5pt;
            }
            h2 { 
                color: #0f172a; 
                font-size: 12pt; 
                font-weight: bold;
                text-transform: uppercase;
                border-bottom: 1.5pt solid #0284c7; 
                padding-bottom: 2pt; 
                margin-top: 14pt; 
                margin-bottom: 6pt; 
            }
            p { 
                margin: 0 0 4pt 0; 
            }
            ul { 
                margin-top: 2pt; 
                margin-bottom: 6pt; 
                padding-left: 18pt; 
            }
            li { 
                margin-bottom: 3pt; 
                text-align: justify;
            }
            .contact-info { 
                color: #4b5563; 
                font-size: 9.5pt; 
                margin-bottom: 12pt; 
                border-bottom: 0.5pt solid #e5e7eb;
                padding-bottom: 6pt;
            }
            .job-header {
                font-size: 10.5pt;
                margin-top: 6pt;
                margin-bottom: 2pt;
            }
            .job-title {
                font-weight: bold;
                color: #0f172a;
            }
            .job-date {
                font-style: italic;
                color: #4b5563;
            }
            .skills-section p {
                margin-bottom: 3pt;
            }
        </style>
    </head>
    <body>
        <div class="Section1">
            <h1>VENKATA SAI DERANGULA</h1>
            <div class="contact-info">
                Tirupati, Andhra Pradesh, India &nbsp;|&nbsp; +91 8074267018 &nbsp;|&nbsp; derangulavenkatasai@gmail.com &nbsp;|&nbsp; LinkedIn: linkedin.com/in/venkata-sai-derangula-b232b6243
            </div>

            <h2>PROFESSIONAL SUMMARY</h2>
            <p>Computer Science graduate with hands-on experience in technical operations, data pipelines, prompt engineering, and relational database management. Backed by an IBM certification in Databases and SQL for Data Science, practical academic project work in database design, and professional experience managing data operations teams, client communications, and technical support. Detail-oriented and analytical, seeking an entry-level SQL Developer position to leverage database design, query writing, prompt optimization, and data management skills.</p>

            <h2>EDUCATION</h2>
            <p class="job-header"><span class="job-title">B.Tech in Computer Science and Systems Engineering</span></p>
            <p>Sree Vidyanikethan Engineering College, Tirupati (2019 – 2023) &nbsp;|&nbsp; Score: 71%</p>

            <h2>WORK EXPERIENCE</h2>
            <p class="job-header">
                <span class="job-title">Adept Talent Acquisition</span> &nbsp;|&nbsp; <b>Subject Matter Expert (SME) – Data Annotation</b>
            </p>
            <p class="job-date">May 2025 – Present</p>
            <ul>
                <li>Handled and coordinated a team of around 25+ annotators, managing workload distribution, quality checks, and performance tracking.</li>
                <li>Served as the primary client Point of Contact (POC), participating in weekly sync-up calls to communicate production milestones and quality metrics.</li>
                <li>Led multiple LIDAR annotation projects for autonomous driving datasets, improving labeling accuracy by up to 25% through process optimization.</li>
                <li>Trained and mentored junior annotators on 2D/3D labeling, segmentation, and polyline annotation best practices.</li>
            </ul>

            <p class="job-header">
                <span class="job-title">MNV Solutions (Client: Marg ERP Ltd)</span> &nbsp;|&nbsp; <b>Technical Associate</b>
            </p>
            <p class="job-date">July 2024 – March 2025</p>
            <ul>
                <li>Delivered technical support and database troubleshooting for end-users operating Marg ERP software.</li>
                <li>Conducted system configurations, database updates, and software installations via remote management tools.</li>
                <li>Resolved technical and system-level issues to ensure operational stability and data accuracy.</li>
            </ul>

            <h2>TECHNICAL SKILLS</h2>
            <div class="skills-section">
                <p><b>Languages & Web:</b> Python, SQL, HTML, Prompt Engineering</p>
                <p><b>Tools & Platforms:</b> AWS Concepts, Marg ERP Software, Coda AI automation, Labelbox, Scale AI</p>
                <p><b>Core Competencies:</b> Data Analysis, Database Troubleshooting, Technical Support, Team Leadership, Workload Management</p>
            </div>

            <h2>PROJECTS</h2>
            <p class="job-header"><span class="job-title">Legal & Administrative Case Management Hub</span></p>
            <ul>
                <li>Designed and built an interactive administrative dashboard leveraging prompt engineering to structure single-page web workflows.</li>
                <li>Implemented live dynamic search filtering, PDF document attachment previews, and interactive Chart.js analytics.</li>
            </ul>

            <h2>CERTIFICATIONS</h2>
            <ul>
                <li>IBM Certificate in Databases and SQL for Data Science – Coursera</li>
                <li>Simplilearn Certification in Python</li>
                <li>Web Development Using Django Certificate</li>
                <li>Salesforce Certification</li>
            </ul>
        </div>
    </body>
    </html>`;

    const blob = new Blob(['\ufeff' + resumeHTML], { type: 'application/msword;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Venkata_Sai_Derangula_Resume.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// STAGGERED POP-UP ANIMATION: LEFT SIDE FIRST, THEN RIGHT SIDE
document.addEventListener('DOMContentLoaded', () => {
    const heroHeader = document.querySelector('header');
    
    // Assign left and right popup classes
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

    // 1. Scroll-triggered Pop-ups
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

    // 2. Navigation Link Click-triggered Pop-ups
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('href');
            
            if (targetId && targetId !== '#about') {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const lefts = targetSection.querySelectorAll('.scroll-popup-left');
                    const rights = targetSection.querySelectorAll('.scroll-popup-right');
                    
                    lefts.forEach(el => el.classList.remove('show-popup'));
                    rights.forEach(el => el.classList.remove('show-popup'));

                    setTimeout(() => {
                        lefts.forEach(el => el.classList.add('show-popup'));
                    }, 200);

                    setTimeout(() => {
                        rights.forEach(el => el.classList.add('show-popup'));
                    }, 650); // Gap after left side pops
                }
            }
        });
    });
});
