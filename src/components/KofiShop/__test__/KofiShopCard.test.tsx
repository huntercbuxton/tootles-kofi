//KofiShop/__test__/KofiShopCard.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen, container, getNodeText } from "@testing-library/react";
// import {within} from '@testing-library/dom'
import { KofiShopCard } from "../KofiShop";

const mockProps = {
  Alias: "705bd00d02",
  Name: "Bright Smiley Faces Shoulder Bag",
  Price: 25.0, 
  ThumbnailUrls: [
    "0629a4e3-bfd5-49cd-aa4d-d17e1fad5ed5_ca233388-ed6b-4cc1-a7fa-fc9f79d681bf.jpg.jpeg",
    "6c262776-7df0-4bcd-bda5-de6b73911abb_44ebc862-5dfe-4306-b87d-4d49e0422e75.jpg.jpeg",
    "1ad8bdc6-b6b5-406c-9009-f0adfcd6bbaf_f9e7958c-fd9f-4efb-b1e2-935a454558fa.jpg.jpeg"
  ],
  Description: "Handmade cotton crochet shoulder bag featuring adorable, colorful smiley face squares. Lined with ye...",
}

function checkMockText(screen) {
    expect(screen.getByText(/Bright Smiley Faces Shoulder Bag/i)).toBeInTheDocument();
    expect(screen.getByText(/Handmade cotton crochet shoulder bag featuring adorable, colorful smiley face squares. Lined with ye.../i)).toBeInTheDocument();  
}

function checkMockImage(screen) {
    const thumbnailImg = screen.getByAltText(/Bright Smiley Faces Shoulder Bag thumbnail image/i); 
    expect(thumbnailImg).toHaveAttribute('src', "https://storage.ko-fi.com/cdn/useruploads/post/0629a4e3-bfd5-49cd-aa4d-d17e1fad5ed5_ca233388-ed6b-4cc1-a7fa-fc9f79d681bf.jpg.jpeg");
}
 
function checkMockPrice(screen, container) {
    expect(container.querySelector('span.shop-item-price')).toHaveTextContent("$25");
     // check the discounted price is NOT displayed
    expect(container.querySelector('span.shop-item-price .discounted')).not.toBeInTheDocument();
    // check the 'sold out' text is NOT displayed
    expect(container.querySelector('span.shop-item-price')).not.toHaveTextContent("Sold Out");
}

describe("KofiShopCard", () => {
  it("Should render title and description for the item", () => {
    const { container } = render(<KofiShopCard {...mockProps} />);
    
    checkMockText(screen);
  });
});


describe("KofiShopCard", () => {
  it("card should render the thumbnail image ", () => {
    const { container } = render(<KofiShopCard {...mockProps} />);
     
    checkMockImage(screen);
  });
});

describe("KofiShopCard", () => {
  it("card should render only the original price when DiscountedAmount is 0", () => {
    const { container } = render(<KofiShopCard {...mockProps}  />); 
    // check the correct price is displayed
    checkMockPrice(screen, container);
  });
});


describe("KofiShopCard", () => {
  it("card should render a link to the item on ko-fi.com", () => {
    const {container} =  render(<KofiShopCard {...mockProps} />);
 
    // find the card's root element and validate its contents
    const cardNode = container.querySelector('*');
    expect(cardNode).toHaveClass('shop-item');
    expect(cardNode?.children.length).toBe(2);
    expect(cardNode?.children[0]).toHaveClass('shop-item-thumbnail');  
    expect(cardNode?.children[1]).toHaveClass('shop-item-details-container');  

    // the card's root node should be the only aria link 
    const allLinks = screen.getAllByRole("link");
    expect(allLinks.length).toBe(1);
    expect(allLinks[0]).toBe(cardNode); 

    // the card's root node should be an anchor tag
    expect(cardNode).toBeInstanceOf(HTMLAnchorElement);
    // the anchor's href should have the item's url on ko-fi.com 
    expect(cardNode).toHaveAttribute('href', "http://ko-fi.com/s/705bd00d02"); 
 
  });
});
  
describe("KofiShopCard", () => {
  it("Discounted item should show original and updated price", () => {
    const { container } = render( <KofiShopCard {...mockProps} PercentageDiscount={50} /> );
    
    // check discounted price and original price are displayed correctly
    expect(container.querySelector('span.shop-item-price .discounted')).toHaveTextContent("$25");
    expect(container.querySelector('span.shop-item-price')).toHaveTextContent("$12.5");
    // check 'sold out' text is NOT displayed 
    expect(container.querySelector('span.shop-item-price')).not.toHaveTextContent("Sold Out");
 
    checkMockText(screen);
    checkMockImage(screen);
  });
});

  


describe("KofiShopCard", () => {
  it("Sold out item should show 'Sold Out' instead of price", () => {
    const { container } = render( <KofiShopCard {...mockProps} PercentageDiscount={50} IsSoldOut={true} /> );
 
    // check 'sold out' text is displayed 
    expect(container.querySelector('span.shop-item-price')).toHaveTextContent("Sold Out");
    // check price is NOT displayed
    expect(container.querySelector('span.shop-item-price')).not.toHaveTextContent("$25");
    expect(container.querySelector('span.shop-item-price')).not.toHaveTextContent("$12.5"); 
    expect(container.querySelector('span.shop-item-price .discounted')).not.toBeInTheDocument();

    checkMockText(screen);
    checkMockImage(screen);
  });
});

