
import { useState, useEffect } from "react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface YouTubeEmbedProps {
  limit?: number;
  channelId?: string;
}

const YouTubeEmbed = ({ limit = 3, channelId = "LifeWithFaithAminaho" }: YouTubeEmbedProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // For now, using a placeholder list of videos since we don't have API integration yet
  useEffect(() => {
    // This would normally fetch from YouTube API
    const dummyVideos = [
      {
        id: "dQw4w9WgXcQ", // This is a placeholder - we'd fetch real IDs from the API
        title: "UK Immigration Nightmares - Avoiding Scams",
        thumbnail: "/lovable-uploads/1a57df7c-2cc7-480f-8173-d8a701d4acae.png"
      },
      {
        id: "yJ1GZTH4Ivw", // Another placeholder
        title: "Immigrant's Success Story - From Struggle to Triumph",
        thumbnail: "/lovable-uploads/7c481c74-6d41-47dc-b127-aebb7db88f99.png"
      },
      {
        id: "C0DPdy98e4c", // Another placeholder
        title: "About the Channel - Life with Faith Aminaho",
        thumbnail: "/lovable-uploads/a20b09b6-cd74-4af1-bb14-e2399a891e80.png"
      }
    ];
    
    setVideos(dummyVideos);
    if (dummyVideos.length > 0) {
      setSelectedVideo(dummyVideos[0].id);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Main Video Player */}
      {selectedVideo && (
        <div className="aspect-video w-full mb-6">
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube video player"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Video Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div 
            key={video.id}
            className={`cursor-pointer group transition-all duration-300 ${selectedVideo === video.id ? 'ring-2 ring-brand-red' : ''}`}
            onClick={() => setSelectedVideo(video.id)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="mt-2 font-medium line-clamp-2">{video.title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a 
          href="https://www.youtube.com/@LifeWithFaithAminaho" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-red hover:text-red-600 font-medium"
        >
          View all videos on YouTube
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
