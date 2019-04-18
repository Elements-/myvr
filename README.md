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

### Rates
See full options list at https://developer.myvr.com/api/#/rates
```javascript
myvr.rates.get('ID', function(err, rate) {})

myvr.rates.list({ limit: 5 }, function(err, rates) {})

myvr.rates.create({ args... }, function(err, rate) {})

myvr.rates.update('ID', { args... }, function(err, rate) {})

myvr.rates.delete('ID', function(err) {})
```

### Inquiries
See full options list at https://developer.myvr.com/api/#/inquiries
```javascript
myvr.inquiries.get('ID', function(err, inquiry) {})

myvr.inquiries.list({ limit: 5 }, function(err, inquiry) {})

myvr.inquiries.create({ args... }, function(err, inquiry) {})
```

### Inquiry Messages
See full options list at https://developer.myvr.com/api/#/inquiry-messages
```javascript
myvr.inquiry_messages.get('ID', function(err, message) {})

myvr.inquiry_messages.list({ limit: 5 }, function(err, messages) {})

myvr.inquiry_messages.create({ args... }, function(err, message) {})
```