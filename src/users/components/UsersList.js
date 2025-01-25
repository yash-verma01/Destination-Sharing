import React from "react";
import "./UsersList.css"
import UsersItem from "./UsersItem"
import Card from "../../shared/components/UIElements/Card";
function UsersList(props) {

    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                <h2>no user found</h2>
                </Card>
            </div>
        );
    }
    return (
        <ul className="user-list">
            {props.items.map(user => (
                <UsersItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />

            ))}
        </ul>
    );
}
export default UsersList;