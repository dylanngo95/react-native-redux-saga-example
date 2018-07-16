import axios from "axios";

// function that makes the api request and returns a Promise for response
export function fetchDog() {
    return axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
    });
};

export function fetchDogErrorUrl() {
    return axios({
      method: "get",
      url: "https://api.github.com/users/octocat/orgs/a"
    });
};