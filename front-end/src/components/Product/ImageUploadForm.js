import { useState } from "react";
import axios from "axios";

function ImageUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = fetch("/api/uploading", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const { imageUrl } = await response.json();
        //  TODO
        // setSelectedFile(imageUrl);
        console.log("image uploaded successfully");
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploadForm;
