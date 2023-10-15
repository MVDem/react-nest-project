import * as bcrypt from 'bcryptjs';

export default async function hashPassword(pass) {
  const hashPassword = await bcrypt.hash(pass, 5);
  return hashPassword;
}
