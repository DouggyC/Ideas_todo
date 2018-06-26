if(process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://rei:reichan1@ds217671.mlab.com:17671/vidjot-ideas-prod'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  }
}