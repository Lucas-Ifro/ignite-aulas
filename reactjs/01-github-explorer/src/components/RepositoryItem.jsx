import React from "react";
import { ReactDOM } from "react";

export function RepositoryItem(props) {
    return (
    <li>
            <strong>{props.repository.name ?? "Undfined"}</strong>
            <p>{props.repository.description}</p>

        <a href={props.repository.link}>
            Acessar repositório
        </a>
    </li>

    );
}