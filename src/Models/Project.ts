import Task from "./Task";

export default interface Project {
  id?: number;
  name: string;
  description: string;
  startDate?: string;
  finalDate?: string;
  tasks?: Task[];
}
