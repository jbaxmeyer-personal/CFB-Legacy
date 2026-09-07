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

const OFFENSE_SCHEMES = [
  { id: "Spread", label: "Spread", description: "Four verticals, tempo, space. Rewards a sharp Offense IQ and a deep skill-position room.", fitStats: ["offenseIQ", "recruiting"] },
  { id: "Air Raid", label: "Air Raid", description: "Pass-heavy, high-volume attack. Explosive with a strong-armed QB, exposed if the line can't hold up.", fitStats: ["offenseIQ", "development"] },
  { id: "Power Spread", label: "Power Spread", description: "Run-first out of spread sets. Physical, ball-control, forgiving of a shaky passing game.", fitStats: ["development", "culture"] },
  { id: "Pro Style", label: "Pro Style", description: "Balanced, multiple, pro-readable. No glaring weakness, no defining strength either.", fitStats: ["offenseIQ", "culture"] },
  { id: "Multiple Offense", label: "Multiple Offense", description: "Formation soup — a lot to install, a lot of answers once it's in.", fitStats: ["offenseIQ", "development"] },
  { id: "Option", label: "Option", description: "Ball-control, clock-killing, low-turnover. Old-school, but it wins low-talent matchups.", fitStats: ["culture", "development"] },
];

const DEFENSE_SCHEMES = [
  { id: "4-2-5", label: "4-2-5", description: "Speed over size, built for spread offenses. Exposed against a physical run game.", fitStats: ["defenseIQ", "recruiting"] },
  { id: "Base 4-3", label: "Base 4-3", description: "Textbook, sound against the run, asks less of your secondary.", fitStats: ["defenseIQ", "culture"] },
  { id: "Base 3-4", label: "Base 3-4", description: "Disguise and pressure from multiple angles. Needs smart linebackers to execute.", fitStats: ["defenseIQ", "development"] },
  { id: "3-3-5", label: "3-3-5", description: "Extra DB, bend-don't-break against the pass. Vulnerable up front on early downs.", fitStats: ["defenseIQ", "recruiting"] },
  { id: "Multiple Defense", label: "Multiple Defense", description: "Disguises everything, installs slowly. Confuses opponents once it's mastered.", fitStats: ["defenseIQ", "development"] },
  { id: "3-4 Multiple", label: "3-4 Multiple", description: "Hybrid fronts, versatile personnel. Rewards depth and coaching continuity.", fitStats: ["development", "culture"] },
];

function schemesForSide(side) {
  return side === "offense" ? OFFENSE_SCHEMES : DEFENSE_SCHEMES;
}

