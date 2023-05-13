/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

async function getIdea() {
  const response = await fetch("https://apis.scrimba.com/bored/api/activity")
  const idea = await response.json()
  document.getElementById("activity").textContent = idea.activity
  changeStyling()
}

function changeStyling() {
  document.body.classList.add("fun")
  document.getElementById("title").textContent = "🦾 HappyBot🦿"
}


document.getElementById("get-activity").addEventListener("click", getIdea)