import express from "express";
import Company from "../Model/companydata.js";

const router = express.Router();

router.get("/getCompany", async (req, res) => {
  try {
    const companies = await Company.find();
    const transformedData = companies.map((item) => ({
      id: item.Company_ID,
      company: item.Company_Name,
    }));
    res.json(transformedData);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
