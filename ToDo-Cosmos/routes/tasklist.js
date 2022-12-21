const Task = require('../models/task');

// Este es el CONTROLADOR
class TaskList {
  /**
   * Manejar APIs y despliega y maneja los tasks
   * @param {Task} taskObjeto
   */
  constructor(taskObjeto) {
    this.taskObjeto = taskObjeto;
  }

  async showTasks(req, res) {
    const querySpec = {
      query: "SELECT * FROM root r WHERE r.completed=@completed",
      parameter: {
        name: "@completed",
        value: false
      }
    }

    const items = await this.taskObjeto.find(querySpec);
    res.render("index", {
      title: "Mi lista de pendientes",
      tasks: items
    });
  }
  async addTask(req, res) {
    const item = req.body;

    await this.taskObjeto.addItem(item);
    res.redirect("/");
  }

  async completeTask(req, res) {
    const completedTasks = Object.keys(req.body);
    const tasks = [];
    completedTasks.forEach((task) => {
      tasks.push(this.taskObjeto.updateItem(task));
    });

    await Promise.all(tasks);

    res.redirect("/");
  }
}

module.exports = TaskList;
