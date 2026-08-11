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

// RESUME DOWNLOAD FUNCTION (Word Document Format)
function downloadResume() {
    const resumeHTML = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <meta charset="utf-8">
        <title>Venkata Sai Derangula Resume</title>
        <style>
            body { font-family: 'Calibri', sans-serif; color: #333; line-height: 1.5; }
            h1 { color: #0284c7; margin-bottom: 0px; }
            h2 { color: #1e293b; border-bottom: 2px solid #0284c7; padding-bottom: 4px; margin-top: 20px; }
            p { margin: 4px 0; }
            ul { margin-top: 5px; margin-bottom: 10px; }
            li { margin-bottom: 4px; }
            .contact-info { color: #666; font-size: 11pt; margin-bottom: 15px; }
        </style>
    </head>
    <body>
        <h1>VENKATA SAI DERANGULA</h1>
        <div class="contact-info">
            Tirupati, Andhra Pradesh, India | +91 8074267018 | derangulavenkatasai@gmail.com | LinkedIn: linkedin.com/in/venkata-sai-derangula-b232b6243
        </div>

        <h2>PROFESSIONAL SUMMARY</h2>
        <p>Computer Science graduate with hands-on experience in technical operations, data pipelines, prompt engineering, and relational database management. Backed by an IBM certification in Databases and SQL for Data Science, practical academic project work in database design, and professional experience managing data operations teams, client communications, and technical support. Detail-oriented and analytical, seeking an entry-level SQL Developer position to leverage database design, query writing, prompt optimization, and data management skills.</p>

        <h2>EDUCATION</h2>
        <p><b>B.Tech in Computer Science and Systems Engineering</b></p>
        <p>Sree Vidyanikethan Engineering College, Tirupati (2019 – 2023) | Score: 71%</p>

        <h2>WORK EXPERIENCE</h2>
        <p><b>Adept Talent Acquisition | Subject Matter Expert (SME) – Data Annotation</b></p>
        <p><i>May 2025 – Present</i></p>
        <ul>
            <li>Handled and coordinated a team of around 25+ annotators, managing workload distribution, quality checks, and performance tracking.</li>
            <li>Served as the primary client Point of Contact (POC), participating in weekly sync-up calls to communicate production milestones and quality metrics.</li>
            <li>Led multiple LIDAR annotation projects for autonomous driving datasets, improving labeling accuracy by up to 25% through process optimization.</li>
            <li>Trained and mentored junior annotators on 2D/3D labeling, segmentation, and polyline annotation best practices.</li>
        </ul>

        <p><b>MNV Solutions (Client: Marg ERP Ltd) | Technical Associate</b></p>
        <p><i>July 2024 – March 2025</i></p>
        <ul>
            <li>Delivered technical support and database troubleshooting for end-users operating Marg ERP software.</li>
            <li>Conducted system configurations, database updates, and software installations via remote management tools.</li>
            <li>Resolved technical and system-level issues to ensure operational stability and data accuracy.</li>
        </ul>

        <h2>TECHNICAL SKILLS</h2>
        <p><b>Languages & Web:</b> Python, SQL, HTML, Prompt Engineering</p>
        <p><b>Tools & Platforms:</b> AWS Concepts, Marg ERP Software, Coda AI automation, Labelbox, Scale AI</p>
        <p><b>Core Competencies:</b> Data Analysis, Database Troubleshooting, Technical Support, Team Leadership, Workload Management</p>

        <h2>PROJECTS</h2>
        <p><b>Legal & Administrative Case Management Hub</b></p>
        <ul>
            <li>Designed and built an interactive administrative dashboard leveraging prompt engineering to structure single-page web workflows.</li>
            <li>Implemented live dynamic search filtering, PDF document attachment previews, and interactive Chart.js analytics.</li>
        </ul>
        <p><b>Stock Market Evaluation using Supervised Machine Learning</b></p>
        <ul>
            <li>Structured, cleaned, and processed raw financial datasets to perform comparative performance evaluations across SVM and Decision Trees.</li>
        </ul>

        <h2>CERTIFICATIONS</h2>
        <ul>
            <li>IBM Certificate in Databases and SQL for Data Science – Coursera</li>
            <li>Simplilearn Certification in Python</li>
            <li>Web Development Using Django Certificate</li>
            <li>Salesforce Certification</li>
        </ul>
    </body>
    </html>`;

    const blob = new Blob(['\ufeff' + resumeHTML], { type: 'application/msword' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Venkata_Sai_Derangula_Resume.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
