/* Magic Mirror
 * Module: MMM-BirthdayCountdown
 *
 * By Marco Merens
 * MIT Licensed.
 */
Module.register("MMM-BirthdayCountdown", {


	defaults: {
		limit:1,
		people:[{name:"Marco",birthdate:"1973-12-30"},{name:"Ricky Bobby",birthdate:"1971-07-16"}]
	},
	start:function() {
		this.calculate()		

		var self=this

			
			setInterval(function(){
				self.calculate()
				self.updateDom()
				},60*1000) // update every minute 60*60*1000) // update every hour
			
	},
	calculate : function(){
		//Log.log("MMM-BirthdayCountdown")
		//console.log("MMM-BirthdayCountdown");
		//var now= new Date(new Date(), "YYYY-MM-DD", "Europe/Stockholm")
		var now=new Date(new Date().toLocaleString("sv-SE", {timeZone: "Europe/Stockholm"}).substring(0,10))
		var thisyear=now.getUTCFullYear()
		var today=new Date(thisyear,now.getUTCMonth(),now.getUTCDate()).getTime()
		var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
		this.config.people.forEach(function(p){

			var bdate=new Date(p.birthdate)
			var bmonth=bdate.getUTCMonth()
			var bday=bdate.getUTCDate()
	        var birthday = new Date(thisyear,bmonth,bday).toLocaleString("sv-SE", {timeZone: "Europe/Stockholm"}).substring(0,10)
	        //Log.log("name: " + p.name)
	        //Log.log("birthday:" + birthday)
	        var now = new Date(new Date().toLocaleString("sv-SE", {timeZone: "Europe/Stockholm"}).substring(0,10))
	        var timeparser = Date.parse(birthday) - Date.parse(now);
			if (timeparser < 0) {
		        var birthday = new Date(thisyear+1,bmonth,bday).toLocaleString("sv-SE", {timeZone: "Europe/Stockholm"}).substring(0,10)
		        timeparser = Date.parse(birthday) - Date.parse(now);
			}
	        p.daysleft = Math.floor(timeparser/(1000*60*60*24));
			p.date=bday+" "+months[bmonth]

			//Log.log("daysLeft: " + p.daysleft)
			//Log.log("-----------")
			
		})
		this.config.people.sort(function(a,b){return a.daysleft-b.daysleft})
		
	},

	getTemplate: function () {
		return "MMM-BirthdayCountdown.njk";
	},

	getTemplateData: function () {

		return this.config;
	}
	
});
