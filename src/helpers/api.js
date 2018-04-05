const request = (html, callback) => {
    fetch(html).then(result => {
      return result.json();
    }).then(data => {
      callback(null, data.results);
    });
};

module.exports = request;