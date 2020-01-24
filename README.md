# Country Clue

**Project decription:** Open-data source application that renders various information on 195 Countries around the World based on user-input.

## API Snippet

![image](https://media.git.generalassemb.ly/user/24824/files/00101e80-3e9f-11ea-98c3-2b4b227b092d)

## Wireframes

![image](https://media.git.generalassemb.ly/user/24824/files/63488380-3e94-11ea-804d-be3da3a8e1db)

### MVP

- Create an Input Field that accepts User Input in the form of a "String".
- Create a Button, and Button functionality that submits Users Input.
- Find and use external API. 
- Render data to page based on User Input.

### Post-MVP

- Render Country Flag's as the background image for [Route 2] of the Main Component.
- Produce the Countries Native Name within [Route 2] of the Header Component.
- Play sound: Find API that conatins audio files of Countries National Anthem. 

## React Component Hierarchy

![image](https://media.git.generalassemb.ly/user/24824/files/aa367900-3e94-11ea-8ea5-cde9cf11bce9)

## Components

| Component | Description |Type |
| --- | --- | --- |
| App | Contains State and access to State. App passes down (props) to Sub-Components. | Class |
| Header | The Header receives props that render multiple Header titles | Class |
| Main | Contains the Search Bar and Search Button that will be dynamic in nature and influence State. This component houses multiple rendered views through React Router and controls data received from the initial API call in state | Class |
| Search Bar/Input Field | Recieves User Input in the form of a String value. | Class |
| Search Button | Will execute the GET request from Axios when User based event occurs. | Class |
| Country Info | Receives Props that render Counrty Information to screen. | Class |
| Dynamic Background | Will influence the background image based on the State | Class |
| Footer | Contains section that includes information on the author of the program and General Assembly logo seal. | Functional |

## Priority Matrix

![image](https://media.git.generalassemb.ly/user/24824/files/9133c500-3ea0-11ea-8bd9-d17b856b5436)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 5hrs| 0hrs | 0hrs |
| Working with API | H | 3hrs| 3hrs | 3hrs |
| Search Button | H | 5hrs| 0hrs | 0hrs |
| Dynamic Background | M | 5hrs| 0hrs | 0hrs |
| Route | H | 5hrs| 0hrs | 0hrs |
| Dynamic Header | M | 5hrs| 0hrs | 0hrs |
| Footer | L | 5hrs| 0hrs | 0hrs |
| Total | H | 33hrs| 3hrs | 3hrs |



## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Wireframes / Priority Matrix / Functional Components | Complete
|Jan 27th| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28th| Pseudocode / actual code | Incomplete
|Jan 29th| Initial Clickable Model  | Incomplete
|Jan 30th| MVP | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

- React Router Dom 
- Axios
- Public API's Library

## Issues and Resolutions

Utilizing the Route and Slugs. I will review lesson topics as a reference.

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
