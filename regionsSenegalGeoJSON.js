const regionsSenegal = {
    "type": "FeatureCollection",
    "features": [
        // Exemple de structure — à remplacer par les limites GeoJSON réelles
        {
            "type": "Feature",
            "properties": {
                "nom": "Dakar",
                "population": 3500000,
                "femmes": 1800000,
                "hommes": 1700000,
                "enfants": 800000,
                "taux_chomage": 12,
                "scolarisees": 300000
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [] /* coordonnées GeoJSON réelles de Dakar ici */
            }
        },
        {
            "type": "Feature",
            "properties": {
                "nom": "Thiès",
                "population": 2500000,
                "femmes": 1280000,
                "hommes": 1220000,
                "enfants": 650000,
                "taux_chomage": 10,
                "scolarisees": 220000
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [] /* coord. GeoJSON de Thiès */
            }
        },
        // … répète la structure pour les 12 autres régions
    ]
};
