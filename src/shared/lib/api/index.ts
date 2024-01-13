import axios from "axios";

import { DUMMY_JSON_URL, RANDOM_DATA_API_URL } from "@/shared/lib/constants";

export const $api = axios.create({
  baseURL: RANDOM_DATA_API_URL,
});

export const $api_dummy = axios.create({
  baseURL: DUMMY_JSON_URL,
});
