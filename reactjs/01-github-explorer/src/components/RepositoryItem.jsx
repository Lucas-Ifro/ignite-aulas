import React from "react";

export function RepositoryItem(props) {
    return (
    <li>
            <strong>{props.repository.name ?? "Undfined"}</strong>
            <p>{props.repository.description}</p>

        <a href={props.repository.html_url} target="_blenk">
            Acessar repositório
        </a>
    </li>

    );
}