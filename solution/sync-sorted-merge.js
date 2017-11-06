'use strict'

module.exports = (logSources, printer) => {

    // Note: need to import sourceCount

    const sourceCount = require('../index.js')

    // Note: syncLogSources is logSources?

    const syncLogSources = require('../index.js')

    // console.log(sourceCount)
    // console.log(syncLogSources)
    // console.log(logSources)
    
    // Note: print 1 log source

    var current_log

    while (current_log != 'false') {
        current_log = logSources[0].pop()
        if (current_log === false) {
            break
        } else {
            // console.log(current_log)
            printer.print(current_log)
        }
    }

    
    // var earliestLogs = []
    // for (var i = 0; i < 1; i++) {  

        // printer.print(logSources[i].pop())
    
    //     var log = logSources[i].pop()
    //     earliestLogs.push({log, i})
    //     earliestLogs.sort()    
    // }   

    // console.log(earliestLogs)
    // while (logSources != []) {

        // console.log(3)
        // console.log(earliestLogs[0])

    //     var log_index = earliestLogs[0].i
    //     printer.print(earliestLogs[0].log)

    //     var current_log = logSources[log_index].pop()
    //     if (current_log === false) {
    //         logSources.splice(i,1) 
    //         // console.log(current_log, 1)
    //     } else {
    //         earliestLogs.push({current_log, i})
    //         earliestLogs.sort()
    //         // console.log(current_log, 2)
    //     }
    // }

    // if (earliestLogs === []) {
        
    // } else {
    //     for (log in earliestLogs) {
    //         if (current_log.date < log.date) {
    //     }

    // earliestLogs.push((current_log, i))

    // earliestDate = Math.min()

    // var min = console.log(Math.min())

	// throw new Error('Not implemented yet!  That part is up to you!')

    printer.done()
    }

// implement merge sort?