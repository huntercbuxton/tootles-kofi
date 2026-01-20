//KofiShop/__test__/KofiShopCard.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KofiCommissionCard } from "../KofiCommissions";

describe("KofiCommissionCard", () => {
  it("card should render correctly", () => {
    render(
      <KofiCommissionCard
        Alias={"aaaaaa"}
        Name={"kofi shop card example"}
        Price={"100.00"}
        ThumbnailUrls={["aaaaaa"]}
        AddOnsAvailable={true}
        Description={"placeholder"}
      />,
    );
    const card = screen.getByText("kofi shop card example");
    expect(card).toBeInTheDocument();
  });
});
