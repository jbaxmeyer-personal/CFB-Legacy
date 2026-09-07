/* ==========================================================================
   CFB Legacy — static game data
   Schools, conferences, and starting prestige are sourced directly from
   the Dynasty Tracker project's canonical school list, so this game's
   world matches the same 138-team roster/conference alignment.
   ========================================================================== */

const SCHOOLS = [
  {
    "name": "Air Force",
    "conference": "Mountain West",
    "startingPrestige": 1,
    "offenseScheme": "Option",
    "defenseScheme": "Base 3-4",
    "primaryColor": "#003087",
    "secondaryColor": "#8A8D8F"
  },
  {
    "name": "Akron",
    "conference": "MAC",
    "startingPrestige": 0,
    "offenseScheme": "Spread",
    "defenseScheme": "3-4 Multiple"
  },
  {
    "name": "Alabama",
    "conference": "SEC",
    "startingPrestige": 5,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "Base 3-4",
    "primaryColor": "#9E1B32",
    "secondaryColor": "#828A8F"
  },
  {
    "name": "App St.",
    "conference": "Sun Belt",
    "startingPrestige": 1,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-2-5",
    "primaryColor": "#000000",
    "secondaryColor": "#FFCC00"
  },
  {
    "name": "Arizona",
    "conference": "Big 12",
    "startingPrestige": 2.5,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-2-5",
    "primaryColor": "#AB0520",
    "secondaryColor": "#0C234B"
  },
  {
    "name": "Arizona State",
    "conference": "Big 12",
    "startingPrestige": 3,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-2-5",
    "primaryColor": "#8C1D40",
    "secondaryColor": "#FFC627"
  },
  {
    "name": "Arkansas",
    "conference": "SEC",
    "startingPrestige": 3,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5",
    "primaryColor": "#9D2235",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Arkansas State",
    "conference": "Sun Belt",
    "startingPrestige": 1,
    "offenseScheme": "Power Spread",
    "defenseScheme": "4-2-5"
  },
  {
    "name": "Army",
    "conference": "AAC",
    "startingPrestige": 2.5,
    "offenseScheme": "Option",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#000000",
    "secondaryColor": "#D4BF91"
  },
  {
    "name": "Auburn",
    "conference": "SEC",
    "startingPrestige": 3.5,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "3-3-5 Tite",
    "primaryColor": "#0C2340",
    "secondaryColor": "#E87722"
  },
  {
    "name": "Ball State",
    "conference": "MAC",
    "startingPrestige": 0.5,
    "offenseScheme": "Spread",
    "defenseScheme": "Multiple Defense"
  },
  {
    "name": "Baylor",
    "conference": "Big 12",
    "startingPrestige": 2.5,
    "offenseScheme": "Air Raid",
    "defenseScheme": "3-3-5",
    "primaryColor": "#154734",
    "secondaryColor": "#FFB81C"
  },
  {
    "name": "Boise State",
    "conference": "Pac-12",
    "startingPrestige": 2.5,
    "offenseScheme": "Pro Style",
    "defenseScheme": "4-2-5",
    "primaryColor": "#0033A0",
    "secondaryColor": "#D64309"
  },
  {
    "name": "Boston College",
    "conference": "ACC",
    "startingPrestige": 2.5,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "Base 4-3",
    "primaryColor": "#8C2232",
    "secondaryColor": "#B08D57"
  },
  {
    "name": "Bowling Green",
    "conference": "MAC",
    "startingPrestige": 0.5,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-2-5"
  },
  {
    "name": "Buffalo",
    "conference": "MAC",
    "startingPrestige": 0,
    "offenseScheme": "Power Spread",
    "defenseScheme": "Base 4-3"
  },
  {
    "name": "BYU",
    "conference": "Big 12",
    "startingPrestige": 4,
    "offenseScheme": "Power Spread",
    "defenseScheme": "4-3 Multiple",
    "primaryColor": "#002E5D",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "California",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#003262",
    "secondaryColor": "#FDB515"
  },
  {
    "name": "C. Michigan",
    "conference": "MAC",
    "startingPrestige": 1,
    "offenseScheme": "Option",
    "defenseScheme": "3-4 Multiple"
  },
  {
    "name": "Charlotte",
    "conference": "AAC",
    "startingPrestige": 0.5,
    "offenseScheme": "Pistol",
    "defenseScheme": "4-2-5",
    "primaryColor": "#046A38",
    "secondaryColor": "#B9975B"
  },
  {
    "name": "Cincinnati",
    "conference": "Big 12",
    "startingPrestige": 2.5,
    "offenseScheme": "Pistol",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#E00122",
    "secondaryColor": "#000000"
  },
  {
    "name": "Clemson",
    "conference": "ACC",
    "startingPrestige": 4,
    "offenseScheme": "Air Raid",
    "defenseScheme": "Multiple Defense",
    "primaryColor": "#F56600",
    "secondaryColor": "#522D80"
  },
  {
    "name": "C. Carolina",
    "conference": "Sun Belt",
    "startingPrestige": 1,
    "offenseScheme": "Power Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#006A65",
    "secondaryColor": "#B48242"
  },
  {
    "name": "Colorado",
    "conference": "Big 12",
    "startingPrestige": 3,
    "offenseScheme": "Power Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#000000",
    "secondaryColor": "#CFB87C"
  },
  {
    "name": "Colorado State",
    "conference": "Pac-12",
    "startingPrestige": 1.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5 Tite"
  },
  {
    "name": "UConn",
    "conference": "Independent",
    "startingPrestige": 1.5,
    "offenseScheme": "Spread",
    "defenseScheme": "Base 4-3"
  },
  {
    "name": "Delaware",
    "conference": "CUSA",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5 Tite"
  },
  {
    "name": "Duke",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "4-2-5",
    "primaryColor": "#001A57",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "E. Michigan",
    "conference": "MAC",
    "startingPrestige": 0.5,
    "offenseScheme": "Spread",
    "defenseScheme": "Base 4-3"
  },
  {
    "name": "East Carolina",
    "conference": "AAC",
    "startingPrestige": 2,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "3-3-5 Tite",
    "primaryColor": "#592A8A",
    "secondaryColor": "#FFC72C"
  },
  {
    "name": "FIU",
    "conference": "CUSA",
    "startingPrestige": 1,
    "offenseScheme": "Power Spread",
    "defenseScheme": "Multiple Defense"
  },
  {
    "name": "Florida",
    "conference": "SEC",
    "startingPrestige": 4,
    "offenseScheme": "Power Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#0021A5",
    "secondaryColor": "#FA4616"
  },
  {
    "name": "Fla Atlantic",
    "conference": "AAC",
    "startingPrestige": 1,
    "offenseScheme": "Air Raid",
    "defenseScheme": "3-3-5 Tite"
  },
  {
    "name": "Florida State",
    "conference": "ACC",
    "startingPrestige": 3.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5",
    "primaryColor": "#782F40",
    "secondaryColor": "#CEB888"
  },
  {
    "name": "Fresno State",
    "conference": "Pac-12",
    "startingPrestige": 1.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#DB0032",
    "secondaryColor": "#002856"
  },
  {
    "name": "Georgia",
    "conference": "SEC",
    "startingPrestige": 5,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "3-3-5 Tite",
    "primaryColor": "#BA0C2F",
    "secondaryColor": "#000000"
  },
  {
    "name": "GA Southern",
    "conference": "Sun Belt",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "Base 3-4"
  },
  {
    "name": "Georgia State",
    "conference": "Sun Belt",
    "startingPrestige": 0,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "3-3-5"
  },
  {
    "name": "Georgia Tech",
    "conference": "ACC",
    "startingPrestige": 3.5,
    "offenseScheme": "Power Spread",
    "defenseScheme": "3-3-5",
    "primaryColor": "#B3A369",
    "secondaryColor": "#003057"
  },
  {
    "name": "Hawai'i",
    "conference": "Mountain West",
    "startingPrestige": 1.5,
    "offenseScheme": "Run and Shoot",
    "defenseScheme": "3-4 Multiple"
  },
  {
    "name": "Houston",
    "conference": "Big 12",
    "startingPrestige": 3,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5",
    "primaryColor": "#C8102E",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Illinois",
    "conference": "Big Ten",
    "startingPrestige": 3.5,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "Base 3-4",
    "primaryColor": "#E84A27",
    "secondaryColor": "#13294B"
  },
  {
    "name": "Indiana",
    "conference": "Big Ten",
    "startingPrestige": 4.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-3 Multiple",
    "primaryColor": "#990000",
    "secondaryColor": "#EEEDEB"
  },
  {
    "name": "Iowa",
    "conference": "Big Ten",
    "startingPrestige": 3.5,
    "offenseScheme": "Pro Style",
    "defenseScheme": "Base 4-3",
    "primaryColor": "#000000",
    "secondaryColor": "#FFCD00"
  },
  {
    "name": "Iowa State",
    "conference": "Big 12",
    "startingPrestige": 2.5,
    "offenseScheme": "Power Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#C8102E",
    "secondaryColor": "#F1BE48"
  },
  {
    "name": "Jax State",
    "conference": "CUSA",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5"
  },
  {
    "name": "James Madison",
    "conference": "Sun Belt",
    "startingPrestige": 1.5,
    "offenseScheme": "Power Spread",
    "defenseScheme": "3-3-5",
    "primaryColor": "#450084",
    "secondaryColor": "#CBB677"
  },
  {
    "name": "Kansas",
    "conference": "Big 12",
    "startingPrestige": 2.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#0051BA",
    "secondaryColor": "#E8000D"
  },
  {
    "name": "Kansas State",
    "conference": "Big 12",
    "startingPrestige": 2.5,
    "offenseScheme": "Power Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#512888",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Kennesaw St.",
    "conference": "CUSA",
    "startingPrestige": 1,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "3-3-5"
  },
  {
    "name": "Kent State",
    "conference": "MAC",
    "startingPrestige": 0,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "Multiple Defense"
  },
  {
    "name": "Kentucky",
    "conference": "SEC",
    "startingPrestige": 3,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#0033A0",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Liberty",
    "conference": "CUSA",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#C41230",
    "secondaryColor": "#002D62"
  },
  {
    "name": "Louisiana",
    "conference": "Sun Belt",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "Base 4-3"
  },
  {
    "name": "Louisiana Tech",
    "conference": "Sun Belt",
    "startingPrestige": 1,
    "offenseScheme": "Air Raid",
    "defenseScheme": "3-3-5"
  },
  {
    "name": "Louisville",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-2-5",
    "primaryColor": "#AD0000",
    "secondaryColor": "#000000"
  },
  {
    "name": "LSU",
    "conference": "SEC",
    "startingPrestige": 4.5,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "Multiple Defense",
    "primaryColor": "#461D7C",
    "secondaryColor": "#FDD023"
  },
  {
    "name": "Marshall",
    "conference": "Sun Belt",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5",
    "primaryColor": "#00B140",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Maryland",
    "conference": "Big Ten",
    "startingPrestige": 2.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#E03A3E",
    "secondaryColor": "#FFD520"
  },
  {
    "name": "Memphis",
    "conference": "AAC",
    "startingPrestige": 2,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "4-2-5",
    "primaryColor": "#003087",
    "secondaryColor": "#898D8D"
  },
  {
    "name": "Miami",
    "conference": "ACC",
    "startingPrestige": 4.5,
    "offenseScheme": "Air Raid",
    "defenseScheme": "4-2-5",
    "primaryColor": "#F47321",
    "secondaryColor": "#005030"
  },
  {
    "name": "Miami (OH)",
    "conference": "MAC",
    "startingPrestige": 1,
    "offenseScheme": "Air Raid",
    "defenseScheme": "Base 4-3"
  },
  {
    "name": "Michigan",
    "conference": "Big Ten",
    "startingPrestige": 4.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-3 Multiple",
    "primaryColor": "#00274C",
    "secondaryColor": "#FFCB05"
  },
  {
    "name": "Michigan State",
    "conference": "Big Ten",
    "startingPrestige": 3.5,
    "offenseScheme": "Spread Option",
    "defenseScheme": "4-2-5",
    "primaryColor": "#18453B",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Middle Tenn",
    "conference": "CUSA",
    "startingPrestige": 0.5,
    "offenseScheme": "Spread",
    "defenseScheme": "Base 3-4"
  },
  {
    "name": "Minnesota",
    "conference": "Big Ten",
    "startingPrestige": 3.5,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-2-5",
    "primaryColor": "#7A0019",
    "secondaryColor": "#FFCC33"
  },
  {
    "name": "Mississippi St",
    "conference": "SEC",
    "startingPrestige": 2.5,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "3-3-5",
    "primaryColor": "#660000",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Missouri",
    "conference": "SEC",
    "startingPrestige": 3,
    "offenseScheme": "Pistol",
    "defenseScheme": "4-2-5",
    "primaryColor": "#000000",
    "secondaryColor": "#F1B82D"
  },
  {
    "name": "Missouri State",
    "conference": "CUSA",
    "startingPrestige": 0.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5 Tite"
  },
  {
    "name": "Navy",
    "conference": "AAC",
    "startingPrestige": 2.5,
    "offenseScheme": "Option",
    "defenseScheme": "3-3-5",
    "primaryColor": "#00205B",
    "secondaryColor": "#B58500"
  },
  {
    "name": "NC State",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Power Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#CC0000",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Nebraska",
    "conference": "Big Ten",
    "startingPrestige": 4,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-2-5",
    "primaryColor": "#E41C38",
    "secondaryColor": "#F5F1E7"
  },
  {
    "name": "Nevada",
    "conference": "Mountain West",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "Multiple Defense"
  },
  {
    "name": "New Mexico",
    "conference": "Mountain West",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "Base 4-3"
  },
  {
    "name": "New Mexico St.",
    "conference": "CUSA",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5"
  },
  {
    "name": "North Carolina",
    "conference": "ACC",
    "startingPrestige": 2.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#7BAFD4",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "NDSU",
    "conference": "Mountain West",
    "startingPrestige": 1.5,
    "offenseScheme": "Spread Option",
    "defenseScheme": "Base 4-3"
  },
  {
    "name": "North Texas",
    "conference": "AAC",
    "startingPrestige": 1.5,
    "offenseScheme": "Air Raid",
    "defenseScheme": "3-3-5",
    "primaryColor": "#00853E",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "N. Illinois",
    "conference": "Mountain West",
    "startingPrestige": 1,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-2-5"
  },
  {
    "name": "Northwestern",
    "conference": "Big Ten",
    "startingPrestige": 2.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#4E2A84",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Notre Dame",
    "conference": "Independent",
    "startingPrestige": 4.5,
    "offenseScheme": "Power Spread",
    "defenseScheme": "Multiple Defense",
    "primaryColor": "#0C2340",
    "secondaryColor": "#C99700"
  },
  {
    "name": "Ohio",
    "conference": "MAC",
    "startingPrestige": 1,
    "offenseScheme": "Pistol",
    "defenseScheme": "4-2-5"
  },
  {
    "name": "Ohio State",
    "conference": "Big Ten",
    "startingPrestige": 5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#BB0000",
    "secondaryColor": "#666666"
  },
  {
    "name": "Oklahoma",
    "conference": "SEC",
    "startingPrestige": 4.5,
    "offenseScheme": "Air Raid",
    "defenseScheme": "4-2-5",
    "primaryColor": "#841617",
    "secondaryColor": "#FDF9D8"
  },
  {
    "name": "Oklahoma State",
    "conference": "Big 12",
    "startingPrestige": 3,
    "offenseScheme": "Air Raid",
    "defenseScheme": "Multiple Defense",
    "primaryColor": "#FF7300",
    "secondaryColor": "#000000"
  },
  {
    "name": "Old Dominion",
    "conference": "Sun Belt",
    "startingPrestige": 1,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "3-2-6"
  },
  {
    "name": "Ole Miss",
    "conference": "SEC",
    "startingPrestige": 4.5,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "4-2-5",
    "primaryColor": "#14213D",
    "secondaryColor": "#CE1126"
  },
  {
    "name": "Oregon",
    "conference": "Big Ten",
    "startingPrestige": 4.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#154733",
    "secondaryColor": "#FEE123"
  },
  {
    "name": "Oregon State",
    "conference": "Pac-12",
    "startingPrestige": 2,
    "offenseScheme": "Spread Option",
    "defenseScheme": "3-4 Multiple"
  },
  {
    "name": "Penn State",
    "conference": "Big Ten",
    "startingPrestige": 4,
    "offenseScheme": "Power Spread",
    "defenseScheme": "Base 3-4",
    "primaryColor": "#041E42",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Pittsburgh",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Spread",
    "defenseScheme": "Base 4-3",
    "primaryColor": "#003594",
    "secondaryColor": "#FFB81C"
  },
  {
    "name": "Purdue",
    "conference": "Big Ten",
    "startingPrestige": 2,
    "offenseScheme": "Air Raid",
    "defenseScheme": "Multiple Defense",
    "primaryColor": "#000000",
    "secondaryColor": "#CEB888"
  },
  {
    "name": "Rice",
    "conference": "AAC",
    "startingPrestige": 1.5,
    "offenseScheme": "Spread Option",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#00205B",
    "secondaryColor": "#8A8D8F"
  },
  {
    "name": "Rutgers",
    "conference": "Big Ten",
    "startingPrestige": 2,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#CC0033",
    "secondaryColor": "#000000"
  },
  {
    "name": "Sacramento State",
    "conference": "MAC",
    "startingPrestige": 1,
    "offenseScheme": "Spread Option",
    "defenseScheme": "4-2-5"
  },
  {
    "name": "Sam Houston",
    "conference": "CUSA",
    "startingPrestige": 0.5,
    "offenseScheme": "Air Raid",
    "defenseScheme": "3-3-5"
  },
  {
    "name": "San Diego St.",
    "conference": "Pac-12",
    "startingPrestige": 1,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "4-2-5",
    "primaryColor": "#A6192E",
    "secondaryColor": "#000000"
  },
  {
    "name": "San Jose State",
    "conference": "Mountain West",
    "startingPrestige": 1.5,
    "offenseScheme": "Run and Shoot",
    "defenseScheme": "4-3 Multiple"
  },
  {
    "name": "SMU",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#C8102E",
    "secondaryColor": "#0033A0"
  },
  {
    "name": "South Alabama",
    "conference": "Sun Belt",
    "startingPrestige": 0.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#A6093D",
    "secondaryColor": "#00205B"
  },
  {
    "name": "South Carolina",
    "conference": "SEC",
    "startingPrestige": 3,
    "offenseScheme": "Power Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#73000A",
    "secondaryColor": "#000000"
  },
  {
    "name": "Southern Miss",
    "conference": "Sun Belt",
    "startingPrestige": 0.5,
    "offenseScheme": "Power Spread",
    "defenseScheme": "3-3-5"
  },
  {
    "name": "Stanford",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Spread Option",
    "defenseScheme": "Base 4-3",
    "primaryColor": "#8C1515",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Syracuse",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#D44500",
    "secondaryColor": "#000E54"
  },
  {
    "name": "TCU",
    "conference": "Big 12",
    "startingPrestige": 3.5,
    "offenseScheme": "Air Raid",
    "defenseScheme": "3-3-5",
    "primaryColor": "#4D1979",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Temple",
    "conference": "AAC",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#9E1B32",
    "secondaryColor": "#000000"
  },
  {
    "name": "Tennessee",
    "conference": "SEC",
    "startingPrestige": 4,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "4-2-5",
    "primaryColor": "#FF8200",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Texas",
    "conference": "SEC",
    "startingPrestige": 4.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5 Tite",
    "primaryColor": "#BF5700",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Texas A&M",
    "conference": "SEC",
    "startingPrestige": 4.5,
    "offenseScheme": "Power Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#500000",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Texas State",
    "conference": "Pac-12",
    "startingPrestige": 1,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "3-4 Multiple"
  },
  {
    "name": "Texas Tech",
    "conference": "Big 12",
    "startingPrestige": 3.5,
    "offenseScheme": "Veer and Shoot",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#CC0000",
    "secondaryColor": "#000000"
  },
  {
    "name": "Toledo",
    "conference": "MAC",
    "startingPrestige": 1,
    "offenseScheme": "Spread Option",
    "defenseScheme": "4-2-5",
    "primaryColor": "#003E7E",
    "secondaryColor": "#FFC72C"
  },
  {
    "name": "Troy",
    "conference": "Sun Belt",
    "startingPrestige": 1,
    "offenseScheme": "Power Spread",
    "defenseScheme": "3-3-5 Tite",
    "primaryColor": "#8A1F2D",
    "secondaryColor": "#A2AAAD"
  },
  {
    "name": "Tulane",
    "conference": "AAC",
    "startingPrestige": 2.5,
    "offenseScheme": "Spread Option",
    "defenseScheme": "3-3-5 Tite",
    "primaryColor": "#006747",
    "secondaryColor": "#418FDE"
  },
  {
    "name": "Tulsa",
    "conference": "AAC",
    "startingPrestige": 1.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5",
    "primaryColor": "#002D72",
    "secondaryColor": "#B29D6C"
  },
  {
    "name": "UAB",
    "conference": "AAC",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#1E6B52",
    "secondaryColor": "#FFC72C"
  },
  {
    "name": "UCF",
    "conference": "Big 12",
    "startingPrestige": 2.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-3 Multiple",
    "primaryColor": "#000000",
    "secondaryColor": "#BA9B37"
  },
  {
    "name": "UCLA",
    "conference": "Big Ten",
    "startingPrestige": 3.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#2D68C4",
    "secondaryColor": "#F2A900"
  },
  {
    "name": "UL Monroe",
    "conference": "Sun Belt",
    "startingPrestige": 0.5,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "3-3-5 Tite"
  },
  {
    "name": "UMass",
    "conference": "MAC",
    "startingPrestige": 0.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5"
  },
  {
    "name": "UNLV",
    "conference": "Mountain West",
    "startingPrestige": 1.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#CF0A2C",
    "secondaryColor": "#B7B7B7"
  },
  {
    "name": "USC",
    "conference": "Big Ten",
    "startingPrestige": 4.5,
    "offenseScheme": "Air Raid",
    "defenseScheme": "4-2-5",
    "primaryColor": "#990000",
    "secondaryColor": "#FFC72C"
  },
  {
    "name": "USF",
    "conference": "AAC",
    "startingPrestige": 1.5,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "3-3-5 Tite",
    "primaryColor": "#006747",
    "secondaryColor": "#CFC493"
  },
  {
    "name": "Utah",
    "conference": "Big 12",
    "startingPrestige": 3.5,
    "offenseScheme": "Spread",
    "defenseScheme": "4-3 Multiple",
    "primaryColor": "#CC0000",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Utah State",
    "conference": "Pac-12",
    "startingPrestige": 1.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-4 Multiple"
  },
  {
    "name": "UTEP",
    "conference": "Mountain West",
    "startingPrestige": 0.5,
    "offenseScheme": "Air Raid",
    "defenseScheme": "3-3-5 Tite",
    "primaryColor": "#041E42",
    "secondaryColor": "#FF8200"
  },
  {
    "name": "UTSA",
    "conference": "AAC",
    "startingPrestige": 1.5,
    "offenseScheme": "Power Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#002A5C",
    "secondaryColor": "#F15A22"
  },
  {
    "name": "Vanderbilt",
    "conference": "SEC",
    "startingPrestige": 2.5,
    "offenseScheme": "Pistol",
    "defenseScheme": "4-2-5",
    "primaryColor": "#000000",
    "secondaryColor": "#866D4B"
  },
  {
    "name": "Virginia",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#E57200",
    "secondaryColor": "#232D4B"
  },
  {
    "name": "Virginia Tech",
    "conference": "ACC",
    "startingPrestige": 3,
    "offenseScheme": "Power Spread",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#630031",
    "secondaryColor": "#CF4420"
  },
  {
    "name": "Wake Forest",
    "conference": "ACC",
    "startingPrestige": 2,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#9E7E38",
    "secondaryColor": "#000000"
  },
  {
    "name": "Washington",
    "conference": "Big Ten",
    "startingPrestige": 4,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "3-4 Multiple",
    "primaryColor": "#4B2E83",
    "secondaryColor": "#E8E3D3"
  },
  {
    "name": "Washington St.",
    "conference": "Pac-12",
    "startingPrestige": 2,
    "offenseScheme": "Pistol",
    "defenseScheme": "Multiple Defense"
  },
  {
    "name": "West Virginia",
    "conference": "Big 12",
    "startingPrestige": 2.5,
    "offenseScheme": "Spread",
    "defenseScheme": "3-3-5",
    "primaryColor": "#002855",
    "secondaryColor": "#EAAA00"
  },
  {
    "name": "W. Kentucky",
    "conference": "CUSA",
    "startingPrestige": 1.5,
    "offenseScheme": "Air Raid",
    "defenseScheme": "Base 3-4"
  },
  {
    "name": "W. Michigan",
    "conference": "MAC",
    "startingPrestige": 1,
    "offenseScheme": "Spread",
    "defenseScheme": "4-2-5",
    "primaryColor": "#532E1F",
    "secondaryColor": "#B7A369"
  },
  {
    "name": "Wisconsin",
    "conference": "Big Ten",
    "startingPrestige": 3,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-3 Multiple",
    "primaryColor": "#C5050C",
    "secondaryColor": "#FFFFFF"
  },
  {
    "name": "Wyoming",
    "conference": "Mountain West",
    "startingPrestige": 1,
    "offenseScheme": "Multiple Offense",
    "defenseScheme": "4-2-5"
  }
];

