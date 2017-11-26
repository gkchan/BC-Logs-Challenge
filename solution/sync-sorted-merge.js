'use strict'

module.exports = (logSources, printer) => {

    // return

    const sourceCount = logSources.length
    var entriesPopped = 0

  
   // This solution pops the first log entry from each log source and tracks which log source they came from.
   // It then sorts the entries and keeps track of them with something similar to merge sort with insertion sort.
   // It replaces printed entries with the next entry popped from the same source.

    // Thoughts:
    // delete/replace log after printing
    // list, tuple, hashmap
    // check number popped, printed
    // refactor into smaller units, remove duplicate code
    // rename var
    // let
 
    var earliestLogs = []
 
    for (var i = 0; i < sourceCount; i++) {  
        var log = logSources[i].pop()
        entriesPopped ++
        if (log === false) {
            continue 
        }

        var logDict = {log, i}
        earliestLogs.push(logDict)
     
        for (var j = i-1; j >=0; j--) {
            if (log.date < earliestLogs[j].log.date) {
                earliestLogs[j+1] = earliestLogs[j]
                earliestLogs[j] = logDict
            }
        }     
    }   

    while (earliestLogs.length > 0) {
  
        var logSourceIndex = earliestLogs[0].i
        printer.print(earliestLogs[0].log)

        while (earliestLogs.length === 1) {
    
            var logSourceIndex = earliestLogs[0].i
            var currentLog = logSources[logSourceIndex].pop()
            entriesPopped ++
       
            if (currentLog === false) {
                earliestLogs.splice(0,1)
                break
            }
            printer.print(currentLog)
        }
    
        if (earliestLogs.length === 0) {
            console.log("end")
            break
        }

        var currentLog = logSources[logSourceIndex].pop()
        entriesPopped ++
     
        if (currentLog === false) {
            earliestLogs.splice(0,1)
            continue
        }

        while (currentLog.date < earliestLogs[1].log.date) {
            printer.print(currentLog)
            var currentLog = logSources[logSourceIndex].pop()
            entriesPopped ++
     
            if (currentLog === false) {
                earliestLogs.splice(0,1)
                break
            }
        
        }
        // rewrite
        if (currentLog === false) {
            continue
        }
    
        earliestLogs[0] = { log: currentLog, i: logSourceIndex }

        for (var k = 1; k < earliestLogs.length; k++) {
            if (currentLog.date > earliestLogs[k].log.date) {
                earliestLogs[k-1] = earliestLogs[k]
                earliestLogs[k] = { log: currentLog, i: logSourceIndex }
            }
        }
    }

    printer.done()

    console.log(entriesPopped)


    // tests whether all sources are drained
    // If there was more testing, it would be a separate module
    function testIsDrained() {
        var drained = true
        for (var i = 0;i < logSources.length; i++) {
            if (logSources[i].drained === false) {
                console.log("Log Source " + i + " is not drained.")
                drained = false
            }
        }
       
        if (drained === true) {
            console.log("All sources are drained.")
        } else {
            throw new Error("Not all sources were drained.")
        }
    }

    testIsDrained()

    for (var i = 0;i < logSources.length; i++) {
        console.log(logSources[i].drained)
    }   
}
