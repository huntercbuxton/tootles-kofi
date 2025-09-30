//KofiShop/__test__/KofiShopCard.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KofiShopCard } from "../KofiShop";

describe("KofiShopCard", () => {
  it("card should render correctly", () => {
    render(
      <KofiShopCard
        Alias={"aaaaaa"}
        Name={"kofi shop card example"}
        Price={"100.00"}
        ThumbnailUrls={["aaaaaa"]}
        Description={"placeholder"}
      />,
    );
    const card = screen.getByText("kofi shop card example");
    expect(card).toBeInTheDocument();
  });
});
