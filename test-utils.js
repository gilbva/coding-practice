const logOutput = {
    messages: []
};

var prevLog = console.log;
console.log = function(message) {
    logOutput.messages.push(message);
    //prevLog(message);
}

function initLogs() {
    logOutput.messages = [];
}

function createNumbers(from, to) {
    var array = [];
    for(var i = from; i <= to; i++) {
        array.push(i);
    }
    return array;
}

module.exports = {
    logOutput,
    initLogs,
    createNumbers
}