function findScheme(side, id) {
  return schemesForSide(side).find((s) => s.id === id);
}

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
      { label: "Bench him for the first quarter", effects: { culture: 4, teamTalentDelta: -1, weekPowerDelta: -2 }, outcome: "The message lands. The team respects the line you drew." },
      { label: "Private word, no punishment", effects: { culture: -2, mediaSavvy: 1 }, outcome: "He appreciates the discretion, but a few veterans notice the double standard." },
      { label: "Suspend him for the game", effects: { culture: 6, teamTalentDelta: -3, reputation: 1, weekPowerDelta: -5 }, outcome: "A costly stand, but the program's discipline reputation grows." },
    ],
  },
  {
    id: "booster_pressure",
    stages: ["headcoach"],
    title: "Booster Pressure",
    text: () => `A major booster corners you at a fundraiser, pushing hard for more playing time for his nephew — a backup.`,
    choices: [
      { label: "Politely refuse", effects: { culture: 2, mediaSavvy: -1 }, outcome: "Word gets around that you can't be pushed. The roster respects it." },
      { label: "Give the kid a few token snaps", effects: { mediaSavvy: 2, culture: -1, teamTalentDelta: -1 }, outcome: "The booster is satisfied. A couple of players grumble about favoritism." },
      { label: "Report it to the AD", effects: { reputation: 2, jobSecurity: -3 }, outcome: "The AD backs you publicly, but you've made an enemy with deep pockets." },
    ],
  },
  {
    id: "transfer_portal_poach",
    stages: ["coordinator", "headcoach"],
    title: "Transfer Portal Storm",
    text: (ctx) => `A rival staffer is quietly recruiting one of ${ctx.possessive} best players in the portal chat rooms.`,
    choices: [
      { label: "Call an emergency meeting to re-recruit him", effects: { recruiting: 2, teamTalentDelta: 1, development: -1 }, outcome: "The extra attention works — he commits to staying." },
      { label: "Let him decide on his own", effects: { culture: 1, recruiting: -1 }, outcome: "He stays, appreciating that you didn't pressure him." },
      { label: "Move on and open a scholarship", effects: { teamTalentDelta: -2, development: 1 }, outcome: "He transfers. It stings, but you already have his replacement targeted." },
    ],
  },
  {
    id: "media_hot_take",
    stages: ["coordinator", "headcoach"],
    title: "Media Firestorm",
    text: () => `A local reporter asks a loaded question about the team's struggles in your postgame press conference.`,
    choices: [
      { label: "Deflect with coach-speak", effects: { mediaSavvy: 1, reputation: -1 }, outcome: "Bland but safe. Nobody remembers it by Monday." },
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
      { label: "Shut him down for the week", effects: { culture: 2, teamTalentDelta: -1, weekPowerDelta: -3 }, outcome: "He's fresh for the following week's game. Depth gets valuable reps." },
      { label: "Push to get him back for Saturday", effects: { teamTalentDelta: 1, culture: -2, weekPowerDelta: 3 }, outcome: "He plays, but the training staff isn't thrilled with the call." },
    ],
  },
  {
    id: "recruit_home_visit",
    stages: ["coordinator", "headcoach"],
    title: "The Home Visit",
    text: () => `A five-star prospect's family wants brutal honesty about playing time before they'll commit.`,
    choices: [
      { label: "Promise a real shot to compete", effects: { recruiting: 2, culture: 1, teamTalentDelta: -1 }, outcome: "The honesty resonates. He commits, expectations set correctly." },
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
      { label: "Let him go and promote from within", effects: { development: -1, mediaSavvy: 1, jobSecurity: 1 }, outcome: "A rocky transition, but you find a rising star underneath him." },
    ],
  },
  {
    id: "rivalry_week",
    stages: ["position", "coordinator", "headcoach"],
    title: "Rivalry Week",
    text: () => `The whole state has been counting down to this game for a year. The team is buzzing — or maybe too tight.`,
    choices: [
      { label: "Keep the week business as usual", effects: { culture: 1, reputation: -1, weekPowerDelta: 0 }, outcome: "The calm approach keeps nerves in check, if a little flat." },
      { label: "Lean into the hype all week", effects: { teamTalentDelta: 1, culture: -1, weekPowerDelta: 3 }, outcome: "The energy is electric, though a couple of guys look keyed-up." },
    ],
  },
  {
    id: "academic_eligibility",
    stages: ["position", "coordinator", "headcoach"],
    title: "Eligibility Trouble",
    text: () => `Academic services flags a starter as at-risk for eligibility this term.`,
    choices: [
      { label: "Mandate study hall hours", effects: { culture: 2, development: 1, teamTalentDelta: -1 }, outcome: "He buckles down and stays eligible, but loses practice reps to tutoring." },
      { label: "Leave it to the player", effects: { culture: -1, mediaSavvy: 1 }, outcome: "He squeaks by. Players notice you treated him like an adult." },
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
      { label: "Scrap the plan and rebuild", effects: { development: -1, teamTalentDelta: 1, weekPowerDelta: 3 }, outcome: "Extra work pays off with a fresher wrinkle nobody saw." },
      { label: "Trust the plan and move forward", effects: { culture: -1, development: 1 }, outcome: "It works out, and the staff banks the saved prep time elsewhere." },
    ],
  },
  {
    id: "weather_disruption",
    stages: ["position", "coordinator", "headcoach"],
    title: "Weather Disruption",
    text: () => `A storm wipes out two days of outdoor practice right before a big game.`,
    choices: [
      { label: "Move everything to walkthroughs", effects: { development: 1, teamTalentDelta: -1 }, outcome: "Mental reps keep the install on track, but the legs feel it Saturday." },
      { label: "Push through in the indoor facility", effects: { teamTalentDelta: 1, culture: -1, weekPowerDelta: 2 }, outcome: "The extra work pays off physically, but the team is gassed." },
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
      { label: "Vouch for it — they're ready", effects: { reputation: 2, teamTalentDelta: 1, weekPowerDelta: 3 }, outcome: "It works. Your stock with the head coach rises." },
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
      { label: "Reward it with real reps", effects: { culture: 3, development: 1, weekPowerDelta: -1 }, outcome: "A feel-good story that galvanizes the whole roster." },
      { label: "Stick with the scholarship depth chart", effects: { culture: -2, teamTalentDelta: 1 }, outcome: "Politically safe and proven — but the locker room notices." },
    ],
  },
  {
    id: "coach_of_year_buzz",
    stages: ["headcoach"],
    title: "Award Season Buzz",
    text: () => `Your name is coming up in Coach of the Year conversations. A reporter wants an exclusive sit-down.`,
    choices: [
      { label: "Do the interview", effects: { mediaSavvy: 2, reputation: 2, culture: -1 }, outcome: "Good exposure, though a couple of assistants feel overlooked." },
      { label: "Deflect credit to the staff and players", effects: { culture: 3, mediaSavvy: 1 }, outcome: "The humility plays extremely well inside the building." },
    ],
  },
  {
    id: "quarterback_controversy",
    stages: ["coordinator", "headcoach"],
    title: "Quarterback Controversy",
    text: () => `Your starting QB has been shaky, and the backup is lighting it up in practice. Fans are loud on social media.`,
    choices: [
      { label: "Make the switch", effects: { teamTalentDelta: 1, culture: -2, weekPowerDelta: 2 }, outcome: "Bold move. It could pay off big or blow up the room." },
      { label: "Stick with the starter", effects: { culture: 2, weekPowerDelta: -1 }, outcome: "Loyalty is noted, even if the offense doesn't improve much." },
    ],
  },
  {
    id: "in_state_recruit_snub",
    stages: ["headcoach"],
    title: "In-State Snub",
    text: () => `The state's top recruit publicly says he's looking at programs outside the region.`,
    choices: [
      { label: "Make a personal, public pitch", effects: { mediaSavvy: 2, recruiting: 1, jobSecurity: -1 }, outcome: "It's a swing for the fences. He notices the effort." },
      { label: "Focus recruiting resources elsewhere", effects: { recruiting: 1 }, outcome: "Pragmatic. You land depth instead of a headline name." },
    ],
  },
  {
    id: "practice_fight",
    stages: ["position", "coordinator", "headcoach"],
    title: "Practice Scuffle",
    text: () => `Two players come to blows at practice over a trash-talking incident.`,
    choices: [
      { label: "Discipline both equally", effects: { culture: 4, teamTalentDelta: -1 }, outcome: "Fair and firm. The room respects the standard, even the star who got benched with everyone else." },
      { label: "Let it go — competitive fire is good", effects: { culture: -3, teamTalentDelta: 1 }, outcome: "The edge stays, but so does the tension." },
    ],
  },
  {
    id: "alumni_dinner",
    stages: ["headcoach"],
    title: "Alumni Dinner",
    text: () => `You're invited to a big-money alumni dinner the night before a short practice week.`,
    choices: [
      { label: "Attend and work the room", effects: { mediaSavvy: 2, reputation: 1, weekPowerDelta: -2 }, outcome: "Fundraising relationships strengthen for the program's future." },
      { label: "Skip it to focus on the game plan", effects: { teamTalentDelta: 1, mediaSavvy: -1, weekPowerDelta: 2 }, outcome: "The team appreciates the focus; the boosters notice the absence." },
    ],
  },
  {
    id: "underdog_upset_chance",
    stages: ["position", "coordinator", "headcoach"],
    title: "Trap Game",
    text: () => `A ranked opponent looms next week, and this Saturday's overmatched opponent is being overlooked in the building.`,
    choices: [
      { label: "Sound the alarm in meetings", effects: { culture: 2, weekPowerDelta: 3 }, outcome: "The focus holds. No trap sprung." },
      { label: "Let the staff coast a bit", effects: { culture: -2, teamTalentDelta: -1, development: 1, weekPowerDelta: -5 }, outcome: "A scare on the scoreboard reminds everyone why you don't look ahead — though the lighter week gets your backups real reps." },
    ],
  },
  {
    id: "hazing_allegation",
    stages: ["coordinator", "headcoach"],
    title: "Hazing Allegation",
    text: () => `A freshman's parents call about upperclassmen hazing in the position rooms.`,
    choices: [
      { label: "Investigate and discipline those responsible", effects: { culture: 4, teamTalentDelta: -2 }, outcome: "Painful in the short term — you suspend a key veteran — but the culture shift is real." },
      { label: "Handle it quietly, one-on-one", effects: { mediaSavvy: 1, culture: -3 }, outcome: "No headlines, but the underlying problem doesn't really go away." },
    ],
  },
  {
    id: "ncaa_compliance_flag",
    stages: ["headcoach"],
    title: "Compliance Flag",
    text: () => `Your compliance office flags a minor recruiting-contact violation risk from an overeager assistant.`,
    choices: [
      { label: "Self-report immediately", effects: { reputation: 1, jobSecurity: -3 }, outcome: "Short-term pain with the administration, but your integrity is on record." },
      { label: "Quietly correct the process internally", effects: { jobSecurity: 1, reputation: -1 }, outcome: "It blows over — for now — but the risk doesn't disappear, just goes underground." },
    ],
  },
  {
    id: "satellite_camp_tour",
    stages: ["coordinator", "headcoach"],
    title: "Satellite Camp Tour",
    text: () => `You're invited to work camps in a talent-rich region outside your normal footprint.`,
    choices: [
      { label: "Go on the tour", effects: { recruiting: 2, teamTalentDelta: -1 }, outcome: "New pipeline relationships open up, at the cost of a week away from install." },
      { label: "Stay home, focus on the roster you have", effects: { development: 1, recruiting: -1 }, outcome: "The current roster gets your full attention instead." },
    ],
  },
  {
    id: "redshirt_decision",
    stages: ["position", "coordinator", "headcoach"],
    title: "Redshirt Decision",
    text: () => `A talented true freshman could help right now, or you could redshirt him for a stronger long-term payoff.`,
    choices: [
      { label: "Play him now", effects: { teamTalentDelta: 1, development: -1 }, outcome: "He helps immediately, though the long view takes a hit." },
      { label: "Redshirt him", effects: { development: 2, teamTalentDelta: -1 }, outcome: "A weaker roster this year buys a much stronger one down the road." },
    ],
  },
  {
    id: "oversigning_numbers",
    stages: ["headcoach"],
    title: "Roster Numbers",
    text: () => `You're over the scholarship limit and have to make cuts before the deadline.`,
    choices: [
      { label: "Cut to the number, no exceptions", effects: { culture: -2, recruiting: 1 }, outcome: "Efficient and clean, but brutal — and the locker room knows it." },
      { label: "Find grayshirt and walk-on workarounds", effects: { culture: 2, recruiting: -1 }, outcome: "Kinder to the players affected, slower to fix your numbers problem." },
    ],
  },
  {
    id: "viral_moment",
    stages: ["coordinator", "headcoach"],
    title: "Viral Moment",
    text: () => `A sideline clip of you goes viral overnight for all the wrong — or right — reasons.`,
    choices: [
      { label: "Lean into it, embrace the moment", effects: { mediaSavvy: 3, culture: -1 }, outcome: "Great for the brand. A few players think you're more focused on the cameras." },
      { label: "Downplay it, stay businesslike", effects: { culture: 1, mediaSavvy: -1 }, outcome: "Low-key and professional, if a little unmemorable." },
    ],
  },
  {
    id: "rival_dirty_tactic",
    stages: ["coordinator", "headcoach"],
    title: "Dirty Recruiting Tactics",
    text: () => `You catch wind that a rival staff is bending recruiting rules to flip one of your commits.`,
    choices: [
      { label: "Report it to the conference office", effects: { reputation: 2, jobSecurity: -2 }, outcome: "The right thing to do — and it costs you political capital with that program's allies." },
      { label: "Beat them on the field instead", effects: { teamTalentDelta: 1, recruiting: -1, weekPowerDelta: 4 }, outcome: "You let the scoreboard do the talking. The staff plays with an edge this week." },
    ],
  },
  {
    id: "mental_health_disclosure",
    stages: ["position", "coordinator", "headcoach"],
    title: "A Player Opens Up",
    text: () => `A player confides that he's struggling badly outside of football.`,
    choices: [
      { label: "Connect him with resources, ease his load", effects: { culture: 3, teamTalentDelta: -1, development: -1 }, outcome: "He gets real help. The team takes a small on-field hit, and your own attention is stretched thin for a while." },
      { label: "Push him to play through it", effects: { teamTalentDelta: 1, culture: -3 }, outcome: "Short-term production, but word gets around about how it was handled." },
    ],
  },
  {
    id: "community_service_request",
    stages: ["headcoach"],
    title: "Community Request",
    text: () => `A high-profile charity asks for the whole team during your one open week of the season.`,
    choices: [
      { label: "Do it", effects: { mediaSavvy: 2, reputation: 1, teamTalentDelta: -1 }, outcome: "Great publicity, but the players don't get the rest that bye week was for." },
      { label: "Decline, protect the bye week", effects: { teamTalentDelta: 1, mediaSavvy: -1 }, outcome: "The team is fresher. The charity finds another program." },
    ],
  },
  {
    id: "booster_facility_pitch",
    stages: ["headcoach"],
    title: "Booster's Offer",
    text: () => `A booster offers to fund a facility upgrade — if you publicly endorse his business.`,
    choices: [
      { label: "Take the deal", effects: { recruiting: 2, mediaSavvy: -1 }, outcome: "The new facility becomes a real recruiting tool, though some see the endorsement as tacky." },
      { label: "Turn it down, keep it clean", effects: { mediaSavvy: 1, recruiting: -1 }, outcome: "No strings attached, no new facility either." },
    ],
  },
  {
    id: "coordinator_conflict",
    stages: ["headcoach"],
    title: "Staff Conflict",
    text: () => `Your offensive and defensive staffs are clashing hard over how to split practice reps.`,
    choices: [
      { label: "Split time evenly, mediate personally", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "Fair, but it takes real time out of your week to referee it." },
      { label: "Let them hash it out themselves", effects: { teamTalentDelta: 1, culture: -2 }, outcome: "One side wins out for now. The other side remembers it." },
    ],
  },
  {
    id: "depth_chart_favor",
    stages: ["position"],
    title: "A Favor Requested",
    text: () => `Another position coach asks you to work a fringe player into your group's reps to help him get on the field.`,
    choices: [
      { label: "Do him the favor", effects: { culture: 1, teamTalentDelta: -1 }, outcome: "Staff goodwill banked, at a small cost to your room's focus." },
      { label: "Protect your room's reps", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Your group stays sharp. The other coach isn't thrilled." },
    ],
  },
  {
    id: "hometown_discount_pitch",
    stages: ["coordinator", "headcoach"],
    title: "Hometown Discount",
    text: () => `A local four-star will commit cheaply — if you promise him a specific role in writing.`,
    choices: [
      { label: "Promise the role", effects: { recruiting: 3, culture: -1 }, outcome: "He commits fast, but the current starter at that spot has questions." },
      { label: "Recruit him straight, no promises", effects: { recruiting: 1, culture: 1 }, outcome: "Slower to close, but nobody's roster spot was ever in question." },
    ],
  },
  {
    id: "early_enrollee_culture_shock",
    stages: ["position", "coordinator", "headcoach"],
    title: "Early Enrollee Adjustment",
    text: () => `A January enrollee is visibly struggling to adjust to college life and the playbook at the same time.`,
    choices: [
      { label: "Assign a mentor, slow-play his reps", effects: { culture: 2, development: 1, teamTalentDelta: -1 }, outcome: "He stabilizes. It takes longer to get him on the field." },
      { label: "Throw him in with the vets immediately", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Sink or swim. This time he swims — barely." },
    ],
  },
  {
    id: "contract_extension_offer",
    stages: ["headcoach"],
    title: "Extension Offer",
    text: () => `After a hot start, the athletic director offers you a contract extension.`,
    choices: [
      { label: "Sign now, lock in security", effects: { jobSecurity: 18, reputation: -1 }, outcome: "Peace of mind — though you may have left money and leverage on the table." },
      { label: "Bet on yourself, wait for a bigger deal", effects: { jobSecurity: -4, reputation: 2 }, outcome: "Riskier, but if the season holds up, a much bigger deal is coming." },
    ],
  },
  {
    id: "schedule_a_ranked_team",
    stages: ["headcoach"],
    title: "Marquee Scheduling",
    text: () => `You have a chance to schedule a marquee non-conference opponent for future national exposure.`,
    choices: [
      { label: "Schedule the game", effects: { mediaSavvy: 2, recruiting: 1, jobSecurity: -1 }, outcome: "A tougher future slate, but the exposure is real." },
      { label: "Play it safe, schedule a cupcake", effects: { jobSecurity: 1, mediaSavvy: -1 }, outcome: "An easier future win, and a quieter national profile." },
    ],
  },
  {
    id: "december_practice_intensity",
    stages: ["headcoach"],
    title: "Bowl Prep Tone",
    text: () => `Bowl practices are optional in intensity — some staffs grind, some reward the season with a lighter week.`,
    choices: [
      { label: "Push hard in practice", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Sharper on gameday. A few veterans grumble about the workload." },
      { label: "Ease up, reward the season", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "Good for morale, a little rusty on the field." },
    ],
  },
  {
    id: "transfer_portal_addition",
    stages: ["coordinator", "headcoach"],
    title: "Portal Addition",
    text: () => `A proven transfer portal player wants a guaranteed starting job in writing before he'll commit mid-cycle.`,
    choices: [
      { label: "Guarantee him the starting job", effects: { teamTalentDelta: 2, culture: -2 }, outcome: "An immediate talent boost, and a current starter who now has to be told." },
      { label: "Make him earn it like everyone else", effects: { culture: 1, teamTalentDelta: -1, recruiting: -1 }, outcome: "Fair to the roster — and he may commit elsewhere instead." },
    ],
  },
  {
    id: "exhibition_sandbagging",
    stages: ["headcoach"],
    title: "Scouting Report",
    text: () => `Word gets around that this week's opponent has been hiding wrinkles on film ahead of your matchup.`,
    choices: [
      { label: "Scout extra, adjust the game plan", effects: { development: -1, teamTalentDelta: 2, weekPowerDelta: 4 }, outcome: "The extra film study pays off — your staff isn't caught off guard." },
      { label: "Trust your prep, don't overreact", effects: { culture: 1, teamTalentDelta: -1 }, outcome: "Confidence in the plan holds, for better or worse." },
    ],
  },
  {
    id: "tv_exposure_request",
    stages: ["headcoach"],
    title: "Primetime Request",
    text: () => `The network wants to flex your game to national primetime, disrupting your normal week.`,
    choices: [
      { label: "Accept the exposure", effects: { mediaSavvy: 3, teamTalentDelta: -1, weekPowerDelta: -2 }, outcome: "Great for the program's profile — the disrupted routine costs you a little sharpness." },
      { label: "Ask to keep the normal time slot", effects: { teamTalentDelta: 1, mediaSavvy: -1 }, outcome: "Routine protected, less eyeballs on the program." },
    ],
  },
  {
    id: "senior_day_tribute",
    stages: ["position", "coordinator", "headcoach"],
    title: "Senior Day",
    text: () => `Your seniors want an elaborate pregame tribute that eats into your normal pregame routine.`,
    choices: [
      { label: "Give them the full tribute", effects: { culture: 3, weekPowerDelta: -2 }, outcome: "An emotional, well-earned moment — the team is a step slow out of the gate." },
      { label: "Keep it brief, focus on the game plan", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Business as usual. A couple of seniors are quietly disappointed." },
    ],
  },
  {
    id: "coaching_clinic_invite",
    stages: ["position", "coordinator"],
    title: "Coaching Clinic",
    text: () => `You're invited to speak at a major coaching clinic — good exposure and networking for your career.`,
    choices: [
      { label: "Go, build your network", effects: { reputation: 2, mediaSavvy: 1, development: -1 }, outcome: "Good for your résumé; your room lost a week of your full attention." },
      { label: "Stay, focus on your room", effects: { development: 1, reputation: -1 }, outcome: "Your players benefit. Your name stays out of the wider conversation." },
    ],
  },
  {
    id: "two_platoon_experiment",
    stages: ["coordinator", "headcoach"],
    title: "Rotation Question",
    text: () => `You're tempted to rotate two players by situation rather than naming a clear starter.`,
    choices: [
      { label: "Run the rotation", effects: { teamTalentDelta: 1, culture: -2, weekPowerDelta: 2 }, outcome: "Matchup flexibility pays off on the field. Neither player loves splitting time." },
      { label: "Name one starter and stick with him", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "Clear roles, clean locker room, a little less tactical upside." },
    ],
  },
  {
    id: "recruiting_dead_period",
    stages: ["coordinator", "headcoach"],
    title: "Dead Period Timing",
    text: () => `An NCAA recruiting dead period hits right as momentum was building with your top targets.`,
    choices: [
      { label: "Blitz phone and video calls within the rules", effects: { recruiting: 2, mediaSavvy: -1 }, outcome: "You keep the relationship warm, though a couple of families find it pushy." },
      { label: "Go quiet and let the film speak", effects: { recruiting: -1, culture: 1 }, outcome: "Low-pressure and professional, but momentum cools." },
    ],
  },
  {
    id: "injury_to_star_recruit",
    stages: ["coordinator", "headcoach"],
    title: "Recruit's Injury",
    text: () => `Your top incoming commit tears his ACL in his high school playoff game.`,
    choices: [
      { label: "Honor the scholarship no matter what", effects: { culture: 3, recruiting: -1 }, outcome: "The class sees it and takes note of your loyalty. The roster spot is a gamble." },
      { label: "Pull back and offer elsewhere", effects: { recruiting: 1, culture: -2 }, outcome: "Pragmatic roster management — and the recruiting world notices the cold approach." },
    ],
  },

  /* ---- Player discipline & team culture ---- */
  {
    id: "locker_room_leader",
    stages: ["coordinator", "headcoach"],
    title: "The Captains Want a Say",
    text: () => `Your team captains ask for real input into game-week meeting agendas, not just a ceremonial seat.`,
    choices: [
      { label: "Give them the floor", effects: { culture: 3, teamTalentDelta: -1 }, outcome: "Buy-in shoots up. A few staff meetings run long now." },
      { label: "Keep the meetings coach-run", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Tighter, faster meetings — and a captain group that feels like a formality." },
    ],
  },
  {
    id: "jersey_number_dispute",
    stages: ["position", "coordinator", "headcoach"],
    title: "Number Dispute",
    text: () => `Two players — a returning starter and a hyped freshman — both want the same jersey number.`,
    choices: [
      { label: "Give it to the veteran", effects: { culture: 1, recruiting: -1 }, outcome: "Seniority respected. The freshman's family isn't thrilled." },
      { label: "Let the freshman have it", effects: { recruiting: 1, culture: -1 }, outcome: "A nice recruiting gesture. The veteran feels passed over." },
    ],
  },
  {
    id: "social_media_beef",
    stages: ["coordinator", "headcoach"],
    title: "Social Media Beef",
    text: () => `One of your players is trading barbs online with a rival team's player all week.`,
    choices: [
      { label: "Shut it down, phones away", effects: { culture: 2, mediaSavvy: -1 }, outcome: "Quiet week. A few players think you're being uptight." },
      { label: "Let them talk, use it as fuel", effects: { teamTalentDelta: 1, culture: -1, weekPowerDelta: 3 }, outcome: "The chip on the shoulder shows up on the field." },
    ],
  },
  {
    id: "tattoo_policy",
    stages: ["headcoach"],
    title: "Old-School Boosters",
    text: () => `A group of old-guard boosters complains that your roster's look — tattoos, hair, jewelry — doesn't fit the program's image.`,
    choices: [
      { label: "Politely tell them it's not up for debate", effects: { culture: 2, jobSecurity: -2 }, outcome: "The team notices you had their back. Some boosters grumble." },
      { label: "Quietly suggest a cleaner look at team functions", effects: { jobSecurity: 1, culture: -2 }, outcome: "Boosters are pleased. A few players feel policed for no reason." },
    ],
  },
  {
    id: "team_chant_controversy",
    stages: ["coordinator", "headcoach"],
    title: "Chant Controversy",
    text: () => `An opposing team publicly calls out one of your program's pregame chants as disrespectful.`,
    choices: [
      { label: "Retire the chant", effects: { mediaSavvy: 2, culture: -1 }, outcome: "The story dies fast. A few seniors are sad to see a tradition go." },
      { label: "Defend it as harmless tradition", effects: { culture: 2, mediaSavvy: -2 }, outcome: "The locker room appreciates you standing by them. The story lingers a news cycle longer." },
    ],
  },
  {
    id: "dress_code_debate",
    stages: ["headcoach"],
    title: "Travel Dress Code",
    text: () => `Players lobby to swap the coat-and-tie travel uniform for team-branded athleisure.`,
    choices: [
      { label: "Modernize it", effects: { culture: 2, mediaSavvy: 1 }, outcome: "Comfortable, on-brand, and the roster loves it — a couple of old alumni grumble." },
      { label: "Keep the coat and tie", effects: { reputation: 1, culture: -1 }, outcome: "Sharp and traditional. Players see it as an outdated formality." },
    ],
  },
  {
    id: "leadership_council",
    stages: ["headcoach"],
    title: "Leadership Council",
    text: () => `You're considering formalizing a player leadership council with real say in team decisions.`,
    choices: [
      { label: "Create it", effects: { culture: 3, jobSecurity: -1 }, outcome: "Real buy-in — and real pushback when the council disagrees with you." },
      { label: "Keep decisions with the coaching staff", effects: { jobSecurity: 1, culture: -1 }, outcome: "Faster decisions. Some veterans feel unheard." },
    ],
  },
  {
    id: "hazing_rumor_freshman",
    stages: ["position", "coordinator", "headcoach"],
    title: "Initiation Rumors",
    text: () => `You hear whispers of a freshman "initiation" being planned by upperclassmen this week.`,
    choices: [
      { label: "Get ahead of it, ban it outright", effects: { culture: 3, teamTalentDelta: -1 }, outcome: "No incident. A few veterans think you're overreacting to nothing." },
      { label: "Let a light, harmless version happen", effects: { culture: -2, teamTalentDelta: 1 }, outcome: "Team bonding, mostly. It's a fine line you hope no one crosses next time." },
    ],
  },
  {
    id: "captains_vote",
    stages: ["headcoach"],
    title: "Naming Captains",
    text: () => `It's time to name team captains — the roster wants a vote, but you have your own read on who's ready.`,
    choices: [
      { label: "Let the team vote", effects: { culture: 3 }, outcome: "Popular and democratic — though not necessarily who you'd have picked." },
      { label: "Hand-pick the captains yourself", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "You get the leaders you trust. A few players feel the process was rigged." },
    ],
  },
  {
    id: "player_wedding",
    stages: ["position", "coordinator", "headcoach"],
    title: "A Player's Wedding",
    text: () => `A senior asks to miss Friday's walkthrough for his own wedding.`,
    choices: [
      { label: "Give him the day, no questions asked", effects: { culture: 3, teamTalentDelta: -1, weekPowerDelta: -1 }, outcome: "The gesture isn't forgotten by anyone in that locker room." },
      { label: "Ask him to move the date", effects: { teamTalentDelta: 1, culture: -2 }, outcome: "Prep stays on schedule. It's an awkward ask to make of a groom." },
    ],
  },
  {
    id: "transfer_threat",
    stages: ["position", "coordinator", "headcoach"],
    title: "A Backup's Ultimatum",
    text: () => `A frustrated backup tells you privately he'll enter the portal mid-season if his role doesn't change.`,
    choices: [
      { label: "Give him a clear path to more reps", effects: { teamTalentDelta: -1, culture: 1 }, outcome: "He stays, and the room he's competing in gets a little tighter." },
      { label: "Tell him the depth chart is earned, not given", effects: { culture: -1, recruiting: -1 }, outcome: "You hold your ground. He transfers at the end of the year." },
    ],
  },
  {
    id: "player_arrest_minor",
    stages: ["coordinator", "headcoach"],
    title: "Minor Off-Field Incident",
    text: () => `A player is cited for a minor off-field incident over the weekend — embarrassing, not serious.`,
    choices: [
      { label: "Internal discipline, no public statement", effects: { culture: 1, mediaSavvy: -1 }, outcome: "Handled quietly. It leaks anyway, and the silence looks evasive." },
      { label: "Get ahead of it with a public statement", effects: { mediaSavvy: 2, culture: -1 }, outcome: "Transparency plays well externally. The player feels thrown under the bus." },
    ],
  },
  {
    id: "academic_honor_roll",
    stages: ["position", "coordinator", "headcoach"],
    title: "Honor Roll Recognition",
    text: () => `A handful of your players made the academic honor roll — a rare thing to celebrate publicly.`,
    choices: [
      { label: "Make a big deal of it publicly", effects: { mediaSavvy: 2, reputation: 1 }, outcome: "Great look for the program, and the players are visibly proud." },
      { label: "Keep it low-key, recognize them privately", effects: { culture: 1 }, outcome: "A quieter, more personal thank-you that the players still appreciate." },
    ],
  },
  {
    id: "team_prayer_circle",
    stages: ["position", "coordinator", "headcoach"],
    title: "Pregame Prayer",
    text: () => `Most of the team wants a pregame prayer circle; a few players say it makes them uncomfortable.`,
    choices: [
      { label: "Keep it voluntary and off to the side", effects: { culture: 1 }, outcome: "Everyone gets what they need without anyone feeling pressured." },
      { label: "Make it a full-team tradition", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "A powerful bonding moment for most — a quietly uncomfortable one for a few." },
    ],
  },
  {
    id: "music_in_locker_room",
    stages: ["position", "coordinator", "headcoach"],
    title: "Locker Room Playlist",
    text: () => `A dispute breaks out over who controls the pregame locker room music.`,
    choices: [
      { label: "Let the captains curate it", effects: { culture: 2 }, outcome: "One less thing for you to referee, and the room owns its own energy." },
      { label: "Set a rotation yourself", effects: { culture: -1, teamTalentDelta: 1 }, outcome: "Consistent and controlled, if a little joyless." },
    ],
  },
  {
    id: "rookie_hazing_haircuts",
    stages: ["position", "coordinator"],
    title: "Freshman Haircuts",
    text: () => `A long-running tradition has freshmen get comically bad haircuts from the veterans. It's harmless — mostly.`,
    choices: [
      { label: "Let the tradition continue", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "Good-natured fun that brings the room closer together." },
      { label: "End it, no exceptions", effects: { culture: -1, development: 1 }, outcome: "No hurt feelings possible. A little bit of the room's personality goes with it." },
    ],
  },
  {
    id: "senior_leadership_gap",
    stages: ["headcoach"],
    title: "A Quiet Senior Class",
    text: () => `Your senior class is talented but unusually quiet — nobody's stepping up as a vocal leader.`,
    choices: [
      { label: "Appoint an underclassman as an extra captain", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "An unconventional choice that fills the gap — and ruffles a few senior feathers." },
      { label: "Fill the void yourself with more direct talks", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "It works in the short term, but the room never really finds its own voice." },
    ],
  },
  {
    id: "player_podcast",
    stages: ["headcoach"],
    title: "A Player's Podcast",
    text: () => `A player's side podcast airs a segment mildly critical of your playcalling.`,
    choices: [
      { label: "Address it privately, let him keep the podcast", effects: { culture: 1, mediaSavvy: -1 }, outcome: "He appreciates not being silenced. The critique still stings a little." },
      { label: "Ask him to shut it down", effects: { mediaSavvy: 1, culture: -2 }, outcome: "The noise stops. The room notices how you handled dissent." },
    ],
  },
  {
    id: "curfew_extension_request",
    stages: ["coordinator", "headcoach"],
    title: "Curfew on the Road",
    text: () => `Seniors ask for a later curfew on a lower-stakes road trip.`,
    choices: [
      { label: "Grant it", effects: { culture: 2, teamTalentDelta: -1, weekPowerDelta: -1 }, outcome: "Goodwill banked. The team's a little less sharp Saturday morning." },
      { label: "Keep the normal curfew", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Standards held. A few grumbles in the hallway." },
    ],
  },
  {
    id: "locker_stall_assignment",
    stages: ["position"],
    title: "The Corner Locker",
    text: () => `A veteran in your room wants the good corner locker stall reassigned from a well-liked sophomore.`,
    choices: [
      { label: "Respect seniority, make the switch", effects: { culture: 1, teamTalentDelta: -1 }, outcome: "Small thing, handled the old-school way. The sophomore shrugs it off." },
      { label: "Leave the assignments as they are", effects: { culture: -1 }, outcome: "No favoritism shown — and one veteran who feels a little disrespected." },
    ],
  },
  {
    id: "walk_on_scholarship_promise",
    stages: ["headcoach"],
    title: "A Scholarship Promise",
    text: () => `A walk-on who's earned real snaps asks if a scholarship is coming.`,
    choices: [
      { label: "Put him on scholarship now", effects: { culture: 3, recruiting: -1 }, outcome: "A powerful message about what earns a spot here — at a real budget cost." },
      { label: "Tell him to keep proving it", effects: { recruiting: 1, culture: -1 }, outcome: "Fiscally disciplined. He wonders what more he has to do." },
    ],
  },
  {
    id: "film_session_attendance",
    stages: ["position", "coordinator"],
    title: "Extra Film Sessions",
    text: () => `You want to add optional extra film sessions — attendance ends up being anything but even.`,
    choices: [
      { label: "Make it mandatory for everyone", effects: { development: 2, culture: -1 }, outcome: "Everyone's caught up. A few players resent the extra hours." },
      { label: "Keep it optional, reward who shows up", effects: { culture: 1, development: -1 }, outcome: "No resentment, and an uneven level of preparation across the room." },
    ],
  },
  {
    id: "player_charity_foundation",
    stages: ["headcoach"],
    title: "A Star's Foundation",
    text: () => `Your best player asks the program to publicly back a charity foundation he just started.`,
    choices: [
      { label: "Back it publicly", effects: { mediaSavvy: 2, culture: -1 }, outcome: "Great optics for both of you — and a couple of teammates quietly note the favoritism." },
      { label: "Support him privately, keep the program neutral", effects: { culture: 1 }, outcome: "Quieter, and it avoids any appearance of favoritism toward one player's cause." },
    ],
  },
  {
    id: "superstition_ritual",
    stages: ["position", "coordinator", "headcoach"],
    title: "Broken Ritual",
    text: () => `A facility renovation accidentally breaks a beloved pregame superstition — the team is oddly rattled.`,
    choices: [
      { label: "Find a way to bring it back", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "A small, slightly silly fix that visibly settles the room." },
      { label: "Tell them to move on, it's just a ritual", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Logically correct. Emotionally, a few players stay unsettled." },
    ],
  },
  {
    id: "veteran_freshman_mentorship",
    stages: ["position", "coordinator"],
    title: "Mentorship Program",
    text: () => `You're considering formally pairing veterans with freshmen as mentors.`,
    choices: [
      { label: "Start the program", effects: { culture: 2, development: 1, teamTalentDelta: -1 }, outcome: "A slower current season, a stronger pipeline for seasons to come." },
      { label: "Let it happen organically", effects: { teamTalentDelta: 1 }, outcome: "No structure imposed — and some freshmen fall through the cracks." },
    ],
  },
  {
    id: "position_group_rivalry",
    stages: ["position"],
    title: "Friendly Fire",
    text: () => `A lighthearted rivalry between your group and another position group has started turning genuinely heated.`,
    choices: [
      { label: "Cool it down with a joint activity", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "The edge dulls, and so does a little bit of the competitive fire." },
      { label: "Let the competitive fire keep burning", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Sharper practices, and a rivalry that occasionally boils over." },
    ],
  },
  {
    id: "team_gaming_night",
    stages: ["position", "coordinator", "headcoach"],
    title: "Team Bonding Night",
    text: () => `Players propose a team video game tournament night instead of a mandatory study hall session.`,
    choices: [
      { label: "Approve it", effects: { culture: 2, development: -1 }, outcome: "A genuinely fun night that brings the room closer." },
      { label: "Stick with study hall", effects: { development: 1, culture: -1 }, outcome: "Academics protected. A missed chance to just have fun together." },
    ],
  },
  {
    id: "dietary_accommodation",
    stages: ["headcoach"],
    title: "Better Food, Please",
    text: () => `Players petition for an upgraded post-practice meal program.`,
    choices: [
      { label: "Fund the upgrade", effects: { culture: 2, development: 1, jobSecurity: -1 }, outcome: "A real quality-of-life win — funded out of a tight athletic budget." },
      { label: "Keep the current program", effects: { jobSecurity: 1, culture: -1 }, outcome: "Budget-neutral. The grumbling doesn't fully go away." },
    ],
  },

  /* ---- Recruiting & transfer portal ---- */
  {
    id: "crystal_ball_prediction",
    stages: ["coordinator", "headcoach"],
    title: "Recruiting Insiders",
    text: () => `A recruiting analyst publicly predicts your top target is leaning toward a rival — accurate or not, it shapes the room.`,
    choices: [
      { label: "Get the recruit on the phone immediately", effects: { recruiting: 2, mediaSavvy: -1 }, outcome: "You get ahead of the narrative before it hardens into truth." },
      { label: "Ignore the noise, stick to the plan", effects: { recruiting: -1, culture: 1 }, outcome: "Steady and unbothered — and the prediction has a way of becoming self-fulfilling." },
    ],
  },
  {
    id: "official_visit_weekend",
    stages: ["coordinator", "headcoach"],
    title: "Official Visit Weekend",
    text: () => `A loaded official-visit weekend collides with a short, business-focused practice week.`,
    choices: [
      { label: "Go all-out hosting the recruits", effects: { recruiting: 3, teamTalentDelta: -1 }, outcome: "An unforgettable weekend for the visitors — and a distracted practice week." },
      { label: "Keep it low-key, protect the week", effects: { teamTalentDelta: 1, recruiting: -1 }, outcome: "Business as usual. A couple of recruits leave underwhelmed." },
    ],
  },
  {
    id: "decommit_threat",
    stages: ["coordinator", "headcoach"],
    title: "Wavering Commitment",
    text: () => `A committed prospect starts taking calls from other schools again.`,
    choices: [
      { label: "Fly out for a personal visit", effects: { recruiting: 2, jobSecurity: -1 }, outcome: "The full-court press works, at a real cost in time and travel budget." },
      { label: "Respect his process, stay patient", effects: { culture: 1, recruiting: -1 }, outcome: "No pressure applied — and no guarantee he stays committed either." },
    ],
  },
  {
    id: "junior_day_turnout",
    stages: ["coordinator", "headcoach"],
    title: "Junior Day",
    text: () => `Turnout for junior day is lighter than hoped — worth scaling back, or doubling down for next year?`,
    choices: [
      { label: "Invest more in next year's event", effects: { recruiting: 2, jobSecurity: -1 }, outcome: "A bigger swing at building the pipeline, funded out of your own budget ask." },
      { label: "Scale it back, focus on direct visits instead", effects: { recruiting: 1 }, outcome: "Leaner and more targeted, if less of a spectacle." },
    ],
  },
  {
    id: "all_star_game_snub",
    stages: ["coordinator", "headcoach"],
    title: "All-Star Game Snub",
    text: () => `One of your incoming signees gets left off a national all-star game roster — he's furious.`,
    choices: [
      { label: "Publicly back him", effects: { mediaSavvy: 1, recruiting: 1, culture: -1 }, outcome: "He feels seen — and a couple of teammates wonder why he needed the extra attention." },
      { label: "Stay out of it", effects: { recruiting: -1 }, outcome: "Not your fight — and he notices you didn't step in." },
    ],
  },
  {
    id: "camp_evaluation_miss",
    stages: ["coordinator", "headcoach"],
    title: "Camp Evaluation",
    text: () => `A prospect who dominated your summer camp isn't rated highly by recruiting services. Your gut says otherwise.`,
    choices: [
      { label: "Offer him anyway, trust your eyes", effects: { recruiting: 1, development: 1, jobSecurity: -1 }, outcome: "A potential steal — or a swing that doesn't pan out, and it's your name on the evaluation." },
      { label: "Defer to the industry rankings", effects: { recruiting: -1 }, outcome: "Safe and conventional. You may have just let a diamond walk out the door." },
    ],
  },
  {
    id: "in_home_visit_competing_offer",
    stages: ["headcoach"],
    title: "The Living Room Pitch",
    text: () => `You're sitting in a recruit's living room when his phone buzzes with a call from a blue-blood rival.`,
    choices: [
      { label: "Address it head-on, make your closing pitch", effects: { recruiting: 2, mediaSavvy: 1 }, outcome: "Bold and direct. The family respects that you didn't flinch." },
      { label: "Let it go, stay composed and let the visit end naturally", effects: { culture: 1, recruiting: -1 }, outcome: "Composed, but you left something unsaid that might have mattered." },
    ],
  },
  {
    id: "transfer_portal_incoming_role",
    stages: ["coordinator", "headcoach"],
    title: "A Portal Addition's Fit",
    text: () => `A talented transfer wants to run a scheme wrinkle he mastered at his old school.`,
    choices: [
      { label: "Build a package around him", effects: { teamTalentDelta: 2, development: -1 }, outcome: "An immediate weapon — and a wrinkle the rest of the roster doesn't fully own." },
      { label: "Have him fully adopt your system instead", effects: { development: 1, teamTalentDelta: -1 }, outcome: "Consistent scheme identity. It takes him longer to feel like himself on the field." },
    ],
  },
  {
    id: "recruit_camp_counselor_offer",
    stages: ["position", "coordinator"],
    title: "Camp Counselor Duty",
    text: () => `You're asked to spend a week running youth camps instead of your usual self-scouting work.`,
    choices: [
      { label: "Do the camps, build community ties", effects: { recruiting: 1, reputation: 1, development: -1 }, outcome: "Good for the program's grassroots reputation, less time on your own roster." },
      { label: "Skip it, focus on your current players", effects: { development: 1, recruiting: -1 }, outcome: "Your room gets the attention. The camps go on without you." },
    ],
  },
  {
    id: "grayshirt_offer",
    stages: ["headcoach"],
    title: "The Grayshirt Offer",
    text: () => `You're tight on scholarship numbers and considering a grayshirt offer to a mid-tier recruit — enroll later, save a spot now.`,
    choices: [
      { label: "Make the offer, be upfront about it", effects: { recruiting: 1, culture: 1 }, outcome: "Honest and workable. Not every family loves the arrangement, but this one respects it." },
      { label: "Pass, find a cleaner scholarship fit", effects: { recruiting: -1, teamTalentDelta: 1 }, outcome: "Simpler roster math — and a recruit who can actually help you sooner." },
    ],
  },
  {
    id: "recruit_family_financial_need",
    stages: ["coordinator", "headcoach"],
    title: "A Family in Need",
    text: () => `A recruit's family is quietly struggling financially — nothing you can legally offer beyond the scholarship, but you can be present.`,
    choices: [
      { label: "Connect them with legitimate support resources", effects: { culture: 2, recruiting: 1, jobSecurity: -1 }, outcome: "It means everything to that family — and even done by the book, it's the kind of gesture compliance wants documented." },
      { label: "Keep the relationship strictly recruiting-focused", effects: { recruiting: -1 }, outcome: "Clean and cautious. It reads as a little cold to a family going through a hard time." },
    ],
  },
  {
    id: "position_switch_pitch",
    stages: ["coordinator", "headcoach"],
    title: "The Position Switch Pitch",
    text: () => `Your evaluation says a top prospect projects better at a different position than the one he wants to play.`,
    choices: [
      { label: "Sell him on the position switch now", effects: { recruiting: -1, development: 1 }, outcome: "Honest, but a tough sell — some recruits walk away from that conversation." },
      { label: "Recruit him at his preferred spot, sort it out later", effects: { recruiting: 2, culture: -1 }, outcome: "Easier commitment, and an awkward conversation still waiting down the road." },
    ],
  },
  {
    id: "recruiting_coordinator_pitch",
    stages: ["headcoach"],
    title: "Recruiting Coordinator's Big Ask",
    text: () => `Your recruiting coordinator wants a much bigger travel and technology budget to compete with blue bloods.`,
    choices: [
      { label: "Fund it", effects: { recruiting: 2, jobSecurity: -2 }, outcome: "A real investment in the pipeline — and a tougher conversation with the AD about the budget." },
      { label: "Ask for a leaner plan", effects: { jobSecurity: 1, recruiting: -1 }, outcome: "Fiscally responsible. The recruiting department feels under-resourced." },
    ],
  },
  {
    id: "twin_package_deal",
    stages: ["coordinator", "headcoach"],
    title: "The Package Deal",
    text: () => `Twin brothers will only commit as a pair — one's a clear program need, the other's a projected backup at best.`,
    choices: [
      { label: "Take the package deal", effects: { recruiting: 1, teamTalentDelta: 1, culture: -1 }, outcome: "You land the one you needed. A roster spot goes to a depth piece instead of a true need." },
      { label: "Pass and recruit the position separately", effects: { recruiting: -1 }, outcome: "Cleaner roster construction — and you likely lose both to a rival willing to take the deal." },
    ],
  },
  {
    id: "recruit_visits_rival_same_weekend",
    stages: ["coordinator", "headcoach"],
    title: "A Split Weekend",
    text: () => `Your top target is visiting your archrival's campus the same weekend he's supposed to visit yours.`,
    choices: [
      { label: "Move heaven and earth to host him first", effects: { recruiting: 2, jobSecurity: -1 }, outcome: "A scrambled staff calendar, and you get the first and best impression." },
      { label: "Stick to the original schedule", effects: { recruiting: -1 }, outcome: "No scramble — and your rival gets the freshest impression instead." },
    ],
  },
  {
    id: "transfer_portal_outgoing_blessing",
    stages: ["coordinator", "headcoach"],
    title: "Releasing a Player",
    text: () => `A player in the portal asks you to release him from a no-contact restriction so more schools can reach out.`,
    choices: [
      { label: "Release him fully, no restrictions", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "He leaves on the best possible terms — good for your reputation with future transfers." },
      { label: "Keep a short restricted list", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Protects you from a division rival — and strains the exit." },
    ],
  },
  {
    id: "recruit_academic_qualifier_risk",
    stages: ["coordinator", "headcoach"],
    title: "Academic Qualifier Risk",
    text: () => `A talented recruit is a real risk to not qualify academically.`,
    choices: [
      { label: "Hold the scholarship spot for him anyway", effects: { recruiting: 1, culture: 1, teamTalentDelta: -1 }, outcome: "A show of faith — and a roster spot that might not pay off until later." },
      { label: "Offer a safer alternative recruit instead", effects: { teamTalentDelta: 1, recruiting: -1 }, outcome: "Lower ceiling, lower risk." },
    ],
  },
  {
    id: "high_school_coach_relationship",
    stages: ["coordinator", "headcoach"],
    title: "The Gatekeeper Coach",
    text: () => `A powerful high school coach with a talent pipeline wants a token role on your staff in exchange for steering recruits your way.`,
    choices: [
      { label: "Make it work within the rules", effects: { recruiting: 2, mediaSavvy: -1 }, outcome: "The pipeline opens up. It doesn't look great from the outside." },
      { label: "Decline, recruit those players directly instead", effects: { mediaSavvy: 1, recruiting: -1 }, outcome: "Above board, and a harder road to that talent pool." },
    ],
  },
  {
    id: "commitment_ceremony_hat_pick",
    stages: ["coordinator", "headcoach"],
    title: "The Hat Ceremony",
    text: () => `A top recruit invites your staff to his televised commitment ceremony — a big, public swing.`,
    choices: [
      { label: "Send your top assistant to be there in person", effects: { recruiting: 2, jobSecurity: -1 }, outcome: "The personal touch pays off on national television." },
      { label: "Wish him well from afar", effects: { recruiting: -1 }, outcome: "Lower cost, lower reward — and a missed photo opportunity." },
    ],
  },
  {
    id: "recruit_offers_flood",
    stages: ["coordinator", "headcoach"],
    title: "Offer Sheet Strategy",
    text: () => `Your staff debates flooding the board with offers early versus a smaller, more targeted list.`,
    choices: [
      { label: "Offer broadly and see who bites", effects: { recruiting: 2, culture: -1 }, outcome: "More depth in the class — and a few recruits who feel like an afterthought when you pull back." },
      { label: "Offer a short, hand-picked list", effects: { culture: 1, recruiting: -1 }, outcome: "Every offer means something. The class ends up smaller." },
    ],
  },
  {
    id: "portal_tampering_accusation",
    stages: ["headcoach"],
    title: "Tampering Accusation",
    text: () => `A rival coach publicly accuses your staff of improperly contacting one of his players before the portal window opened.`,
    choices: [
      { label: "Deny it and move on", effects: { jobSecurity: 1, mediaSavvy: -1 }, outcome: "You brush it off. Some people believe the smoke means fire." },
      { label: "Invite a compliance review to clear the air", effects: { reputation: 2, jobSecurity: -2 }, outcome: "You come out clean — after an uncomfortable, time-consuming process." },
    ],
  },
  {
    id: "recruit_wants_early_playing_time_data",
    stages: ["coordinator", "headcoach"],
    title: "Show Me the Snap Counts",
    text: () => `A recruit's father wants hard data on freshman snap counts at your position group before committing.`,
    choices: [
      { label: "Give him the honest numbers", effects: { recruiting: -1, culture: 1 }, outcome: "Full transparency. It scares this one off, and it's the reputation that lands the next one." },
      { label: "Speak in generalities instead", effects: { recruiting: 1, culture: -1 }, outcome: "Vaguer, and easier to sell in the moment — the current room notices the soft-pedaling." },
    ],
  },
  {
    id: "combine_testing_numbers",
    stages: ["coordinator", "headcoach"],
    title: "Underwhelming Testing Numbers",
    text: () => `A recruit you love puts up mediocre numbers at a national combine, tanking his rating overnight.`,
    choices: [
      { label: "Stick with your tape evaluation", effects: { recruiting: 1, development: 1, jobSecurity: -1 }, outcome: "Trusting your own scouting over a stopwatch — and it's your credibility on the line if the tape was wrong." },
      { label: "Cool off on him like everyone else", effects: { recruiting: -1 }, outcome: "Following the market. You may be following it right off a good player." },
    ],
  },
  {
    id: "legacy_recruit_pressure",
    stages: ["headcoach"],
    title: "Legacy Recruit",
    text: () => `A booster's son — a marginal talent — wants a scholarship offer purely on legacy grounds.`,
    choices: [
      { label: "Offer him a preferred walk-on spot instead", effects: { jobSecurity: 1, recruiting: -1 }, outcome: "A fair middle ground that mostly satisfies everyone." },
      { label: "Politely decline any offer at all", effects: { culture: 1, jobSecurity: -2 }, outcome: "Your roster integrity stays intact. That booster remembers it, unfavorably." },
    ],
  },
  {
    id: "portal_veteran_culture_fit",
    stages: ["coordinator", "headcoach"],
    title: "Talent vs. Fit",
    text: () => `A highly talented transfer has a reputation for being disruptive in the locker room.`,
    choices: [
      { label: "Take the talent, manage the personality", effects: { teamTalentDelta: 2, culture: -2 }, outcome: "A real upgrade on the field, and a locker room that needs careful handling." },
      { label: "Pass, protect the culture you've built", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "Chemistry stays intact. The position group stays thinner than you'd like." },
    ],
  },
  {
    id: "recruiting_class_ranking_reveal",
    stages: ["headcoach"],
    title: "Class Ranking Day",
    text: () => `National recruiting class rankings drop, and yours lands lower than the fan base expected.`,
    choices: [
      { label: "Get ahead of it publicly, contextualize the class", effects: { mediaSavvy: 2, jobSecurity: -1 }, outcome: "A confident, proactive response calms most of the noise — and now you own the narrative if the class underperforms." },
      { label: "Say nothing, let the results speak later", effects: { culture: 1 }, outcome: "The silence gets filled with fan speculation — and the team stays focused inward instead." },
    ],
  },

  /* ---- Media, administration, boosters & compliance ---- */
  {
    id: "magazine_cover_shoot",
    stages: ["headcoach"],
    title: "Magazine Cover",
    text: () => `A national magazine wants you on the cover of their preseason issue — a full day of shooting during camp.`,
    choices: [
      { label: "Do the shoot", effects: { mediaSavvy: 2, reputation: 1, teamTalentDelta: -1 }, outcome: "Great exposure for the program. Camp loses a full day of your attention." },
      { label: "Decline, stay in camp", effects: { teamTalentDelta: 1, mediaSavvy: -1 }, outcome: "Camp stays the priority. The magazine runs someone else." },
    ],
  },
  {
    id: "podcast_guest_spot",
    stages: ["coordinator", "headcoach"],
    title: "Podcast Invitation",
    text: () => `A popular football podcast wants an hour of unscripted conversation with you.`,
    choices: [
      { label: "Go on and be candid", effects: { mediaSavvy: 3, jobSecurity: -1 }, outcome: "Great listen, real personality — and a few quotes get taken out of context." },
      { label: "Go on but stay guarded", effects: { mediaSavvy: 1 }, outcome: "Safe, professional, forgettable." },
    ],
  },
  {
    id: "radio_show_hot_seat_question",
    stages: ["headcoach"],
    title: "Call-In Radio Show",
    text: () => `A caller on your weekly radio show asks point-blank if you're worried about your job security.`,
    choices: [
      { label: "Answer directly and honestly", effects: { mediaSavvy: 2, jobSecurity: -1 }, outcome: "Refreshing candor — and now it's a headline." },
      { label: "Laugh it off and change the subject", effects: { mediaSavvy: -1 }, outcome: "Deflected, if a little awkwardly." },
    ],
  },
  {
    id: "fan_mail_response",
    stages: ["position", "coordinator", "headcoach"],
    title: "A Kid's Letter",
    text: () => `A young fan mails a heartfelt letter and a hand-drawn picture of the team.`,
    choices: [
      { label: "Write back personally", effects: { mediaSavvy: 1, reputation: 1, development: -1 }, outcome: "A small gesture that means the world to one kid — and costs you an evening." },
      { label: "Have the office send a signed photo instead", effects: { development: 1 }, outcome: "Efficient and still appreciated, if less personal." },
    ],
  },
  {
    id: "conference_realignment_rumor",
    stages: ["headcoach"],
    title: "Realignment Rumors",
    text: () => `Rumors swirl that your conference is about to reshuffle, and reporters keep asking you to react.`,
    choices: [
      { label: "Weigh in publicly with your opinion", effects: { mediaSavvy: 2, jobSecurity: -1 }, outcome: "You're quoted everywhere — including by people who disagree with you." },
      { label: "Stay strictly focused on football", effects: { jobSecurity: 1, mediaSavvy: -1 }, outcome: "Above the fray. Some see it as ducking the question." },
    ],
  },
  {
    id: "tv_deal_travel_burden",
    stages: ["headcoach"],
    title: "TV Deal Travel",
    text: () => `A new conference TV deal means brutal cross-country travel for road games this year.`,
    choices: [
      { label: "Invest extra in recovery and travel logistics", effects: { development: 1, jobSecurity: -1 }, outcome: "The team handles the grind better — and it isn't cheap." },
      { label: "Grind through it as-is", effects: { jobSecurity: 1, teamTalentDelta: -1 }, outcome: "No extra spend. The travel takes a visible physical toll." },
    ],
  },
  {
    id: "booster_private_jet_offer",
    stages: ["headcoach"],
    title: "A Booster's Jet",
    text: () => `A booster offers his private jet for recruiting trips — a major perk with obvious optics questions.`,
    choices: [
      { label: "Accept it, use it within the rules", effects: { recruiting: 2, mediaSavvy: -1 }, outcome: "Faster, more efficient recruiting — and a story waiting to be written about it." },
      { label: "Politely decline", effects: { mediaSavvy: 1, recruiting: -1 }, outcome: "Clean optics, slower travel." },
    ],
  },
  {
    id: "ad_meeting_vision_clash",
    stages: ["headcoach"],
    title: "A Meeting With the AD",
    text: () => `Your athletic director wants the program to chase flashier, more aggressive branding — you're not sure it fits.`,
    choices: [
      { label: "Go along with the AD's vision", effects: { jobSecurity: 2, culture: -1 }, outcome: "Smooth relationship with the boss. It doesn't feel like your program anymore." },
      { label: "Push back and defend your own identity", effects: { culture: 1, jobSecurity: -2 }, outcome: "The program stays true to itself — and the AD remembers the pushback." },
    ],
  },
  {
    id: "nil_collective_demand",
    stages: ["headcoach"],
    title: "NIL Collective Demands",
    text: () => `Your school's NIL collective wants more say in roster decisions in exchange for bigger player payouts.`,
    choices: [
      { label: "Give them a seat at the table", effects: { recruiting: 2, culture: -2 }, outcome: "More resources to compete — and outside voices now shaping your roster." },
      { label: "Keep roster decisions entirely in-house", effects: { culture: 1, recruiting: -1 }, outcome: "Full control retained. The collective quietly redirects its money elsewhere." },
    ],
  },
  {
    id: "stadium_renovation_disruption",
    stages: ["headcoach"],
    title: "Stadium Renovation",
    text: () => `A stadium renovation project will disrupt facility access for most of the season.`,
    choices: [
      { label: "Push through it, embrace the inconvenience", effects: { culture: 1, teamTalentDelta: -1 }, outcome: "A shared hardship the team bonds over, awkward locker rooms and all." },
      { label: "Fight for temporary facility upgrades", effects: { jobSecurity: -1, teamTalentDelta: 1 }, outcome: "A smoother season logistically, funded by political capital spent with the administration." },
    ],
  },
  {
    id: "parking_pass_violation_flag",
    stages: ["headcoach"],
    title: "A Small Compliance Flag",
    text: () => `Compliance flags that a booster gave a few players free stadium parking passes — technically an extra benefit.`,
    choices: [
      { label: "Self-report and correct it", effects: { reputation: 1, jobSecurity: -1 }, outcome: "By the book. Minor embarrassment, no real damage." },
      { label: "Quietly have the booster stop", effects: { jobSecurity: 1, reputation: -1 }, outcome: "No paperwork trail — and no paper trail if it resurfaces later, either." },
    ],
  },
  {
    id: "agent_contact_rumor",
    stages: ["headcoach"],
    title: "Agent Contact Rumor",
    text: () => `You hear a runner for an agent has been sniffing around your roster's top prospects.`,
    choices: [
      { label: "Report it to compliance immediately", effects: { reputation: 2, jobSecurity: -1 }, outcome: "Handled the right way, even though it stirs up an uncomfortable process." },
      { label: "Handle it quietly with a stern warning", effects: { jobSecurity: 1, reputation: -1 }, outcome: "Fast and low-drama — and no official record if it happens again." },
    ],
  },
  {
    id: "gambling_policy_violation",
    stages: ["headcoach"],
    title: "Gambling Policy Concern",
    text: () => `A player admits to placing a small bet on an unrelated sport — against athletic department policy but not point-shaving.`,
    choices: [
      { label: "Report it and follow the formal process", effects: { reputation: 1, teamTalentDelta: -1 }, outcome: "The right call by the book — and a real short-term cost to your roster." },
      { label: "Handle it as an internal teaching moment", effects: { culture: 1, jobSecurity: -1 }, outcome: "A second chance extended — and a policy technically skirted." },
    ],
  },
  {
    id: "conference_media_days_grilling",
    stages: ["headcoach"],
    title: "Media Days Grilling",
    text: () => `At conference media days, reporters pepper you with questions about last year's disappointing finish.`,
    choices: [
      { label: "Own it fully, no excuses", effects: { mediaSavvy: 2, reputation: 1, jobSecurity: -1 }, outcome: "Accountability plays well externally — and it's now the headline the administration has to answer for too." },
      { label: "Pivot hard to this year's optimism", effects: { mediaSavvy: 1, reputation: -1 }, outcome: "Upbeat and forward-looking, if a little tone-deaf to the questions asked." },
    ],
  },
  {
    id: "administration_wants_apology",
    stages: ["headcoach"],
    title: "The Administration Wants an Apology",
    text: () => `After a heated sideline moment goes viral, the administration pressures you to issue a public apology.`,
    choices: [
      { label: "Apologize publicly", effects: { jobSecurity: 1, mediaSavvy: -1 }, outcome: "The story fades fast. It stings to eat it publicly for something minor." },
      { label: "Stand by your reaction", effects: { culture: 1, jobSecurity: -2 }, outcome: "The team respects that you didn't cave. The administration isn't thrilled." },
    ],
  },
  {
    id: "hall_of_fame_alumni_return",
    stages: ["headcoach"],
    title: "A Legend Returns",
    text: () => `A Hall of Fame alumnus wants a prominent role around the program — mostly ceremonial, but he has strong opinions.`,
    choices: [
      { label: "Welcome him in, let him speak to the team", effects: { culture: 2, mediaSavvy: 1, teamTalentDelta: -1 }, outcome: "A powerful link to the program's history — and his unsolicited scheme advice muddies a practice or two." },
      { label: "Keep his role purely ceremonial", effects: { mediaSavvy: 1, culture: -1 }, outcome: "Polite distance maintained. He feels kept at arm's length." },
    ],
  },
  {
    id: "budget_reallocation_pitch",
    stages: ["headcoach"],
    title: "Budget Reallocation",
    text: () => `You have a chance to pitch the administration on reallocating funds from a struggling Olympic sport to football operations.`,
    choices: [
      { label: "Make the pitch", effects: { development: 2, jobSecurity: -2 }, outcome: "You get the resources — and become the villain in another program's budget story." },
      { label: "Don't make waves across athletics", effects: { jobSecurity: 1, development: -1 }, outcome: "Departmental goodwill preserved. Your own budget stays as-is." },
    ],
  },
  {
    id: "governor_photo_op",
    stages: ["headcoach"],
    title: "A Political Photo Op",
    text: () => `A prominent politician wants a photo op with the team after a big win — good exposure, but not without controversy.`,
    choices: [
      { label: "Accept the photo op", effects: { mediaSavvy: 2, culture: -1 }, outcome: "Big exposure — and a chunk of your fan base who wishes football stayed out of it." },
      { label: "Politely decline", effects: { culture: 1, mediaSavvy: -1 }, outcome: "Keeps the program apolitical. A missed opportunity for visibility." },
    ],
  },
  {
    id: "statue_proposal",
    stages: ["headcoach"],
    title: "Statue Proposal",
    text: () => `Boosters propose commissioning a statue of you outside the stadium — while you're still coaching.`,
    choices: [
      { label: "Let them go ahead with it", effects: { mediaSavvy: 2, jobSecurity: -1 }, outcome: "Flattering, and a little premature-feeling to some fans." },
      { label: "Ask them to wait until you're retired", effects: { culture: 1, mediaSavvy: -1 }, outcome: "Humble, and it costs you nothing but a good photo op today." },
    ],
  },
  {
    id: "administration_facility_tour_pr",
    stages: ["headcoach"],
    title: "Donor Facility Tour",
    text: () => `The administration wants you to personally walk a big-money donor through practice to help close a major gift.`,
    choices: [
      { label: "Host the tour personally", effects: { jobSecurity: 1, teamTalentDelta: -1 }, outcome: "The gift closes. Practice runs a little different with an audience." },
      { label: "Delegate it to an assistant", effects: { teamTalentDelta: 1, jobSecurity: -1 }, outcome: "Practice stays normal. The administration notices you didn't show up personally." },
    ],
  },
  {
    id: "local_business_endorsement_deal",
    stages: ["headcoach"],
    title: "Local Endorsement Deal",
    text: () => `A local car dealership offers you a lucrative personal endorsement deal — a truck and a paycheck for a few commercials.`,
    choices: [
      { label: "Take the deal", effects: { mediaSavvy: 2, culture: -1 }, outcome: "Extra income and local fame — and a bit of an eye-roll from a locker room that doesn't get a cut." },
      { label: "Turn it down", effects: { culture: 1 }, outcome: "Keeps things simple. You leave money on the table." },
    ],
  },
  {
    id: "administration_wants_analytics_hire",
    stages: ["headcoach"],
    title: "Analytics Department",
    text: () => `The administration pushes you to hire a full analytics department, whether or not you're sold on it.`,
    choices: [
      { label: "Embrace it fully", effects: { development: 2, jobSecurity: -1 }, outcome: "New tools sharpen decision-making — and it takes real budget and buy-in to make work." },
      { label: "Accept it reluctantly, keep it small", effects: { jobSecurity: 1, development: -1 }, outcome: "Box checked for the administration. The department never quite finds its footing." },
    ],
  },
  {
    id: "beat_reporter_relationship",
    stages: ["headcoach"],
    title: "The Beat Reporter",
    text: () => `Your longtime beat reporter asks for unusually candid off-the-record access this season.`,
    choices: [
      { label: "Grant it, build the relationship", effects: { mediaSavvy: 2, jobSecurity: -1 }, outcome: "Fairer, more informed coverage over time — and more insight into your program out in the world." },
      { label: "Keep all interactions formal and on-record", effects: { jobSecurity: 1, mediaSavvy: -1 }, outcome: "Total control over your message, and a more distant relationship with the press." },
    ],
  },
  {
    id: "administration_scheduling_demand",
    stages: ["headcoach"],
    title: "A Scheduling Demand",
    text: () => `The administration wants a home-and-home series against a marquee rival for the revenue, regardless of the competitive risk.`,
    choices: [
      { label: "Agree to the series", effects: { mediaSavvy: 2, jobSecurity: -1 }, outcome: "Great for the athletic department's bottom line — and your future win totals take on real risk." },
      { label: "Push back on the risk", effects: { jobSecurity: -1, reputation: 1 }, outcome: "Your program's competitive interest is protected. The administration isn't happy about the lost revenue." },
    ],
  },

  /* ---- Game-week & in-game strategy ---- */
  {
    id: "onside_kick_gamble",
    stages: ["headcoach"],
    title: "The Onside Kick Call",
    text: () => `Late-game strategy meeting: do you install a surprise onside kick package for this week's tight matchup?`,
    choices: [
      { label: "Install it, spring the surprise", effects: { development: -1, weekPowerDelta: 4 }, outcome: "A gutsy wrinkle that could flip a close game." },
      { label: "Stick to the standard game plan", effects: { culture: 1 }, outcome: "Steady and predictable — no surprises for your team or theirs." },
    ],
  },
  {
    id: "two_point_philosophy",
    stages: ["headcoach"],
    title: "Two-Point Philosophy",
    text: () => `Analytics suggest going for two far more often than convention says. Do you commit to it this week?`,
    choices: [
      { label: "Commit to the aggressive two-point chart", effects: { development: 1, weekPowerDelta: 3 }, outcome: "The numbers say it's the right call — and it looks bold when it works." },
      { label: "Play it traditional, kick the extra points", effects: { culture: 1, weekPowerDelta: -1 }, outcome: "Conventional and safe, leaving a little expected value on the table." },
    ],
  },
  {
    id: "trick_play_install",
    stages: ["coordinator", "headcoach"],
    title: "Trick Play Install",
    text: () => `Your staff has a flashy trick play ready — high risk, high reward for this week's opponent.`,
    choices: [
      { label: "Install it and call it on the right down", effects: { development: -1, weekPowerDelta: 4 }, outcome: "When it hits, it's a highlight. When it doesn't, it's a headline for the wrong reason." },
      { label: "Save it for a bigger game", effects: { development: 1 }, outcome: "Patient roster management — this week plays it straight." },
    ],
  },
  {
    id: "timeout_management_review",
    stages: ["headcoach"],
    title: "Timeout Management",
    text: () => `Film review shows your staff has been slow and reactive with timeouts in close games.`,
    choices: [
      { label: "Install a strict timeout-usage protocol", effects: { development: 1, weekPowerDelta: 2 }, outcome: "Sharper clock management gives you an edge in tight moments." },
      { label: "Trust gut feel in the moment", effects: { culture: 1 }, outcome: "Flexible, and prone to the same late-game hesitation as before." },
    ],
  },
  {
    id: "replay_challenge_philosophy",
    stages: ["headcoach"],
    title: "Challenge Flag Philosophy",
    text: () => `Your staff debates how aggressively to throw the challenge flag on close calls this week.`,
    choices: [
      { label: "Challenge aggressively", effects: { weekPowerDelta: 2, jobSecurity: -1 }, outcome: "You win a couple of close ones — and burn a timeout when you don't." },
      { label: "Challenge only on near-certainties", effects: { jobSecurity: 1 }, outcome: "Conservative and safe, occasionally leaving a bad call on the field." },
    ],
  },
  {
    id: "halftime_adjustment_pressure",
    stages: ["coordinator", "headcoach"],
    title: "Halftime Adjustments",
    text: () => `You're being pushed to overhaul the game plan at halftime rather than making incremental tweaks.`,
    choices: [
      { label: "Blow it up and adjust aggressively", effects: { development: -1, weekPowerDelta: 3 }, outcome: "A bold reset that can completely change a game's momentum." },
      { label: "Make small, targeted tweaks", effects: { culture: 1, weekPowerDelta: 1 }, outcome: "Steadier, and less disruptive to a plan that mostly worked." },
    ],
  },
  {
    id: "opponent_tendency_scouting",
    stages: ["coordinator", "headcoach"],
    title: "Deep Scouting Dive",
    text: () => `Your analysts found a tendency in this week's opponent's defensive calls — chasing it down means late nights.`,
    choices: [
      { label: "Chase it down fully", effects: { development: -1, weekPowerDelta: 4 }, outcome: "The staff is exhausted, and the edge it creates is real." },
      { label: "Note it, but don't overinvest", effects: { development: 1 }, outcome: "Balanced preparation, a smaller tactical edge." },
    ],
  },
  {
    id: "tempo_change_gameplan",
    stages: ["coordinator", "headcoach"],
    title: "Tempo Decision",
    text: () => `Your staff debates going no-huddle all game to wear down a bigger, more physical opponent.`,
    choices: [
      { label: "Go full no-huddle", effects: { teamTalentDelta: 1, weekPowerDelta: 3 }, outcome: "It taxes their depth, and yours too, by the fourth quarter." },
      { label: "Mix tempo situationally", effects: { culture: 1, weekPowerDelta: 1 }, outcome: "Balanced and sustainable, if less disruptive." },
    ],
  },
  {
    id: "starting_lineup_shakeup",
    stages: ["coordinator", "headcoach"],
    title: "Lineup Shakeup",
    text: () => `Film study suggests a surprising lineup change could exploit this week's matchup.`,
    choices: [
      { label: "Make the change", effects: { culture: -1, weekPowerDelta: 3 }, outcome: "A bold tactical move — and someone's feelings get bruised on the bench." },
      { label: "Stick with the standard lineup", effects: { culture: 1 }, outcome: "Continuity preserved, a possible edge left unused." },
    ],
  },
  {
    id: "short_week_travel_fatigue",
    stages: ["headcoach"],
    title: "Short Week",
    text: () => `A Thursday night game means a short week and heavy travel fatigue.`,
    choices: [
      { label: "Cut practice volume, prioritize rest", effects: { development: -1, weekPowerDelta: 2 }, outcome: "Fresher legs on a short week, at the cost of normal install time." },
      { label: "Keep the normal practice schedule", effects: { weekPowerDelta: -2 }, outcome: "Thorough preparation on tired legs — a real risk on a short week." },
    ],
  },
  {
    id: "special_teams_emphasis",
    stages: ["headcoach"],
    title: "Special Teams Focus",
    text: () => `Special teams has been an afterthought — worth a dedicated emphasis week?`,
    choices: [
      { label: "Devote real practice time to it", effects: { development: -1, weekPowerDelta: 2 }, outcome: "Field position and hidden yardage improve — offense and defense get a little less time." },
      { label: "Keep the usual limited reps", effects: { development: 1 }, outcome: "No trade-off made — and special teams stays a quiet liability." },
    ],
  },
  {
    id: "backup_qb_reps_debate",
    stages: ["coordinator", "headcoach"],
    title: "Backup QB Reps",
    text: () => `Your backup quarterback hasn't taken a live rep in weeks — worth working him in this week just in case?`,
    choices: [
      { label: "Get him meaningful garbage-time reps", effects: { development: 1, weekPowerDelta: -1 }, outcome: "Insurance for the future, a slightly awkward end to a comfortable game." },
      { label: "Keep the starter in throughout", effects: { weekPowerDelta: 1 }, outcome: "Maximizes this week's margin — leaves the backup undercooked for an emergency." },
    ],
  },
  {
    id: "defensive_disguise_install",
    stages: ["coordinator", "headcoach"],
    title: "Coverage Disguises",
    text: () => `Your defensive staff wants to install a heavier package of coverage disguises for a pass-heavy opponent.`,
    choices: [
      { label: "Install the full disguise package", effects: { development: -1, weekPowerDelta: 3 }, outcome: "Confuses the opposing quarterback — if your own guys execute it right." },
      { label: "Keep the coverages simple and sound", effects: { culture: 1 }, outcome: "Fewer mental errors, fewer surprises for the opponent to solve." },
    ],
  },
  {
    id: "field_position_battle",
    stages: ["headcoach"],
    title: "Field Position Philosophy",
    text: () => `Your punter argues for a more conservative, pin-them-deep approach rather than always going for it near midfield.`,
    choices: [
      { label: "Play the field position game", effects: { weekPowerDelta: 2 }, outcome: "A patient, low-variance approach that grinds opponents down." },
      { label: "Stay aggressive, trust the offense", effects: { teamTalentDelta: 1, weekPowerDelta: -1 }, outcome: "Higher variance — thrilling when it hits, costly when it doesn't." },
    ],
  },
  {
    id: "walk_through_intensity",
    stages: ["position", "coordinator", "headcoach"],
    title: "Walkthrough Intensity",
    text: () => `Thursday's walkthrough can be a light mental rep session or a near-full-speed dress rehearsal.`,
    choices: [
      { label: "Run it near full speed", effects: { teamTalentDelta: 1, weekPowerDelta: 1 }, outcome: "Sharper execution Saturday, at a small injury-risk cost." },
      { label: "Keep it a true walkthrough", effects: { development: 1 }, outcome: "Fresh legs, a slightly less polished dress rehearsal." },
    ],
  },
  {
    id: "opposing_qb_pressure_package",
    stages: ["coordinator", "headcoach"],
    title: "Pressure Package",
    text: () => `This week's opposing quarterback struggles under pressure — worth committing to an all-out blitz-heavy plan?`,
    choices: [
      { label: "Commit to heavy pressure all game", effects: { teamTalentDelta: 1, weekPowerDelta: 3 }, outcome: "It rattles him — and it leaves your secondary on an island if it doesn't get home." },
      { label: "Play a more conservative rush plan", effects: { culture: 1 }, outcome: "Sound and unspectacular, low risk of a big play against you." },
    ],
  },
  {
    id: "sideline_temperature_management",
    stages: ["headcoach"],
    title: "Sideline Demeanor",
    text: () => `Your staff notices your sideline intensity is either fueling the team or rattling the young players, depending who you ask.`,
    choices: [
      { label: "Dial up the fire and passion", effects: { teamTalentDelta: 1, culture: -1, weekPowerDelta: 2 }, outcome: "Veterans feed off it. A couple of freshmen visibly tense up." },
      { label: "Stay even-keeled on the sideline", effects: { culture: 1, weekPowerDelta: -1 }, outcome: "A calm, steady presence — some players wish for a spark instead." },
    ],
  },
  {
    id: "practice_squad_scout_team_effort",
    stages: ["position"],
    title: "Scout Team Effort",
    text: () => `Your scout team has been dogging it in practice reps simulating this week's opponent.`,
    choices: [
      { label: "Reward the best scout-teamers with real reps", effects: { culture: 2, development: -1 }, outcome: "Effort spikes immediately — and it costs some structure elsewhere." },
      { label: "Bench the worst offenders from travel", effects: { culture: -1, teamTalentDelta: 1 }, outcome: "A harsh incentive that gets results, and a little resentment." },
    ],
  },
  {
    id: "weather_forecast_adjustment",
    stages: ["headcoach"],
    title: "Bad Weather Forecast",
    text: () => `The forecast for gameday calls for heavy wind and rain — worth reworking the game plan around it?`,
    choices: [
      { label: "Rework the plan around a run-heavy approach", effects: { weekPowerDelta: 2 }, outcome: "A smart, conditions-based adjustment that plays to the elements." },
      { label: "Stick to the original plan and adjust live", effects: { development: 1, weekPowerDelta: -1 }, outcome: "Less prep time spent on a maybe — some fumbling in the actual conditions." },
    ],
  },
  {
    id: "noise_simulation_practice",
    stages: ["position", "coordinator", "headcoach"],
    title: "Simulating Road Noise",
    text: () => `Ahead of a deafening road environment, your staff debates blasting crowd noise all week in practice.`,
    choices: [
      { label: "Blast crowd noise all week", effects: { development: -1, weekPowerDelta: 3 }, outcome: "The team handles the road environment far better than usual." },
      { label: "Practice in a normal, quiet environment", effects: { development: 1, weekPowerDelta: -2 }, outcome: "Efficient practice reps — a rude awakening on gameday." },
    ],
  },
  {
    id: "injury_report_gamesmanship",
    stages: ["headcoach"],
    title: "Injury Report Gamesmanship",
    text: () => `A key player is banged up but probable — do you list him as more questionable than he really is to mess with the opponent's prep?`,
    choices: [
      { label: "Play games with the injury report", effects: { mediaSavvy: -1, weekPowerDelta: 2 }, outcome: "A little gamesmanship muddies the opponent's plan — and it doesn't win you any friends." },
      { label: "Report his status honestly", effects: { reputation: 1 }, outcome: "Straightforward and above board, no tactical edge gained." },
    ],
  },
  {
    id: "late_game_clock_management",
    stages: ["headcoach"],
    title: "Clock Management Drill",
    text: () => `Your staff wants to spend real practice time drilling two-minute and four-minute offense situations.`,
    choices: [
      { label: "Drill it hard this week", effects: { development: -1, weekPowerDelta: 2 }, outcome: "Composure in crunch time — less time spent on the base game plan." },
      { label: "Trust the existing situational package", effects: { development: 1 }, outcome: "No new prep invested — you're relying on what's already installed." },
    ],
  },
  {
    id: "kicker_confidence_slump",
    stages: ["position", "coordinator", "headcoach"],
    title: "A Kicker's Slump",
    text: () => `Your kicker has missed a couple of makeable field goals and is visibly shaken.`,
    choices: [
      { label: "Rebuild his confidence with easy makes in practice", effects: { culture: 2, weekPowerDelta: -1 }, outcome: "His head is back in the right place — it costs a little live-rep time." },
      { label: "Bring in a walk-on to push him", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Healthy competition — or a confidence crisis, depending how he responds." },
    ],
  },
  {
    id: "film_study_homework_load",
    stages: ["position", "coordinator"],
    title: "Film Study Homework",
    text: () => `You're deciding how much extra film homework to assign your unit ahead of a complex opponent.`,
    choices: [
      { label: "Load up the homework", effects: { development: 2, culture: -1, weekPowerDelta: 1 }, outcome: "Sharper eyes on Saturday, a grumbling group by Thursday." },
      { label: "Keep it to the standard packet", effects: { culture: 1 }, outcome: "No extra burden, no extra edge." },
    ],
  },

  /* ---- Player health, wellbeing & coaching staff ---- */
  {
    id: "concussion_protocol_gray_area",
    stages: ["position", "coordinator", "headcoach"],
    title: "A Gray-Area Hit",
    text: () => `A player takes a hit that doesn't trigger the concussion protocol, but something about him looks a little off.`,
    choices: [
      { label: "Pull him and evaluate anyway", effects: { culture: 2, weekPowerDelta: -2 }, outcome: "The cautious call, at a real cost to this week's lineup." },
      { label: "Trust the protocol, keep him in", effects: { weekPowerDelta: 1, culture: -1 }, outcome: "He finishes the game fine — this time." },
    ],
  },
  {
    id: "chronic_pain_management",
    stages: ["position", "coordinator"],
    title: "Playing Through Pain",
    text: () => `A veteran has quietly been playing through nagging chronic pain all season.`,
    choices: [
      { label: "Insist on a real evaluation and rest plan", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "His long-term health comes first — the room loses him for a stretch." },
      { label: "Let him keep playing through it, his call", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "He appreciates the trust in his own judgment. It's a risk you're both taking." },
    ],
  },
  {
    id: "family_emergency_leave",
    stages: ["position", "coordinator", "headcoach"],
    title: "A Family Emergency",
    text: () => `A key starter needs to leave for a family emergency during a critical week of prep.`,
    choices: [
      { label: "Send him home immediately, full support", effects: { culture: 3, weekPowerDelta: -3 }, outcome: "There's no question what matters more — and this week is tougher without him." },
      { label: "Help him manage it remotely so he can stay", effects: { weekPowerDelta: 1, culture: -2 }, outcome: "He stays available for the game. It's an uncomfortable ask of him." },
    ],
  },
  {
    id: "personal_loss_support",
    stages: ["position", "coordinator", "headcoach"],
    title: "Grieving in Silence",
    text: () => `You learn secondhand that a player lost a close family member weeks ago and never told the staff.`,
    choices: [
      { label: "Check in personally, offer real support", effects: { culture: 3, development: -1 }, outcome: "He opens up, and the relationship is stronger for it — the personal time comes out of your coaching hours." },
      { label: "Respect his privacy, don't bring it up", effects: { culture: -1 }, outcome: "You don't intrude — and he's left carrying it alone." },
    ],
  },
  {
    id: "sports_science_sleep_data",
    stages: ["headcoach"],
    title: "Sleep Tracking Data",
    text: () => `Sports science data shows most of the roster is chronically sleep-deprived during the season.`,
    choices: [
      { label: "Push practice start times later", effects: { development: 2, culture: -1 }, outcome: "Better-rested players — and a scheduling headache for everyone around the program." },
      { label: "Leave the schedule as-is", effects: { culture: 1, development: -1 }, outcome: "No disruption to routine — and the fatigue problem doesn't go away." },
    ],
  },
  {
    id: "nutritionist_hire_pitch",
    stages: ["headcoach"],
    title: "A Nutritionist's Pitch",
    text: () => `Your strength staff wants to bring on a full-time sports nutritionist.`,
    choices: [
      { label: "Fund the hire", effects: { development: 2, jobSecurity: -1 }, outcome: "A real long-term investment in the roster's physical ceiling." },
      { label: "Handle nutrition informally, in-house", effects: { jobSecurity: 1, development: -1 }, outcome: "Cheaper, and it leaves real value on the table." },
    ],
  },
  {
    id: "strength_coach_philosophy_clash",
    stages: ["headcoach"],
    title: "Strength Staff Philosophy",
    text: () => `Your strength coach wants a much more aggressive offseason lifting program than your medical staff is comfortable with.`,
    choices: [
      { label: "Back the aggressive program", effects: { teamTalentDelta: 2, culture: -1 }, outcome: "A visibly stronger, faster roster — with a slightly elevated injury risk." },
      { label: "Side with the medical staff's caution", effects: { culture: 1, teamTalentDelta: -1 }, outcome: "A safer offseason, at the cost of some physical development." },
    ],
  },
  {
    id: "assistant_coach_burnout",
    stages: ["headcoach"],
    title: "Staff Burnout",
    text: () => `One of your assistants is clearly running on empty after a grueling recruiting stretch.`,
    choices: [
      { label: "Force him to take a few days off", effects: { culture: 2, development: -1 }, outcome: "He comes back sharper. The work doesn't do itself while he's gone." },
      { label: "Push through, the season doesn't stop", effects: { development: 1, culture: -2 }, outcome: "No time lost — and a staff member closer to snapping." },
    ],
  },
  {
    id: "graduate_assistant_promotion",
    stages: ["headcoach"],
    title: "A GA Deserves More",
    text: () => `A graduate assistant has quietly been doing far more than his title suggests.`,
    choices: [
      { label: "Promote him to a full assistant role", effects: { development: 1, jobSecurity: -1 }, outcome: "Loyalty rewarded, and it takes budget wrangling to make happen." },
      { label: "Keep the org chart as-is for now", effects: { jobSecurity: 1, development: -1 }, outcome: "Budget-neutral, and a talented young coach quietly starts looking elsewhere." },
    ],
  },
  {
    id: "coordinator_playcalling_dispute",
    stages: ["headcoach"],
    title: "Who Calls the Plays?",
    text: () => `Your coordinator wants full autonomy on playcalling — you've historically liked having input.`,
    choices: [
      { label: "Hand over full control", effects: { culture: 1, jobSecurity: -1 }, outcome: "He thrives with the trust — and if it goes wrong, it's squarely on him." },
      { label: "Keep a hand in the process", effects: { jobSecurity: 1, culture: -1 }, outcome: "You stay involved, and he feels a little undercut." },
    ],
  },
  {
    id: "position_coach_advocacy",
    stages: ["position"],
    title: "Advocating for Your Guys",
    text: () => `You believe two of your players deserve more playing time than the coordinator is giving them.`,
    choices: [
      { label: "Push hard for it in the staff meeting", effects: { reputation: 1, jobSecurity: -1 }, outcome: "Your guys get a longer look — and you've spent some staff-meeting capital." },
      { label: "Let the coordinator's plan stand", effects: { jobSecurity: 1, reputation: -1 }, outcome: "No friction created, and your room feels a little unheard." },
    ],
  },
  {
    id: "analyst_hire_offer",
    stages: ["headcoach"],
    title: "A Rising Analyst",
    text: () => `A sharp young analyst from another program wants a shot on your staff, cheap.`,
    choices: [
      { label: "Hire him", effects: { development: 1, jobSecurity: -1 }, outcome: "Fresh energy and new ideas, at a small but real cost to squeeze into the budget." },
      { label: "Pass, staff is full", effects: { jobSecurity: 1 }, outcome: "No new hire, no new headache." },
    ],
  },
  {
    id: "team_doctor_second_opinion",
    stages: ["position", "coordinator", "headcoach"],
    title: "A Second Opinion",
    text: () => `A player's family wants an outside doctor's opinion on his injury timeline, different from your team physician's.`,
    choices: [
      { label: "Support the second opinion", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "The family feels heard, and the return timeline may end up more conservative." },
      { label: "Trust your own medical staff's read", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Consistent internal process — and a family that feels brushed off." },
    ],
  },
  {
    id: "player_weight_management_pressure",
    stages: ["position", "coordinator"],
    title: "Weight Management",
    text: () => `A lineman is being pushed hard on a weight target that's starting to affect his mood and energy.`,
    choices: [
      { label: "Ease off, prioritize how he actually performs", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "A healthier, happier player who might not hit the ideal number on paper." },
      { label: "Hold the line on the target", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "The number gets hit. It's a rough stretch to get there." },
    ],
  },
  {
    id: "sideline_medical_staff_conflict",
    stages: ["headcoach"],
    title: "Medical Staff Independence",
    text: () => `Your team doctor wants full, unquestioned final say on all return-to-play decisions, even over staff pressure.`,
    choices: [
      { label: "Give the medical staff full authority", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "Player safety is never in question again — and you occasionally lose a guy you needed." },
      { label: "Keep some coaching input in tough calls", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "More flexibility in close calls, and a doctor who feels overruled sometimes." },
    ],
  },
  {
    id: "player_therapy_stigma",
    stages: ["position", "coordinator", "headcoach"],
    title: "Breaking the Stigma",
    text: () => `You want to normalize players seeing the team's sports psychologist, but there's a real stigma around it in the room.`,
    choices: [
      { label: "Talk about it openly with the whole team", effects: { culture: 3, teamTalentDelta: -1 }, outcome: "The stigma cracks and a few more players quietly start using the resource — the meeting eats into practice time." },
      { label: "Let players seek it out privately", effects: { culture: 1 }, outcome: "No pressure applied, and the stigma lingers a little longer." },
    ],
  },
  {
    id: "staff_scouting_trip_conflict",
    stages: ["headcoach"],
    title: "Scouting Trip Assignments",
    text: () => `Two assistants both want the same high-profile scouting trip.`,
    choices: [
      { label: "Send your most experienced assistant", effects: { development: 1, culture: -1 }, outcome: "The safe, proven choice. The passed-over assistant feels stuck in place." },
      { label: "Give the up-and-comer the opportunity", effects: { culture: 1, development: -1 }, outcome: "A development opportunity for a rising coach — a slightly less polished report." },
    ],
  },
  {
    id: "player_offseason_job_conflict",
    stages: ["position", "coordinator"],
    title: "A Player's Side Job",
    text: () => `A player's part-time job is eating into voluntary offseason workout time.`,
    choices: [
      { label: "Work around his schedule", effects: { culture: 2, development: -1 }, outcome: "He appreciates the flexibility. His development lags the group slightly." },
      { label: "Ask him to prioritize the program", effects: { development: 1, culture: -1 }, outcome: "He falls in line with the group — money's tighter for him this offseason." },
    ],
  },
  {
    id: "staff_holiday_scheduling",
    stages: ["headcoach"],
    title: "Holiday Scheduling",
    text: () => `Recruiting season collides with the holidays, and your staff is worn thin.`,
    choices: [
      { label: "Give the staff real time off with family", effects: { culture: 2, recruiting: -1 }, outcome: "A more loyal, less burned-out staff walks into the new year." },
      { label: "Keep grinding through the holidays", effects: { recruiting: 1, culture: -2 }, outcome: "The recruiting board stays hot — the staff pays for it personally." },
    ],
  },
  {
    id: "player_offseason_transformation",
    stages: ["position", "coordinator"],
    title: "The Offseason Transformation",
    text: () => `A player shows up to summer camp dramatically changed physically — a real breakout, or a red flag worth asking about?`,
    choices: [
      { label: "Ask direct questions about how he did it", effects: { culture: 1, teamTalentDelta: -1 }, outcome: "Uncomfortable but responsible — and it turns out to be legitimate hard work." },
      { label: "Just celebrate the results", effects: { teamTalentDelta: 1 }, outcome: "Momentum and confidence for him — no questions asked either way." },
    ],
  },

  /* ---- Season milestones, career moments & rivalries ---- */
  {
    id: "homecoming_atmosphere",
    stages: ["position", "coordinator", "headcoach"],
    title: "Homecoming Distractions",
    text: () => `Homecoming week brings parades, alumni events, and a campus-wide party atmosphere.`,
    choices: [
      { label: "Shield the team from most of it", effects: { teamTalentDelta: 1, mediaSavvy: -1, weekPowerDelta: 1 }, outcome: "Business as usual on the field — a few alumni events feel snubbed." },
      { label: "Let the team soak in the atmosphere", effects: { mediaSavvy: 1, weekPowerDelta: -2 }, outcome: "A memorable week for everyone — and a noticeably distracted Saturday." },
    ],
  },
  {
    id: "military_appreciation_game",
    stages: ["headcoach"],
    title: "Military Appreciation Game",
    text: () => `A military appreciation game means camouflage uniforms, flyovers, and a packed pregame schedule.`,
    choices: [
      { label: "Fully embrace the ceremony", effects: { mediaSavvy: 2, weekPowerDelta: -1 }, outcome: "A powerful, moving pregame — and a compressed normal routine." },
      { label: "Keep the ceremony brief, protect the routine", effects: { weekPowerDelta: 1, mediaSavvy: -1 }, outcome: "Business as usual, and a lower-key tribute than some hoped for." },
    ],
  },
  {
    id: "throwback_jersey_reveal",
    stages: ["headcoach"],
    title: "Throwback Jerseys",
    text: () => `The administration wants to debut flashy throwback uniforms this week for a big TV audience.`,
    choices: [
      { label: "Wear them proudly", effects: { mediaSavvy: 2, recruiting: 1 }, outcome: "A viral uniform moment that recruits notice." },
      { label: "Stick with the standard uniforms", effects: { culture: 1, mediaSavvy: -1 }, outcome: "No distraction, no viral moment either." },
    ],
  },
  {
    id: "jersey_retirement_ceremony",
    stages: ["headcoach"],
    title: "Retiring a Number",
    text: () => `The athletic department wants to retire a legendary alumnus's number at your next home game.`,
    choices: [
      { label: "Host a full pregame ceremony", effects: { mediaSavvy: 2, reputation: 1, weekPowerDelta: -1 }, outcome: "A beautiful tribute to program history, with a slightly shortened warmup." },
      { label: "Keep it brief, a simple halftime nod", effects: { weekPowerDelta: 1, mediaSavvy: -1 }, outcome: "Efficient, and the moment feels smaller than it could have." },
    ],
  },
  {
    id: "spring_game_intensity",
    stages: ["headcoach"],
    title: "Spring Game Intensity",
    text: () => `Fans want a hard-hitting spring game showcase; your medical staff wants a scripted, low-contact scrimmage.`,
    choices: [
      { label: "Give the fans a real showcase", effects: { mediaSavvy: 1, teamTalentDelta: -1 }, outcome: "An exciting spring game — and a slightly elevated injury risk for a game that doesn't count." },
      { label: "Keep it scripted and low-risk", effects: { teamTalentDelta: 1, mediaSavvy: -1 }, outcome: "Nobody gets hurt in a meaningless game — and the crowd leaves a little underwhelmed." },
    ],
  },
  {
    id: "voluntary_workout_attendance",
    stages: ["headcoach"],
    title: "\"Voluntary\" Workouts",
    text: () => `NCAA rules call summer workouts voluntary — everyone knows they aren't, really. How hard do you lean on attendance?`,
    choices: [
      { label: "Make clear attendance is expected", effects: { teamTalentDelta: 2, culture: -1 }, outcome: "A more prepared roster in the fall, and a program that plays a little loose with the spirit of the rule." },
      { label: "Genuinely respect it as voluntary", effects: { culture: 1, teamTalentDelta: -1 }, outcome: "Above board, and attendance is noticeably spottier." },
    ],
  },
  {
    id: "nfl_interview_request",
    stages: ["headcoach"],
    title: "An NFL Team Calls",
    text: () => `An NFL franchise asks for permission to interview you for a coordinator job during the season.`,
    choices: [
      { label: "Grant the interview", effects: { reputation: 2, jobSecurity: -2 }, outcome: "Great for your résumé — and it visibly rattles the fan base and locker room." },
      { label: "Decline until the season ends", effects: { culture: 1, reputation: -1 }, outcome: "Full focus stays on the team. The NFL opportunity may not wait." },
    ],
  },
  {
    id: "tv_analyst_offer",
    stages: ["headcoach"],
    title: "A Broadcast Booth Offer",
    text: () => `A network offers you a paid guest-analyst spot during your bye week.`,
    choices: [
      { label: "Take the spot", effects: { mediaSavvy: 2, teamTalentDelta: -1 }, outcome: "Great exposure on a Saturday your team wasn't playing anyway — with a little less bye-week focus on your own roster." },
      { label: "Spend the bye week entirely on your own team", effects: { teamTalentDelta: 1, mediaSavvy: -1 }, outcome: "Full attention on self-scouting and rest. The TV offer goes to someone else." },
    ],
  },
  {
    id: "book_deal_offer",
    stages: ["headcoach"],
    title: "A Book Deal",
    text: () => `A publisher offers you a book deal about your coaching philosophy — a nice payday, but a real time commitment.`,
    choices: [
      { label: "Sign the deal", effects: { mediaSavvy: 2, jobSecurity: -1 }, outcome: "Your name and philosophy reach a wider audience, on top of an already full plate." },
      { label: "Pass for now", effects: { jobSecurity: 1 }, outcome: "One less thing on your plate. The opportunity may not come around twice." },
    ],
  },
  {
    id: "alma_mater_job_opening",
    stages: ["headcoach"],
    title: "Your Alma Mater Calls",
    text: () => `Your college alma mater has an opening and reaches out to gauge your interest, off the record.`,
    choices: [
      { label: "Take the call, explore it quietly", effects: { reputation: 1, jobSecurity: -2 }, outcome: "Flattering and tempting — and if word gets out, it looks like one foot out the door." },
      { label: "Politely decline any conversation", effects: { culture: 1, jobSecurity: 1 }, outcome: "Total commitment signaled to your current team, whatever the alma mater thinks." },
    ],
  },
  {
    id: "rival_coach_handshake_snub",
    stages: ["headcoach"],
    title: "The Handshake Snub",
    text: () => `After a hard-fought rivalry win, the opposing coach barely acknowledges your postgame handshake.`,
    choices: [
      { label: "Let it go publicly, take the high road", effects: { reputation: 1, mediaSavvy: 1 }, outcome: "Classy and above it. The story fades in a day." },
      { label: "Call it out to the media", effects: { mediaSavvy: -1, culture: 1 }, outcome: "The team loves that you had their back. It keeps the story alive an extra news cycle." },
    ],
  },
  {
    id: "former_player_on_rival_staff",
    stages: ["headcoach"],
    title: "A Former Player, Now the Enemy",
    text: () => `One of your former star players is now an assistant on this week's rival staff, using inside knowledge of your program.`,
    choices: [
      { label: "Overhaul your signals and tendencies", effects: { development: -1, weekPowerDelta: 3 }, outcome: "Extra prep neutralizes his inside knowledge." },
      { label: "Trust your players to execute regardless", effects: { culture: 1, weekPowerDelta: -1 }, outcome: "No wasted prep time — and his insight might cost you a step." },
    ],
  },
  {
    id: "walk_on_beats_five_star",
    stages: ["position", "coordinator", "headcoach"],
    title: "The Upset in Your Own Room",
    text: () => `A former walk-on has genuinely beaten out a five-star recruit for the starting job in practice.`,
    choices: [
      { label: "Start the walk-on, earn it fairly", effects: { culture: 3, recruiting: -1 }, outcome: "A powerful, program-defining story — and a five-star recruit class that hears about it." },
      { label: "Give the five-star more chances to reclaim it", effects: { recruiting: 1, culture: -2 }, outcome: "Protects the investment in the recruit — and the room sees through it." },
    ],
  },
  {
    id: "rivalry_trophy_tradition",
    stages: ["headcoach"],
    title: "The Rivalry Trophy",
    text: () => `Your rivalry trophy has been damaged in transit — a chance to either quietly fix it or make a bigger deal of the mishap.`,
    choices: [
      { label: "Quietly get it repaired", effects: { culture: 1 }, outcome: "Handled with no fuss, tradition intact." },
      { label: "Have some fun with it publicly", effects: { mediaSavvy: 2, culture: -1 }, outcome: "A lighthearted moment fans enjoy — the rival program is less amused." },
    ],
  },
  {
    id: "extreme_heat_policy",
    stages: ["headcoach"],
    title: "Extreme Heat Advisory",
    text: () => `A heat advisory hits during a critical week of camp — push through or scale back?`,
    choices: [
      { label: "Scale back to protect player safety", effects: { culture: 2, teamTalentDelta: -1 }, outcome: "No one gets hurt. Install time is lost during a critical stretch." },
      { label: "Push through with extra hydration breaks", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Install stays on schedule — and it's a real risk in dangerous conditions." },
    ],
  },
  {
    id: "hurricane_game_relocation",
    stages: ["headcoach"],
    title: "Storm Relocation",
    text: () => `A hurricane forces your home game to relocate on short notice, disrupting the whole week.`,
    choices: [
      { label: "Keep the team's routine as normal as possible", effects: { culture: 2, weekPowerDelta: -1 }, outcome: "A calm, steady response to real chaos around them." },
      { label: "Treat it as an adventure, embrace the chaos", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "A memorable, loose week — and a little less structure than usual." },
    ],
  },
  {
    id: "lightning_delay_composure",
    stages: ["headcoach"],
    title: "Lightning Delay",
    text: () => `A long lightning delay mid-game forces both teams into an awkward, hours-long holding pattern.`,
    choices: [
      { label: "Keep the team loose with games and film", effects: { weekPowerDelta: 2 }, outcome: "Momentum and focus survive the delay surprisingly well." },
      { label: "Keep it all business, re-run the game plan", effects: { development: 1, weekPowerDelta: -1 }, outcome: "Thorough, and the extended wait saps some energy anyway." },
    ],
  },
  {
    id: "senior_night_starters_decision",
    stages: ["headcoach"],
    title: "Senior Night Starts",
    text: () => `Tradition says every senior starts on senior night, win or lose — even over a hot underclassman.`,
    choices: [
      { label: "Honor the senior-night tradition", effects: { culture: 3, teamTalentDelta: -1 }, outcome: "An emotional night the seniors never forget." },
      { label: "Start your best lineup regardless", effects: { teamTalentDelta: 1, culture: -2 }, outcome: "Competitively sound — and it stings for the seniors who expected the nod." },
    ],
  },
  {
    id: "milestone_win_contract_leverage",
    stages: ["headcoach"],
    title: "Milestone Win Leverage",
    text: () => `A milestone win (your 50th, 100th, a big rivalry streak) puts you in a strong position to ask for a raise.`,
    choices: [
      { label: "Use the moment, ask for a raise", effects: { jobSecurity: 3, reputation: -1 }, outcome: "You cash in on the moment — some see the timing as opportunistic." },
      { label: "Let the moment be about the team", effects: { culture: 2 }, outcome: "The milestone stays about the players. You leave money on the table for now." },
    ],
  },
  {
    id: "signature_win_aftermath",
    stages: ["headcoach"],
    title: "The Signature Win",
    text: () => `A stunning upset of a top-ranked team has the whole program buzzing — worth savoring, or dangerous to dwell on?`,
    choices: [
      { label: "Let the team enjoy the moment fully", effects: { culture: 2, weekPowerDelta: -2 }, outcome: "A well-earned celebration — and a real letdown risk the following week." },
      { label: "Move on to next week immediately", effects: { weekPowerDelta: 2, culture: -1 }, outcome: "No letdown game — and a moment that maybe deserved a bit more enjoyment." },
    ],
  },
  {
    id: "blowout_loss_response",
    stages: ["headcoach"],
    title: "After the Blowout",
    text: () => `A lopsided loss has the fan base and administration looking for a response.`,
    choices: [
      { label: "Hold an open, honest team meeting", effects: { culture: 3 }, outcome: "The room clears the air — an uncomfortable but healthy conversation." },
      { label: "Move on quickly, don't dwell", effects: { weekPowerDelta: 1, culture: -1 }, outcome: "Fast turnaround focus — and some unresolved tension underneath." },
    ],
  },
  {
    id: "winning_streak_pressure",
    stages: ["headcoach"],
    title: "Riding a Streak",
    text: () => `A long winning streak has brought outsized national attention and pressure to keep it going.`,
    choices: [
      { label: "Address the streak head-on with the team", effects: { culture: 1, weekPowerDelta: -1 }, outcome: "Naming the pressure takes some of its power away — and makes it very real in the room for a moment." },
      { label: "Pretend the streak doesn't exist", effects: { weekPowerDelta: 2 }, outcome: "A studied nonchalance that keeps everyone loose and playing free." },
    ],
  },
  {
    id: "final_home_game_emotion",
    stages: ["headcoach"],
    title: "The Last Home Game",
    text: () => `It's the final home game for a legendary senior class that changed the program's trajectory.`,
    choices: [
      { label: "Build the whole week around honoring them", effects: { culture: 3, weekPowerDelta: -1 }, outcome: "A fitting, emotional send-off for a class that earned it." },
      { label: "Keep the week focused strictly on the game plan", effects: { weekPowerDelta: 1, culture: -1 }, outcome: "All business — and a quieter goodbye than that class deserved." },
    ],
  },
  {
    id: "administration_survey_feedback",
    stages: ["headcoach"],
    title: "End-of-Season Survey",
    text: () => `The athletic department's anonymous player survey comes back with some pointed feedback about your program.`,
    choices: [
      { label: "Address the feedback openly with the team", effects: { culture: 3, jobSecurity: -1 }, outcome: "Real accountability that the roster respects, even when it's uncomfortable to hear." },
      { label: "Dismiss it as the usual grumbling", effects: { jobSecurity: 1, culture: -2 }, outcome: "No immediate fallout — and the same issues are likely to resurface next year." },
    ],
  },

  /* ---- More room-level moments (position coach heavy) ---- */
  {
    id: "technique_flaw_discovery",
    stages: ["position"],
    title: "A Technique Flaw",
    text: () => `You spot a fundamental technique flaw in your best player's game that's gone unnoticed for years.`,
    choices: [
      { label: "Rebuild the technique from scratch now", effects: { development: 2, teamTalentDelta: -1 }, outcome: "A better player by season's end — a rockier few weeks getting there." },
      { label: "Leave it alone, don't fix what's working", effects: { teamTalentDelta: 1, development: -1 }, outcome: "No short-term risk, and a ceiling that stays exactly where it is." },
    ],
  },
  {
    id: "silent_leader_recognition",
    stages: ["position"],
    title: "The Quiet Leader",
    text: () => `A quiet, unassuming player in your room turns out to be the emotional glue holding it together.`,
    choices: [
      { label: "Publicly recognize his leadership", effects: { mediaSavvy: 1, culture: -1 }, outcome: "He's genuinely embarrassed by the spotlight, even as the room respects the callout." },
      { label: "Let him keep leading quietly", effects: { culture: 2 }, outcome: "You respect his style, and it pays off in a quieter, more authentic way." },
    ],
  },
  {
    id: "position_room_meeting_length",
    stages: ["position"],
    title: "Meeting Length Debate",
    text: () => `Your position room is split — some want longer, more detailed film sessions, others want them tightened up.`,
    choices: [
      { label: "Extend the sessions", effects: { development: 2, culture: -1 }, outcome: "Deeper understanding of the playbook, and a room that's tired of sitting in a dark room." },
      { label: "Keep them short and focused", effects: { culture: 1, development: -1 }, outcome: "A room that stays fresh, at the cost of some finer detail." },
    ],
  },
  {
    id: "cross_training_request",
    stages: ["position"],
    title: "Cross-Training Request",
    text: () => `A versatile player in your room asks to cross-train at a second position to boost his draft stock.`,
    choices: [
      { label: "Support the cross-training", effects: { development: 1, teamTalentDelta: -1 }, outcome: "A player-first move that costs your room some specialization this season." },
      { label: "Ask him to stay focused on one position", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Your room stays sharp — he feels his future got a little less say." },
    ],
  },
  {
    id: "unofficial_position_battle_leak",
    stages: ["position"],
    title: "A Leaked Depth Chart",
    text: () => `An unofficial depth chart for your position group leaks online before you've told the players.`,
    choices: [
      { label: "Get ahead of it, tell the room the truth immediately", effects: { culture: 2, mediaSavvy: -1 }, outcome: "Honesty preserved with your players, awkward timing with the leak." },
      { label: "Stick to your normal timeline for the announcement", effects: { mediaSavvy: 1, culture: -1 }, outcome: "Process respected — and a couple of players heard it online first." },
    ],
  },
  {
    id: "sideline_communication_breakdown",
    stages: ["position", "coordinator"],
    title: "Sideline Miscommunication",
    text: () => `A communication breakdown between you and the coordinator caused a blown assignment last week.`,
    choices: [
      { label: "Own the mistake publicly in the meeting", effects: { culture: 2, reputation: -1 }, outcome: "Accountability that the room respects, even if it's a hit to your own standing." },
      { label: "Quietly fix the process without dwelling on blame", effects: { development: 1 }, outcome: "The fix happens either way — and nobody has to feel singled out." },
    ],
  },
  {
    id: "recruiting_visit_room_tour",
    stages: ["position"],
    title: "Showing Off Your Room",
    text: () => `A recruiting visit puts a five-star prospect in your position room for an hour — a chance to sell your development track record.`,
    choices: [
      { label: "Give him the full, honest pitch", effects: { recruiting: 1, culture: 1, development: -1 }, outcome: "Genuine and specific, the kind of pitch that sticks with a recruit — at the cost of an hour you'd planned to spend with your current room." },
      { label: "Let the head coach's pitch do the heavy lifting", effects: { recruiting: -1 }, outcome: "Less effort from you, and a slightly less personal impression left behind." },
    ],
  },
  {
    id: "veteran_skips_voluntary_lift",
    stages: ["position"],
    title: "Skipping the Voluntary Lift",
    text: () => `A proven veteran in your room has been skipping voluntary weight room sessions all offseason.`,
    choices: [
      { label: "Call him out directly, one-on-one", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "A direct conversation that gets him back in the building — and creates a little friction between you." },
      { label: "Let his production speak for itself", effects: { culture: 1 }, outcome: "No confrontation, relationship intact — and a standard the rest of the room notices isn't enforced evenly." },
    ],
  },
  {
    id: "game_ball_decision",
    stages: ["position", "coordinator", "headcoach"],
    title: "Who Gets the Game Ball",
    text: () => `After a hard-fought win, it's time to decide who gets the game ball — the flashy stat-sheet star, or the unsung grinder.`,
    choices: [
      { label: "Give it to the unsung grinder", effects: { culture: 3 }, outcome: "A message that effort and sacrifice get seen, not just box scores." },
      { label: "Give it to the statistical standout", effects: { mediaSavvy: 1, culture: -1 }, outcome: "The obvious, crowd-pleasing choice — and the quiet grinder notices being passed over again." },
    ],
  },
  {
    id: "assistant_wants_credit",
    stages: ["position", "coordinator"],
    title: "Wanting Credit",
    text: () => `A wrinkle you designed gets attributed to the head coach in postgame interviews.`,
    choices: [
      { label: "Let it go, it's a team effort", effects: { culture: 1, reputation: -1 }, outcome: "Selfless, and your own profile grows a little slower for it." },
      { label: "Mention your role next time you're asked", effects: { reputation: 1, culture: -1 }, outcome: "Your name gets attached to the work — and it can read as chasing credit." },
    ],
  },
  {
    id: "youth_camp_prospect_spotted",
    stages: ["position"],
    title: "A Diamond at Camp",
    text: () => `Running a youth camp, you spot a raw, ungraded kid with real physical tools nobody else has noticed yet.`,
    choices: [
      { label: "Flag him to the recruiting staff immediately", effects: { recruiting: 2, development: -1 }, outcome: "A potential future steal for the program, if the follow-up happens right." },
      { label: "File it away for later, focus on the camp", effects: { development: 1 }, outcome: "The camp runs smoothly — the lead might go cold before anyone circles back." },
    ],
  },
  {
    id: "position_group_captain_pick",
    stages: ["position"],
    title: "Naming Your Room's Leader",
    text: () => `You get to designate an informal team leader from within your own position group.`,
    choices: [
      { label: "Pick the most vocal, energetic player", effects: { teamTalentDelta: 1, culture: -1 }, outcome: "Instant energy in the room — and a couple of quieter leaders feel overlooked." },
      { label: "Pick the most consistent, steady player", effects: { culture: 2 }, outcome: "A steady hand the room trusts, if a little low-key for some tastes." },
    ],
  },
];
