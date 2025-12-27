//KofiShop/__test__/KofiShopGrid.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import KofiShopGrid from "../KofiShop";

describe("KofiShopGrid", () => {
  it("grid should render correctly", () => {
    render(
      <KofiShopGrid
        inventory={[
          {
            Alias: "aaaaaa",
            Name: "kofi shop card example",
            Price: "100.00",
            ThumbnailUrls: ["asdasdad"],
            Description: "placeholder",
          },
        ]}
      />,
    );
    const grid = screen.getByText("kofi shop card example");
    expect(grid).toBeInTheDocument();
  });
});
