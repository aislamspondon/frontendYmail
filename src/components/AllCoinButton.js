import React from "react";
import CoinButton from "./CoinButton";

export default function AllCoinButton() {
  return (
    <>
      <CoinButton buttonName="Home" icon={<i class="fa-solid fa-house"></i>} />
      <CoinButton
        buttonName="My Activity"
        icon={<i class="fa-solid fa-clock"></i>}
      />
      <CoinButton
        buttonName="Trade"
        icon={<i class="fa-solid fa-arrow-trend-up"></i>}
      />
      <CoinButton
        buttonName="Earn"
        icon={<i class="fa-solid fa-percent"></i>}
      />
      <CoinButton
        buttonName="Pay"
        icon={<i class="fa-regular fa-circle"></i>}
      />
      <CoinButton buttonName="More" icon={<i class="fas fa-ellipsis-v"></i>} />
    </>
  );
}
