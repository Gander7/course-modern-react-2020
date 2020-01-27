import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = (props) => {
    const [resources, setResources] = useState([])

    const fetchResource = async (resource) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(res.data)
    }

    useEffect(() => {
        fetchResource(props.resource)
    }, [props.resource])

    return (
        <ul>
            {resources.map((r) => {
                return (
                    <li key={r.id}>{r.title}</li>
                )
            })}
        </ul>
    )
}

export default ResourceList