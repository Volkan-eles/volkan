
import React, { useState } from 'react';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader
} from '@/components/ui/sidebar';
import { 
  Home, 
  Palette, 
  LayoutGrid, 
  Sticker, 
  Type, 
  FolderOpen, 
  MoreHorizontal, 
  Settings,
  Download,
  Bell,
  MessageSquare,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WebcamCapture from '@/components/WebcamCapture';
import { Input } from '@/components/ui/input';
import PhotoLayout from '@/components/PhotoLayout';

const Dashboard = () => {
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [selectedLayout, setSelectedLayout] = useState<string>('elegant-strip');
  const [selectedOverlay, setSelectedOverlay] = useState<{ id: string; name: string; src: string } | null>(null);
  const [frameColor, setFrameColor] = useState<string>('white');
  const [isCapturing, setIsCapturing] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('frame-color');
  const overlayImageRef = React.useRef<HTMLImageElement | null>(null);

  // Handle photo capture
  const handleCapture = () => {
    setIsCapturing(true);
  };

  const handlePhotoCaptured = (photoSrc: string) => {
    setCapturedPhotos(prev => [...prev, photoSrc]);
    setIsCapturing(false);
  };

  const handleClearPhotos = () => {
    setCapturedPhotos([]);
  };

  // Handle frame color change
  const handleFrameColorChange = (color: string) => {
    setFrameColor(color);
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      <SidebarProvider>
        {/* Sidebar Navigation */}
        <Sidebar className="w-[240px] bg-[#1A1A1A] border-r border-[#333]">
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="text-[#9b87f5] font-bold">
                <span className="text-2xl">Photo Booth</span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 text-white bg-[#4b30ab] hover:bg-[#5b40bb]">
                  <Home size={18} />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
                  <Palette size={18} />
                  <span>Tasarım</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
                  <LayoutGrid size={18} />
                  <span>Layoot</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
                  <Sticker size={18} />
                  <span>Sticker</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
                  <Type size={18} />
                  <span>Text</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
                  <FolderOpen size={18} />
                  <span>Kategoriler</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
                  <MoreHorizontal size={18} />
                  <span>More</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center gap-3 text-gray-300 hover:bg-[#2A2A2A]">
                  <Settings size={18} />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <div className="mt-auto p-4">
            <Button className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] text-white">
              DOWLAND APP
            </Button>
          </div>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-16 border-b border-[#333] flex items-center justify-between px-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search Here" 
                  className="bg-[#222] border-none rounded-full pl-10 pr-4 w-60 h-10 focus:ring-0 focus:ring-offset-0" 
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MessageSquare size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell size={20} />
              </Button>
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/a8f26fe4-1a18-429a-ab24-18509a4b955b.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* Main Photo Booth Area */}
          <div className="flex-1 p-6 flex gap-6">
            {/* Left Section - Camera and Controls */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Camera Frame Colors */}
              <div className="flex justify-center space-x-2">
                <Button 
                  className={`rounded-full px-6 ${frameColor === 'white' ? 'bg-white text-black' : 'bg-gray-200 text-black'}`}
                  onClick={() => handleFrameColorChange('white')}
                >
                  White
                </Button>
                <Button 
                  className={`rounded-full px-6 ${frameColor === 'green' ? 'bg-green-500 text-white' : 'bg-green-500/80 text-white'}`}
                  onClick={() => handleFrameColorChange('green')}
                >
                  Green
                </Button>
                <Button 
                  className="rounded-full px-6 bg-red-500 text-white"
                >
                  More
                </Button>
              </div>
              
              {/* Camera View */}
              <div className={`flex-1 bg-[#4b30ab] p-2 rounded-lg overflow-hidden`}>
                <div className="h-full rounded-lg overflow-hidden bg-white">
                  <WebcamCapture 
                    onCapture={handlePhotoCaptured} 
                    isCapturing={isCapturing}
                    overlayImage={overlayImageRef.current}
                  />
                </div>
              </div>
              
              {/* Camera Buttons */}
              <div className="flex justify-center space-x-4 bg-[#4b30ab] py-3 rounded-lg">
                <Button 
                  variant="ghost" 
                  className="text-white"
                  onClick={() => {}}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8v8H5V8h10zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" fill="currentColor"/>
                  </svg>
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white h-12 w-12 rounded-full border-2 border-white flex items-center justify-center"
                  onClick={handleCapture}
                >
                  <div className="h-10 w-10 rounded-full bg-white"></div>
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white"
                  onClick={() => {}}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" fill="currentColor"/>
                  </svg>
                </Button>
              </div>
              
              {/* Control Tabs */}
              <div className="bg-[#1A1A1A] rounded-lg p-3">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 bg-[#1A1A1A] p-1">
                    <TabsTrigger 
                      value="frame-color" 
                      className={`${activeTab === 'frame-color' ? 'bg-[#333] text-white' : 'text-gray-400'}`}
                    >
                      Frame Color
                    </TabsTrigger>
                    <TabsTrigger 
                      value="stickers" 
                      className={`${activeTab === 'stickers' ? 'bg-[#333] text-white' : 'text-gray-400'}`}
                    >
                      Stickers
                    </TabsTrigger>
                    <TabsTrigger 
                      value="idol" 
                      className={`${activeTab === 'idol' ? 'bg-[#333] text-white' : 'text-gray-400'}`}
                    >
                      Idol
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                
                {/* Stickers Grid */}
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="aspect-square border border-[#333] rounded-md"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Section - Layout */}
            <div className="w-[350px] flex flex-col gap-4">
              {/* Layout Selector */}
              <div className="bg-blue-600 text-white p-3 rounded-lg flex items-center justify-between">
                <span>Elegant Strip - 4 Photos</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5H7z" fill="currentColor"/>
                </svg>
              </div>
              
              {/* Photo Layout */}
              <div className="flex-1 bg-white rounded-lg overflow-hidden">
                <PhotoLayout 
                  photos={capturedPhotos} 
                  layout={selectedLayout}
                  frameStyle={frameColor}
                />
              </div>
              
              {/* Download Button */}
              <Button className="w-full bg-[#4b30ab] hover:bg-[#5b40bb] py-6 text-white text-lg font-medium">
                Dowland
              </Button>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
