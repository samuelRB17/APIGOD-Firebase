export default async function Original() {
    const url = "https://thronesapi.com/api/v2/Characters";

    // contenedor principal donde se mostrará la info
    const contenedor = document.getElementById("root");
    contenedor.innerHTML = "<h2>Personajes de Game of Thrones</h2>";

    try {
        const respuesta = await fetch(url);
        const personajes = await respuesta.json();

        // crear lista de personajes
        const lista = document.createElement("div");
        lista.style.display = "grid";
        lista.style.gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))";
        lista.style.gap = "15px";

        personajes.forEach(p => {
            const card = document.createElement("div");
            card.style.border = "1px solid #b2b42dff";
            card.style.padding = "10px";
            card.style.borderRadius = "8px";
            card.style.textAlign = "center";
            card.style.background = "#f9f9f9";

            card.innerHTML = `
                <img src="${p.imageUrl}" alt="${p.fullName}" style="width:100%; border-radius:8px;">
                <h3 style="font-size:16px; margin:10px 0 5px;">${p.fullName}</h3>
                <p style="margin:0; font-size:14px;">${p.title}</p>
            `;

            lista.appendChild(card);
        });

        contenedor.appendChild(lista);

    } catch (error) {
        contenedor.innerHTML = "<p>Error al cargar los personajes</p>";
        console.error(error);
    }
}
