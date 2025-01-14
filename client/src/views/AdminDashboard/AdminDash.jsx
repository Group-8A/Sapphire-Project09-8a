import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getUser, getAllAdministrators, getOrganizations } from "../../Utils/requests";
import NavBar from '../../components/NavBar/NavBar';
import "../AdminDashboard/AdminDash.css";
import { message } from 'antd';


export default function AdminDash() {
    const [organizations, setOrganizations] = useState([]);
    const [admin, setAdmin] = useState({});
    const navigate = useNavigate();


    // Navigates to Organization Dashboard
    const navigateOrganizationDash = () => {
        navigate('/organization-dashboard');
    }


    // Loads Administrator
    useEffect(() => {
        getUser()
            .then((response) => {
                getAdministrator(response.data.id);
            })
            .catch((error) => {
                message.error(error);
                navigate('/adminlogin');
            })
    }, []);


    // Loads Organizations
    useEffect(() => {
        if (admin == null || Object.keys(admin).length == 0)
            return;

        // Loading by ID returns more information about the organization
        let organizationIds = [];
        admin.organizations.forEach((organization) => {
            organizationIds.push(organization.id);
        });

        getOrganizations(organizationIds).then((organizations) => {
            setOrganizations(organizations);
        });
    }, [admin])


    // Returns Administrator with userID
    const getAdministrator = async (userID) => {
        getAllAdministrators().then((response) => {
            const admins = response.data;
            for (let i = 0; i < admins.length; i++) {
                if (admins[i].user.id === userID) {
                    setAdmin(admins[i]);
                }
            }
        })
    }


    return (
        <div className='admin-dash container'>
            <div className='nav-padding'>
                <div id='main-header'>Welcome {admin.first_name}!</div>
                <NavBar />
            </div>
            <div className='button-container'>
                <button onClick={navigateOrganizationDash}>View Organizations</button>
            </div>
        </div>
    )
}