String.prototype.equalsIgnoreCase=function(a){if(a===void 0||""==a)throw new TypeError("str cannot be empty");return!(this.toLowerCase()!=(a+"").toLowerCase())},String.prototype.indexOfIgnoreCase=function(a){if(a===void 0||""==a)throw new TypeError("needle cannot be empty");return this.toLowerCase().indexOf((a+"").toLowerCase())};