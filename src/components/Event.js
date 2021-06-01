import React from 'react';

const Event = ({ dispatch, event }) => {
    const id = event.id
    const handleClickDeleteButton = () => {
        dispatch({ type: 'DELETE_EVENT', id})
    }
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button className="btn btn-danger" type="button" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event
