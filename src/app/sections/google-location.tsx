'use client';

import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface GoogleMapWidgetProps {
  latitude: number;
  longitude: number;
  address?: string;
  title?: string;
  zoom?: number;
  height?: string;
  className?: string;
}

export default function GoogleMapWidget({
  latitude,
  longitude,
  address,
  title = 'Event Location',
  zoom = 15,
  height = '300px',
  className = '',
}: GoogleMapWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const mapEmbedUrlNoKey = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">

        <div className="bg-white/5 px-4 py-3 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              <div>
                <h3 className="text-white font-medium text-sm">{title}</h3>
                {address && (
                  <p className="text-white/60 text-xs">{address}</p>
                )}
              </div>
            </div>
            <button
              onClick={openInGoogleMaps}
              className="text-purple-400 hover:text-purple-300 transition-colors"
              title="Open in Google Maps"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative" style={{ height }}>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="flex flex-col items-center gap-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
                <p className="text-white/60 text-xs">Loading map...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={mapEmbedUrlNoKey}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsLoaded(true)}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}