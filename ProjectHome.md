**NOTE:** This project is just started and very experimental one. The functionalities are extremely limited and some of them may be completely changed in future editions.

# What's this? #
`protobuf-js' is a Protocol Buffers encoder/decoder for Javascript.

# Would you like to try? #
  1. download
  1. ruby bin/start\_server.rb
  1. access http://yourserver:10080/
  1. click the `Decode!' button
  1. see the decoded message

# What's happen? #
Your browser downloaded data/sample.bin encoded by [ruby-protobuf](http://code.google.com/p/ruby-protobuf/) and then protobuf-js decoded the binary message.

# Code Sample #
Please see CodeSample.

# Limitation #
(Some of them will be implemeted in future, and others will be ignored forever)
  * This is tested only on Firefox.
  * Any compiler is not included.

# Dependencies #
  * [prototype.js](http://www.prototypejs.org/) (included)