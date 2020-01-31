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

- Render Countries Flag as the background image for [Route 2] of the Main Component.
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
| Country Info | Receives Props that render Country Information to screen. | Class |
| Dynamic Background | Will influence the background image based on the State | Class |
| Footer | Contains section that includes information on the author of the program and General Assembly logo seal. | Functional |

## Priority Matrix

![image](https://media.git.generalassemb.ly/user/24824/files/9133c500-3ea0-11ea-8bd9-d17b856b5436)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 5hrs| 3hrs | 3hrs |
| Working with API | H | 3hrs| 3hrs | 3hrs |
| Search Button | H | 5hrs| 2hrs | 2hrs |
| Dynamic Background | M | 5hrs| 5hrs | 5hrs |
| Route | H | 5hrs| 10hrs | 10hrs |
| Dynamic Header | M | 5hrs| 5hrs | 5hrs |
| Footer | L | 5hrs| 2hrs | 2hrs |
| Total | H | 33hrs| 30hrs | 30hrs |



## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Wireframes / Priority Matrix / Functional Components | Complete
|Jan 27th| Create component files, link data flow to each page, create search bar & search button | Complete
|Jan 28th| Pseudocode, and create functions | Complete
|Jan 29th| Initial Clickable Model  | Complete
|Jan 30th| MVP, Post MVP | Complete
|Jan 31tst| Present | Complete

## Additional Libraries

- React Router Dom 
- Axios
- Public API's Library

## Issues and Resolutions

Utilizing the Route and Slugs. I will review lesson topics as a reference.

## Code Snippet

Manipulating the "z-index" to order different components layered display on the screen.

.country-flag {
  position: fixed;
  height: 100vh;
  top: 0;
  z-index: -10;
}

.flag {
  z-index: -10;
  height: 100%;
}

.footer-credits, .dynamic-header, .data-box, .footer-credits, .header {
  position: relative;
  z-index: 100;
}

.dynamic-header h1, .dynamic-header h2{
  position: relative;
  font-size: 75px;
  z-index: 100;
  color: black;
	-webkit-text-stroke: 3px white;
}


## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  