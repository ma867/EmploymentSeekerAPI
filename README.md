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
| # |  Action  | URL | HTTP Verb |  JSX View File  | Mongoose Method |
|:-----|:--------:|:--------:|:--------:|:--------:|------:|
| 1   | Index | / | GET | Index | .find() |
| 2   |  Show  | / | GET | Show | .findById |
| 3   | New | / | GET | New | none |
| 4   | Create | / | POST | none | .create(req.body) |
| 5   |  Edit  | / | GET | Edit | .findById |
| 6   | Update | / | PUT | none | .findByIdAndUpdate |
| 7   | Destroy | / | DELETEA | none | .findbyIdAndDelete |
