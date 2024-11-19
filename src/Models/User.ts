import Task from "./Task";

export default interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  registeredIn?: string;
  tasks?: Task[];
}
