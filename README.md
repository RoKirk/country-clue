# Country Clue

**Project decription:** Open-data source application that renders various information on 195 Countries around the World based on user-input.

## API Snippet

![image](https://media.git.generalassemb.ly/user/24824/files/86901600-3e35-11ea-8af6-1c76584cf2d3)

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

Include an image of your Priority Matrix (X is time and Y is priority)

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish!  Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Wireframes / Priority Matrix / Functional Components | Incomplete
|Jan 27th| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28th| Pseudocode / actual code | Incomplete
|Jan 29th| Initial Clickable Model  | Incomplete
|Jan 30th| MVP | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project. React Router Dom and Axios should be listed here at the very least.

## Issues and Resolutions

Use this section to list of all major issues you anticipate encountering during development and how you plan to tackle them. Be sure to update this section during development, documenting the actual resolutions you inacted, as well as any other unexpected obstacles you encountered along the way.

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
