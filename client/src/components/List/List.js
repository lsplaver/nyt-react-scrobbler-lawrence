import React from "react";

const List = ({ lstItem }) => {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">
                {lstItem}
            </ul>
        </div>
    );
};

export default List;