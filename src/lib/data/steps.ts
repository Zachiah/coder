import all from "../filters/all";
import prime from "../filters/prime";
import add from "../steps/add";
import password from "../steps/password";
import action from "../util/action";
import type { Letter } from "./letters";


const THE_PASSWORD = "An EXTREMELY HARD password123!@#"
const STEPS = [
    action(all)(add(2)),
    action(prime)(add(1)),
    action(all)(password(THE_PASSWORD.split("") as Letter[])),
  ];

export default STEPS;