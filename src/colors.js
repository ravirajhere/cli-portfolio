/* ==========================================================================
   RAVI RAJ — COLORS
   Zero-dependency ANSI color helpers
   Respects NO_COLOR env var (https://no-color.org/)
   ========================================================================== */

'use strict';

var useColor = (function () {
    if (process.env.NO_COLOR) return false;
    if (process.env.FORCE_COLOR) return true;
    if (!process.stdout || !process.stdout.isTTY) return false;
    return true;
})();

function wrap(open, close) {
    return function (str) {
        if (!useColor) return String(str);
        return '\u001b[' + open + 'm' + str + '\u001b[' + close + 'm';
    };
}

module.exports = {
    enabled: useColor,

    reset:      wrap(0, 0),
    bold:       wrap(1, 22),
    dim:        wrap(2, 22),
    italic:     wrap(3, 23),
    underline:  wrap(4, 24),

    black:      wrap(30, 39),
    red:        wrap(31, 39),
    green:      wrap(32, 39),
    yellow:     wrap(33, 39),
    blue:       wrap(34, 39),
    magenta:    wrap(35, 39),
    cyan:       wrap(36, 39),
    white:      wrap(37, 39),
    gray:       wrap(90, 39),

    brightRed:     wrap(91, 39),
    brightGreen:   wrap(92, 39),
    brightYellow:  wrap(93, 39),
    brightBlue:    wrap(94, 39),
    brightMagenta: wrap(95, 39),
    brightCyan:    wrap(96, 39),
    brightWhite:   wrap(97, 39),

    bgBlack:  wrap(40, 49),
    bgWhite:  wrap(47, 49),

    /* Custom brand colors (approximate via 256-color mode) */
    gold: (function () {
        return function (str) {
            if (!useColor) return String(str);
            return '\u001b[38;5;179m' + str + '\u001b[39m';
        };
    })(),

    amber: (function () {
        return function (str) {
            if (!useColor) return String(str);
            return '\u001b[38;5;208m' + str + '\u001b[39m';
        };
    })(),

    paper: (function () {
        return function (str) {
            if (!useColor) return String(str);
            return '\u001b[38;5;230m' + str + '\u001b[39m';
        };
    })()
};
