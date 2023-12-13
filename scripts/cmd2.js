window.onload = function () {
    var input = document.getElementById('inCLI');
    var output = document.getElementById('output');
    var pages = document.getElementById('pages');
    pages = pages.getElementsByTagName('div');
    // Turn HTML into lines for printing.
    processPages();
    // Print initial help page.
    // printLines(pages[0]);
    // Focus on input.
    // Disabled for embedded use
    input.focus();

    document.body.onkeypress = function (e) {
        // Not enter
        if (e.keyCode != 13) {
            return;
        }

        // Print the user input.
        printLine(input.value, '#3A3');
        // Process command.
        enterCommand(input.value);
        // Reset input.
        input.value = '';
    }
    function enterCommand(s) {
        if (s=="blog"){
            window.open("./blog.html");
        }else if (s=="back"){
            window.open("../index.html");
        }else if (s=="about"){
            window.open("./aboutme.html");
        }else if (s=="start"){
            window.open("./start.html");
        }else if (s=="contact"){
            window.open("./contact.html");
        }else if (s=="past"){
            window.open("./slide.html");
        }else if (s=="help"){
            printLine('直接点击上面的条目，或者手动输入', '#D33');
        }
        // Unknown Command.
        else {
            printLine('UNKNOWN COMMAND: ' + s, '#D33');
        }
    }
    function printLines(lines, color) {
        for (var i = 0; i < lines.length; i++) {
            printLine(lines[i], color);
        }
    }
    function printLine(s, color) {
        if (typeof color == 'undefined') {
            color = ''
        }

        var newLine = document.createElement('div');
        newLine.className = 'line';
        newLine.innerHTML = '> ' + s;
        newLine.style.color = color;

        output.appendChild(newLine);
    }

    function processPages() {
        var processedPages = [];
        for (var i = 0; i < pages.length; i++) {
            var lines = pages[i].innerHTML.split(/\r?\n/);
            processedPages.push(lines);
        }
        pages = processedPages;
    }
    
}