//KofiShop/__test__/KofiShopGrid.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import KofiShopGrid from "../KofiShop";

const mockInventory = [
  {
    Alias: "ecc8868e9e",
    Name: "Blue & Gray Striped Tote Bag",
    Price: 25.0,
    ThumbnailUrls: [
      "6ee2adc6-92f4-431b-a488-4df0c8918aa_squaretote.jpg",
      "84b3fd32-1578-4da4-b454-354a84e3d1a4_squaretote3.jpg"
    ],
    Description: "Handmade cotton crochet tote bag with bold blue and gray stripes in a classic square design. Ideal f...",
  },
  {
    Alias: "4615bc8e28",
    Name: "White & Blue Alpaca Wool Cat Ear Beanie",
    Price: 20.0,
    ThumbnailUrls: [
      "fa0bce40-654d-48a8-b493-67a12f69f4ca_eb66140b-7cd1-4121-b943-cd834053a1ca.jpg.jpeg",
      "6a9c5dce-b1d3-4ec9-8de4-bf9561c0f98c_74e93019-6bd9-4d55-bcc4-75dcd25fe6fa.jpg.jpeg",
    ],
    Description: "Cozy hand-crocheted cat ear beanie. Stretchy, warm, and fun!",
  },
];

describe("KofiShopGrid", () => {
  it("Should render a single grid with the expected number of cells", () => {
    const {container} = render(<KofiShopGrid inventory={mockInventory} />); 

    // check exactly one grid container is rendered
    const grids = container.querySelectorAll('#kofi-item-grid');
    expect(grids.length).toBe(1);
    const gridContainer = grids[0];
    // validate selected node matches grid container type, role etc.   
    expect(gridContainer).toBeInTheDocument(); 
    expect(gridContainer).toBeInstanceOf(HTMLDivElement);
    expect(gridContainer).toHaveAttribute('role', 'list'); 
 
  });
});


describe("KofiShopGrid", () => {
  it("Should render one grid cell for each inventory item", () => {
    const {container} = render(<KofiShopGrid inventory={mockInventory} />); 

    // check exactly one grid container is rendered
    const grid = container.querySelector('#kofi-item-grid'); 
    
    // check the number of inventory items matches the number of grid cells
    const gridCellCount = grid?.childElementCount
    expect(gridCellCount).toBe(mockInventory.length); 

    // check each inventory item is rendered by a gridCell in the same sequence
    for (let i = 0; i < gridCellCount; i++) {
      const gridCell = grid.children[i];
      expect(gridCell).toHaveClass('shop-item');
      expect(gridCell.querySelector('h4.shop-item-name').textContent).toMatch(mockInventory[i].Name)
      expect(gridCell.querySelector('span.shop-item-price')?.textContent).toMatch(`$${mockInventory[i].Price}`)
    }
  });
});


describe("KofiShopGrid", () => {
  it("Should render all inventory name & description values", () => {
    render(
      <KofiShopGrid inventory={mockInventory} />,
    ); 
    // check names 
    expect(screen.getByText(/Blue & Gray Striped Tote Bag/i)).toBeInTheDocument(); 
    expect(screen.getByText(/White & Blue Alpaca Wool Cat Ear Beanie/i)).toBeInTheDocument();
   
    // check descriptions 
    expect(screen.getByText(/Handmade cotton crochet tote bag with bold blue and gray stripes in a classic square design. Ideal f.../i)).toBeInTheDocument(); ;
    expect(screen.getByText(/Cozy hand-crocheted cat ear beanie. Stretchy, warm, and fun!/i)).toBeInTheDocument();

  });
});


describe("KofiShopGrid", () => {
  it("Should render a thumbnail image for every inventory item", () => {
    render(
      <KofiShopGrid inventory={mockInventory} />,
    ); 
    
    // check for images using alt text
    expect(screen.getByAltText(/Blue & Gray Striped Tote Bag thumbnail image/i)).toBeInTheDocument(); 
    expect(screen.getByAltText(/White & Blue Alpaca Wool Cat Ear Beanie thumbnail image/i)).toBeInTheDocument();
  });
});
