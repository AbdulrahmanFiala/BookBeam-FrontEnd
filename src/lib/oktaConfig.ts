export const oktaConfig = {
  clientId: "0oaf21im7p8CaoLyc5d7",
  issuer: "https://dev-44355015.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
