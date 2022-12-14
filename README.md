### Employment Seeker API
***
## Table of Contents
1. [ About our API ] 
2. [ Technologies Used ]
3. [ Collaboration ]

### About our API
***
Invisible Strengths Employment Seeker API is the back end for an employment app that works to connect employers with staffing needs and individuals with disabilities. 
Our API focuses solely on the the Job Seeker side of the application.
## Trello
* [Trello](/https://trello.com/b/h0TdY1a9/group-project-api)
### Figma
![ Sign Up ](https://i.imgur.com/qLxeCAf.png)
![ User Profile ](https://i.imgur.com/sDpLX3N.png)
## Lucid Chart
![Lucid Flow Chart](https://i.imgur.com/N9AOR0a.jpg)

### Technologies
***
A list of technologies used within the project:
* [ JavaScript ]
* [ MongoDB ]

### Collaboration
***
* Melissa Alzate - Team Lead
* Michael O'Brien - server.js, seed files, testing, dataController, and apiController
* Ashley Nickens - user.js, db.js, routeController, and Trello
* Christine Iyer - dataController and apiController
* Jason Ross - education.js
* Jade Lee - routeController
* Lovedy Louisjean - apiController
* Michael Arthur - experience.js, jobs.js, user.js and README.md

### REST-ful Routes
***
## User
| # |  Action  | URL | HTTP Verb |  JSX View File  | Mongoose Method |
|:-----|:--------:|:--------:|:--------:|:--------:|------:|
| 1   | Index | /api/user | GET | Index | .find() |
| 2   |  Show  | /api/user/:id | GET | Show | .findById |
| 3   | New | none | GET | New | none |
| 4   | Create | /api/user | POST | none | .create(req.body) |
| 5   |  Edit  | none | GET | Edit | .findById |
| 6   | Update | /api/user/:id | PUT | none | .findByIdAndUpdate |
| 7   | Destroy | /api/user/:id | DELETE | none | .findbyIdAndDelete |
| 8   |  Show  | /api/user/:id/experience | GET | none | .findById |
| 9   |  Show  | /api/user/:id/education  | GET | none | .findById |
| 10   |  Show  | /api/user/:id/jobsApplied | GET | none | .findById |
| 11   |  Show  | /api/user/:id/jobsSaved  | GET | none | .findById |

## Experience
| # |  Action  | URL | HTTP Verb |  JSX View File  | Mongoose Method |
|:-----|:--------:|:--------:|:--------:|:--------:|------:|
| 1   | Index | /api/experience | GET | Index | .find() |
| 2   |  Show  | /api/experience/:id | GET | Show | .findById |
| 3   | New | none | GET | New | none |
| 4   | Create | /api/experience | POST | none | .create(req.body) |
| 5   |  Edit  | none | GET | Edit | .findById |
| 6   | Update | /api/experience/:id | PUT | none | .findByIdAndUpdate |
| 7   | Destroy | /api/experience/:id | DELETE | none | .findbyIdAndDelete |

## Education
| # |  Action  | URL | HTTP Verb |  JSX View File  | Mongoose Method |
|:-----|:--------:|:--------:|:--------:|:--------:|------:|
| 1   | Index | /api/education | GET | Index | .find() |
| 2   |  Show  | /api/education/:id | GET | Show | .findById |
| 3   | New | none | GET | New | none |
| 4   | Create | /api/education | POST | none | .create(req.body) |
| 5   |  Edit  | none | GET | Edit | .findById |
| 6   | Update | /api/education/:id | PUT | none | .findByIdAndUpdate |
| 7   | Destroy | /api/education/:id | DELETE | none | .findbyIdAndDelete |

## Job
| # |  Action  | URL | HTTP Verb |  JSX View File  | Mongoose Method |
|:-----|:--------:|:--------:|:--------:|:--------:|------:|
| 1   | Index | /api/job | GET | Index | .find() |
| 3   | New | none | GET | New | none |
| 4   | Create | /api/job | POST | none | .create(req.body) |
| 5   |  Edit  | none | GET | Edit | .findById |
| 6   | Update | /api/job/:id | PUT | none | .findByIdAndUpdate |
| 7   | Destroy | /api/job/:id | DELETE | none | .findbyIdAndDelete |