'use strict'

module.exports = (logSources, printer) => {

    // Note: need to import sourceCount

    // const sourceCount = require('../index.js')
    const sourceCount = 2

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
    //         // console.log(current_log)
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

 
    
    var earliestLogs = []
    var earliestDate = ""

    for (var i = 0; i < sourceCount; i++) {  
        var log = logSources[i].pop()
        if (log === false) {
            continue 
        }

        if (earliestDate === "" | log.date < earliestDate) {
            earliestDate = log.date
        }
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
    
    // console.log(earliestLogs)

    while (earliestLogs.length > 0) {

        // if (earliestLogs.length === 0) {
        //     break
        // }
        // while (earliestLogs.length === 1) {

            
        //     var currentLog = logSources[0].pop()
        //     if (currentLog === false) {
        //         // earliestLogs.splice(0,1)
        //         break

        //     }
        //     // console.log(currentLog)
        //     printer.print(currentLog)

        // }
       

        var logSourceIndex = earliestLogs[0].i
        // console.log(logSourceIndex)
        // console.log(earliestLogs[0].log)

        printer.print(earliestLogs[0].log)

        // Note: delete/replace log after printing

        var currentLog = logSources[logSourceIndex].pop()
        // if (currentLog === false) {
        //     earliestLogs.splice(0,1)
        //     continue
        // }
        // console.log(earliestLogs)
        // console.log(earliestLogs[1])
      
        if (currentLog === false) {
            earliestLogs.splice(0,1)
            continue
        }

        while (currentLog.date < earliestLogs[1].log.date) {
            // console.log(currentLog)
            
            printer.print(currentLog)
            var currentLog = logSources[logSourceIndex].pop()
            
            // continue
                // check continue
  
        }


        // rewrite
        // if (currentLog === false) {
        //     continue
        // }
        earliestLogs[0] = { log: currentLog, i: logSourceIndex }

        // rename var

        // console.log(currentLog)


        for (var k = 1; k < earliestLogs.length; k++) {
            if (currentLog.date > earliestLogs[k].log.date) {
                earliestLogs[k-1] = earliestLogs[k]
                earliestLogs[k] = { log: currentLog, i: logSourceIndex }
            }
        }



    // console.log(currentLog)

    // console.log(earliestLogs, earliestDate)

    }

    // console.log(earliestDate)

    // earliestLogs.log.date.sort()   
    // console.log(earliestLogs)

    // console.log(logSources[0].last,logSources[1].last)
    // console.log(logSources[0].last.date > logSources[1].last.date)





    // var earliestLogs = []
    // for (var i = 0; i < 1; i++) {  

    //     // printer.print(logSources[i].pop())
    
    //     var log = logSources[i].pop()
    //     earliestLogs.push({log, i})
    //     earliestLogs.sort()    
    // }   

    // var log_index, log

    // console.log(earliestLogs)

    // // while (logSources != []) {
    // while (4===4) {


  
    //     // console.log(earliestLogs[0])

    //     log_index = earliestLogs[0].i
    //     if (log_index === 1) {
    //         console.log("error")
    //     }
    //     printer.print(earliestLogs[0].log)

    //     earliestLogs[log_index] = logSources[log_index].pop()
    //     // earliestLogs.splice(0, 1)

    //     log = logSources[log_index].pop()
    //     if (log === false) {
    //         logSources.splice(i,1)
    //         console.log("delete") 
    //         break
    //         // console.log(logSources)
    //         // console.log(log, 1)
    //         // earliestLogs.sort()
    //         // console.log("E", earliestLogs)
    //     } else {
    //         earliestLogs.push({log, i})
    //         // console.log("E", earliestLogs)
    //         // if (i === 1) {
    //         //     console.log("error")
    //         // }

    //         earliestLogs.sort()
    //         // console.log(log, 2)
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