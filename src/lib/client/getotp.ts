"use server";

import axios from "axios";

type OtpResponse = {
  otp_id: string;
  link: string;
  otp_secret: string;
};

export async function verify(email: string): Promise<OtpResponse> {
  const response = await axios.postForm(
    "https://otp.dev/api/verify/",
    {
      channel: "email",
      email: email,
      success_redirect_url: `${process.env.BASE_URL}/auth/success`,
      fail_redirect_url: `${process.env.BASE_URL}/auth/fail`,
      // less secure but ok for now - getting data after redirect
      // callback_url: `${process.env.BASE_URL}/auth/cb`,
    },
    {
      auth: {
        username: process.env.GETOTP_API_KEY!,
        password: process.env.GETOTP_AUTH_TOKEN!,
      },
    },
  );

  return response.data;
}
