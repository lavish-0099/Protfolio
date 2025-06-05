const projects = [
  {
    name: "WhatsApp-clone",
    link: "https://www.linkedin.com/posts/lavish-batra_webdevelopment-reactjs-nodejs-activity-7336338203756429312-aIAI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1DTAMBCeJAhGe89CultXSajW3fPJnWuYY"
  },
  {
    name: "Chat-Application",
    link: "https://www.linkedin.com/posts/lavish-batra_reactnative-socketio-webdevelopment-activity-7320496222765568003-6UuL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1DTAMBCeJAhGe89CultXSajW3fPJnWuYY"
  },
  {
    name: "intuitive slider application ",
    link: "https://invitation-rhhe.onrender.com"
  },
  {
    name: "E-commerce Website",
    link: "https://www.linkedin.com/posts/lavish-batra_webdevelopment-ecommerce-html-activity-7261431614990118912-m44O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1DTAMBCeJAhGe89CultXSajW3fPJnWuYY"
  },
  {
    name: "Guessing Game ",
    link: "https://guessinggame-43ie.onrender.com"
  },
  {
    name: "Hexcode Picker ",
    link: "https://hexcodepicker.onrender.com"
  },
  {
    name: "Moving Rocket ",
    link: "https://movingrocket.onrender.com"
  },
  {
    name: "Youtube-clone-UI ",
    link: "https://www.linkedin.com/posts/lavish-batra_webdevelopment-html-css-activity-7262053815493832704-xDWP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1DTAMBCeJAhGe89CultXSajW3fPJnWuYY"
  }
];

const projectsContainer = document.getElementById("projects-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3>${project.name}</h3>
    <a href="${project.link}" target="_blank">View Project</a>
  `;

  projectsContainer.appendChild(card);
});
