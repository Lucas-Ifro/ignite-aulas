import React from "react";  
import { RepositoryItem } from "./RepositoryItem";

let repository = {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/lucas-Ifro"
}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}