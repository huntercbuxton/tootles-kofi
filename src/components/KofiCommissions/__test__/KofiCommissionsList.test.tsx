//KofiCommissions/__test__/KofiCommissionsList.test.tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import KofiCommissionsList from "../KofiCommissions";

const mockCommissionData = [
  {
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
  },
  {
    AddOnsAvailable: false,
    Alias: "5f05315fbb",
    Description: "Hand-crocheted long slouchy beanie with a pointed tip, giving cozy elf vibes. Soft, warm, and whimsical. Perfect for fantasy lovers, festivals, or adding a magical woodland touch to winter outfits.\n\nYou get to choose the colors!",
    Name: "Custom Elf Beanie w/ Charm",
    Price: 40.0,
    ThumbnailUrls: [
      "63ce9273-42f0-4283-9ddd-beb75fca2934_untitled-5.png",
      "64c0e486-bfcd-4c0a-b2c3-a3d70690b1b8_ilovethisyarncolors-1.png",
      "2ce21359-b1dd-4601-be9e-f2ad4ea2af29_ilovethisyarncolors-2.png",
      "75542a0a-1d39-4ef8-8f8b-b001db515298_ilovethisyarncolors-3.png",
      "145734d9-b0a5-4736-a129-8843818093d6_ilovethisyarncolors-4.png",
      "6fd0ba73-d94f-499a-97d4-d97807585192_ilovethisyarncolors-5.png",
      "872e3ca3-1742-4b7b-85d6-18b21e18097f_ilovethisyarncolors-6.png",
      "66e56355-4fae-4b6e-b939-f80d0dfe370c_ilovethisyarncolors-7.png",
      "ddecc870-b9c3-4886-b5ff-27b481ec5fbf_ilovethisyarncolors-8.png"
    ]
  }
]

describe("KofiCommissionsList", () => {
  it("Should render a single commissions list with same length as the 'items' prop", () => {
    const { container } = render(<KofiCommissionsList items={mockCommissionData} />);
    // check exactly one commissions list is rendered
    const commissionsLists = container.querySelectorAll('.kofi-commissions-root.commissions-list-wrapper');
    expect(commissionsLists.length).toBe(1);
    const list = commissionsLists[0];
    // validate selected node matchescommissions list type, role etc.   
    expect(list).toBeInTheDocument();
    expect(list).toBeInstanceOf(HTMLDivElement);
    expect(list).toHaveAttribute('role', 'list');
    // check rendered list items count matches length of 'items' prop
    expect(list?.childElementCount).toBe(mockCommissionData.length);

  });
});

describe("KofiCommissionsList", () => {
  it("Should render text correctly within list items", () => {
    const { container } = render(<KofiCommissionsList items={mockCommissionData} />);
    // check exactly one commissions list is rendered
    const kCList = container.querySelector('.kofi-commissions-root.commissions-list-wrapper');

    const kClistItem = kCList?.children[1]
    const itemData = mockCommissionData[1]

    expect(kClistItem?.querySelector('h4.commission-name')?.textContent).toMatch(itemData.Name)
    expect(kClistItem?.querySelector('div.commission-description')?.textContent).toMatch(itemData.Description)

    expect(kClistItem?.querySelector('a.kofi-action-button.request-commission-btn')?.textContent).toMatch("Request on Ko-fi");
    expect(kClistItem?.querySelector('span.commission-price')?.textContent).toMatch("$40 +")
  });
});
