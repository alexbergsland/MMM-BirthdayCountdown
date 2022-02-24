# Module: MMM-BirthdayCountdown, a module to display upcoming birthdays

This is a fork of [Marco Merens project](https://github.com/marcomerens/anniversarymodule).
The reason is simply to change the looks of it.

The 'BirthdayCountdown' module is a costum module for [MagicMirror](https://github.com/MichMich/MagicMirror). 
It displays the name, birthday and remaining days of a list of people sorted by whoever is next.

The module is simple and can be used to learn about how modules for MagicMirror are done.

The names and birthdays are provided on configuration. The module then calculates which one is next and the remaining days.
The dates are recalculated every hour.

## Installation instructions

  1\. Execute the following commands to install the module:

```bash
cd ~/MagicMirror/modules # navigate to module folder
git clone https://github.com/brobergp/MMM-doomsDay.git # clone this repository
```

  2\. Then, add the following into the `modules` section of your `config/config.js` file:


````javascript
{
    module: 'BirthdayCountdown',
    position: 'top_right',  // This can be any of the regions.
    config: {
        limit:4,
        people:[{name:"Marco",birthdate:"1973-12-30"}]

        // See 'Configuration options' for more information.
    }
},
````

## Configuration options

The following properties can be configured:

| option | description |
| ------------- | ------------- |
| `limit` | This is number of birthdays you want to show in the future. Default is 4. It's the length of the table. |
| `people` | This is an array of people with their name and birthdates. The date is in ISO formaty YYYY-MM-DD. 
  Default is just a example of one. |