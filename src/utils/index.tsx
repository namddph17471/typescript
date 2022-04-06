import axios from "axios";

export const uploadFile = async (fileName: string) => {
    const formData = new FormData();
    formData.append("file", fileName);
    formData.append("upload_preset", "nw9blvdh");
    const { data } = await axios.post("https://api.cloudinary.com/v1_1/namddph17471/image/upload", formData);
    return data.url;
}