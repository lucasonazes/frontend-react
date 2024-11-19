import User from "./User";
import Tag from "./Tag";
import Project from "./Project";

export default interface Task {
  id?: number;
  title: string;
  description: string;
  createdAt?: string;
  dueDate?: string;
  finished: boolean;
  user: User;
  tag?: Tag;
  project?: Project;
}
