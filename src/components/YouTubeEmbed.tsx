
import { useState, useEffect } from "react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

interface YouTubeEmbedProps {
  limit?: number;
  channelId?: string;
}

const YouTubeEmbed = ({ limit = 3, channelId = "LifeWithFaithAminaho" }: YouTubeEmbedProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    // These are the specific videos requested by the user
    const requestedVideos = [
      {
        id: "1xyGRWhKbfo",
        title: "Seeking Asylum In The US | WHAT YOU NEED TO KNOW",
        thumbnail: "https://i3.ytimg.com/vi/1xyGRWhKbfo/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=1xyGRWhKbfo"
      },
      {
        id: "Sirs2fhPBgY",
        title: "Life in the UK: My Immigration Journey and How to Navigate Your Path",
        thumbnail: "https://i3.ytimg.com/vi/Sirs2fhPBgY/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=Sirs2fhPBgY"
      },
      {
        id: "Jvt2UYzkzGU",
        title: "Why I Became British | Pros and Cons of Being a British Citizen",
        thumbnail: "https://i3.ytimg.com/vi/Jvt2UYzkzGU/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=Jvt2UYzkzGU"
      }
    ];
    
    setVideos(requestedVideos);
    if (requestedVideos.length > 0) {
      setSelectedVideo(requestedVideos[0].id);
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
          >
            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setSelectedVideo(video.id);
              }}
              className="block"
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
            </a>
            <h3 className="mt-2 font-medium line-clamp-2">{video.title}</h3>
            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-block text-brand-red hover:underline text-sm"
            >
              Watch on YouTube
            </a>
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
