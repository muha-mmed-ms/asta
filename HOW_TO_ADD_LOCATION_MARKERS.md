# How to Add Location Markers to Your Map

Follow these steps to create a custom map with markers for all 4 Asta Properties locations:

## Step-by-Step Guide

### 1. Create a Custom Map with Google My Maps

1. Go to **[Google My Maps](https://www.google.com/maps/d/)** (you need to be signed into your Google account)

2. Click **"+ CREATE A NEW MAP"** (red button at the top left)

3. Give your map a name:
   - Click on "Untitled map" at the top
   - Name it: "Asta Properties Locations"
   - Add a description if you want

### 2. Add Your 4 Locations

For each location, follow these steps:

**Location 1: Asta Arise**
1. In the search box, type: `8/91, CP Ramaswamy Road, Alwarpet, Chennai - 600018`
2. Click **"Add to map"** (green button with + icon)
3. Click on the marker, then click the pencil icon to edit
4. Name it: **"Asta Arise"**
5. Add description if you want: "8/91, CP Ramaswamy Road, Alwarpet"
6. Click **Save**

**Location 2: Asta AVM**
1. Search: `AVM Studio Complex, 38, Arcot Road, Vadapalani, Chennai 600 026`
2. Click **"Add to map"**
3. Edit and name it: **"Asta AVM"**
4. Click **Save**

**Location 3: Asta Aura**
1. Search: `Padmavathiar Salai, Gopalapuram, Chennai, Tamil Nadu 600086`
2. Click **"Add to map"**
3. Edit and name it: **"Asta Aura"**
4. Click **Save**

**Location 4: Corporate Office**
1. Search: `No 2, Ethiraj Salai, C-in-C Road, Egmore, Tamil Nadu, 600008`
2. Click **"Add to map"**
3. Edit and name it: **"Asta Corporate Office"**
4. Click **Save**

### 3. Customize Your Markers (Optional)

You can customize the marker colors and icons:
1. Click on a marker
2. Click the paint bucket icon
3. Choose your brand color or custom icon

### 4. Get the Embed Code

1. Once all 4 locations are added, click the **Share** button (top left, next to the map name)

2. In the sharing dialog:
   - Change "Private" to **"Anyone with the link"** or **"Public on the web"**
   - Click **Done**

3. Click the **three dots menu** (⋮) next to the Share button

4. Select **"Embed on my website"**

5. You'll see an `<iframe>` code. Copy the **entire URL** inside the `src=""` attribute
   - It should look like: `https://www.google.com/maps/d/embed?mid=xxxxxxxxxxxxx`

### 5. Update Your Website

1. Open `src/components/LocationMap.jsx`

2. Find line 8 where the `src` attribute is

3. Replace the existing URL with your copied URL:

```jsx
<iframe
  src="YOUR_COPIED_URL_HERE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Chennai Map"
/>
```

4. Save the file

### 6. Done! 🎉

Your map will now show all 4 Asta Properties locations with custom markers that users can click to see details!

## Troubleshooting

**Map not showing?**
- Make sure the map sharing is set to "Public" or "Anyone with the link"
- Check that you copied the complete URL including the `mid=` parameter

**Markers not appearing?**
- Verify all 4 locations were added to the map before getting the embed code
- Try refreshing the My Maps page and re-copy the embed code

**Need to make changes?**
- Go back to [My Maps](https://www.google.com/maps/d/)
- Open your saved map
- Make your changes
- The embed will update automatically (no need to get new code)

