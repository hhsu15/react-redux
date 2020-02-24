import axios from "axios";

const KEY = "AIzaSyAOObKPsetyJr0SV4wZhHsVSMGYB1U5H7w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video"
  }
});
