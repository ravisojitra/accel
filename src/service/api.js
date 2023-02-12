import { apis } from "service";

const COMMON_URL = `https://nkllupazbrvypmcfovhx.supabase.co/rest/v1/`;

const API_URLS = { GET_COMPANIES: `${COMMON_URL}companies` };

export const getCompanies = (payload) =>
  apis.get(API_URLS.GET_COMPANIES, payload);
