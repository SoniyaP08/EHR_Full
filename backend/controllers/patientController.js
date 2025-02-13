const Patient = require("../models/patient");

const patients = []; // In-memory storage for patients

// Get all patients
const getPatients = (req, res) => {
  res.json(patients);
};

// Add a new patient
const addPatient = (req, res) => {
  const patient = req.body;

  // Basic validation
  if (!patient.first_name || !patient.last_name || !patient.email || !patient.mobile_phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  patients.push(patient);
  res.status(201).json({ message: 'Patient registered successfully', patient });
};

module.exports = {
  getPatients,
  addPatient,
};
