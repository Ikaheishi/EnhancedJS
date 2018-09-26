//unfinished and untested!
ejsInterval = function(func,time){
	this.func=func;
	this.time=time;
	this.started=Date.now();
	this.intervalID=setInterval(func,time);
	this.running=true;
};
ejsInterval.prototype={
	"end":function(){//end immediatly
		clearInterval(this.intervalID);
		this.running=false;
	},
	"restart":function(){//restart interval that was closed before
		if(!this.running) {
			this.started=Date.now();
			this.intervalID=setInterval(this.func,this.time);
			this.running=true;
		}
	},
	"endIn":function(endTime){//end after time
		if(this.running && typeof endTime == 'number') {
			setTimeout(this.end,endTime);
		} else if (typeof endTime != 'number') throw new TypeError("endTime must be a number");
	}
};
/*
 * TODO:
 * - time conversion. Currently all time has to be numeric and in milliseconds
 * 		ejsConvert() would return the time in milliseconds when given a string of something like "3h09min37s123ms"
 * 		might have to require spaces between units, so I could work with String.prototype.split(" ")
 *
 * - Maybe figure out a way to provide a start function
 * - make return values for ejsInterval.start(), ejsInterval.restart(), ejsInterval.end();
 * 		can I do something like that for endIn?
 */