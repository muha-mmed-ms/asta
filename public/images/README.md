# Images Directory

Please add your images to this folder.

## Map Image
- `map.jpg` - Your Chennai locations map screenshot (used in LocationMap component)

## Room Gallery Images

The Room Gallery component supports **multiple images per room category**.

## Image Naming Structure

### Bedroom (Multiple Images Supported)
- `bedroom-1.jpg` - First bedroom image
- `bedroom-2.jpg` - Second bedroom image
- Add more: `bedroom-3.jpg`, `bedroom-4.jpg`, etc.

### Other Rooms (Single or Multiple Images)
- `kitchen.jpg` - Kitchen interior image
- `living-room.jpg` - Living room interior image
- `balcony.jpg` - Balcony image
- `bathroom.jpg` - Bathroom interior image
- `dressing.jpg` - Dressing room image
- `amenities.jpg` - Amenities image

## Adding Multiple Images to Any Room

To add multiple images for any room category, update the `rooms` array in `src/components/RoomGallery.jsx`:

```javascript
{
  id: 'kitchen',
  name: 'KITCHEN',
  images: [
    '/images/kitchen-1.jpg',
    '/images/kitchen-2.jpg',
    '/images/kitchen-3.jpg'
  ]
}
```

## Navigation

- **Outer arrows** (left/right edges) - Switch between different room categories
- **Inner arrows** (white circles) - Only appear if a room has multiple images, switch between images within that room
- **Dot indicators** - Show which image you're viewing in rooms with multiple images

## Image Specifications

- **Recommended resolution**: 1920x1080 or higher
- **Aspect ratio**: 16:9 or 21:9 works best
- **Format**: JPG or PNG
- **File size**: Optimized for web (under 500KB per image recommended)

Once you add these images, they will automatically appear in the Room Gallery component on your website.

