//KofiCommissions/__test__/KofiCommissionCard.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { KofiCommissionCard } from "../KofiCommissions";

const mockCommissionData = {
  AddOnsAvailable: true,
  Alias: "1efc9c2bae",
  Description: "Custom cozy hand-crocheted acrylic cat ear beanie. Stretchy, warm, and fun—ideal for y2k, kawaii, cosplay, or adding a bold statement to your winter look.\n\nYou get to choose the colors!",
  Name: "Custom Cat Ear Beanie",
  Price: 20.0,
  ThumbnailUrls: [
    "4f6ee6d1-aa4f-458e-8c99-193c0f42efcd_untitled-3.png",
    "133c705a-a975-4167-be50-97912fcf7c1b_untitled-4.png",
    "fa1ed9ae-8d21-4c73-9ea5-2e4568a9080d_63817.png",
    "54759d6e-8ca7-4391-94d1-c494006666bb_63815.png",
    "cd33e45d-b1bc-41f8-9ebc-501d68137b2b_63819.png",
    "93a94a55-59ce-4ea5-bf6c-f283e1c80c9f_64608.png",
    "7c888e00-5357-4061-94b0-3d0a6441bc58_ilovethisyarncolors-1.png",
    "d0229a2c-1bd1-4c9a-b9dd-8dff8ced23a4_ilovethisyarncolors-2.png",
    "36aa04c8-a7b7-4f22-98f9-999a9303df19_ilovethisyarncolors-3.png",
    "8b3d3be5-0469-41e6-988c-7da19bbafab3_ilovethisyarncolors-4.png",
    "4b1c9041-e211-4bb1-af14-efd796974303_ilovethisyarncolors-5.png",
    "8b09d534-ffb3-4e21-b557-540371b64ca6_ilovethisyarncolors-6.png",
    "55e33880-2104-4105-a23f-2e08551653c1_ilovethisyarncolors-7.png",
    "db6e1327-a443-4e1b-9842-d938f3afcc36_ilovethisyarncolors-8.png"
  ]
}

describe("KofiCommissionCard", () => {
  it("Should render all text for the item", () => {
    render(
      <KofiCommissionCard
        Alias={mockCommissionData.Alias}
        Name={mockCommissionData.Name}
        Price={mockCommissionData.Price}
        AddOnsAvailable={mockCommissionData.AddOnsAvailable}
        ThumbnailUrls={mockCommissionData.ThumbnailUrls}
        Description={mockCommissionData.Description}
      />,
    );
    
    expect(screen.getByText("Request on Ko-fi")).toBeInTheDocument(); 

    expect(screen.getByText(mockCommissionData.Name)).toBeInTheDocument();
    // should render the same text but without the newline chars
    expect(screen.getByText("Custom cozy hand-crocheted acrylic cat ear beanie. Stretchy, warm, and fun—ideal for y2k, kawaii, cosplay, or adding a bold statement to your winter look. You get to choose the colors!")).toBeInTheDocument();
    expect(screen.getByText("$20 +")).toBeInTheDocument();
    expect(screen.getByText("Add-ons available")).toBeInTheDocument();
    
  });
});


describe("KofiCommissionCard", () => {
  it("Should render all text for the item", () => {
    const { container } = render(
      <KofiCommissionCard
        Alias={mockCommissionData.Alias}
        Name={mockCommissionData.Name}
        Price={mockCommissionData.Price}
        AddOnsAvailable={mockCommissionData.AddOnsAvailable}
        ThumbnailUrls={mockCommissionData.ThumbnailUrls}
        Description={mockCommissionData.Description}
      />,
    );
    
    // check for an image matching the src and alt for the first thumbnail url
    const thumbnailImg = container.querySelector(`img[src="https://storage.ko-fi.com/cdn/useruploads/post/4f6ee6d1-aa4f-458e-8c99-193c0f42efcd_untitled-3.png"]`)
    expect(thumbnailImg?.getAttribute('alt')).toMatch('Custom Cat Ear Beanie image 0')
    // check all the thumbnail urls are rendered as an image in the slider
    const thumbnailImgCount = container.querySelectorAll('a.thumbnail-slide > img.thumbnail-slide').length
    expect(thumbnailImgCount).toEqual(14)
    
  });
});