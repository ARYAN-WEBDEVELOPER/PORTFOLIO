function downloadResume() {
    const resumeContent = document.getElementById('resume-content').innerHTML;
    const blob = new Blob([`
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h3 { color: #2c3e50; }
                p, ul { margin: 10px 0; }
            </style>
        </head>
        <body>${resumeContent}</body>
        </html>
    `], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    a.click();
    URL.revokeObjectURL(url);
}