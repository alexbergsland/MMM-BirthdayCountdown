# Module: MMM-BirthdayCountdown, a module to display upcoming birthdays

This is a fork of [Marco Merens project](https://github.com/marcomerens/anniversarymodule).
With ideas taken from [MMM-doomsDay](https://github.com/brobergp/MMM-doomsDay).
The reason is simply to change the looks of it, I like the look of MMM-doomsDay but I wanted more dates than one.

The 'MMM-BirthdayCountdown' module is a costum module for [MagicMirror](https://github.com/MichMich/MagicMirror). 
It displays the name, birthday and remaining days of a list of people sorted by whoever is next.

The module is simple and can be used to learn about how modules for MagicMirror are done.

The names and birthdays are provided on configuration. The module then calculates which one is next and the remaining days.
The dates are recalculated every hour.

![Example of module](https://raw.githubusercontent.com/alexbergsland/MMM-BirthdayCountdown/master/MMM-BirthdayCountdown.png?raw=true)

## Installation instructions

  1\. Execute the following commands to install the module:

```bash
cd ~/MagicMirror/modules # navigate to module folder
git clone https://github.com/alexbergsland/MMM-BirthdayCountdown # clone this repository
```

  2\. Then, add the following into the `modules` section of your `config/config.js` file:


````javascript
{
    module: 'MMM-BirthdayCountdown',
    position: 'bottom_left',  // This can be any of the regions.
    config: {
        limit:1,
        people:[{name:"Marco",birthdate:"1973-12-30"},{name:"Ricky Bobby",birthdate:"1971-07-16"}]

        // See 'Configuration options' for more information.
    }
},
````

## Custom CSS

I also like to change the looks of it. Add the following to ```MagicMirror/css/custom.css``` or create it if it does not exist.

````javascript
 .MMM-BirthdayCountdown .white {
  font-size: 30px;
  color: white;
}
 .MMM-BirthdayCountdown .blue {
  font-size: 40px;
  color: #72b8ff;
}
````

## Configuration options

The following properties can be configured:

| option | description |
| ------------- | ------------- |
| `limit` | This is number of birthdays you want to show in the future. Default is 1. It's the length of the table. |
| `people` | This is an array of people with their name and birthdates. The date is in ISO formaty YYYY-MM-DD. Default is just a example of one. |