const CONFERENCE_NAMES = {
  "ACC": "ACC",
  "Big 12": "Big 12",
  "Big Ten": "Big Ten",
  "SEC": "SEC",
  "Pac-12": "Pac-12",
  "CUSA": "Conference USA",
  "MAC": "MAC",
  "Mountain West": "Mountain West",
  "Sun Belt": "Sun Belt",
  "AAC": "American",
  "Independent": "Independent"
};

/* Fallback accent for schools with no mapped brand colors — same idea as
   Dynasty Tracker's teamGradient() helper. */
const DEFAULT_TEAM_COLORS = ["#4da6ff", "#1a2029"];

function getSchool(name) {
  return SCHOOLS.find((s) => s.name === name);
}

function teamGradient(schoolName) {
  const s = getSchool(schoolName);
  const primary = (s && s.primaryColor) || DEFAULT_TEAM_COLORS[0];
  const secondary = (s && s.secondaryColor) || DEFAULT_TEAM_COLORS[1];
  return `linear-gradient(135deg, ${primary} 0%, ${secondary} 140%)`;
}

/* ==========================================================================
   Name pools — for generating fictional players, rivals, ADs, recruits.
   No real people; schools/conferences are the only real-world names used.
   ========================================================================== */

const FIRST_NAMES = [
  "Marcus", "Jalen", "Tyler", "Derek", "Xavier", "Colt", "Braxton", "Deion",
  "Trey", "Cade", "Jaylen", "Wyatt", "Malik", "Hunter", "Dontae", "Bo",
  "Chase", "Elijah", "Grayson", "Isaiah", "Kendrick", "Landon", "Mason",
  "Nate", "Omari", "Preston", "Quinton", "Rhett", "Silas", "Tucker",
  "Vernon", "Zion", "Blake", "Cody", "Dax", "Emmitt", "Farron",
];

