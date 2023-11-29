import React, { useState, useEffect } from 'react';


const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('/services');
                if (response.ok) {
                    const data = await response.json();

                    // Extracting only id and name from services
                    const modifiedServices = data.map(service => ({
                        id: service.id,
                        name: service.name,
                        description: service.description,
                        price: service.price
                    }));

                    setServices(modifiedServices);
                    console.log(modifiedServices);
                } else {
                    console.error('Failed to fetch services');
                }
            } catch (error) {
                console.error('Error occurred while fetching services:', error);
            }
        };

        fetchServices();
    }, []);

    return (
        <div>
            <h2>Services</h2>
            <ul>
                {services.map((service) => (
                    <li key={service.id}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <p>${service.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
