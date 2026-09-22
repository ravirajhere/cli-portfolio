#!/usr/bin/env node

/* ==========================================================================
   RAVI RAJ — CLI PORTFOLIO
   Entry point · arg parsing · routing
   ========================================================================== */

'use strict';

var args = process.argv.slice(2);
var flags = {
    copy: args.indexOf('--copy') !== -1 || args.indexOf('-c') !== -1,
    help: args.indexOf('--help') !== -1 || args.indexOf('-h') !== -1,
    version: args.indexOf('--version') !== -1 || args.indexOf('-v') !== -1,
    noColor: args.indexOf('--no-color') !== -1
};

// Disable colors if flag set
if (flags.noColor) {
    process.env.NO_COLOR = '1';
}

try {
    if (flags.version) {
        var pkg = require('../package.json');
        console.log(pkg.version);
        process.exit(0);
    }

    if (flags.help) {
        var help = require('../src/help');
        help.render();
        process.exit(0);
    }

    if (flags.copy) {
        var copy = require('../src/copy');
        copy.run();
        return;
    }

    // Default: render full portfolio
    var render = require('../src/render');
    render.run();

} catch (err) {
    console.error('\n  ✗ Error:', err.message);
    console.error('  → Try: npx ravirajhere --help\n');
    process.exit(1);
}