const LAST_NAMES = [
  "Harrington", "Beauchamp", "Delgado", "Whitfield", "Okafor", "Sutton",
  "Callahan", "Trainor", "Petrov", "Youngblood", "Ashworth", "Reece",
  "Mabry", "Kowalski", "Denning", "Faulk", "Garrison", "Holbrook",
  "Ibarra", "Jernigan", "Kessler", "Lombard", "Mercer", "Nakamura",
  "Osei", "Pruitt", "Quintero", "Rourke", "Stallworth", "Tannehill",
  "Underhill", "Vance", "Whitaker", "Yancey", "Zeller", "Ashby",
];

function randomFullName() {
  const first = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
  const last = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
  return `${first} ${last}`;
}

/* ==========================================================================
   Career stage / job titles
   ========================================================================== */

const POSITION_TITLES = {
  offense: ["Quarterbacks Coach", "Running Backs Coach", "Wide Receivers Coach", "Offensive Line Coach", "Tight Ends Coach"],
  defense: ["Defensive Line Coach", "Linebackers Coach", "Defensive Backs Coach", "Safeties Coach", "Cornerbacks Coach"],
};

const STAGE_ORDER = ["position", "coordinator", "headcoach"];

const STAGE_LABELS = {
  position: "Position Coach",
  coordinator: "Coordinator",
  headcoach: "Head Coach",
};

