import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const PatientTable = () => {
    const [patients, setPatients] = useState([]);

    // Fetch patient data from your API
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch("http://localhost:3000/getpatients"); 
                const data = await response.json();
                const formattedPatients = data.map((patient) => ({
                    name: patient.name,
                    email: patient.contactInfo,
                    Contact: patient.emergencyContact,
                    patientId: patient.patientId,
                    roomNumber: patient.roomNumber,
                }));
                setPatients(formattedPatients);
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        };
        fetchPatients();
    }, []);

    // Define table columns
    const columns = [
        {
            name: "Patient ID",
            selector: (row) => row.patientId,
            sortable: true,
            style: { color: "#34495e", fontWeight: "bold" },
        },
        {
            name: "Name",
            cell: (row) => (
                <a href="#" style={{ textDecoration: "none", color: "#2c3e50" }}>
                    {row.name}
                </a>
            ),
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
            style: { color: "#2c3e50" },
        },
        {
            name: "Contact",
            selector: (row) => row.Contact,
            sortable: true,
            style: { color: "#2c3e50" },
        },
        {
            name: "Room Number",
            selector: (row) => row.roomNumber,
            sortable: true,
            style: { color: "#2c3e50" },
        },
    ];

    // Custom table styles
    const customStyles = {
        rows: {
            style: {
                backgroundColor: "#f9f9f9",
                "&:hover": {
                    backgroundColor: "#f1f1f1",
                },
            },
        },
        headCells: {
            style: {
                fontSize: "16px",
                fontWeight: "600",
                color: "#fff",
                backgroundColor: "#34495e",
                textAlign: "center",
            },
        },
        cells: {
            style: {
                textAlign: "center",
            },
        },
    };

    return (
        <div className="containeruser mt-5">
            <h3 className="text-center mb-4">Patient Records</h3>
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search patient by name..."
                onChange={(e) => {
                    const searchValue = e.target.value.toLowerCase();
                    const filteredPatients = patients.filter((patient) =>
                        patient.name.toLowerCase().includes(searchValue)
                    );
                    setPatients(filteredPatients);
                }}
            />
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <DataTable
                        columns={columns}
                        data={patients}
                        pagination
                        highlightOnHover
                        customStyles={customStyles}
                    />
                </div>
            </div>
        </div>
    );
};

export default PatientTable;
