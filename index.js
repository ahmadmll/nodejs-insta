const Insta = require('scraper-instagram');
const InstaClient = new Insta();
InstaClient.getProfile("ahmadmll97")
    .then(profile => {var x= this.sessionId;debugger;console.log(profile);})
    .catch(err => console.error(err));