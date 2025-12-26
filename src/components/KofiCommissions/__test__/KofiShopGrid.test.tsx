//KofiShop/__test__/KofiShopGrid.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KofiCommissionsList } from "../KofiCommissions";

describe("KofiShopGrid", () => {
  it("grid should render correctly", () => {
    render(
      <KofiCommissionsList
        items={[
          {
            Alias: "aaaaaa",
            Name: "kofi shop card example",
            Price: "100.00",
            ThumbnailUrls: ["asdasdad"],
            AddOnsAvailable: true,
            Description: "placeholder",
          },
        ]}
      />,
    );
    const grid = screen.getByText("kofi shop card example");
    expect(grid).toBeInTheDocument();
  });
});
