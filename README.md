Project features:
- JSON Course Card List: Show information about the courses by using JSON data, and display cards with all the important information. Our filters and content loading make browsing faster and easier.

- Course Registration System: You can choose your courses by clicking on a "Select" button on the course cards. This will update the list of courses you have chosen.

- Credit Limit Management: Keep track of how much credit you have left and figure out the credits needed for your courses. This helps with managing your credits better.


How I managed the state in my assignment project:

- First, I made up some pretend data in JSON format. Then, I made three smaller childs called Cards, Card, and Cart. These are all children of a parent called App. In the Cards child, I used a hook from react called useState to keep track of the data. I also used another hook called useEffect to fetch the data. To show the data, I sent it from Cards to Card using JavaScript xml. These childs components are all connected to the parent component, App, which displays the data. I made a function to list the courses by their title. When you click a button, the list of courses will appear in the Cart. To do this, I pass the data from Cards to Cart using the parent component, App. Inside the App, I used a react hook called useState to pass the data to JavaScript xml. I added a design to the Cart part to show the data in the parent component. I also used a tool called reactToastify to show a message when a course is added in more than one. I needed to create a useState hook and forEach() method that shows the number of credit hours by doing the calculation, starting from useState initial value = 0. It will calculate the total credit hours by retrieving them from a JSON file and passing the result to the Cart component through JavaScript XML. Additionally, I needed to include a condition that limits the credit hours to 20. To handle this, I used the useState hook again with an initial value of 20 and also the remaining credit hours then displayed it in the Cart component. If the credit hours exceed 20, I will use reactToastify to display a message and prevent any further courses from being added. Afterward, I had to display the total course fee. So, I used the useState hook again and passed the calculated data through javascript xml to the Cart child. The Cart child will display the list, total credit hour, remaining credit hour, and total course fee when I click the "select" button from the Card child. Finally, I made the card list by arranging the cards in a grid pattern and giving them a style also added style for parent and child components.



- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
