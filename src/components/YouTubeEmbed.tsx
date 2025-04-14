import { useState, useEffect } from "react";
import { Play, ExternalLink } from "lucide-react";
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
const YouTubeEmbed = ({
  limit = 3,
  channelId = "LifeWithFaithAminaho"
}: YouTubeEmbedProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  useEffect(() => {
    // These are the specific videos requested by the user
    const requestedVideos = [{
      id: "Sirs2fhPBgY",
      title: "Life in the UK: My Immigration Journey and How to Navigate Your Path",
      thumbnail: "https://i3.ytimg.com/vi/Sirs2fhPBgY/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Sirs2fhPBgY"
    }, {
      id: "Jvt2UYzkzGU",
      title: "Why I Became British | Pros and Cons of Being a British Citizen",
      thumbnail: "https://i3.ytimg.com/vi/Jvt2UYzkzGU/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Jvt2UYzkzGU"
    }];
    setVideos(requestedVideos);
    if (requestedVideos.length > 0) {
      setSelectedVideo(requestedVideos[0].id);
    }
    setLoading(false);
  }, []);
  if (loading) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
      </div>;
  }
  return <div className="w-full">
      {/* Main Video Player */}
      {selectedVideo && <div className="aspect-video w-full mb-6 rounded-xl overflow-hidden shadow-xl">
          <iframe src={`https://www.youtube.com/embed/${selectedVideo}`} title="YouTube video player" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>}

      {/* Video Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map(video => <div key={video.id} className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${selectedVideo === video.id ? 'ring-2 ring-brand-red' : ''}`} onClick={() => setSelectedVideo(video.id)}>
            <div className="relative">
              
              
              {selectedVideo === video.id && <div className="absolute top-3 right-3 bg-brand-red text-white text-xs font-medium py-1 px-2 rounded-md">
                  Now Playing
                </div>}
            </div>
            <div className="p-4">
              
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-red hover:text-red-700 inline-flex items-center gap-1" onClick={e => e.stopPropagation()}>
                <span>Watch on YouTube</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>)}
      </div>

      <div className="mt-10 text-center">
        <a href={`https://www.youtube.com/@${channelId}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-red hover:text-red-600 font-medium transition-colors duration-300 border-b border-transparent hover:border-current">
          View all videos on YouTube
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>;
};
export default YouTubeEmbed;