function coordinatorTitle(archetype) {
  return archetype === "offense" ? "Offensive Coordinator" : "Defensive Coordinator";
}

/* ==========================================================================
   Training focus & philosophy options (picked each preseason)
   ========================================================================== */

const TRAINING_FOCUS_OPTIONS = [
  {
    id: "conditioning",
    label: "Conditioning",
    description: "Grind the strength & conditioning program. Fewer late-game collapses, slower scheme install.",
    effects: { development: 2, culture: 1 },
  },
  {
    id: "scheme",
    label: "Scheme Installation",
    description: "Bury the playbook into muscle memory. Sharper execution on your side of the ball.",
    effects: { offenseIQGain: 1, defenseIQGain: 1, development: 1 },
  },
  {
    id: "discipline",
    label: "Culture & Discipline",
    description: "Tighten the locker room. Fewer off-field incidents, slower talent growth.",
    effects: { culture: 3 },
  },
  {
    id: "development",
    label: "Player Development",
    description: "Individualized reps for underclassmen. Talent compounds season over season.",
    effects: { development: 3 },
  },
];

const RECRUITING_FOCUS_OPTIONS = [
  {
    id: "blue_chip",
    label: "Blue-Chip Push",
    description: "Chase the state's top targets. High ceiling, but you can strike out and get nothing.",
    talentGrowth: 4,
    variance: 6,
  },
  {
    id: "balanced",
    label: "Balanced Class",
    description: "Fill needs across the board. Steady, unspectacular growth.",
    talentGrowth: 2,
    variance: 2,
  },
  {
    id: "in_state",
    label: "In-State Pipeline",
    description: "Lock down the home turf. Reliable, culture-friendly, modest upside.",
    talentGrowth: 1.5,
    variance: 1,
    cultureBonus: 1,
  },
];

