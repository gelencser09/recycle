import { getSession } from "@/lib/actions/session";
import { getUserByOtpId } from "@/lib/data/user";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const otpId = request.nextUrl.searchParams.get("otp_id");

  if (!otpId) {
    redirect("/auth/fail");
  }

  const user = await getUserByOtpId(otpId);

  if (!user) {
    redirect("/auth/fail");
  }

  const session = await getSession();

  session.email = user.email;

  await session.save();

  redirect("/");
}
