export const postData = async (payload) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...payload }),
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to contact server");
  }
};
