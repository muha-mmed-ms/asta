import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function LocationMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const locations = [
    {
      name: "Asta Arise",
      address: "8/91, CP Ramaswamy Road, Alwarpet, Chennai – 600018",
      coords: [13.0339, 80.2565]
    },
    {
      name: "Asta AVM",
      address: "AVM Studio Complex, 38, Arcot Road, Vadapalani, Chennai 600 026",
      coords: [13.0524, 80.2121]
    },
    {
      name: "Asta Aura",
      address: "Padmavathiar Salai, Gopalapuram, Chennai, Tamil Nadu 600086",
      coords: [13.0632, 80.2487]
    },
    {
      name: "Corporate Office",
      address: "No 2, Ethiraj Salai, C-in-C Road, Egmore, Tamil Nadu, 600008",
      coords: [13.0732, 80.2609]
    }
  ];

  useEffect(() => {
    // Only initialize map once
    if (mapInstanceRef.current) return;
    if (!mapRef.current) return;

    // Create custom icon using your logo
    const customIcon = L.icon({
      iconUrl: '/images/astha-map-logo.png',
      iconSize: [40, 40], // Adjust size as needed
      iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
      popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null
    });

    // Initialize map centered on Chennai
    const map = L.map(mapRef.current, {
      center: [13.0524, 80.2301],
      zoom: 13,
      zoomControl: true,
      scrollWheelZoom: true
    });

    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    // Add markers for each location
    locations.forEach((location) => {
      const marker = L.marker(location.coords, { icon: customIcon }).addTo(map);
      
      // Add popup with location details
      marker.bindPopup(`
        <div style="font-family: 'Marcellus', serif; padding: 8px;">
          <h3 style="font-size: 16px; font-weight: 600; margin: 0 0 8px 0; color: #1a2947;">
            ${location.name}
          </h3>
          <p style="font-family: 'Mulish', sans-serif; font-size: 14px; margin: 0; color: #666; line-height: 1.5;">
            ${location.address}
          </p>
        </div>
      `);
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="w-full">
        {/* Leaflet Map - Interactive with Custom Markers */}
        <div 
          ref={mapRef} 
          className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
          style={{ zIndex: 0 }}
        />
      </div>
    </section>
  );
}

