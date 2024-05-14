import { useState } from "react";
import CreateAudioTourView from "./CreateAudioTour.view";
import { $authHost } from "../../services/api.service";
import Compressor from "compressorjs";

export const CreateAudioTourContainer = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    pathPicture: "",
    place: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const target = event.target;
    try {
      const { data } = await $authHost.post("/AudioTour/create", {
        ...formData,
      });
      setFormData({
        title: "",
        description: "",
        pathPicture: "",
        place: "",
        address: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  async function changeHandler(event) {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const options = {
        maxWidth: 800,
        maxHeight: 800,
        quality: 0.7,
        mimeType: "image/jpeg",
        success(result) {
          const reader = new FileReader();
          reader.onloadend = function () {
            const compressedImageBase64 = reader.result;
            setFormData((prevState) => ({
              ...prevState,
              ["pathPicture"]: compressedImageBase64,
            }));
          };
          reader.readAsDataURL(result);
        },
        error(err) {
          console.log(err.message);
        },
      };
      new Compressor(file, options);
    }
  }

  return (
    <CreateAudioTourView
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      changeHandler={changeHandler}
    />
  );
};
