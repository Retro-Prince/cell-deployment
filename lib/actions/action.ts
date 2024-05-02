"use server";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const sendAnalysis = async (formData: FormData) => {
  await delay(5000);
  const data = Object.fromEntries(formData);
  console.log(data);
};
