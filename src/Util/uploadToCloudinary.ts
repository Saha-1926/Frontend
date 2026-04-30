export const uploadToCoudinary = async (pics: any) => {
  const cloud_name = "dsp2zmuy5";
  const upload_preset = "ml_default";

  if (!pics) {
    console.log("error: pics not found");
    return;
  }

  const data = new FormData();
  data.append("file", pics);
  data.append("upload_preset", upload_preset);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const fileData = await res.json();

    console.log("Cloudinary Response:", fileData);

    // ✅ IMPORTANT: return correct URL
    return fileData.secure_url;

  } catch (error) {
    console.log("Upload error:", error);
  }
};