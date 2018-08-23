import Layzr from 'layzr.js'

const instance = Layzr()

document.addEventListener('DOMContentLoaded', event => {
  instance
    .update()           // track initial elements
    .check()            // check initial elements
    .handlers(true)     // bind scroll and resize handlers
})