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
            options: ["email", "x", "passkey", "phone", "google"],
        },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
];

export default function Example() {
    return (
        <ConnectButton
            client={client}
            wallets={wallets}
            connectModal={{ size: "compact" }}
        />
    );
}
