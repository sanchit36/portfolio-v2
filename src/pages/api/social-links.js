import { socialLinks } from "src/data/social-links";

export default function handler(req, res) {
  res.status(200).json(socialLinks);
}
