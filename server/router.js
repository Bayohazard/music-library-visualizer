import express from 'express';
import { findAll } from "./queries.js";

const router = express.Router();

router.get("/filter", (req, res) => {
  findAll((error, results) => {
    if (error) {
      console.log("Error: ", error);
    }

    res.json({ result: results });
  });
});

export default router;
