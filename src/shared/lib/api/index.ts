import axios from "axios";

import { RANDOM_DATA_API_URL } from "@/shared/lib/constants";

export const $api = axios.create({
  baseURL: RANDOM_DATA_API_URL,
});
