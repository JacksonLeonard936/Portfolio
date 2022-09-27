import steam_site from "./steam_site.png";
import pong_screenshot from "./pong_screenshot.png"
import messenger_logo from "./messenger_logo.png"

let resumeData = {
    "imagebaseurl":"https://rbhatia46.github.io/",
    "name": "Jackson Leonard",
    "role": "Student Developer",
    "linkedinId":"Your LinkedIn Id",
    "skypeid": "Your skypeid",
    "roleDescription": "",
    "socialLinks":[
        {
          "name":"github",
          "url":"https://github.com/JacksonLeonard936",
          "className":"fa fa-github"
        },
      ],
    "aboutme":"I'm a senior at CHS whos *something about liking programming*. I've been doing different coding projects since I was in elementary school, and I still have a passion for it. ",
    "address":"United States",
    "website":"https://github.com/JacksonLeonard936",
    "education":[
      {
        "UniversityName":"Clayton High School",
        "specialization":"",
        "MonthOfPassing":"May",
        "YearOfPassing":"2023",
        "Achievements":"Many"
      },
    ],
    "work":[
      {
        "CompanyName":"Some Company",
        "specialization":"Some specialization",
        "MonthOfLeaving":"Jan",
        "YearOfLeaving":"2018",
        "Achievements":"Some Achievements"
      },
      {
        "CompanyName":"Some Company",
        "specialization":"Some specialization",
        "MonthOfLeaving":"Jan",
        "YearOfLeaving":"2018",
        "Achievements":"Some Achievements"
      }
    ],
    "skillsDescription":"Your skills here",
    "skills":[
      {
        "skillname":"Python"
      },
      {
        "skillname":"Java"
      },
      {
        "skillname":"Reactjs"
      }
    ],
    "portfolio":[
      {
        "name":"Tic Tac Toe",
        "description":"Created online multiplayer application for individuals to play tic-tac-toe with their friends. Can be scaled to a variety of different games (similar to Steam).",
        "image":steam_site
      },
      {
        "name":"Real time chat",
        "description":"Creating an online chatting platform where users can create accounts and chat with their friends in real time. Built backend using Django and frontend using React.",
        "image":messenger_logo
      },
      {
        "name":"Pong",
        "description":"Built a 2-player pong space game using the Unity framework. Utilized the framework's physics and collision detection implementation.",
        "image":pong_screenshot
      },
    ]
  }
  
  export default resumeData