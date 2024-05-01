import { projects } from "src/data/projects";

export default function handler(req, res) {
  res.status(200).json(projects);
}
