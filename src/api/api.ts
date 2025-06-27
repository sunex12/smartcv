import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const sendResumeText = async (text: string) => {
  try {
    return await api.post(
      "resume/text",
      { resumeText: text },
      { withCredentials: true } 
    );
  } catch (err) {
    console.error("Kļūda sūtot tekstu:", err);
    throw err;
  }
};

export const sendResumeFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("resumeFile", file);

    return await api.post("/resume/file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.error("Kļūda sūtot failu:", err);
    throw err;
  }
};

export const sendPayment = async () => {
  try {
    const res = await api.post("payment/create-checkout-session", 
      {},
      {withCredentials: true}
    );
    window.location.href = res.data.url;
  } catch (err) {
    console.error("Maksājuma kļūda:", err);
  }
};
