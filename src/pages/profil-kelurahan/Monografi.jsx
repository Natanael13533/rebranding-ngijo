import React from "react";

export default function Monografi() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Monografi Statis & Dinamis</h1>
            <p>Lihat Detail Data Monografi</p>
            <iframe
                src="/Monografi.pdf" // Path ke file PDF di folder public
                style={{ width: "100%", height: "600px", border: "none", marginTop: "20px" }}
                title="Monografi PDF"
            />
        </div>
    );
}
