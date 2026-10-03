"use client";
import React, { useState } from "react";
import { X, User } from "lucide-react";

interface EventSpeakerProps {
  name: string;
  company: string;
  bio: string;
  image?: string | null;
}

const convertGoogleDriveUrl = (
  url: string | null | undefined,
): string | null => {
  if (!url) return null;

  const match = url.match(/[?&]id=([^&]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }

  return url;
};

export const EventSpeaker: React.FC<EventSpeakerProps> = ({
  name,
  company,
  bio,
  image,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const imageUrl = convertGoogleDriveUrl(image);

  return (
    <>
      <div
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="h-60 relative overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-purple-500" />
              </div>
            </div>
          )}
        </div>

        <div className="bg-purple-800 text-white p-4">
          <h3 className="text-lg font-bold mb-1 truncate" title={name}>
            {name}
          </h3>
          <p className="text-sm text-purple-200 truncate">{company}</p>
        </div>
      </div>

      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsDialogOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-purple-800 to-pink-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{name}</h2>
                  <p className="text-purple-100">{company}</p>
                </div>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32">
                    <div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-spin"
                      style={{ animationDuration: "3s" }}
                    ></div>
                    <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white">
                          <User className="w-16 h-16 text-purple-500" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Biography
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
