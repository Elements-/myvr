# myvr
Node.JS Interface for MyVR REST API

## Initalization
```javascript
const myvr = require('myvr')('MYVR_API_KEY')
```

## API
### Reservations
See full options list at https://developer.myvr.com/api/#/reservations
```javascript
myvr.reservations.get('ID', function(err, reservation) {})

myvr.reservations.list({ limit: 5 }, function(err, reservations) {})

myvr.reservations.create({ args... }, function(err, reservations) {})
```

### Reservation Payments
See full options list at https://developer.myvr.com/api/#/reservation-payments
```javascript
myvr.reservation_payments.get('ID', function(err, reservation_payment) {})

myvr.reservation_payments.list({ limit: 5 }, function(err, reservation_payments) {})
```

### Contacts
See full options list at https://developer.myvr.com/api/#/contacts
```javascript
myvr.contacts.get('ID', function(err, contact) {})

myvr.contacts.list({ limit: 5 }, function(err, contacts) {})

myvr.contacts.create({ args... }, function(err, contact) {})

myvr.contacts.update('ID', { args... }, function(err, contact) {})
```