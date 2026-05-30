//KofiCommissions/__test__/KofiCommissionCard.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KofiCommissionCard } from "../KofiCommissions";

describe("KofiCommissionCard", () => {
  it("card should render correctly", () => {
    render(
      <KofiCommissionCard
        Alias={"aaaaaa"}
        Name={"kofi commission card example"}
        Price={"100.00"}
        AddOnsAvailable={true}
        ThumbnailUrls={["64c0e486-bfcd-4c0a-b2c3-a3d70690b1b8_ilovethisyarncolors-1.png"]}
        Description={"placeholder"}
      />,
    );
    const card = screen.getByText("Request on Ko-fi");
    expect(card).toBeInTheDocument();
  });
});