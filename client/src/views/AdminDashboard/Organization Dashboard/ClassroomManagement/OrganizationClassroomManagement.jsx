import React from "react";
import { useState, useEffect } from "react";
import { useGlobalState } from "../../../../Utils/userState";
import { useNavigate } from 'react-router-dom';
import { getOrganization, deleteMentor } from '../../../../Utils/requests';
import ListView from './ListView';
import './ClassroomManagement.less';
import { message } from 'antd';


export default function OrganizationClassroomManagement({ organizationId } ) {
    const [mentorData, setMentorData] = useState([]);
    const [organization, setOrganization] = useState({});
    const [value] = useGlobalState('currUser');
    const navigate = useNavigate();

    
    // Navigates to Organization Dashboard
    const navigateOrganizationDash = () => {
      navigate('/organization-dashboard');
    }
    

    const handleDelete = async (key) => {
      // Removing to-be-deleted mentor from mentorData
      setMentorData([...mentorData].filter((item) => item.key !== key));

      const res = await deleteMentor(key);

      if (res.data) {
        message.success(`Successfully deleted mentor ${res.data.first_name + ' ' + res.data.last_name}.`);
      } 
      else {
        message.error(res.err);
      }
    };


    // Loading Organization, Mentors
    useEffect(() => {
      let data = [];

      getOrganization(organizationId).then((res) => {
        if (res.data) {
          // Setting the Organization
          const organization = res.data;
          setOrganization(organization);

          // Storing ID and Names of Mentors
          organization.mentors.forEach((mentor) => {
            data.push({
              key: mentor.id,
              name: mentor.first_name + ' ' + mentor.last_name,
            });
          });
          setMentorData(data);
        } 
        else {
          message.error(res.err);
        }
      });
    }, [organizationId]);


    return (
        <div>
            <button id='home-back-btn' onClick={navigateOrganizationDash}>
              <i className='fa fa-arrow-left' aria-hidden='true' />
            </button>
            <div id='page-header'>
              <h1>Classroom Management</h1>
            </div>
            <ListView
              mentorData={mentorData}
              handleDelete={handleDelete}
            />
        </div>
    )
}