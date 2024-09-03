import { prisma } from "../db";

export async function initializeNewOtp(
  email: string,
  otpId: string,
  otpSecret: string,
) {
  const result = await prisma.user.upsert({
    where: {
      email: email,
    },
    update: {
      otpId: otpId,
      otpSecret: otpSecret,
    },
    create: {
      email: email,
      otpId: otpId,
      otpSecret: otpSecret,
      lastRequest: 0,
    },
  });
  console.log("user created", result);
}

export async function getUserByOtpId(otpId: string) {
  const user = await prisma.user.findFirst({
    where: {
      otpId: otpId,
    },
  });
  return user;
}

export async function getAllUsers() {
  return await prisma.user.findMany();
}
