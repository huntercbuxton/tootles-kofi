//KofiShop/__test__/KofiShopCard.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KofiShopCard } from "../KofiShop";

describe("KofiShopCard", () => {
  
  it("name and description should render when provided", () => {
    render(<KofiShopCard
        Alias={"aaaaaa"}
        Name={"kofi shop card example"}
        Price={"100.00"}
        ThumbnailUrls={["aaaaaa"]}
        IsSoldOut={true}
        Description={"description text"}
      />,
    ); 
    expect(screen.getByText("kofi shop card example")).toBeInTheDocument();
    expect(screen.getByText("description text")).toBeInTheDocument();
  });


    it("card should show sold out label", () => {
    render(<KofiShopCard
        Alias={"aaaaaa"}
        Name={"kofi shop card example"}
        Price={"100.00"}
        ThumbnailUrls={["aaaaaa"]}
        IsSoldOut={true}
        Description={"description text"}
      />,
    ); 
    expect(screen.getByText("Sold Out")).toBeInTheDocument();
    expect(screen.queryByText("$100.00")).not.toBeInTheDocument();
  });


  it("card should show sold out label", () => {
    render(<KofiShopCard
        Alias={"aaaaaa"}
        Name={"inventory item"}
        Price={"100.00"}
        ThumbnailUrls={["a.jpg","b.jpg"]}
        IsSoldOut={false}
        Description={"description text"}
      />,
    ); 
    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.queryByText("Sold Out")).not.toBeInTheDocument(); 
  });

});
