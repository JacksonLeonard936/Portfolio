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
    "aboutme":"I'm a senior at CHS who has a strong interest in programming. I've been doing different coding projects since I was in elementary school, and I still have a passion for it. ",
    "address":"United States",
    "website":"https://github.com/JacksonLeonard936",
    "education":[
      {
        "UniversityName":"Clayton High School",
        "specialization":"",
        "MonthOfPassing":"Graduating May",
        "YearOfPassing":"2023",
        "Courses": ['AP CSA', 'AP Calculus', 'Honors Physics', 'Honors Chemistry']
      },
      {
        "UniversityName":"The Coding School",
        "specialization":"",
        "MonthOfPassing":"Still Attending",
        "YearOfPassing":"",
        "Courses":["Fundamentals of Computer Science: Introductory course taught in Python where we dove into syntax, object oriented programming, data structures, recursion, algorithms, and logical analysis. Built an end of the unit project demonstrating all of these.", "Advanced Computer Science: Advanced course with a deep dive on data structures, particularly tries, trees, hash maps, graph theory, heaps, and complexity analysis. This was a project based course, where I built a variety of small projects ranging from a maze generator, a hospital scheduler, and Sudoku generator.", "Artificial Intelligence: Python based course where we dove into details of Machine Learning, including topics such as Bayesian Networks, SVM’s, Decision Trees, and Deep Learning."]
      }
    ],
    "skillsDescription":"Here are some of my stronger languages:",
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
        "image":steam_site,
        "link":"https://github.com/JacksonLeonard936/steam"
      },
      {
        "name":"Real time chat",
        "description":"Creating an online chatting platform where users can create accounts and chat with their friends in real time. Built backend using Django and frontend using React.",
        "image":messenger_logo,
        "link":"https://github.com/JacksonLeonard936/real-time-chat-fe"
      },
      {
        "name":"Pong",
        "description":"Built a 2-player pong space game using the Unity framework. Utilized the framework's physics and collision detection implementation.",
        "image":pong_screenshot
      },
    ]
  }
  
  export default resumeData