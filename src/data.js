/* ==========================================================================
   RAVI RAJ — DATA
   All content in one place · Easy to update
   ========================================================================== */

'use strict';

module.exports = {
    name: 'Ravi Raj',
    role: 'Frontend Developer',
    location: 'Patna, India',
    portfolio: 'ravirajhere.vercel.app',
    email: 'raviraj2k09@gmail.com',

    tagline: 'Hand-written HTML, CSS, JavaScript. No frameworks.',

    skills: [
        { name: 'HTML5',           level: 'working',  since: 2024 },
        { name: 'CSS3',            level: 'working',  since: 2024 },
        { name: 'JavaScript',      level: 'working',  since: 2024 },
        { name: 'Python',          level: 'learning', since: 2024 },
        { name: 'Git & GitHub',    level: 'working',  since: 2024 },
        { name: 'Responsive design', level: 'working', since: 2024 }
    ],

    projects: [
        {
            name: 'Autobiography Reader',
            tag: 'Personal Archive · 11 Chapters · Bilingual',
            desc: 'A book reader that feels like a book — 11 chapters, English + Hinglish, PDF export.',
            url: 'ravirajhere-author.vercel.app/book.html'
        },
        {
            name: 'Resume that prints',
            tag: 'ATS + Print CSS',
            desc: 'A single-page resume that renders identically on screen, on paper, and inside ATS parsers.',
            url: 'ravirajhere.vercel.app/resume-pdf.html'
        },
        {
            name: 'Snake — Nokia Edition',
            tag: 'HTML5 Canvas · Vanilla JS',
            desc: 'Classic Nokia Snake rebuilt for the browser. Retro LCD style, touch + keyboard controls.',
            url: 'ravirajhere-snake.vercel.app'
        }
    ],

    book: {
        title: 'A Boy Who Never Thought',
        subtitle: 'Safar Se Safar Tak',
        chapters: 11,
        languages: ['English', 'Hinglish'],
        url: 'ravirajhere-author.vercel.app/book.html'
    },

    currently: {
        learning: 'React — hooks, state, small projects daily',
        reading: 'Eloquent JavaScript. Slowly. Properly.',
        openTo: 'Frontend internships, freelance, junior roles'
    },

    links: {
        portfolio: { label: 'Portfolio',    url: 'ravirajhere.vercel.app' },
        author:    { label: 'Author site',  url: 'ravirajhere-author.vercel.app' },
        book:      { label: 'Book',         url: 'ravirajhere-author.vercel.app/book.html' },
        snake:     { label: 'Snake game',   url: 'ravirajhere-snake.vercel.app' },
        github:    { label: 'GitHub',       url: 'github.com/ravirajhere' },
        linkedin:  { label: 'LinkedIn',     url: 'linkedin.com/in/Ravirajhere' }
    }
};
