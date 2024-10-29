import { useEffect, useState } from "react";

export default function Cep() {
    const [adress, setAdress] = useState(null);

    useEffect(() => {

        fetch("https://viacep.com.br/ws/83302220/json/")
            .then(response => response.json())
            .then((data) => {
                setAdress(data);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    });

    return (
        <div>
            <h1>Consultar CEP</h1>
        </div>
    );
}