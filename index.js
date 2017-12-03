var Service, Characteristic;
var request = require('request');


module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory("homebridge-sonoff-tasmota-http-4P", "SonoffTasmotaHTTP4P", SonoffTasmotaHTTPAccessory4P);
}

function SonoffTasmotaHTTPAccessory4P(log, config) {
  this.log = log;
  this.config = config;
  this.name = config["name"]
  this.hostname = config["hostname"] || "sonoff";
  this1 = this
  this2 = this
  this3 = this
  this4 = this
  

  this1.service = new Service.Outlet(this.name["1"]);
  this2.service = new Service.Outlet(this.name["2"]);
  this3.service = new Service.Outlet(this.name["3"]);
  this4.service = new Service.Outlet(this.name["4"]);

  this1.service
    .getCharacteristic(Characteristic.On)
    .on('get', this1.getState.bind(this1))
    .on('set', this1.setState.bind(this1));
  this2.service
    .getCharacteristic(Characteristic.On)
    .on('get', this2.getState.bind(this2))
    .on('set', this2.setState.bind(this2));
  this3.service
    .getCharacteristic(Characteristic.On)
    .on('get', this3.getState.bind(this3))
    .on('set', this3.setState.bind(this3));
  this4.service
    .getCharacteristic(Characteristic.On)
    .on('get', this4.getState.bind(this4))
    .on('set', this4.setState.bind(this4));
    
  this.log("Sonoff Tasmota HTTP Initialized")
}

SonoffTasmotaHTTPAccessory4P.prototype.getState = function(callback) {
  var that = this
  request("http://" + that.hostname + "/cm?cmnd=Power", function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that.log("Sonoff HTTP: " + that.hostname + " Get State: " + lines[1]);
  	if (lines[1] == "POWER = OFF") callback(null, 0)
  	else if (lines[1] == "POWER = ON") callback(null, 1)
  })
}
SonoffTasmotaHTTPAccessory4P.prototype.getState = function(callback) {
  var that1 = this1
  request("http://" + that1.hostname + "/cm?cmnd=Power1", function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that1.log("Sonoff HTTP: " + that1.hostname + " Get State: " + lines[1]);
  	if (lines[1] == "POWER1 = OFF") callback(null, 0)
  	else if (lines[1] == "POWER1 = ON") callback(null, 1)
  })
}
SonoffTasmotaHTTPAccessory4P.prototype.getState = function(callback) {
  var that2 = this2
  request("http://" + that2.hostname + "/cm?cmnd=Power2", function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that2.log("Sonoff HTTP: " + that2.hostname + " Get State: " + lines[1]);
  	if (lines[1] == "POWER2 = OFF") callback(null, 0)
  	else if (lines[1] == "POWER2 = ON") callback(null, 1)
  })
}
SonoffTasmotaHTTPAccessory4P.prototype.getState = function(callback) {
  var that3 = this3
  request("http://" + that3.hostname + "/cm?cmnd=Power3", function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that3.log("Sonoff HTTP: " + that3.hostname + " Get State: " + lines[1]);
  	if (lines[1] == "POWER3 = OFF") callback(null, 0)
  	else if (lines[1] == "POWER3 = ON") callback(null, 1)
  })
}
SonoffTasmotaHTTPAccessory4P.prototype.getState = function(callback) {
  var that4 = this4
  request("http://" + that4.hostname + "/cm?cmnd=Power4", function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that4.log("Sonoff HTTP: " + that4.hostname + " Get State: " + lines[1]);
  	if (lines[1] == "POWER4 = OFF") callback(null, 0)
  	else if (lines[1] == "POWER4 = ON") callback(null, 1)
  })
}

SonoffTasmotaHTTPAccessory4P.prototype.setState = function(toggle, callback) {
  var newstate = "%20Off"
  if (toggle) newstate = "%20On"
  var that = this
  request("http://" + that.hostname + "/cm?cmnd=Power" + newstate, function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that.log("Sonoff HTTP: " + that.hostname + " Set State to: " + lines[1]);
  	if (lines[1] == "POWER = OFF") callback()
  	else if (lines[1] == "POWER = ON") callback()
  })
}
SonoffTasmotaHTTPAccessory4P.prototype.setState = function(toggle, callback) {
  var newstate = "%20Off"
  if (toggle) newstate = "%20On"
  var that1 = this1
  request("http://" + that1.hostname + "/cm?cmnd=Power1" + newstate, function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that1.log("Sonoff HTTP: " + that1.hostname + " Set State to: " + lines[1]);
  	if (lines[1] == "POWER1 = OFF") callback()
  	else if (lines[1] == "POWER1 = ON") callback()
  })
}
SonoffTasmotaHTTPAccessory4P.prototype.setState = function(toggle, callback) {
  var newstate = "%20Off"
  if (toggle) newstate = "%20On"
  var that2 = this2
  request("http://" + that2.hostname + "/cm?cmnd=Power2" + newstate, function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that2.log("Sonoff HTTP: " + that2.hostname + " Set State to: " + lines[1]);
  	if (lines[1] == "POWER2 = OFF") callback()
  	else if (lines[1] == "POWER2 = ON") callback()
  })
}
SonoffTasmotaHTTPAccessory4P.prototype.setState = function(toggle, callback) {
  var newstate = "%20Off"
  if (toggle) newstate = "%20On"
  var that3 = this3
  request("http://" + that.hostname + "/cm?cmnd=Power3" + newstate, function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that3.log("Sonoff HTTP: " + that3.hostname + " Set State to: " + lines[1]);
  	if (lines[1] == "POWER3 = OFF") callback()
  	else if (lines[1] == "POWER3 = ON") callback()
  })
}
SonoffTasmotaHTTPAccessory4P.prototype.setState = function(toggle, callback) {
  var newstate = "%20Off"
  if (toggle) newstate = "%20On"
  var that4 = this4
  request("http://" + that4.hostname + "/cm?cmnd=Power4" + newstate, function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that4.log("Sonoff HTTP: " + that4.hostname + " Set State to: " + lines[1]);
  	if (lines[1] == "POWER4 = OFF") callback()
  	else if (lines[1] == "POWER4 = ON") callback()
  })
}

SonoffTasmotaHTTPAccessory4P.prototype.getServices = function() {
  return [this1.service];
  return [this2.service];
  return [this3.service];
  return [this4.service];
}