const PHILOSOPHY_OPTIONS = [
  {
    id: "conservative",
    label: "Conservative",
    description: "Ball-control, take the safe points. Lower variance, lower ceiling.",
  },
  {
    id: "balanced",
    label: "Balanced",
    description: "Play the matchups as they come. Moderate variance.",
  },
  {
    id: "aggressive",
    label: "Aggressive",
    description: "Go for it on 4th down, attack downfield. Higher ceiling, higher risk.",
  },
];

/* ==========================================================================
   Achievements
   ========================================================================== */

const ACHIEVEMENTS = [
  { id: "first_job", label: "First Whistle", description: "Landed your first coaching job." },
  { id: "promoted_coordinator", label: "Coordinator", description: "Promoted to Offensive/Defensive Coordinator." },
  { id: "promoted_hc", label: "The Big Chair", description: "Named a Head Coach." },
  { id: "winning_season", label: "In the Black", description: "Finished a season with a winning record." },
  { id: "bowl_win", label: "Bowl Champion", description: "Won a bowl game as Head Coach." },
  { id: "conference_champ", label: "Conference Champion", description: "Won a conference title as Head Coach." },
  { id: "playoff", label: "Made the Field", description: "Reached the College Football Playoff." },
  { id: "national_champ", label: "National Champion", description: "Won it all." },
  { id: "coach_of_year", label: "Coach of the Year", description: "Recognized as the best coach in the sport." },
  { id: "survived_hotseat", label: "Nine Lives", description: "Survived a season on the hot seat." },
  { id: "blue_blood", label: "Blue Blood", description: "Took a job at a prestige-5 program." },
  { id: "hall_of_fame", label: "Hall of Fame", description: "Retired with a legendary legacy." },
];

