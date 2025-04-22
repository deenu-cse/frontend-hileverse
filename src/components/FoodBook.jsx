import React, { useEffect, useState } from 'react';
import '../styles/FoodBook.css';

const ReservationForm = () => {
    const [selectedDiseases, setSelectedDiseases] = useState([]);
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        contactInfo: "",
        emergencyContact: "",
        roomNumber: "",
        bedNumber: "",
        floorNumber: ""
    });
    const [hasBooked, setHasBooked] = useState(false);

    useEffect(() => {
        const patientId = localStorage.getItem('patientId');
        if (patientId) {
            setHasBooked(true);
        }
    }, []);

    const handleDiseaseChange = (event) => {
        const disease = event.target.value;
        if (disease && !selectedDiseases.includes(disease)) {
            setSelectedDiseases([...selectedDiseases, disease]);
        }
    };

    const handleAllergyChange = (event) => {
        const allergy = event.target.value;
        if (allergy && !selectedAllergies.includes(allergy)) {
            setSelectedAllergies([...selectedAllergies, allergy]);
        }
    };

    const handleDeleteDisease = (disease) => {
        setSelectedDiseases(selectedDiseases.filter(d => d !== disease));
    };

    const handleDeleteAllergy = (allergy) => {
        setSelectedAllergies(selectedAllergies.filter(a => a !== allergy));
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            name: formData.name,
            diseases: selectedDiseases.join(", "),
            allergies: selectedAllergies.join(", "),
            roomNumber: formData.roomNumber,
            bedNumber: formData.bedNumber,
            floorNumber: formData.floorNumber,
            age: parseInt(formData.age, 10),
            gender: formData.gender,
            contactInfo: formData.contactInfo,
            emergencyContact: formData.emergencyContact,
        };

        try {
            console.log("code here....")
            const response = await fetch('https://hilverse-backend.vercel.app/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result)
                localStorage.setItem('patientId', result.data.patientId.userId);

                alert('Reservation submitted successfully!');
                setFormData({
                    name: "",
                    age: "",
                    gender: "",
                    contactInfo: "",
                    emergencyContact: "",
                    roomNumber: "",
                    bedNumber: "",
                    floorNumber: ""
                });
                window.location.href = '/'; 
                setHasBooked(true);
            } else {
                alert('Failed to submit the reservation.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the reservation.');
        }
    };

    console.log(formData)
    console.log(selectedDiseases)
    console.log(selectedAllergies)

    return (
        <div className="containerform">
            {hasBooked ? (
                <div className="already-booked">
                    <h2>You have already booked your food! <br></br>✮⋆˙ Thanks for joining us ✮⋆˙</h2>
                </div>
            ) : (
                <div className="panel panel-primary dialog-panel">
                    <div className="panel-heading">
                        <h5>Hospital Meal - Reservation</h5>
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal" role="form" onSubmit={handleSubmit}>
                            {/* Name */}
                            <div className="form-group">
                                <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="name">
                                    Name
                                </h4>
                                <div className="col-md-8">
                                    <input
                                        className="form-control"
                                        id="name"
                                        type="text"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Diseases */}
                            <div className="form-group">
                                <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="diseases">
                                    Diseases
                                </h4>
                                <div className="col-md-8">
                                    <select className="form-control" onChange={handleDiseaseChange}>
                                        <option value="">Select Disease</option>
                                        <option>Cancer</option>
                                        <option>Diabetes</option>
                                        <option>Hypertension</option>
                                        <option>Asthma</option>
                                        <option>Malaria</option>
                                        <option>Anemia</option>
                                    </select>
                                </div>
                            </div>

                            {/* Allergies */}
                            <div className="form-group">
                                <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="allergies">
                                    Allergies
                                </h4>
                                <div className="col-md-8">
                                    <select className="form-control" onChange={handleAllergyChange}>
                                        <option value="">Select Allergy</option>
                                        <option>Pollen</option>
                                        <option>Pet Allergy</option>
                                        <option>Mold Allergy</option>
                                        <option>Milk Allergy</option>
                                        <option>Soy Allergy</option>
                                        <option>Latex Allergy</option>
                                    </select>
                                </div>
                            </div>

                            {/* Selected Diseases & Allergies */}
                            <div className="form-group">
                                <div className="col-md-8 col-md-offset-2">
                                    {selectedDiseases.map((disease, index) => (
                                        <div key={index} className="selected-item">
                                            {disease}
                                            <button type="button" className="delete-btn" onClick={() => handleDeleteDisease(disease)}>
                                                &#10005;
                                            </button>
                                        </div>
                                    ))}
                                    {selectedAllergies.map((allergy, index) => (
                                        <div key={index} className="selected-item">
                                            {allergy}
                                            <button type="button" className="delete-btn" onClick={() => handleDeleteAllergy(allergy)}>
                                                &#10005;
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Other Inputs */}
                            {/* Age */}
                            <div className="form-group">
                                <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="age">
                                    Age
                                </h4>
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        id="age"
                                        type="number"
                                        placeholder="Age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Gender */}
                            <div className="form-group">
                                <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="gender">
                                    Gender
                                </h4>
                                <div className="col-md-3">
                                    <select
                                        className="form-control"
                                        id="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="form-group">
                                <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="contactInfo">
                                    Contact Info
                                </h4>
                                <div className="col-md-6">
                                    <input
                                        className="form-control"
                                        id="contactInfo"
                                        type="text"
                                        placeholder="E-mail"
                                        value={formData.contactInfo}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        className="form-control"
                                        id="emergencyContact"
                                        type="text"
                                        placeholder="Emergency Contact"
                                        value={formData.emergencyContact}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Room, Bed, and Floor */}
                            <div className="form-group">
                                <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="roomNumber">
                                    Room Number
                                </h4>
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        id="roomNumber"
                                        type="text"
                                        placeholder="Room Number"
                                        value={formData.roomNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="bedNumber">
                                    Bed Number
                                </h4>
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        id="bedNumber"
                                        type="text"
                                        placeholder="Bed Number"
                                        value={formData.bedNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <h4 className="control-label col-md-2 col-md-offset-2" htmlFor="floorNumber">
                                    Floor Number
                                </h4>
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        id="floorNumber"
                                        type="text"
                                        placeholder="Floor Number"
                                        value={formData.floorNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="form-group">
                                <div className="col-md-offset-4 col-md-3">
                                    <button className="btn-lg btn-primary" type="submit">
                                        Request Reservation
                                    </button>
                                </div>
                                <div className="col-md-3">
                                    <button className="btn-lg btn-danger" type="button" style={{ float: 'right' }}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReservationForm;
