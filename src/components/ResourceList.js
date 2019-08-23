import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = (props) => {
    const [resources, setResources] = useState([]);
    const fetchResource= async(resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data)
    }
   
    useEffect(() => {
        fetchResource(props.resource)
    }, [props.resource])
    
    return (
        <div>
             <ul>{resources.map((record)=><li key={record.id}>{record.title}</li>)}</ul>
         </div>
    )

}

export default ResourceList;