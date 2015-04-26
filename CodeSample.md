# Description #
```
var personDescription = {
  1: {name: 'name',  type: 'string', rule: 'required'},
  2: {name: 'id',    type: 'int32',  rule: 'required'},
  3: {name: 'email', type: 'string', rule: 'optional'},
  PhoneNumber: {
    1: {name: 'number', type: 'string', rule: 'required'}
    2: {name: 'type',   type: 'int32',  rule: 'optional'},
  },
  4: {name: 'phone', type: 'PhoneNumber', rule: 'repeated'},
};
```

# Decode #
```
var url = 'http://server/person.bin';
var person = new Protobuf.Decoder(personDescription).decodeUrl(url);
```

# Result #
  * [proto](http://code.google.com/p/protobuf-js/source/browse/trunk/data/embed.proto)
  * [binary](http://code.google.com/p/protobuf-js/source/browse/trunk/data/embed.bin)

```
name:ando
id:123
email:ando@example.com
phone:[
  0:
    number:123-456
    type:1

]
```