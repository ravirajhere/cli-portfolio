/* ==========================================================================
   RAVI RAJ — HELP
   Usage · Options · Examples
   ========================================================================== */

'use strict';

var c = require('./colors');

function render() {
    console.log('');
    console.log('  ' + c.bold(c.brightWhite('ravirajhere')) + ' ' + c.dim('— Terminal portfolio'));
    console.log('');
    console.log('  ' + c.gold('USAGE'));
    console.log('    ' + c.brightWhite('npx ravirajhere') + c.dim(' [options]'));
    console.log('');
    console.log('  ' + c.gold('OPTIONS'));
    console.log('    ' + c.amber('--copy, -c') + '       Copy email to clipboard');
    console.log('    ' + c.amber('--no-color') + '       Disable colors');
    console.log('    ' + c.amber('--version, -v') + '    Show version');
    console.log('    ' + c.amber('--help, -h') + '       Show this help');
    console.log('');
    console.log('  ' + c.gold('EXAMPLES'));
    console.log('    ' + c.dim('$') + ' ' + c.brightWhite('npx ravirajhere'));
    console.log('    ' + c.dim('$') + ' ' + c.brightWhite('npx ravirajhere --copy'));
    console.log('    ' + c.dim('$') + ' ' + c.brightWhite('npx ravirajhere --no-color'));
    console.log('');
    console.log('  ' + c.gold('LINKS'));
    console.log('    ' + c.dim('Portfolio') + '  ' + c.cyan('https://ravirajhere.vercel.app'));
    console.log('    ' + c.dim('GitHub   ') + '  ' + c.cyan('https://github.com/ravirajhere'));
    console.log('    ' + c.dim('Source   ') + '  ' + c.cyan('https://github.com/ravirajhere/cli-portfolio'));
    console.log('');
}

module.exports = { render: render };
