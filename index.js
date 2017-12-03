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
  this.gpio = config["gpio"]
  this.hostname = config["hostname"] || "sonoff";

  this.service = new Service.Outlet(this.name);

  this.service
    .getCharacteristic(Characteristic.On)
    .on('get', this.getState.bind(this))
    .on('set', this.setState.bind(this));
    
  this.log("Sonoff Tasmota HTTP 4P Initialized")
}

SonoffTasmotaHTTPAccessory4P.prototype.getState = function(callback) {
  var that = this
  request("http://" + that.hostname + "/cm?cmnd=Power" + this.gpio, function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that.log("Sonoff HTTP 4P: " + that.hostname + " Get State: " + lines[1]);
  	if (lines[1] == "POWER" + this.gpio + " = OFF") callback(null, 0)
  	else if (lines[1] == "POWER" + this.gpio + " = ON") callback(null, 1)
  })
}

SonoffTasmotaHTTPAccessory4P.prototype.setState = function(toggle, callback) {
  var newstate = "%20Off"
  if (toggle) newstate = "%20On"
  var that = this
  request("http://" + that.hostname + "/cm?cmnd=Power" + this.gpio + newstate, function(error, response, body) {
    if (error) return callback(error);
  	var lines = body.split("\n");
  	that.log("Sonoff HTTP 4P: " + that.hostname + " Set State to: " + lines[1]);
  	if (lines[1] == "POWER" + this.gpio + " = OFF") callback()
  	else if (lines[1] == "POWER" + this.gpio + " = ON") callback()
  })
}

SonoffTasmotaHTTPAccessory4P.prototype.getServices = function() {
  return [this.service];
}
