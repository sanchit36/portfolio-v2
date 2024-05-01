import { about } from "src/data/about";

export default function handler(req, res) {
  res.status(200).json(about);
}
