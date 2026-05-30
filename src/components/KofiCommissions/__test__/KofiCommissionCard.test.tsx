//KofiCommissions/__test__/KofiCommissionCard.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KofiCommissionCard } from "../KofiCommissions";

describe("KofiCommissionCard", () => {
  it("card should render correctly", () => {
    render(
      <KofiCommissionCard
        Alias={"abcdefg"}
        Name={"kofi commission example"}
        Price={"100.00"}
        AddOnsAvailable={true}
        ThumbnailUrls={["ilovethisyarncolors-1.png"]}
        Description={"placeholder"}
      />,
    );
    const card = screen.getByText("Request on Ko-fi");
    expect(card).toBeInTheDocument();
  });
});