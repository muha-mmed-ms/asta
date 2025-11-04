# Alternative Ways to Show Your Locations on the Map

Here are several methods to display all 4 Asta Properties locations with markers:

## ✅ Current Solution (Easiest - Already Implemented!)

The map now automatically includes all 4 location coordinates in the URL. The map will show:
- ✅ All 4 locations with pins
- ✅ Auto-centered and zoomed to show all properties
- ✅ No Google My Maps setup needed
- ✅ Works immediately

**Locations included:**
1. Asta Arise - Alwarpet
2. Asta AVM - Vadapalani
3. Asta Aura - Gopalapuram
4. Corporate Office - Egmore

---

## Alternative 1: OpenStreetMap with Leaflet (Free, No API Key)

If you want a completely free solution with custom markers:

### Install Leaflet:
```bash
npm install leaflet react-leaflet
```

### Update `LocationMap.jsx`:
```jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function LocationMap() {
  const locations = [
    { name: "Asta Arise", coords: [13.0339, 80.2565], address: "8/91, CP Ramaswamy Road, Alwarpet" },
    { name: "Asta AVM", coords: [13.0524, 80.2121], address: "AVM Studio Complex, Vadapalani" },
    { name: "Asta Aura", coords: [13.0632, 80.2487], address: "Padmavathiar Salai, Gopalapuram" },
    { name: "Corporate Office", coords: [13.0732, 80.2609], address: "No 2, Ethiraj Salai, Egmore" }
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <MapContainer 
          center={[13.0524, 80.2301]} 
          zoom={12} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {locations.map((location, idx) => (
            <Marker key={idx} position={location.coords}>
              <Popup>
                <strong>{location.name}</strong><br />
                {location.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
```

**Pros:**
- ✅ Free (no API key needed)
- ✅ Full customization of markers
- ✅ No usage limits
- ✅ Fast loading

**Cons:**
- ❌ Need to install library
- ❌ Less familiar to users (not Google Maps)

---

## Alternative 2: Static Image Map with Clickable Areas

Create a static map image with overlaid clickable markers:

```jsx
export default function LocationMap() {
  const locations = [
    { name: "Asta Arise", link: "https://goo.gl/maps/xxx" },
    { name: "Asta AVM", link: "https://goo.gl/maps/yyy" },
    { name: "Asta Aura", link: "https://goo.gl/maps/zzz" },
    { name: "Corporate Office", link: "https://goo.gl/maps/www" }
  ];

  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <img 
          src="/images/map.png" 
          alt="Locations Map" 
          className="w-full h-full object-cover"
        />
        {/* Overlay clickable markers */}
        <div className="absolute top-[30%] left-[45%] w-8 h-8 bg-[#B1A490] rounded-full cursor-pointer hover:scale-110 transition" 
             onClick={() => window.open(locations[0].link)}>
        </div>
        {/* Add more markers for other locations */}
      </div>
    </section>
  );
}
```

**Pros:**
- ✅ Fast loading
- ✅ No external dependencies
- ✅ Full design control

**Cons:**
- ❌ Not interactive (can't zoom/pan)
- ❌ Need to create/update static image

---

## Alternative 3: Multiple Single-Location Maps

Show 4 separate mini-maps in a grid:

```jsx
export default function LocationMap() {
  const locations = [
    { name: "Asta Arise", embed: "embed_url_1" },
    { name: "Asta AVM", embed: "embed_url_2" },
    { name: "Asta Aura", embed: "embed_url_3" },
    { name: "Corporate Office", embed: "embed_url_4" }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-2">{loc.name}</h3>
              <iframe src={loc.embed} className="w-full h-[300px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Pros:**
- ✅ Each location clearly separated
- ✅ Users can interact with each map individually

**Cons:**
- ❌ Takes more vertical space
- ❌ Need 4 separate embed URLs

---

## Alternative 4: Google My Maps (Most Professional - Recommended for Best Results)

If you want the most professional look with custom styled markers:

1. Go to [Google My Maps](https://www.google.com/maps/d/)
2. Create a new map
3. Add all 4 locations with custom icons/colors
4. Get embed code
5. Replace the URL in `LocationMap.jsx`

**This gives you:**
- ✅ Custom marker icons with your brand colors
- ✅ Rich info windows with images
- ✅ Layers (e.g., group by property type)
- ✅ Directions between locations
- ✅ Most professional appearance

---

## Recommendation

**Current solution** (already implemented) is the best balance of:
- ✅ No setup required
- ✅ Shows all locations
- ✅ Interactive Google Maps
- ✅ Works immediately

If you need more customization or branding, use **Google My Maps (Alternative 4)**.
If you want complete free solution, use **OpenStreetMap (Alternative 1)**.

