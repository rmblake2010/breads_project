const React = require('react')
const Default = require('./layouts/Default')

function notFound () {

      return (
        <Default>
            <h1>404 NOT FOUND</h1>
        </Default>
      )
  }
module.exports = notFound