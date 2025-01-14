import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Patientprofile.css';

export default function Patientprofile() {
    const [Patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Get patientId from localStorage when the component mounts
        const storedPatientId = localStorage.getItem('patientId');
        if (storedPatientId) {
            handleGenerateFoodChart(storedPatientId);
        }
    }, []);

    const handleGenerateFoodChart = async (id) => {
        setLoading(true);
        try {
            const response = await axios.post(`https://hilverse-backend.vercel.app/getpatient/${id}`);
            console.log(response);
            setPatient(response.data.patient);
        } catch (error) {
            console.error('Error generating food chart:', error);
        } finally {
            setLoading(false);
        }
    };

    console.log(Patient);

    return (
        <>
            <div className="profile-container">
                {Patient ? (
                    <div className="profile-card">
                        <h2>Personal Information</h2>
                        <p><strong>Name:</strong> {Patient.name}</p>
                        <p><strong>Age:</strong> {Patient.age}</p>
                        <p><strong>Gender:</strong> {Patient.gender}</p>
                        <p><strong>Contact:</strong> {Patient.contactInfo}</p>
                        <p><strong>Emergency Contact:</strong> {Patient.emergencyContact}</p>
                        <p><strong>Diseases:</strong> {Patient.diseases}</p>
                        <p><strong>Allergies:</strong> {Patient.allergies}</p>
                        <p><strong>Room:</strong> {Patient.roomNumber}, <strong>Bed:</strong> {Patient.bedNumber}, <strong>Floor:</strong> {Patient.floorNumber}</p>
                    </div>
                ) : (
                    <div className="loading-spinner">Loading...</div>
                )}
            </div>
        </>
    );
}
