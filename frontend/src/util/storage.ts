export type TokenType = {
  accessToken: string;
  expiry?: number;
};

const cashedToken: TokenType = {
  accessToken: "",
};

const getSavedToken = (): TokenType => {
  if (cashedToken.accessToken) {
    return cashedToken;
  }
  const accessToken = window.localStorage.getItem("accessToken");
  const expiry = window.localStorage.getItem("expiry");
  return {
    accessToken,
    expiry: expiry ? parseInt(expiry) : undefined,
  } as TokenType;
};

const saveTokensObj = (token: TokenType) => {
  if (token.accessToken)
    window.localStorage.setItem("accessToken", token.accessToken);
  if (token.expiry)
    window.localStorage.setItem("expiry", token.expiry.toString());
  cashedToken.accessToken = token.accessToken;
  cashedToken.expiry = token.expiry;
};

const saveTokens = (accessToken: string, expiry?: number) => {
  if (accessToken) {
    window.localStorage.setItem("accessToken", accessToken);
  }
  if (expiry) {
    window.localStorage.setItem("expiry", expiry.toString());
  }
};

const getLocal = () => {
  const local = window.localStorage.getItem("i18nextLang") || "en";
  return local === "en-US" ? "en" : local;
};

const clear = () => {
  window.localStorage.clear();
  cashedToken.accessToken = "";
  cashedToken.expiry = undefined;
};

const storageUtils = {
  getSavedToken,
  saveTokensObj,
  saveTokens,
  getLocal,
  clear,
};

export default storageUtils;
