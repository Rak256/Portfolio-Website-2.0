import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //Only allow post requests
     if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    //recaptcha secret key
    const sec_key = "6Le9xnMrAAAAAOJ_VrYZX09p1ugYf9bICqJf3-PQ";
    //recaptcha token is provided in the body
    const Recaptcha = req;

    const formData = `secret=${sec_key}&response=${Recaptcha}`;

    //variable to store google recaptcha return value
    let response;

     try {
        response = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData
            }
        );

    } catch (e) {
    console.error("reCAPTCHA error:", e);
    return res.status(500).json({ message: "Something went wrong during reCAPTCHA verification" });
  }

}