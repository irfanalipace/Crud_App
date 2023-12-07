import Airtable from "airtable";

Airtable.configure({
  endpointUrl: process.env.VITE_AIRTABLE_ENDPOINT_URL,
  apiKey: process.env.VITE_AIRTABLE_API_KEY,
});

export const AirtableBase = Airtable.base(process.env.VITE_AIRTABLE_BASE ?? "");
