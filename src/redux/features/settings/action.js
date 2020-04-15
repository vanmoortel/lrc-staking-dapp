export const SETTINGS_SET_LANGUAGE = 'SETTINGS_SET_LANGUAGE';
export const SETTINGS_SET_WALLET_ID = 'SETTINGS_SET_WALLET_ID';
export const SETTINGS_SET_WALLET_ADDRESS = 'SETTINGS_SET_WALLET_ADDRESS';
export const SETTINGS_LOGOUT = 'SETTINGS_LOGOUT';

export const settingsSetLanguage = (language) => ({
  data: { language },
  type: SETTINGS_SET_LANGUAGE,
});

export const settingsSetWalletID = (walletID) => ({
  data: { walletID },
  type: SETTINGS_SET_WALLET_ID,
});

export const settingsSetWalletAddress = (library, walletAddress) => ({
  data: { library, walletAddress },
  type: SETTINGS_SET_WALLET_ADDRESS,
});

export const settingsLogout = (deactivate, walletID) => ({
  data: { deactivate, walletID },
  type: SETTINGS_LOGOUT,
});
