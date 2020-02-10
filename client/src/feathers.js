import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import axios from "axios";

const client = feathers();
const restClient = rest("http://localhost:3030");
client.configure(restClient.axios(axios));

export default client;