/* ==========================================================================
   Dilemma events — narrative choices during a season.
   `stages`: which career stages this event can fire at ("position",
   "coordinator", "headcoach"). Effects apply directly to state.stats /
   state.reputation / state.jobSecurity / state.teamTalentDelta.
   ========================================================================== */

const DILEMMA_EVENTS = [
  {
    id: "curfew_breaker",
    stages: ["coordinator", "headcoach"],
    title: "Curfew Breaker",
    text: (ctx) => `Your best player was caught out past curfew the night before a road trip. The locker room is watching how ${ctx.pronoun} you handle it.`,
    choices: [
      { label: "Bench him for the first quarter", effects: { culture: 4, teamTalentDelta: -1 }, outcome: "The message lands. The team respects the line you drew." },
      { label: "Private word, no punishment", effects: { culture: -2, mediaSavvy: 1 }, outcome: "He appreciates the discretion, but a few veterans notice the double standard." },
      { label: "Suspend him for the game", effects: { culture: 6, teamTalentDelta: -3, reputation: 1 }, outcome: "A costly stand, but the program's discipline reputation grows." },
    ],
  },
  {
    id: "booster_pressure",
    stages: ["headcoach"],
    title: "Booster Pressure",
    text: () => `A major booster corners you at a fundraiser, pushing hard for more playing time for his nephew — a backup.`,
    choices: [
      { label: "Politely refuse", effects: { culture: 2, mediaSavvy: -1 }, outcome: "Word gets around that you can't be pushed. The roster respects it." },
      { label: "Give the kid a few token snaps", effects: { mediaSavvy: 2, culture: -1 }, outcome: "The booster is satisfied. A couple of players grumble about favoritism." },
      { label: "Report it to the AD", effects: { reputation: 2, jobSecurity: -3 }, outcome: "The AD backs you publicly, but you've made an enemy with deep pockets." },
    ],
  },
  {
    id: "transfer_portal_poach",
    stages: ["coordinator", "headcoach"],
    title: "Transfer Portal Storm",
    text: (ctx) => `A rival staffer is quietly recruiting one of ${ctx.possessive} best players in the portal chat rooms.`,
    choices: [
      { label: "Call an emergency meeting to re-recruit him", effects: { recruiting: 2, teamTalentDelta: 1 }, outcome: "The extra attention works — he commits to staying." },
      { label: "Let him decide on his own", effects: { culture: 1 }, outcome: "He stays, appreciating that you didn't pressure him." },
      { label: "Move on and open a scholarship", effects: { teamTalentDelta: -2, development: 1 }, outcome: "He transfers. It stings, but you already have his replacement targeted." },
    ],
  },
  {
    id: "media_hot_take",
    stages: ["coordinator", "headcoach"],
    title: "Media Firestorm",
    text: () => `A local reporter asks a loaded question about the team's struggles in your postgame press conference.`,
    choices: [
      { label: "Deflect with coach-speak", effects: { mediaSavvy: 1 }, outcome: "Bland but safe. Nobody remembers it by Monday." },
      { label: "Fire back at the reporter", effects: { mediaSavvy: -3, reputation: 1 }, outcome: "Clips go viral. Fans love the fire, the administration winces." },
      { label: "Give an unusually honest answer", effects: { mediaSavvy: 3, jobSecurity: -1 }, outcome: "Refreshing candor earns respect, but it also hands ammunition to critics." },
    ],
  },
  {
    id: "injury_scare",
    stages: ["position", "coordinator", "headcoach"],
    title: "Injury Scare",
    text: () => `Your best player at your position group goes down awkwardly in practice. The training staff wants to be cautious.`,
    choices: [
      { label: "Shut him down for the week", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "He's fresh for the following week's game. Depth gets valuable reps." },
      { label: "Push to get him back for Saturday", effects: { teamTalentDelta: 1, culture: -2 }, outcome: "He plays, but the training staff isn't thrilled with the call." },
    ],
  },
  {
    id: "recruit_home_visit",
    stages: ["coordinator", "headcoach"],
    title: "The Home Visit",
    text: () => `A five-star prospect's family wants brutal honesty about playing time before they'll commit.`,
    choices: [
      { label: "Promise a real shot to compete", effects: { recruiting: 2, culture: 1 }, outcome: "The honesty resonates. He commits, expectations set correctly." },
      { label: "Oversell the depth chart", effects: { recruiting: 3, culture: -2 }, outcome: "He commits, but the current starters overhear about the promise." },
      { label: "Walk away from the recruitment", effects: { culture: 1, recruiting: -1 }, outcome: "You keep your word cheap elsewhere, but a blue-chip talent goes to a rival." },
    ],
  },
  {
    id: "assistant_poached",
    stages: ["headcoach"],
    title: "Staff Raid",
    text: () => `A Power conference program is trying to poach your top assistant with a big raise.`,
    choices: [
      { label: "Match the offer to keep him", effects: { jobSecurity: -2, development: 2 }, outcome: "Budget strain, but staff continuity holds." },
      { label: "Let him go and promote from within", effects: { development: -1, mediaSavvy: 1 }, outcome: "A rocky transition, but you find a rising star underneath him." },
    ],
  },
  {
    id: "rivalry_week",
    stages: ["position", "coordinator", "headcoach"],
    title: "Rivalry Week",
    text: () => `The whole state has been counting down to this game for a year. The team is buzzing — or maybe too tight.`,
    choices: [
      { label: "Keep the week business as usual", effects: { culture: 1 }, outcome: "The calm approach keeps nerves in check." },
      { label: "Lean into the hype all week", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "The energy is electric, though a couple of guys look keyed-up." },
    ],
  },
  {
    id: "academic_eligibility",
    stages: ["position", "coordinator", "headcoach"],
    title: "Eligibility Trouble",
    text: () => `Academic services flags a starter as at-risk for eligibility this term.`,
    choices: [
      { label: "Mandate study hall hours", effects: { culture: 2, development: 1 }, outcome: "He buckles down and stays eligible." },
      { label: "Leave it to the player", effects: { culture: -1 }, outcome: "He squeaks by, but it was closer than anyone liked." },
    ],
  },
  {
    id: "nil_deal_distraction",
    stages: ["coordinator", "headcoach"],
    title: "NIL Distraction",
    text: () => `A star player's NIL deal is pulling him into appearances that are cutting into practice reps.`,
    choices: [
      { label: "Set hard limits on outside commitments", effects: { culture: 3, teamTalentDelta: -1 }, outcome: "Grumbling at first, but the team respects the structure." },
      { label: "Let him manage his own time", effects: { mediaSavvy: 1, culture: -2 }, outcome: "He appreciates the trust. Practice focus slips slightly." },
    ],
  },
  {
    id: "game_plan_leak",
    stages: ["coordinator", "headcoach"],
    title: "Game Plan Leak",
    text: () => `You suspect a portion of next week's game plan leaked to the opponent's staff.`,
    choices: [
      { label: "Scrap the plan and rebuild", effects: { development: -1, teamTalentDelta: 1 }, outcome: "Extra work pays off with a fresher wrinkle nobody saw." },
      { label: "Trust the plan and move forward", effects: { culture: -1 }, outcome: "It works out, but the uncertainty nags at the staff all week." },
    ],
  },
  {
    id: "weather_disruption",
    stages: ["position", "coordinator", "headcoach"],
    title: "Weather Disruption",
    text: () => `A storm wipes out two days of outdoor practice right before a big game.`,
    choices: [
      { label: "Move everything to walkthroughs", effects: { development: 1 }, outcome: "Mental reps keep the install on track." },
      { label: "Push through in the indoor facility", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "The extra work pays off physically, but the team is gassed." },
    ],
  },
  {
    id: "position_battle",
    stages: ["position"],
    title: "Position Battle",
    text: () => `Two players in your room are neck-and-neck for the starting job, and both sets of parents are calling.`,
    choices: [
      { label: "Let the tape decide, no favorites", effects: { culture: 3, development: 1 }, outcome: "The room respects the fairness, even the player who loses the job." },
      { label: "Go with the more experienced player", effects: { culture: -1, teamTalentDelta: 1 }, outcome: "Safe, proven choice — but the young talent is frustrated." },
    ],
  },
  {
    id: "hc_wants_input",
    stages: ["position"],
    title: "The Head Coach Wants Your Read",
    text: () => `The head coach asks you point-blank in the staff meeting whether your group is ready to install a riskier wrinkle for Saturday.`,
    choices: [
      { label: "Vouch for it — they're ready", effects: { reputation: 2, teamTalentDelta: 1 }, outcome: "It works. Your stock with the head coach rises." },
      { label: "Advise caution", effects: { reputation: 1, culture: 1 }, outcome: "The safe call is respected, if unremarkable." },
    ],
  },
  {
    id: "coordinator_scheme_clash",
    stages: ["coordinator"],
    title: "Philosophy Clash",
    text: () => `The head coach wants to slow the pace down; you believe tempo is what wins you games.`,
    choices: [
      { label: "Push back and make your case", effects: { reputation: 2, jobSecurity: -2 }, outcome: "You win the argument, but it's noted that you push hard." },
      { label: "Defer to the head coach", effects: { jobSecurity: 2, reputation: -1 }, outcome: "Smooth staff relations, but you wonder what could have been." },
    ],
  },
  {
    id: "admin_budget_cuts",
    stages: ["headcoach"],
    title: "Budget Cuts",
    text: () => `The athletic department is trimming the football budget, and recruiting travel is on the chopping block.`,
    choices: [
      { label: "Fight for the recruiting budget", effects: { jobSecurity: -2, recruiting: 2 }, outcome: "You win the fight, but you've spent political capital." },
      { label: "Accept the cuts gracefully", effects: { jobSecurity: 1, recruiting: -2 }, outcome: "The administration appreciates the team player." },
    ],
  },
  {
    id: "walk_on_story",
    stages: ["position", "coordinator", "headcoach"],
    title: "Walk-On Story",
    text: () => `A walk-on in your program has quietly outplayed a scholarship starter in practice all month.`,
    choices: [
      { label: "Reward it with real reps", effects: { culture: 3, development: 1 }, outcome: "A feel-good story that galvanizes the whole roster." },
      { label: "Stick with the scholarship depth chart", effects: { culture: -2 }, outcome: "Politically safe, but the locker room notices." },
    ],
  },
  {
    id: "coach_of_year_buzz",
    stages: ["headcoach"],
    title: "Award Season Buzz",
    text: () => `Your name is coming up in Coach of the Year conversations. A reporter wants an exclusive sit-down.`,
    choices: [
      { label: "Do the interview", effects: { mediaSavvy: 2, reputation: 2 }, outcome: "Good exposure, though a couple of assistants feel overlooked." },
      { label: "Deflect credit to the staff and players", effects: { culture: 3, mediaSavvy: 1 }, outcome: "The humility plays extremely well inside the building." },
    ],
  },
  {
    id: "quarterback_controversy",
    stages: ["coordinator", "headcoach"],
    title: "Quarterback Controversy",
    text: () => `Your starting QB has been shaky, and the backup is lighting it up in practice. Fans are loud on social media.`,
    choices: [
      { label: "Make the switch", effects: { teamTalentDelta: 1, culture: -2 }, outcome: "Bold move. It could pay off big or blow up the room." },
      { label: "Stick with the starter", effects: { culture: 2 }, outcome: "Loyalty is noted, even if the offense doesn't improve much." },
    ],
  },
  {
    id: "in_state_recruit_snub",
    stages: ["headcoach"],
    title: "In-State Snub",
    text: () => `The state's top recruit publicly says he's looking at programs outside the region.`,
    choices: [
      { label: "Make a personal, public pitch", effects: { mediaSavvy: 2, recruiting: 1 }, outcome: "It's a swing for the fences. He notices the effort." },
      { label: "Focus recruiting resources elsewhere", effects: { recruiting: 1 }, outcome: "Pragmatic. You land depth instead of a headline name." },
    ],
  },
  {
    id: "practice_fight",
    stages: ["position", "coordinator", "headcoach"],
    title: "Practice Scuffle",
    text: () => `Two players come to blows at practice over a trash-talking incident.`,
    choices: [
      { label: "Discipline both equally", effects: { culture: 4 }, outcome: "Fair and firm. The room respects the standard." },
      { label: "Let it go — competitive fire is good", effects: { culture: -3, teamTalentDelta: 1 }, outcome: "The edge stays, but so does the tension." },
    ],
  },
  {
    id: "alumni_dinner",
    stages: ["headcoach"],
    title: "Alumni Dinner",
    text: () => `You're invited to a big-money alumni dinner the night before a short practice week.`,
    choices: [
      { label: "Attend and work the room", effects: { mediaSavvy: 2, reputation: 1 }, outcome: "Fundraising relationships strengthen for the program's future." },
      { label: "Skip it to focus on the game plan", effects: { teamTalentDelta: 1, mediaSavvy: -1 }, outcome: "The team appreciates the focus; the boosters notice the absence." },
    ],
  },
  {
    id: "underdog_upset_chance",
    stages: ["position", "coordinator", "headcoach"],
    title: "Trap Game",
    text: () => `A ranked opponent looms next week, and this Saturday's overmatched opponent is being overlooked in the building.`,
    choices: [
      { label: "Sound the alarm in meetings", effects: { culture: 2 }, outcome: "The focus holds. No trap sprung." },
      { label: "Let the staff coast a bit", effects: { culture: -2, teamTalentDelta: -1 }, outcome: "A scare on the scoreboard reminds everyone why you don't look ahead." },
    ],
  },
];
