

import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";

const client = createThirdwebClient({
  clientId: "....",
});

const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "email", "github"],
    },
  }),
  createWallet("io.metamask"),
  createWallet("app.phantom"),
  createWallet("com.coinbase.wallet"),
];

export default function Example() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectModal={{
        size: "compact",
        showThirdwebBranding: false,
      }}
    />
  );
}
