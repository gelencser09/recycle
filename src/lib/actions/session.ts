"use server";

import { SessionOptions, getIronSession } from "iron-session";
import { cookies } from "next/headers";

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
  ttl: 3600,
};

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.email) {
    session.email = defaultSession.email;
  }

  return session;
}
