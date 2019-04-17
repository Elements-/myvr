var request = require('request')

module.exports = function(API_KEY) {
  return {
    // RESERVATIONS API
    reservations: {
      list: function(args, cb) {
        doRequest({
          method: 'GET',
          path: '/reservations/'
        }, args, cb)
      },
      get: function(key, cb) {
        doRequest({
          method: 'GET',
          path: '/reservations/' + key
        }, null, cb)
      },
      create: function(args, cb) {
        doRequest({
          method: 'POST',
          path: '/reservations/'
        }, args, cb)
      }
    },
    // RESERVATION PAYMENTS API
    reservation_payments: {
      get: function(key, cb) {
        doRequest({
          method: 'GET',
          path: '/reservation-payments/' + key
        }, null, cb)
      },
      list: function(args, cb) {
        doRequest({
          method: 'GET',
          path: '/reservation-payments/'
        }, args, cb)
      }
    }
  }

  function doRequest(options, args, cb) {
    if(!cb) {
      cb = args
      args = {}
    }

    var req_object = {
      url: 'https://api.myvr.com/v1' + options.path,
      method: options.method,
      auth: {
        user: API_KEY
      }
    }

    if(options.method == 'GET') {
      req_object.qs = args
    }
    else if(options.method == 'POST') {
      req_object.body = args
      req_object.json = true
    }

    request(
      req_object,
      function(err, resp, body) {
        if(err) return cb(err)
        cb(null, JSON.parse(body))
      }
    )
  }
}