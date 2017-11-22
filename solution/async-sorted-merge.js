'use strict'

module.exports = async (logSources, printer) => {

    // return
    // let

    console.log(logSources)

    let entry;
    entry = await logSources[0].popAsync()

    console.log(entry)
    


	// throw new Error('Not implemented yet!  That part is up to you!')
}