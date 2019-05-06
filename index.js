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
    },
    // CONTACTS API
    contacts: {
      create: function(args, cb) {
        doRequest({
          method: 'POST',
          path: '/contacts/'
        }, args, cb)
      },
      get: function(key, cb) {
        doRequest({
          method: 'GET',
          path: '/contacts/' + key
        }, null, cb)
      },
      update: function(key, args, cb) {
        doRequest({
          method: 'PUT',
          path: '/contacts/' + key
        }, args, cb)
      },
      list: function(args, cb) {
        doRequest({
          method: 'GET',
          path: '/contacts/'
        }, args, cb)
      }
    },
    // RATES API
    rates: {
      create: function(args, cb) {
        doRequest({
          method: 'POST',
          path: '/rates/'
        }, args, cb)
      },
      get: function(key, cb) {
        doRequest({
          method: 'GET',
          path: '/rates/' + key
        }, null, cb)
      },
      update: function(key, args, cb) {
        doRequest({
          method: 'PUT',
          path: '/rates/' + key
        }, args, cb)
      },
      delete: function(key, cb) {
        doRequest({
          method: 'DELETE',
          path: '/rates/' + key
        }, null, cb)
      },
      list: function(args, cb) {
        doRequest({
          method: 'GET',
          path: '/rates/'
        }, args, cb)
      }
    },
    // INQUIRY API
    inquiries: {
      create: function(args, cb) {
        doRequest({
          method: 'POST',
          path: '/inquiries/'
        }, args, cb)
      },
      get: function(key, cb) {
        doRequest({
          method: 'GET',
          path: '/inquiries/' + key
        }, null, cb)
      },
      list: function(args, cb) {
        doRequest({
          method: 'GET',
          path: '/inquiries/'
        }, args, cb)
      }
    },
    // INQUIRY-MESSAGES API
    inquiry_messages: {
      create: function(args, cb) {
        doRequest({
          method: 'POST',
          path: '/inquiry-messages/'
        }, args, cb)
      },
      get: function(key, cb) {
        doRequest({
          method: 'GET',
          path: '/inquiry-messages/' + key
        }, null, cb)
      },
      list: function(args, cb) {
        doRequest({
          method: 'GET',
          path: '/inquiry-messages/'
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
      url: (options.path.indexOf('http') == -1 ? 'https://api.myvr.com/v1' : '') + options.path,
      method: options.method,
      json: true,
      auth: {
        user: API_KEY
      }
    }

    if(options.method == 'GET') {
      req_object.qs = args
    }
    else if(options.method == 'POST' || options.method == 'PUT') {
      req_object.body = args
    }

    request(
      req_object,
      function(err, resp, body) {
        if(err) return cb(err)
        cb(null, body)
      }
    )
  }
}