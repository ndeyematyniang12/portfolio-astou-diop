// Initialisation de la carte centrée sur le Sénégal
const map = L.map('map').setView([14.5, -14.5], 6);

// Ajouter le fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Fonction pour afficher les infos détaillées
function onEachFeature(feature, layer) {
    layer.on('click', function() {
        const p = feature.properties;
        const content = `
            <div class="info">
                <h3>${p.nom}</h3>
                <p><strong>Population totale :</strong> ${p.population.toLocaleString()}</p>
                <p><strong>Femmes :</strong> ${p.femmes.toLocaleString()}</p>
                <p><strong>Hommes :</strong> ${p.hommes.toLocaleString()}</p>
                <p><strong>Enfants :</strong> ${p.enfants.toLocaleString()}</p>
                <p><strong>Taux de chômage :</strong> ${p.taux_chomage}%</p>
                <p><strong>Scolarisées :</strong> ${p.scolarisees.toLocaleString()}</p>
            </div>
        `;
        layer.bindPopup(content).openPopup();
    });
}

// Ajout des régions à la carte
L.geoJSON(regionsSenegal, {
    style: {
        color: "#2c3e50",
        weight: 2,
        fillColor: "#3498db",
        fillOpacity: 0.5
    },
    onEachFeature: onEachFeature
}).addTo(map);
