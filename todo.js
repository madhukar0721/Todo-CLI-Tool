#!/usr/bin/env node

const fs = require("fs-extra");
const { Command } = require("commander");
const path = require("path");

const program = new Command();

const FILE_PATH = path.join(__dirname, "todos.json"); 
const fetchTodos = () => {
  if (fs.existsSync(FILE_PATH)) {
    return fs.readJsonSync(FILE_PATH);
  } else {
    return [];
  }
};

const saveTodos = (todos) => {
  fs.writeJsonSync(FILE_PATH, todos, { spaces: 2 });
};

program
  .command("add <task>")
  .description("Add todo")
  .action((task) => {
    const todos = fetchTodos();
    todos.push({ task, done: false });
    saveTodos(todos);
    console.log(`${task} added to Todos`);
  });

program
  .command("done <task>")
  .description("Delete todo")
  .action((task) => {
    let todos = fetchTodos();
    const index = todos.findIndex((todo) => todo.task === task);
    if (index !== -1) {
      todos[index].done = true;
      saveTodos(todos);
      console.log(`Marked todo as done: "${task}"`);
    } else {
      console.log(`Todo not found: "${task}"`);
    }
  });

program
  .command("delete <task>")
  .description("Delete todo")
  .action((task) => {
    let todos = fetchTodos();
    const index = todos.findIndex((todo) => todo.task === task);

    if (index !== -1) {
      todos.splice(index, 1); 
      saveTodos(todos);
      console.log(`Deleted todo: "${task}"`);
    } else {
      console.log(`Todo not found: "${task}"`);
    }
    saveTodos(todos);
    console.log(`${task} deleted from Todos`);
  });

program
  .command("delete-all <task>")
  .description("Delete todo")
  .action((task) => {
    let todos = fetchTodos();
    todos = todos.filter((todo) => todo.task !== task);
    saveTodos(todos);
    console.log(`Deleted all ${task} from Todos`);
  });

  program
  .command("delete-all-todos")
  .description("Delete all todos")
  .action((task) => {
    let todos = [];
    saveTodos(todos);
    console.log(`Deleted all ${task} from Todos`);
  });

program
  .command("show todos")
  .description("Show todo")
  .action((task) => {
    const todos = fetchTodos();
    if (todos.length === 0) {
      console.log("No todos found.");
    } else {
      todos.forEach((todo, index) => {
        console.log(
          `${index + 1}. ${todo.task} [${todo.done ? "Done" : "Not Done"}]`
        );
      });
    }
  });

program.parse();
	