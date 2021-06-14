import axios from "axios";

export default axios.create({
  baseURL: "https://60bf81f997295a0017c430ed.mockapi.io",
  headers: {
    "Content-type": "application/json"
  }
});