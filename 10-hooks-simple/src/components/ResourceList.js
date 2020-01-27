import React from 'react'
import useResources from './useResources'

const ResourceList = (props) => {
    const resources = useResources(props.resource)
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