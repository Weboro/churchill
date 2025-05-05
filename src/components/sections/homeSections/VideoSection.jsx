import React from "react";

const videoFiles = [
    "vid-ch-one.mp4",
    "vid-ch-two.mp4",
    "vid-ch-three.mp4",
    "vid-ch-four.mp4",

];

const VideoSection = () => {
    return (
        <div className="container mx-auto px-5">
            <h2 className="text-3xl font-bold mb-12 text-center">Explore Churchill Institute of Higher Education</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {videoFiles.map((file, index) => (
                    <div key={index} className="aspect-[9/16] overflow-hidden rounded-lg">
                        <video
                            src={`/assets/videos/${file}`}
                            controls
                            muted
                            loop
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoSection;
