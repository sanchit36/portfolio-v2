import { intro } from "src/data/intro";

export default function handler(req, res) {
  res.status(200).json(intro);
}
