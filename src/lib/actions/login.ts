"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { verify } from "../client/getotp";
import { initializeNewOtp } from "../data/user";

export type LoginState = {
  errors?: string[];
};

const LoginFields = z.object({
  email: z.string().email(),
});

export async function login(prevState: LoginState, formData: FormData) {
  const validation = LoginFields.safeParse({
    email: formData.get("email"),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors.email,
    };
  }

  const { email } = validation.data;

  let redirectLink;

  try {
    const { otp_id, link, otp_secret } = await verify(email);
    redirectLink = link;
    await initializeNewOtp(email, otp_id, otp_secret);
  } catch (e: any) {
    console.log(e);
  } finally {
    if (redirectLink) {
      redirect(redirectLink);
    }
  }

  return { errors: ["Something unknown happened :/"] };
}
