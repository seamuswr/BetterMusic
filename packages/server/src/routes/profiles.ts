// src/routes/profiles.ts
import express, { Request, Response } from "express";
import profiles from "../services/profile-svc";
import { Profile } from "../models/profile";

const router = express.Router();

// in src/routes/profiles.ts
router.get("/:userid", (req: Request, res: Response) => {
    const { userid } = req.params;
  
    profiles
      .get(userid)
      .then((profile: Profile) => res.json(profile))
      .catch((err) => res.status(404).end());
  });

router.post("/profiles", (req: Request, res: Response) => {
    const newProfile = req.body;

    profiles
        .create(newProfile)
        .then((profile: Profile) => res.status(201).send(profile))
        .catch((err) => res.status(500).send(err));
});

export default router;
