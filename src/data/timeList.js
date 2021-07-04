const timezones = [
    {
        "descriptor": "GMT",
        "label": "Africa/Abidjan",
        "value": 0
    },
    {
        "descriptor": "GMT+03:00",
        "label": "Africa/Addis Ababa",
        "value": 3
    },
    {
        "descriptor": "GMT+01:00",
        "label": "Africa/Algiers",
        "value": 1
    },
    {
        "descriptor": "GMT+02:00",
        "label": "Africa/Blantyre",
        "value": 2
    },
    {
        "descriptor": "GMT+02:00",
        "label": "Africa/Cairo",
        "value": 2
    },
    {
        "descriptor": "GMT+01:00",
        "label": "Africa/Windhoek",
        "value": 1
    },
    {
        "descriptor": "GMT-10:00",
        "label": "America/Adak",
        "value": -10
    },
    {
        "descriptor": "GMT-09:00",
        "label": "America/Anchorage",
        "value": -9
    },
    {
        "descriptor": "GMT-03:00",
        "label": "America/Araguaina",
        "value": -3
    },
    {
        "descriptor": "GMT-03:00",
        "label": "America/Argentina/Buenos Aires",
        "value": -3
    },
    {
        "descriptor": "GMT-06:00",
        "label": "America/Belize",
        "value": -6
    },
    {
        "descriptor": "GMT-05:00",
        "label": "America/Bogota",
        "value": -5
    },
    {
        "descriptor": "GMT-04:00",
        "label": "America/Campo Grande",
        "value": -4
    },
    {
        "descriptor": "GMT-06:00",
        "label": "America/Cancun",
        "value": -6
    },
    {
        "descriptor": "GMT-04:30",
        "label": "America/Caracas",
        "value": -4.5
    },
    {
        "descriptor": "GMT-06:00",
        "label": "America/Chicago",
        "value": -6
    },
    {
        "descriptor": "GMT-07:00",
        "label": "America/Chihuahua",
        "value": -7
    },
    {
        "descriptor": "GMT-08:00",
        "label": "America/Dawson Creek",
        "value": -8
    },
    {
        "descriptor": "GMT-07:00",
        "label": "America/Denver",
        "value": -7
    },
    {
        "descriptor": "GMT-08:00",
        "label": "America/Ensenada",
        "value": -8
    },
    {
        "descriptor": "GMT-04:00",
        "label": "America/Glace Bay",
        "value": -4
    },
    {
        "descriptor": "GMT-03:00",
        "label": "America/Godthab",
        "value": -3
    },
    {
        "descriptor": "GMT-04:00",
        "label": "America/Goose Bay",
        "value": -4
    },
    {
        "descriptor": "GMT-05:00",
        "label": "America/Havana",
        "value": -5
    },
    {
        "descriptor": "GMT-04:00",
        "label": "America/La Paz",
        "value": -4
    },
    {
        "descriptor": "GMT-08:00",
        "label": "America/Los Angeles",
        "value": -8
    },
    {
        "descriptor": "GMT-03:00",
        "label": "America/Miquelon",
        "value": -3
    },
    {
        "descriptor": "GMT-03:00",
        "label": "America/Montevideo",
        "value": -3
    },
    {
        "descriptor": "GMT-05:00",
        "label": "America/New York",
        "value": -5
    },
    {
        "descriptor": "GMT-02:00",
        "label": "America/Noronha",
        "value": -2
    },
    {
        "descriptor": "GMT-04:00",
        "label": "America/Santiago",
        "value": -4
    },
    {
        "descriptor": "GMT-03:00",
        "label": "America/Sao Paulo",
        "value": -3
    },
    {
        "descriptor": "GMT-03:30",
        "label": "America/St Johns",
        "value": -3.5
    },
    {
        "descriptor": "GMT+12:00",
        "label": "Asia/Anadyr",
        "value": 12
    },
    {
        "descriptor": "GMT+07:00",
        "label": "Asia/Bangkok",
        "value": 7
    },
    {
        "descriptor": "GMT+02:00",
        "label": "Asia/Beirut",
        "value": 2
    },
    {
        "descriptor": "GMT+02:00",
        "label": "Asia/Damascus",
        "value": 2
    },
    {
        "descriptor": "GMT+06:00",
        "label": "Asia/Dhaka",
        "value": 6
    },
    {
        "descriptor": "GMT+04:00",
        "label": "Asia/Dubai",
        "value": 4
    },
    {
        "descriptor": "GMT+02:00",
        "label": "Asia/Gaza",
        "value": 2
    },
    {
        "descriptor": "GMT+08:00",
        "label": "Asia/Hong Kong",
        "value": 8
    },
    {
        "descriptor": "GMT+09:00",
        "label": "Asia/Irkutsk",
        "value": 9
    },
    {
        "descriptor": "GMT+02:00",
        "label": "Asia/Jerusalem",
        "value": 2
    },
    {
        "descriptor": "GMT+04:30",
        "label": "Asia/Kabul",
        "value": 4.5
    },
    {
        "descriptor": "GMT+05:45",
        "label": "Asia/Katmandu",
        "value": 5.75
    },
    {
        "descriptor": "GMT+05:30",
        "label": "Asia/Kolkata",
        "value": 5.5
    },
    {
        "descriptor": "GMT+08:00",
        "label": "Asia/Krasnoyarsk",
        "value": 8
    },
    {
        "descriptor": "GMT+12:00",
        "label": "Asia/Magadan",
        "value": 12
    },
    {
        "descriptor": "GMT+07:00",
        "label": "Asia/Novosibirsk",
        "value": 7
    },
    {
        "descriptor": "GMT+06:30",
        "label": "Asia/Rangoon",
        "value": 6.5
    },
    {
        "descriptor": "GMT+03:00",
        "label": "Asia/Riyadh89",
        "value": 3
    },
    {
        "descriptor": "GMT+09:00",
        "label": "Asia/Seoul",
        "value": 9
    },
    {
        "descriptor": "GMT+05:00",
        "label": "Asia/Tashkent",
        "value": 5
    },
    {
        "descriptor": "GMT+03:30",
        "label": "Asia/Tehran",
        "value": 3.5
    },
    {
        "descriptor": "GMT+09:00",
        "label": "Asia/Tokyo",
        "value": 9
    },
    {
        "descriptor": "GMT+11:00",
        "label": "Asia/Vladivostok",
        "value": 11
    },
    {
        "descriptor": "GMT+10:00",
        "label": "Asia/Yakutsk",
        "value": 10
    },
    {
        "descriptor": "GMT+06:00",
        "label": "Asia/Yekaterinburg",
        "value": 6
    },
    {
        "descriptor": "GMT+04:00",
        "label": "Asia/Yerevan",
        "value": 4
    },
    {
        "descriptor": "GMT+01:00",
        "label": "Atlantic/Azores",
        "value": 1
    },
    {
        "descriptor": "GMT-01:00",
        "label": "Atlantic/Cape Verde",
        "value": -1
    },
    {
        "descriptor": "GMT+01:00",
        "label": "Atlantic/Stanley",
        "value": 1
    },
    {
        "descriptor": "GMT+09:30",
        "label": "Australia/Adelaide",
        "value": 9.5
    },
    {
        "descriptor": "GMT+10:00",
        "label": "Australia/Brisbane",
        "value": 10
    },
    {
        "descriptor": "GMT+09:30",
        "label": "Australia/Darwin",
        "value": 9.5
    },
    {
        "descriptor": "GMT+08:45",
        "label": "Australia/Eucla",
        "value": 8.75
    },
    {
        "descriptor": "GMT+10:00",
        "label": "Australia/Hobart",
        "value": 10
    },
    {
        "descriptor": "GMT+10:30",
        "label": "Australia/Lord Howe",
        "value": 10.5
    },
    {
        "descriptor": "GMT+08:00",
        "label": "Australia/Perth",
        "value": 8
    },
    {
        "descriptor": "GMT-06:00",
        "label": "Chile/EasterIsland",
        "value": -6
    },
    {
        "descriptor": "GMT+10:00",
        "label": "Etc/GMT+10",
        "value": 10
    },
    {
        "descriptor": "GMT+12:00",
        "label": "Etc/GMT+12",
        "value": 12
    },
    {
        "descriptor": "GMT+08:00",
        "label": "Etc/GMT+8",
        "value": 8
    },
    {
        "descriptor": "GMT-11:00",
        "label": "Etc/GMT-11",
        "value": -11
    },
    {
        "descriptor": "GMT-12:00",
        "label": "Etc/GMT-12",
        "value": -12
    },
    {
        "descriptor": "GMT+01:00",
        "label": "Europe/Amsterdam",
        "value": 1
    },
    {
        "descriptor": "GMT",
        "label": "Europe/Belfast",
        "value": 0
    },
    {
        "descriptor": "GMT+01:00",
        "label": "Europe/Belgrade",
        "value": 1
    },
    {
        "descriptor": "GMT+01:00",
        "label": "Europe/Brussels",
        "value": 1
    },
    {
        "descriptor": "GMT",
        "label": "Europe/Dublin",
        "value": 0
    },
    {
        "descriptor": "GMT",
        "label": "Europe/Lisbon",
        "value": 0
    },
    {
        "descriptor": 0,
        "label": "Europe/London",
        "value": 0
    },
    {
        "descriptor": "GMT+03:00",
        "label": "Europe/Minsk",
        "value": 3
    },
    {
        "descriptor": "GMT+04:00",
        "label": "Europe/Moscow",
        "value": 4
    },
    {
        "descriptor": "GMT+12:00",
        "label": "Pacific/Auckland",
        "value": 12
    },
    {
        "descriptor": "GMT+12:45",
        "label": "Pacific/Chatham",
        "value": 12.75
    },
    {
        "descriptor": "GMT-09:00",
        "label": "Pacific/Gambier",
        "value": -9
    },
    {
        "descriptor": "GMT+14:00",
        "label": "Pacific/Kiritimati",
        "value": 14
    },
    {
        "descriptor": "GMT+09:30",
        "label": "Pacific/Marquesas",
        "value": 9.5
    },
    {
        "descriptor": "GMT-11:00",
        "label": "Pacific/Midway",
        "value": -11
    },
    {
        "descriptor": "GMT+11:30",
        "label": "Pacific/Norfolk",
        "value": 11.5
    },
    {
        "descriptor": "GMT+13:00",
        "label": "Pacific/Tongatapu",
        "value": 13
    },
    {
        "descriptor": "UTC",
        "label": "UTC",
        "value": 0
    }
];

export default timezones;