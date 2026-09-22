/* ==========================================================================
   RAVI RAJ — COPY
   Copies email to clipboard · Cross-platform
   ========================================================================== */

'use strict';

var c = require('./colors');
var data = require('./data');
var child_process = require('child_process');

function copyToClipboard(text) {
    var platform = process.platform;

    try {
        if (platform === 'darwin') {
            // macOS
            child_process.execSync('pbcopy', { input: text });
            return true;
        }

        if (platform === 'win32') {
            // Windows
            child_process.execSync('clip', { input: text });
            return true;
        }

        // Linux — try xclip, then xsel
        try {
            child_process.execSync('xclip -selection clipboard', { input: text });
            return true;
        } catch (e1) {
            try {
                child_process.execSync('xsel --clipboard --input', { input: text });
                return true;
            } catch (e2) {
                return false;
            }
        }
    } catch (e) {
        return false;
    }
}

function run() {
    var email = data.email;
    var success = copyToClipboard(email);

    console.log('');

    if (success) {
        console.log('  ' + c.green('✓') + '  Email copied to clipboard');
        console.log('  ' + c.dim('  ') + c.brightWhite(email));
    } else {
        console.log('  ' + c.yellow('!') + '  Could not access clipboard');
        console.log('  ' + c.dim('  Copy manually: ') + c.brightWhite(email));
        console.log('');
        console.log('  ' + c.dim('  Linux users: install ') + c.amber('xclip') + c.dim(' or ') + c.amber('xsel'));
    }

    console.log('');
}
