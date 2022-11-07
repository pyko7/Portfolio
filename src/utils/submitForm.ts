export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const submitForm = async (body: FormValues) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...body }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      options
    );
    return await res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to contact server");
  }
};