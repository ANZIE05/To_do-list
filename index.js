#! /usr/bin/env node
import inquirer from "inquirer";
let to_do = [];
let condition = true;
while (condition) {
    let add_task = await inquirer.prompt([
        {
            name: 'todo', type: 'input', message: 'Add a task in your todo list'
        },
        {
            name: 'confirm', type: 'confirm', message: 'Are you confirm to add this task?', default: 'false'
        }
    ]);
    to_do.push(add_task.todo);
    condition = add_task.confirm;
    console.log(to_do);
}
