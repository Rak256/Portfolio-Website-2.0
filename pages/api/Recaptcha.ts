import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //Only allow post requests
     if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    //recaptcha secret key
    const sec_key = "6Le9xnMrAAAAAOJ_VrYZX09p1ugYf9bICqJf3-PQ";
    //recaptcha token is provided in the body
    const {token} = req.body;

    const formdata = `secret=${sec_key}&response=${token}`;

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
                body: formdata
            }
        );

    } catch (e) {
    console.error("reCAPTCHA error:", e);
    return res.status(500).json({ message: "Something went wrong during reCAPTCHA verification" });
  }
  const data = await response.json();
  if (data && data.success && data.score > 0.5) {
        console.log("data.score:", data.score);

        return res.json({
            success: true,
            score: data.score,
        });
    } else {
        return res.json({ success: false });
    }
}

