/* ==========================================================================
   RAVI RAJ — TYPEWRITER
   Print text character by character · Optional color · Async
   ========================================================================== */

'use strict';

var SPEED_DEFAULT = 12;     // ms per character
var SPEED_FAST = 4;         // for long text
var SKIP_THRESHOLD = 400;   // chars — if longer, go fast

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

/**
 * Print text char-by-char.
 * @param {string} text - Text to print
 * @param {function} [colorFn] - Optional color wrapper
 * @param {number} [speed] - ms per char (default 12)
 * @returns {Promise<void>}
 */
async function type(text, colorFn, speed) {
    var s = speed || (text.length > SKIP_THRESHOLD ? SPEED_FAST : SPEED_DEFAULT);
    var out = '';
    var str = String(text);

    for (var i = 0; i < str.length; i++) {
        out += str[i];
        // Redraw line — use \r to reset
        process.stdout.write('\r' + (colorFn ? colorFn(out) : out) + ' ');
        await sleep(s);
    }
    // Final newline
    process.stdout.write('\r' + (colorFn ? colorFn(out) : out) + '\n');
}

/**
 * Print text with typewriter, no per-char redraw (better for multi-line).
 * Skips animation if NO_COLOR or not TTY.
 */
async function typeLines(lines, speed) {
    if (!process.stdout.isTTY || process.env.NO_COLOR) {
        lines.forEach(function (line) {
            console.log(line.text);
        });
        return;
    }
    var s = speed || SPEED_DEFAULT;
    for (var i = 0; i < lines.length; i++) {
        await type(lines[i].text, lines[i].color, s);
    }
}

/**
 * Quick "typing dots" loader (· · ·)
 */
async function loader(ms) {
    var chars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    var duration = ms || 600;
    var start = Date.now();
    var i = 0;
    while (Date.now() - start < duration) {
        process.stdout.write('\r  ' + chars[i % chars.length] + ' loading');
        await sleep(60);
        i++;
    }
    process.stdout.write('\r' + ' '.repeat(20) + '\r');
}

module.exports = {
    type: type,
    typeLines: typeLines,
    loader: loader,
    sleep: sleep
};
