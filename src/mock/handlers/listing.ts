import { rest } from "msw";
import listingData from "../data/listingData";

const API_URL = "http://localhost:3000";

export const listingHandlers = [
  rest.get(`${API_URL}/api/listings`, (req, res, ctx) => {
    return res(ctx.json(listingData));
  }),
];
