import React from 'react'

import Event from './Event'
const Events = ({ state, dispatch }) => {

return (
    <>
    <h4>イベント一覧</h4>
    <table className="table table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>削除</th>
                <th>ボディ</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            { state.map((event) => (<Event key={event.id} event={event} dispatch={dispatch}/>))}
        </tbody>
    </table>
    </>
    )
}
export default Events
