//KofiCommissions/__test__/KofiCommissionsList.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import KofiCommissionsList from "../KofiCommissions";

describe("KofiShopGrid", () => {
  it("grid should render correctly", () => {
    render(
      <KofiCommissionsList
        items={[
          {
            Alias: "abcdefg",
            Name: "kofi commission example",
            Price: "100.00",
            AddOnsAvailable: true,
            ThumbnailUrls: ["ilovethisyarncolors-1.png"],
            Description: "placeholder",
          },
        ]}
      />,
    );
    const grid = screen.getByText("kofi commission example");
    expect(grid).toBeInTheDocument();
  });
});
