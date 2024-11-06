import { Task } from "../types/task";
import { User } from "../types/user";

const transformData = (users: User[], tasks: Task[]): User[] => {
  if (users === null || tasks === null || users.length === 0) {
    return []
  }

  return users.map(user => {
    const userTasks = tasks.filter(task => task.userId === user.id);
    return { ...user, tasksCount: userTasks.length };
  });
}

export default transformData