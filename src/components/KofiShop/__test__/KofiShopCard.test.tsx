//KofiShop/__test__/KofiShopCard.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen, container, getNodeText } from "@testing-library/react";
// import {within} from '@testing-library/dom'
import { KofiShopCard } from "../KofiShop";

const mockCardProps = {
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


describe("KofiShopCard", () => {
  it("Should render all text for the item", () => {
    const { container } = render(
      <KofiShopCard
        Alias={mockCardProps.Alias}
        Name={mockCardProps.Name}
        Price={mockCardProps.Price}
        ThumbnailUrls={mockCardProps.ThumbnailUrls}
        Description={mockCardProps.Description}
      />,
    );
    
    // check item name
    expect(screen.getByText(/Bright Smiley Faces Shoulder Bag/i)).toBeInTheDocument();
    // check for description 
    expect(screen.getByText(/Handmade cotton crochet shoulder bag featuring adorable, colorful smiley face squares. Lined with ye.../i)).toBeInTheDocument();
    // check price text
    expect(container.querySelector('span.shop-item-price')).toHaveTextContent("$25");
    
  });
});


describe("KofiShopCard", () => {
  it("card should render the thumbnail image correctly", () => {
    const { container } = render(
      <KofiShopCard
        Alias={mockCardProps.Alias}
        Name={mockCardProps.Name}
        Price={mockCardProps.Price}
        ThumbnailUrls={mockCardProps.ThumbnailUrls}
        Description={mockCardProps.Description}
      />,
    );
     
    // check thumbnail alt and src values 
    const thumbnailImg = screen.getByAltText(/Bright Smiley Faces Shoulder Bag thumbnail image/i); 
    expect(thumbnailImg).toHaveAttribute('src', "https://storage.ko-fi.com/cdn/useruploads/post/0629a4e3-bfd5-49cd-aa4d-d17e1fad5ed5_ca233388-ed6b-4cc1-a7fa-fc9f79d681bf.jpg.jpeg");
    
  });
});


describe("KofiShopCard", () => {
  it("card should render a link to the item on ko-fi.com", () => {
    const {container} =  render(
      <KofiShopCard
        Alias={mockCardProps.Alias}
        Name={mockCardProps.Name}
        Price={mockCardProps.Price}
        ThumbnailUrls={mockCardProps.ThumbnailUrls}
        Description={mockCardProps.Description}
      />,
    );
 
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
 

