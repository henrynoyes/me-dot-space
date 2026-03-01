const VideoEmbed = ({ videoPath, caption }) => {
  
  return (
    <div className="my-0">
      <video
        className={"mx-auto rounded-lg border-2 border-gray-900"}
        controls
        loop
        muted
        autoPlay
      >
        <source src={videoPath} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {caption && (
        <p className="text-center mt-2 text-xl">{caption}</p>
      )}
    </div>
  );
};

export default VideoEmbed;