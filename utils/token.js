import jwt from 'jsonwebtoken';

/**
 * generates a token using the payload
 * @param {*} payload 
 * @returns 
 */
export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1d' });
};

/**
 * verify the token
 * @param {*} token 
 * @returns 
 */
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.TOKEN_SECRET);
};
