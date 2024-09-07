"use server";

import { SessionOptions, getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface SessionData {
  email?: string;
}

const defaultSession: SessionData = {
  email: undefined,
};

const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: process.env.COOKIE_NAME!,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.email) {
    session.email = defaultSession.email;
  }

  return session;
}

export async function logOut() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  session.destroy();
  redirect("/auth");
}
