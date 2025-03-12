function Gallery() {
    const images = [
      "https://i.pinimg.com/736x/b9/98/a5/b998a5d6766afbe99b09fa948fe09159.jpg",
      "https://i.pinimg.com/736x/86/d5/20/86d520bb7399771c00679fc91c35f0fc.jpg",
      "https://i.pinimg.com/736x/8b/5f/cb/8b5fcbe3895a04432f32b8e5024325c8.jpg",
      "https://i.pinimg.com/736x/4f/fa/25/4ffa25a6401e7ef030a952746669db22.jpg",
      "https://i.pinimg.com/736x/3d/1a/40/3d1a401d1792caa59f059efb5ee48f22.jpg",
      "https://i.pinimg.com/736x/3b/b5/81/3bb58139333f07d12d969ab51655efb9.jpg"
    ];
  
    return (
      <section id="gallery" className="p-8 text-center">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-48 object-cover rounded-lg shadow-md"
              alt={`Gallery Image ${i + 1}`}
            />
          ))}
        </div>
      </section>
    );
  }
  
  export default Gallery;
  