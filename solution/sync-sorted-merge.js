'use strict'

module.exports = (logSources, printer) => {

    // Note: need to import sourceCount

    // const sourceCount = require('../index.js')
    const sourceCount = 3

    // Note: syncLogSources is logSources?

    const syncLogSources = require('../index.js')

    // console.log(sourceCount)
    // console.log(syncLogSources)
    // console.log(logSources)
    
    // Note: print 1 log source

    // var current_log

    // while (current_log != false) {
    //     current_log = logSources[0].pop()
    //     if (current_log === false) {
    //         break
    //     } else {
    //         printer.print(current_log)
    //     }
    // }

    // Thoughts:
    // merge sort
    // pop first entry into list, hashmap
            // sort it?
    // keep track of earliest date, logSources
    // keep track of second earliest date?
    // replace entry with next entry of same log source


    // function isFalse {


    // }

    var earliestLogs = []
    // var earliestDate = ""

    for (var i = 0; i < sourceCount; i++) {  
        var log = logSources[i].pop()
        if (log === false) {
            continue 
        }

        // if (earliestDate === "" | log.date < earliestDate) {
        //     earliestDate = log.date
        // }
        var logDict = {log, i}
        earliestLogs.push(logDict)
        // console.log(earliestLogs)
        for (var j = i-1; j >=0; j--) {
            // console.log(earliestLogs[j].log.date)
            if (log.date < earliestLogs[j].log.date) {
                // console.log("swap")
                earliestLogs[j+1] = earliestLogs[j]
                earliestLogs[j] = logDict
            }
        }     
    }   

    console.log(earliestLogs)


    while (earliestLogs.length > 0) {

        while (earliestLogs.length === 1) {
            console.log(earliestLogs)
            var logSourceIndex = earliestLogs[0].i
            var currentLog = logSources[logSourceIndex].pop()
            if (currentLog === false) {
                earliestLogs.splice(0,1)
                break
            }
            console.log(currentLog, 1)
            printer.print(currentLog)
        }
        // console.log(earliestLogs.length)
        if (earliestLogs.length === 0) {
            for (var i = 0;i < logSources.length; i++) {
                console.log(logSources[i].drained)
            }   
            console.log("end")
            break
        }
       
        var logSourceIndex = earliestLogs[0].i
        // console.log(logSourceIndex)
        // console.log(earliestLogs[0].log, 2)

        // if (currentLog === false) {
        //     earliestLogs.splice(0,1)
        //     continue
        // }
        printer.print(earliestLogs[0].log)

        // Note: delete/replace log after printing

        var currentLog = logSources[logSourceIndex].pop()
  
        // console.log(earliestLogs)
        // console.log(earliestLogs[1])
      
        if (currentLog === false) {
            earliestLogs.splice(0,1)
            continue
        }

        // sometimes throws error due to index
        // while (earliestLogs.length === 1 | currentLog.date < earliestLogs[1].log.date) {
        while (currentLog.date < earliestLogs[1].log.date) {

            // console.log(currentLog, 3)
            printer.print(currentLog)
            // for (var i = 0;i < logSources.length; i++) {
            //         console.log(logSources[i].drained)
            //     }   
            var currentLog = logSources[logSourceIndex].pop()
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

        // console.log(currentLog)

        for (var k = 1; k < earliestLogs.length; k++) {
            if (currentLog.date > earliestLogs[k].log.date) {
                earliestLogs[k-1] = earliestLogs[k]
                earliestLogs[k] = { log: currentLog, i: logSourceIndex }
            }
        }

    }


    // console.log(earliestLogs)

    // rename var
    // console.log(currentLog)
    // console.log(earliestLogs, earliestDate)


    // earliestLogs.log.date.sort()   

    //     earliestLogs.sort()    

    // while (logSources != [])

    // earliestLogs.push((current_log, i))

    // earliestDate = Math.min()

	// throw new Error('Not implemented yet!  That part is up to you!')
    printer.done()

}
