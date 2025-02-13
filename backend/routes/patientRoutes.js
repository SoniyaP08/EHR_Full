const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// GET all patients
router.get('/patients', patientController.getPatients);

// POST a new patient
router.post('/patients', patientController.addPatient);

module.exports = router;