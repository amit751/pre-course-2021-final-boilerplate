 Pre Course Project - Todo List 📋
<h1> amit mor  - final projact at the cyber4s pre-course</h1>
hi this is my final project - a todo list. 
in this file will introduce the following topics:
-What does the app include
- the repository
- useful Links 
<h2>Todo List Web Application<h2>
 <p></p>
A todo List Web Application, in which the user can add and store prioritized todo tasks - view and sort that list.
the tasks are saved at the localstorage, so localy the information is saved.
there are the following options:
 
 
 -When writing the task, you can select one of the categories - that is, the icons that symbolize: Tasks related to leisure work or home - respectively, next to the task, the icon is displayed. You dont have to use this fetcher.
- It is possible to delete a task
-It is possible to click on the text of the task itself and then it is marked with a cross line over the text, but it is not deleted and can be seen.
-  by clicking the marker button you can mark a task.
The code works in such a way that each task is stored in an array of objects and each object has properties that relate to the task, even when a task is deleted by the client, it is not deleted from the array (database) it just changes it in  status to: deleted.
In addition there is an ID  for each task so it can be tracked.

<h2>repository </h2>
<bold>-mainjs: the main file :working with local sotrage</bold>
you can find my code in the src file:
-css
-html
-bin.js - app that using the jasonbin serves
utlis.js -  function to use api
-imgs(ther was a probleme to sore them in a seperate file)

<h2>links i used<h2>
 




Here is a preview sample of the desired functionality (without styling):

![Add todo task](./readme-files/basic-todo.gif)

## Instructions

- Fork this repository into your account. Make sure to select the **public** option ⑂
- Clone your new repository to your computer 🖥
- Install the project dependencies by running `npm install` from the vscode terminal `ctrl + j` (make sure you are in the correct directory) 📂
<!-- - [Create new branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches) -->
- Make changes to the code to meet the project requirements 📝
- [Commit Early, Push Often](https://www.worklytics.co/commit-early-push-often/) - your work will be evaluated by your push history 📖
- Good Luck! 🤘

## Running tests

We have created automated tests for your convenience, use it to check your progression.

Note that the automated tests rely on your code having the exact class names, Ids and objects structures as specified below.

To run the tests locally simply run `npm run test` in the terminal

Note that each commit to `main` branch will trigger a github [action](https://docs.github.com/en/actions). You can easily see the action tests result on each commit:

![Commits test](./readme-files/commit-tests.png)

## Guidelines

- The Todo list should have two sections: _Control_ section and _View_ section
- The _Control_ section is where the user adds his todo task and priority, and should have three elements:
  - [\<input\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) with id `text-input`.
  - [\<select\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) with id `priority-selector` (options will be: 1-5).
  - [\<button\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) with id `add-button`.
- The _View_ section is where we display the list of added todo tasks and data. The list should start empty and each added todo should be inserted to the end of the list.
- After the user clicks on the 'add' button, the todo input field should be "reset"
- Every todo item should have a "container" div with class `todo-container` that will contain 3 sub-elements:

  - An element with a class `todo-text` with the text of the todo task
  - An element with a class `todo-created-at` that will hold the creation time of the task in a [SQL format](https://www.w3schools.com/sql/sql_dates.asp#:~:text=SQL%20Date%20Data%20Types&text=DATE%20%2D%20format%20YYYY%2DMM%2D,YEAR%20%2D%20format%20YYYY%20or%20YY)
  - An element for showing the numeric priority value of the task, with a class `todo-priority`

  Good way 👍🏿:

  ```
    <div class="todo-container">
      <div class="todo-priority">
        1
      </div>
      <div class="todo-created-at">
        2020-06-18 11:51:12
      </div>
      <div class="todo-text">
        the todo text
      </div>
    </div>
  ```

  Bad way 👎🏿:

  ```
    <div class="todo-container">
      <div class="todo-priority">
        1
      </div>
      <div class="todo-created-at">
        2020-06-18 11:51:12
      </div>
      <div class="todo-text">
        <span>the todo text</span>
      </div>
    </div>
  ```

- Add a counter element to reflect the **current** number of todos stored in the app. This element should have an id of `counter`.

- Add a button with id `sort-button`. Clicking this element should resort the todo list by their todos priority (DESC)

  ![alt text](./readme-files/todo.gif)

- **Make your todo-list persistent!**

  Save your todo-list as JSON (see `todo-list-example.json`) and store it in a persistent way, you have to options:

  1. Use the `localStorage` browser api to save / load the todo-list JSON **with the 'my-todo' key**. This option will make it persist between _page reloads_.

  2. Use the [jsonbin.io](https://jsonbin.io/) service api (using async/await fetch GET & PUT requests) to save / load your todo-list JSON. This option will make it persist across _devices and browsers_.

**Note** You can add extra properties to the todo objects in the JSON that you want to be persistent.

## Bonus

- jsonbin.io - see explanation above
- Freestyle - add any feature you desire. Some ideas:
  - [drag n' drop functionality](https://htmldom.dev/drag-and-drop-element-in-a-list)
  - Delete + Edit a todo
  - Undo action
  - Search and highlight results
  - Loading spinner for network request
  - Mark/Unmark todo as done
  - Something awesome we didn't think of...
- For added value, you can add jest/puppeteer test to test any bonus feature you implemented

**Add an explanation in `README.md` for each bonus feature you add and a link to any resoure you used**

## Grading policy

- Your project will be graded by the number of automatic tests you pass
- Using jsonbin.io
- Extra freestyle features - Please add an explanation about the bonus features you added to the readme.md
- new jest/puppeteer test
- Code quality and style: indentation, Meaningful and non-disambiguate variable names, Comments documentation
- Visual creativity, use css to make this app look awesome 💅🏿
- Division to reusable functions, no code duplication
- Git usage: meaningful commit messages, small commits, folder and file structures

## Submitting

- Change this file (README.md) and style it to showcase your solution (gifs, explanations, link to the github page, links to resources you used, etc...)
- Submit your solution repo to the [ChallengeMe](http://challengeme.suvelocity.org/) system
- Submit your repo link and github page and video to Google Classroom
- Record a 5-10 min selfie video, describe yourself in a few words (age, location, military background, technological background). Also, talk about the solution you submitted (try to explain how your app works in general and which bonuses you added). Think about this video as an interview.

GOOD LUCK!
