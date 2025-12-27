//KofiShop/__test__/KofiShopGrid.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import KofiShopGrid, { filterSoldOut } from "../KofiShop";

describe("KofiShopGrid", () => {
  it("grid should render card(s) when inventory data is provided", () => {
    render(
      <KofiShopGrid
        inventory={[
          {
            Alias: "aaaaaa",
            Name: "kofi shop card example",
            Price: "100.00",
            ThumbnailUrls: ["asdasdad"],
            IsSoldOut: true,
            Description: "placeholder",
          },
        ]}
      />,
    ); 
    expect(screen.getByText("kofi shop card example")).toBeInTheDocument(); 
  });

  it("grid should render correctly", () => {
    render(
      <KofiShopGrid
        inventory={[
          {
            Alias: "aaaaaa",
            Name: "available item",
            Price: "2000",
            ThumbnailUrls: ["asdasdad"],
            IsSoldOut: false,
            Description: "description text",
          },
          {
            Alias: "zzzzzz",
            Name: "sold out item",
            Price: "30",
            ThumbnailUrls: ["asdasdad"],
            IsSoldOut: true,
            Description: "description text",
          }
        ]}
      />,
    ); 
    expect(screen.getByText("available item")).toBeInTheDocument(); 
    expect(screen.getByText("sold out item")).toBeInTheDocument(); 
  }); 

});



describe("filterSoldOutInventory", () => {

  it("should return an empty array if the argument is an empty array", () => { 
    const result = filterSoldOut([])
    expect(result).toEqual(expect.any(Array));
    expect(result.length).toEqual(0)
  });

  it("should return an empty array if the argument contains only sold out items", () => { 
    const result = filterSoldOut([
          {
            Alias: "aaaaaa",
            Name: "available item",
            Price: "2000",
            ThumbnailUrls: ["asdasdad"],
            IsSoldOut: true,
            Description: "description text",
          },
          {
            Alias: "zzzzzz",
            Name: "sold out item",
            Price: "30",
            ThumbnailUrls: ["asdasdad"],
            IsSoldOut: true,
            Description: "description text",
          }
        ])

    expect(result).toEqual(expect.any(Array));
    expect(result.length).toEqual(0)
  }); 
});
