
# Kpop Photo Booth Web Application

![Kpop Photo Booth](public/og-image.png)

## 📸 Overview

This is an interactive photo booth web application designed for K-pop fans to create photo strips and layouts featuring their favorite idols. The application allows users to take photos with their webcam, apply various layouts, add stickers, customize backgrounds, and download their creations.

## ✨ Features

### Camera & Photo Capture
- **Live Webcam Feed**: Real-time webcam integration with responsive design
- **Countdown Timer**: Visual countdown before capturing photos
- **Mirror Mode**: Flip camera horizontally for selfie-style photos
- **Multi-photo Capture**: Take multiple photos for different layout styles

### Layouts & Customization
- **Multiple Layout Options**: Various layout styles including:
  - Classic Strip (4 photos)
  - Vertical Strip (4 photos)
  - Elegant Strip (4 photos with decorative text)
  - Large Vertical (2 photos)
  - Grid layouts
  - Diagonal strips
  - Creative overlaps
  - Full frame
- **Background Customization**: Change background colors to customize the appearance
- **Frame Color Options**: Select different frame colors to match your style

### Stickers & Overlays
- **K-pop Stickers**: Add K-pop themed stickers and character overlays
- **Overlay Positioning**: Place overlays anywhere on the photo
- **Idol Integration**: Support for various K-pop idol images

### Export & Sharing
- **Download Options**: Save your creations as PNG images
- **Social Sharing**: Integration with Twitter and Facebook sharing

### User Interface
- **Responsive Design**: Works on both desktop and mobile devices
- **Dark Mode UI**: Modern dark-themed interface for better viewing experience
- **Interactive Controls**: User-friendly controls for all features
- **Sidebar Navigation**: Collapsible sidebar with easy navigation

## 🏗️ Project Structure

```
src/
├── components/              # UI Components
│   ├── layouts/             # Photo layout components
│   │   ├── StripLayouts.tsx # Strip-style layout components
│   │   ├── GridLayouts.tsx  # Grid-style layout components
│   │   └── ...              # Other layout components
│   ├── ui/                  # Shadcn UI components
│   ├── CameraControls.tsx   # Camera control interface
│   ├── DashboardHeader.tsx  # Dashboard header
│   ├── DashboardSidebar.tsx # Sidebar navigation
│   ├── FrameSelector.tsx    # Frame color selection
│   ├── LayoutSelector.tsx   # Layout selection interface
│   ├── OverlaySelector.tsx  # Sticker/overlay selection
│   ├── PhotoBooth.tsx       # Main photo booth component
│   ├── PhotoLayout.tsx      # Layout rendering component
│   ├── PhotoStrip.tsx       # Photo strip rendering
│   ├── StickersGrid.tsx     # Sticker selection grid
│   └── WebcamCapture.tsx    # Webcam integration component
├── pages/                   # Application pages
│   ├── Dashboard.tsx        # Main dashboard page
│   ├── Index.tsx            # Landing page
│   └── NotFound.tsx         # 404 page
├── hooks/                   # Custom React hooks
├── utils/                   # Utility functions
├── constants/               # Constant values and data
└── App.tsx                  # Main application component
```

## 💻 Technologies Used

- **React**: Front-end library for building the user interface
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn UI**: Component library for consistent UI elements
- **React Router**: For navigation between pages
- **React Query**: For data fetching and state management
- **HTML5 Canvas**: For image processing and manipulation
- **Media Capture API**: For accessing the device camera

## 🚀 Key Implementation Details

### Photo Capture Process
The application uses the browser's MediaDevices API to access the user's camera. The `WebcamCapture` component handles the video stream, capturing frames, and adding overlays when photos are taken.

### Layout System
Photos are arranged using a modular layout system defined in the `layouts` directory. Each layout is a React component that takes an array of photos and renders them in a specific configuration.

### State Management
The application uses React's useState and useEffect hooks for local state management. The main state is managed in the Dashboard component and passed down to child components as props.

### Image Processing
Canvas API is used for compositing images, applying overlays, and generating the final downloadable images. The `html2canvas` library helps convert the rendered layouts into downloadable images.

### Responsive Design
The application uses Tailwind CSS's responsive utilities to ensure a good experience across various device sizes. The layout adjusts between mobile and desktop views.

## 🔮 Future Improvements

- Adding more K-pop idol overlays and themed stickers
- Implementing filters and effects for photos
- Adding animated GIF export options
- Integrating with cloud storage for saving creations
- Adding user accounts to save favorite layouts and stickers
- Supporting video capture for short clip creation
- Enhanced social sharing with more platforms

## 📱 Mobile Compatibility

The application is designed to be responsive and works on mobile devices. However, for the best experience, a device with a front-facing camera and adequate screen size is recommended.

## 🛠️ Development Setup

1. Clone the repository:
```sh
git clone <repository-url>
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Open your browser and navigate to the local development URL (usually http://localhost:5173)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- K-pop idol images and stickers are used for demonstration purposes only
- Icons provided by Lucide React
- UI components powered by Shadcn UI
