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
### Figma
![Sign Up](/https://imgur.com/a/NzVSxph)
![User Profile](/https://imgur.com/a/ybi6x17)
## Lucid Chart
![Lucid Flow Chart](/https://imgur.com/a/XwHTVjd)
## Trello
* [Trello](/https://trello.com/b/h0TdY1a9/group-project-api)
![Image text](/image)


### Technologies
***
A list of technologies used within the project:
* [JavaScript]
* [MongoDB]

### REST-ful Routes

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
