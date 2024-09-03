import React from "react";

export default function Visimisi() {
    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>VISI & MISI KOTA SEMARANG</h1>
            
            <h2 style={{ marginBottom: "10px" }}>VISI</h2>
            <p style={{ fontSize: "18px", fontStyle: "italic" }}>
                "Semarang Kota Perdagangan dan Jasa yang Hebat menuju Masyarakat Semakin Sejahtera"
            </p>
            
            <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>MISI</h2>
            <ul style={{ fontSize: "18px" }}>
                <li>Mewujudkan kehidupan masyarakat yang berbudaya dan berkualitas.</li>
                <li>Mewujudkan pemerintahan yang semakin handal untuk meningkatkan pelayanan publik.</li>
                <li>Mewujudkan kota metropolitan yang dinamis dan berwawasan lingkungan.</li>
                <li>Memperkuat ekonomi kerakyatan berbasis iklim usaha yang kondusif.</li>
            </ul>
        </div>
    );
}