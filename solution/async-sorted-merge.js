'use strict'

module.exports = async (logSources, printer) => {

    // This solution pops the first log entry from each log source and tracks which log source they came from.
    // It then sorts the entries and keeps track of them with something similar to merge sort with insertion sort.
    // It replaces printed entries with the next entry popped from the same source.


    // Pop first entry of each log source and add it along with the log source index into an array:

    const sourceCount = logSources.length
    var earliestLogs = []
 
    for (let i = 0; i < sourceCount; i++) {  
        var log = await logSources[i].popAsync()
        if (log === false) {
            continue 
        }

        var logDict = {log, i}
        earliestLogs.push(logDict)
    }   


    // Sort array of first entries:

    function quickSortLogs(entriesList) {

        if (entriesList.length < 2) {
            return entriesList
        }

        var pivot = entriesList[Math.floor(entriesList.length/2)].log.date

        var before = []
        var same = []
        var after = []

        for (let i = 0; i < entriesList.length; i++) {

            if (entriesList[i].log.date < pivot) {
                before.push(entriesList[i])
            } else if (entriesList[i].log.date === pivot) {
                same.push(entriesList[i])
            } else if (entriesList[i].log.date > pivot) {
                after.push(entriesList[i])
            }
        }

        return quickSortLogs(before).concat(quickSortLogs(same), quickSortLogs(after))
    }

    earliestLogs = quickSortLogs(earliestLogs)


    // Print logs while sorting:

    while (earliestLogs.length > 0) {
  
        var logSourceIndex = earliestLogs[0].i
        printer.print(earliestLogs[0].log)

        while (earliestLogs.length === 1) {
            var currentLog = await logSources[logSourceIndex].popAsync()
            if (currentLog === false) {
                earliestLogs.splice(0,1)
                break
            }
            printer.print(currentLog)
        }
    
        if (earliestLogs.length === 0) {
            break
        }

        currentLog = await logSources[logSourceIndex].popAsync()
        if (currentLog === false) {
            earliestLogs.splice(0,1)
            continue
        }

        while (currentLog.date < earliestLogs[1].log.date) {
            printer.print(currentLog)

            currentLog = await logSources[logSourceIndex].popAsync()
            if (currentLog === false) {
                earliestLogs.splice(0,1)
                break
            }
        
        }
  
        if (currentLog === false) {
            continue
        }
    
        earliestLogs[0] = { log: currentLog, i: logSourceIndex }

        for (let j = 1; j < earliestLogs.length; j++) {
            if (currentLog.date > earliestLogs[j].log.date) {
                earliestLogs[j-1] = earliestLogs[j]
                earliestLogs[j] = { log: currentLog, i: logSourceIndex }
            }
        }
    }

    printer.done()


    // Tests whether all sources are drained
    // If there was more testing, it would be a separate module
    function testIsDrained() {
        var drained = true
        for (let i = 0;i < logSources.length; i++) {
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

    // testIsDrained()
}