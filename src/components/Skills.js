import React from "react";
import { List, ListItem } from "@material-ui/core";
import "../css/Skills.css";

function Skills() {
  return (
    <div>
      <h2 className="section__title section__title--skills">What My Skills</h2>
      <div className="skills">
        <div className="skill">
          <h3>Programing Languages</h3>
          <List>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/javascript.png"
                alt="javascript"
                className="icon__img"
              />
              JavaScript
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/php.png"
                alt="php"
                className="icon__img"
              />
              PHP
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/html-5.png"
                alt="html"
                className="icon__img"
              />
              HTML
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/css-filetype.png"
                alt="css"
                className="icon__img"
              />
              CSS
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/c-sharp-logo.png"
                alt="c sharp"
                className="icon__img"
              />
              C#
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/vb.png"
                alt="visual basic"
                className="icon__img"
              />
              VisualBasic
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/mysql.png"
                alt="mysql"
                className="icon__img"
              />
              MySQL
            </ListItem>
          </List>
        </div>

        <div className="skill">
          <h3>Tools</h3>
          <List>
            <ListItem>
              <img
                src="https://img.icons8.com/fluent/20/000000/visual-studio-code-2019.png"
                alt="vs code"
                className="icon__img"
              />
              Visual Studio Code
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/visual-studio.png"
                alt="vs studio"
                className="icon__img"
              />
              Microsoft Visual Studio
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/git.png"
                alt="git"
                className="icon__img"
              />
              Git
            </ListItem>
          </List>
        </div>

        <div className="skill">
          <h3>FrameWork|Library</h3>
          <List>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/react-native.png"
                alt="react"
                className="icon__img"
              />
              React.js
            </ListItem>
            <ListItem>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACa0lEQVQ4jeWTT0jTcRjGn+f7+9nclECimmJYkBEZBUGE7TdRAk3nNImEiggKOgQe6pBBCIKQdooojP5AUXmIIQS6ZCNCdDOikC7RLZBwm0ZZjZnO/b5vp4mmgdqhQ8/x4X0+vLx/gP9O/HSs3GmkVJkysFcL9wDYBbK1qG94dC1AZf40PlCxRQROaNWrKG2Evi4A1wI0KbwLIOkORm5lzVi99S5e7zmB/mjPaoFMVFfn6XXTUZV2edzhcAoAxnxWgYN4ibTLynq/K1FnHRCFWlCqIMyfMc1D254NflPucDilgAdwTLdki0uCkSkh7klO6tKfOhGF+xAkM2ndBEGX0567CQAKAL44p26LSPOYzyrIBty5hXdAHo4fqdy6LJA8DcJfvL74e2EwEoAoxv2eZgUAZYH3aVJ1O4iL87MIBGwluIKM3bUcsKhveFTAkcRM7MJ4g9cj1F8h7FTZgs1J46EAdfFa78Z5Lxh5QYgj5vN4F8JidQdLYj7rHCG7AV5VWi6LxqBjJnffotNI+K3j0LLfHYzOdzrZUL7d1uYjUHeIsIaAF2CClJBNCQGGS2l9w+0srGIgYC8CSjtU4q31yrbNoyZ1gRh2jWhWk9gJ4CPBjqSdHykdGJhdmIv7PG0kMu7+aOeS4437vD5QugGMgAyZaYSUSqdmjZwhhz1XsWHg9Y8lC6qsNCfyMoM0eH7F35Dwe86KcEdhf6R1oT9ZX1FqU05BpEmE11YMlHaoiTfWUEZwxpXOnZjNnWkkeFKLkMQTpl297nA4tap/jfkti1oeg+ozRJ4aYvZsej6YWA1jicYbK7b8FeCf6xdu0fxTmC+OFwAAAABJRU5ErkJggg=="
                alt="laravel"
                className="icon__img"
              />
              Laravel
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/24/000000/bootstrap.png"
                alt="bootstrap 4"
                className="icon__img"
              />
              Bootstrap 4
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/material-ui.png"
                alt="material-ui"
                className="icon__img"
              />
              Material Ui
            </ListItem>
            <ListItem>
              <img
                src="https://img.icons8.com/color/20/000000/npm.png"
                alt="node js npm"
                className="icon__img"
              />
              Node.js|NPM
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Skills;
