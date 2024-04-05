# **Squircles Game**

## The Squircle game is available at [squirclesgame.com](http://squirclesgame.com)

  Having just graduated from the Northcoders Software Developer bootcamp November 2023 Cohort,
  I wanted some projects to add to my CV, one of them being a small game, 
  this is Where the idea for the Squircles game came from.
  It originally started off as circles, but as I was developing the game I found to fit a circle on a mobile screen meant it the circles on a mobile screen
  were didnt fill enough or the screen and so i decided to change to a square, but these didn't look as nice so a half way point was a squircle!!
  which also sounded more intriging than Circles or Squares and so thats when the Squircles Game was born.

## Game Play:
  The player is shown 3 squircles (green, red, and blue) and is given 5 seconds to remember the size and how they relate to each other
  The player is then asked to recreate the squircles with the 3 corresponding sliders and then press the submit button to see the results
  The aim is to get as close to a total of 0 as possible

## Player Stories:
  The game has two player stories, practice play and daily play.
  
  **Practice play** gives the user unlimited goes at randomly created squircles. \
  **Daily play**
  however gives the player a daily squircle game which is the same for all players of the game, 
  this can only be played once per day and is refreshed with a new game at midnight.
  The main reason for the daily play story is to keep track of the players past stats by taking advantage of local storage. 
  The stats for past games for each colour of squircle, along with past totals are displayed on a bar chart.

## Technologies:
 - React -  Built with react vite 
 - MUI X charts 
 - Bootstrap - instead of using vaniila CSS i decided to use Bootstrap, which is a library i hadn't used before 

### Dependencies: 
- @emotion/react: 11.11.4,
- @emotion/styled: 11.11.0,
- @mui/material: 5.15.12,
- @mui/x-charts: 6.19.5,
- @popperjs/core: 2.11.8,
- bootstrap: 5.3.3,
- bootstrap-icons: 1.11.3,
- react: 18.2.0,
- react-dom: 18.2.0,
- react-router-dom: 6.22.3,
- react-share: 5.1.0
 
### DevDependencies: 
- @types/react: 18.2.56,
- @types/react-dom: 18.2.19,
- @vitejs/plugin-react: 4.2.1,
- eslint: 8.56.0,
- eslint-plugin-react: 7.33.2,
- eslint-plugin-react-hooks: 4.6.0,
- eslint-plugin-react-refresh: 0.4.5,
- sass: 1.71.1,
- vite: 5.1.4