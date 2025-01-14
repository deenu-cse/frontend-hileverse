import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ProfileUpdate.css";

export default function ProfileUpdate() {
    const [patientData, setPatientData] = useState({
        patientId: "",
        name: "",
        roomNumber: "",
        bedNumber: "",
        age: "",
        gender: "",
        emergencyContact: "",
        diseases: [],
        allergies: [],
    });

    useEffect(() => {
        const fetchPatientData = async () => {
            const id = localStorage.getItem("patientId"); 
            if (id) {
                try {
                    const response = await axios.post(
                        `https://hilverse-backend.vercel.app/getpatient/${id}`
                    );
                    console.log(response);
                    setPatientData(response.data.patient); 
                } catch (error) {
                    console.error("Error fetching patient data:", error);
                }
            }
        };

        fetchPatientData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleArrayChange = (e, type) => {
        const { value } = e.target;
        setPatientData((prev) => ({
            ...prev,
            [type]: value ? value.split(",").map(item => item.trim()) : [], 
        }));
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(
                `https://hilverse-backend.vercel.app/patientUpd/${patientData.patientId}`,
                patientData
            );
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating patient data:", error);
            alert("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="profile-update-container">
            <h2>Update Patient Profile</h2>
            <form className="profile-update-form">
                <div className="form-group">
                    <h5>Your Name</h5>
                    <input
                        type="text"
                        name="name"
                        placeholder="Patient Name.."
                        value={patientData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <h5>Room Number</h5>
                    <input
                        type="text"
                        name="roomNumber"
                        placeholder="Room Number.."
                        value={patientData.roomNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <h5>Bed Number</h5>
                    <input
                        type="text"
                        name="bedNumber"
                        placeholder="Bed Number.."
                        value={patientData.bedNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <h5>Age</h5>
                    <input
                        type="number"
                        name="age"
                        placeholder="Age.."
                        value={patientData.age}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <h5>Gender</h5>
                    <select
                        name="gender"
                        value={patientData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <h5>Emergency Contact</h5>
                    <input
                        type="text"
                        name="emergencyContact"
                        placeholder="Emergency Contact.."
                        value={patientData.emergencyContact}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <h5>Diseases</h5>
                    <input
                        type="text"
                        name="diseases"
                        placeholder="Add diseases (comma-separated)"
                        value={patientData.diseases.join(", ")}
                        onChange={(e) => handleArrayChange(e, "diseases")}
                    />
                </div>
                <div className="form-group">
                    <h5>Allergies</h5>
                    <input
                        type="text"
                        name="allergies"
                        placeholder="Add allergies (comma-separated)"
                        value={patientData.allergies.join(", ")}
                        onChange={(e) => handleArrayChange(e, "allergies")}
                    />
                </div>

                <button type="button" className="save-button" onClick={handleSave}>
                    Save
                </button>
            </form>
        </div>
    );
}
