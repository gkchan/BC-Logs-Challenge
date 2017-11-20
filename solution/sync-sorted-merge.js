'use strict'

module.exports = (logSources, printer) => {

    const sourceCount = logSources.length

    // console.log(sourceCount)
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

    // replace entry with next entry of same log source
    // delete/replace log after printing

    // earliestLogs.push((current_log, i))
    // rename var

    // function isFalse {


    // }

    var earliestLogs = []
    // var earliestDate = ""

    for (var i = 0; i < sourceCount; i++) {  
        var log = logSources[i].pop()
        if (log === false) {
            continue 
        }

        var logDict = {log, i}
        earliestLogs.push(logDict)
     
        for (var j = i-1; j >=0; j--) {
            if (log.date < earliestLogs[j].log.date) {
                // console.log("swap")
                earliestLogs[j+1] = earliestLogs[j]
                earliestLogs[j] = logDict
            }
        }     
    }   

    // console.log(earliestLogs)
    // console.log(logSources)

    // if (4===4) {
    //     return
    // }

    while (earliestLogs.length > 0) {
    // while (earliestLogs != []) {

        var logSourceIndex = earliestLogs[0].i
        printer.print(earliestLogs[0].log)


        while (earliestLogs.length === 1) {
            // ?

            console.log(currentLog)
            console.log(earliestLogs)
            var logSourceIndex = earliestLogs[0].i
            var currentLog = logSources[logSourceIndex].pop()
            console.log(currentLog)
            if (currentLog === false) {
                earliestLogs.splice(0,1)
                console.log("splice 1")

                break
            }
            printer.print(currentLog)
            
        }
        console.log(earliestLogs.length)
        if (earliestLogs.length === 0) {
            for (var i = 0;i < logSources.length; i++) {
                console.log(logSources[i].drained)
            }   
            console.log("end")
            break
        }
       
     
        var currentLog = logSources[logSourceIndex].pop()
     
        if (currentLog === false) {
            earliestLogs.splice(0,1)
            console.log("splice 2")

            continue
        }

        // sometimes throws error due to index
        // while (earliestLogs.length === 1 | currentLog.date < earliestLogs[1].log.date) {
        while (currentLog.date < earliestLogs[1].log.date) {
    
            printer.print(currentLog)
            for (var i = 0;i < logSources.length; i++) {
                    console.log(logSources[i].drained)
                }   

            var currentLog = logSources[logSourceIndex].pop()
            console.log(currentLog)
            if (currentLog === false) {
                earliestLogs.splice(0,1)
                console.log("splice 3")
                break
                
            }
            console.log(earliestLogs.length)
            // if (earliestLogs.length === 1) {
            //     "print log 1 source"
            //     printer.print(earliestLogs[0].log)
            //     break

            // }
        
        }
        // rewrite
        if (currentLog === false) {
            continue
        }
    

        console.log("pass continue")
        earliestLogs[0] = { log: currentLog, i: logSourceIndex }

        for (var k = 1; k < earliestLogs.length; k++) {
            if (currentLog.date > earliestLogs[k].log.date) {
                earliestLogs[k-1] = earliestLogs[k]
                earliestLogs[k] = { log: currentLog, i: logSourceIndex }
            }
        }
    }

    printer.done()

}
