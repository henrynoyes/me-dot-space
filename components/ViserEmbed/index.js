const ViserEmbed = ({ scenePath, caption, height = "500px" }) => {  
  const viserUrl = `/viser-client/index.html?playbackPath=${scenePath}`;
  
  return (
    <div className="my-0">
      <iframe
        src={viserUrl}
        className={"w-full rounded-lg border-2 border-gray-300"}
        style={{ height }}
      />
      {caption && (
        <p className="text-center mt-2 text-xl">{caption}</p>
      )}
    </div>
  );
};

export default ViserEmbed;