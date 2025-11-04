# Install Leaflet for Interactive Map

## Installation Steps

Run this command in your terminal:

```bash
npm install leaflet
```

That's it! The map component is already set up and ready to use.

## What You Get

✅ **Interactive map** with all 4 Asta Properties locations
✅ **Custom markers** with your brand color (#B1A490)
✅ **Clickable markers** that show location name and address
✅ **Zoom & Pan** functionality
✅ **Mobile responsive**
✅ **No API key required**
✅ **Free to use**
✅ **No usage limits**

## Features

### Custom Markers
- Uses your custom Asta logo (`astha-map-logo.png`)
- 40x40 pixel size (adjustable)
- Professional branded appearance

### Locations Included
1. **Asta Arise** - Alwarpet
2. **Asta AVM** - Vadapalani
3. **Asta Aura** - Gopalapuram
4. **Corporate Office** - Egmore

### Interactive Popups
- Click any marker to see location details
- Styled with your brand fonts (Marcellus & Mulish)
- Shows location name and full address

### Map Controls
- Zoom in/out buttons
- Scroll wheel zoom
- Touch gestures on mobile
- Pan by dragging

## After Installation

Once you run `npm install leaflet`, restart your development server:

```bash
npm run dev
```

The map will display automatically with all 4 locations marked!

## Customization Options

### Change Marker Size
In `LocationMap.jsx`, line 40, adjust the `iconSize`:
```javascript
iconSize: [40, 40], // [width, height] in pixels
iconAnchor: [20, 40], // [width/2, height] - centers marker at location
popupAnchor: [0, -40], // [0, -height] - positions popup above marker
```

### Use Different Marker Image
Replace `/images/astha-map-logo.png` with your image path:
```javascript
iconUrl: '/images/your-custom-marker.png',
```

### Adjust Map Center/Zoom
In `LocationMap.jsx`, line 54-56:
```javascript
center: [13.0524, 80.2301],  // [latitude, longitude]
zoom: 12,  // Zoom level (1-19)
```

### Change Map Style
You can use different tile providers:

**Dark Mode:**
```javascript
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);
```

**Satellite:**
```javascript
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri'
}).addTo(map);
```

## Troubleshooting

**Map not showing?**
- Make sure you ran `npm install leaflet`
- Restart your dev server after installing
- Check browser console for errors

**Markers not appearing?**
- Coordinates are correct (verified for Chennai locations)
- Check that the component is mounted

**Map controls look weird?**
- Leaflet CSS is imported automatically
- Clear browser cache if needed

## Benefits Over Google Maps

✅ **Free** - No API key, no billing
✅ **No limits** - Unlimited map loads
✅ **Customizable** - Full control over appearance
✅ **Privacy** - No Google tracking
✅ **Fast** - Lightweight library
✅ **Reliable** - No "Invalid pb parameter" errors

Enjoy your new interactive map! 🎉

