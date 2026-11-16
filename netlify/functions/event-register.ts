import { handleEventRegister } from "../../lib/checkin/handler";

// A Netlify Function rather than a Next route handler: the site is built with
// output: "export", which has no server to run route handlers on.
const eventRegister = (req: Request) => handleEventRegister(req);

export default eventRegister;

export const config = {
  path: "/api/event-register",
};
