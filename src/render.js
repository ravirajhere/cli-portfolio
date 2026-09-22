/* ==========================================================================
   RAVI RAJ — RENDER
   Main output · sections · boxes · colors
   ========================================================================== */

'use strict';

var c = require('./colors');
var data = require('./data');
var tw = require('./typewriter');

/* ---------- HELPERS ---------- */

function line(char, len) {
    return char.repeat(len);
}

function pad(str, len) {
    var s = String(str);
    if (s.length >= len) return s;
    return s + ' '.repeat(len - s.length);
}

function visibleLen(str) {
    // Strip ANSI codes to get visible length
    return String(str).replace(/\u001b\[[0-9;]*m/g, '').length;
}

function padVisible(str, len) {
    var s = String(str);
    var v = visibleLen(s);
    if (v >= len) return s;
    return s + ' '.repeat(len - v);
}

function centerVisible(str, len) {
    var s = String(str);
    var v = visibleLen(s);
    if (v >= len) return s;
    var total = len - v;
    var left = Math.floor(total / 2);
    var right = total - left;
    return ' '.repeat(left) + s + ' '.repeat(right);
}

/* ---------- SECTION HEADERS ---------- */

function sectionHeader(icon, title) {
    console.log('');
    console.log('  ' + c.gold(icon) + '  ' + c.bold(c.brightWhite(title)));
    console.log('  ' + c.dim('─'.repeat(Math.min(title.length + 4, 40))));
}

/* ---------- HEADER BOX ---------- */

function renderHeader() {
    var width = 56;

    console.log('');
    console.log('  ' + c.gold('╭' + line('─', width) + '╮'));

    var nameLine = '  ' + c.bold(c.brightWhite(data.name));
    console.log('  ' + c.gold('│') + ' ' + padVisible(nameLine, width - 1) + c.gold('│'));

    var roleLine = '  ' + c.amber(data.role) + c.dim(' · ') + c.dim(data.location);
    console.log('  ' + c.gold('│') + ' ' + padVisible(roleLine, width - 1) + c.gold('│'));

    var urlLine = '  ' + c.dim(data.portfolio);
    console.log('  ' + c.gold('│') + ' ' + padVisible(urlLine, width - 1) + c.gold('│'));

    console.log('  ' + c.gold('╰' + line('─', width) + '╯'));
}

/* ---------- SECTIONS ---------- */

function renderTagline() {
    console.log('');
    console.log('  ' + c.italic(c.gray(data.tagline)));
}

function renderSkills() {
    sectionHeader('📌', 'SKILLS');

    data.skills.forEach(function (skill) {
        var level = skill.level === 'working' ? c.green('●') : c.yellow('○');
        var name = pad(skill.name, 22);
        var lvl = skill.level === 'working' ? c.dim('working') : c.dim('learning');
        var since = c.dim('since ' + skill.since);
        console.log('      ' + level + '  ' + c.brightWhite(name) + '  ' + lvl + '  ' + since);
    });
}

function renderProjects() {
    sectionHeader('🚀', 'PROJECTS');

    data.projects.forEach(function (proj, i) {
        var num = c.gold(String(i + 1).padStart(2, '0'));
        console.log('      ' + num + '  ' + c.bold(c.brightWhite(proj.name)));
        console.log('          ' + c.dim(proj.tag));
        console.log('          ' + c.gray(proj.desc));
        console.log('          ' + c.amber('→') + ' ' + c.underline(c.cyan('https://' + proj.url)));
        console.log('');
    });
}

function renderBook() {
    sectionHeader('📖', 'BOOK');

    console.log('      ' + c.bold(c.brightWhite('"' + data.book.title + '"')));
    console.log('      ' + c.italic(c.gold(data.book.subtitle)));
    console.log('      ' + c.dim(data.book.chapters + ' chapters · ' + data.book.languages.join(' + ')));
    console.log('      ' + c.amber('→') + ' ' + c.underline(c.cyan('https://' + data.book.url)));
}

function renderCurrently() {
    sectionHeader('🌱', 'CURRENTLY');

    console.log('      ' + c.gold('Learning') + '  ' + c.gray(data.currently.learning));
    console.log('      ' + c.gold('Reading ') + '  ' + c.gray(data.currently.reading));
    console.log('      ' + c.gold('Open to ') + '  ' + c.gray(data.currently.openTo));
}

function renderLinks() {
    sectionHeader('🔗', 'LINKS');

    var links = data.links;
    var order = ['portfolio', 'author', 'book', 'snake', 'github', 'linkedin'];

    order.forEach(function (key) {
        var l = links[key];
        if (!l) return;
        var label = pad(l.label, 14);
        console.log('      ' + c.brightWhite(label) + c.amber('→') + '  ' + c.cyan('https://' + l.url));
    });
}

function renderContact() {
    sectionHeader('💬', 'CONTACT');

    console.log('      ' + c.brightWhite(data.email));
    console.log('      ' + c.dim('Copy: ') + c.amber('npx ravirajhere --copy'));
}

function renderFooter() {
    console.log('');
    console.log('  ' + c.dim('─'.repeat(60)));
    console.log('  ' + c.dim('Built by hand · No frameworks'));
    console.log('  ' + c.dim('Star this project: ') + c.amber('github.com/ravirajhere/cli-portfolio'));
    console.log('  ' + c.dim('Help: ') + c.amber('npx ravirajhere --help'));
    console.log('');
}

/* ---------- MAIN ---------- */

async function run() {
    try {
        // Header — instant
        renderHeader();

        // Tagline — typewriter effect
        await tw.sleep(150);
        console.log('');
        await tw.type(data.tagline, c.italic, 10);

        // Small pause
        await tw.sleep(200);

        // Sections — instant
        renderSkills();
        renderProjects();
        renderBook();
        renderCurrently();
        renderLinks();
        renderContact();

        // Footer
        renderFooter();

        // Exit clean
        process.exit(0);

    } catch (err) {
        console.error('');
        console.error('  ' + c.red('✗') + ' ' + c.brightWhite('Render failed:'), err.message);
        process.exit(1);
    }
}

module.exports = { run: run };
