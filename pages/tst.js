window.onload = function () {
    var input = document.getElementById('inCLI');
    var output = document.getElementById('output');
    var pages = document.getElementById('pages');
    pages = pages.getElementsByTagName('div');
    // Turn HTML into lines for printing.
    processPages();
    // Print initial help page.
    printLines(pages[0]);
    // Focus on input.
    // Disabled for embedded use
    // input.focus();

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
        // Indexes relate to their position in the HTML.
        var indexes = {
            help: 0,
            about: 1,
            bio: 2,
            contact: 3,
            blog: 4,
            return:5,
            start:6
        };
        // if (s=="start"){
        //     window.open("../img/hustgi.jpg");
        // }else if (s=="return"){
        //     window.open("../img/hustgi.jpg");
        // }else if (s=="about"){
        //     window.open("../img/hustgi.jpg");
        // }
        // Command is in indexes list.
        if (typeof indexes[s] != 'undefined') {
            printLines(pages[indexes[s]], '#33B');
            window.open("../img/hustgi.jpg");
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
        window.scrollTo(0, document.body.scrollHeight);
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