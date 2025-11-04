# Google Maps Iframe Setup Guide

## Current Setup

The LocationMap component now displays **all 4 Asta Properties locations** on an interactive Google Maps iframe:

### Locations Displayed:
1. **Asta Arise** - 8/91, CP Ramaswamy Road, Alwarpet, Chennai – 600018
2. **Asta AVM** - AVM Studio Complex, 38, Arcot Road, Vadapalani, Chennai 600 026
3. **Asta Aura** - Padmavathiar Salai, Gopalapuram, Chennai, Tamil Nadu 600086
4. **Corporate Office** - No 2, Ethiraj Salai, C-in-C Road, Egmore, Tamil Nadu, 600008

## Features

- ✅ **Interactive Map** - Zoom, pan, and explore all locations
- ✅ **Clickable Location Cards** - Click any card to open that location in Google Maps (new tab)
- ✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ✅ **Lazy Loading** - Optimized performance
- ✅ **Beautiful Header** - "Our Locations" with brand styling

## How to Get a REAL Multi-Location Map

The current map URL is a template. To get an **actual working map** with all your locations:

### Option 1: Google My Maps (Recommended)

1. Go to [Google My Maps](https://www.google.com/maps/d/)
2. Click **"Create a New Map"**
3. Add each location:
   - Click "Add marker" icon
   - Search for each address and place a marker
   - Name each marker (Asta Arise, Asta AVM, etc.)
4. Once all 4 locations are added:
   - Click the **Share** button
   - Change sharing to "Anyone with the link"
   - Click **"Embed on my website"**
   - Copy the iframe URL
5. Open `src/components/LocationMap.jsx`
6. Replace the `mapUrl` value (line 26) with your copied URL

### Option 2: Google Maps Directions API

1. Go to [Google Maps](https://www.google.com/maps)
2. Enter your first location as starting point
3. Click "Add destination" and add the other 3 locations
4. Once the route is created, click **Share** → **Embed a map**
5. Copy the embed URL
6. Replace in `LocationMap.jsx` line 26

### Option 3: Simple Single Location

If you want to show just one main location (e.g., Corporate Office):

1. Search for the location on Google Maps
2. Click **Share** → **Embed a map**
3. Copy the iframe code
4. Extract the URL and replace in `LocationMap.jsx` line 26

## Current Map Settings

- **Zoom Level**: Auto-adjusted to show all locations
- **Map Type**: Roadmap view
- **Features**:
  - ✅ Lazy loading for performance
  - ✅ Fully responsive
  - ✅ Interactive (zoom, pan, street view)
  - ✅ Mobile-friendly
  - ✅ Location cards with click-to-open functionality

## Customization

The location cards below the map are automatically synced with the same data from the GetInTouch component. If you update addresses there, they'll automatically update here too!

