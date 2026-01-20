import "./kofi_shop.css";

export interface KofiShopCardProps {
  Alias: string;
  Name: string;
  Price: string;
  ThumbnailUrls: string[];
  Description: string;
}

export interface KofiShopGridProps {
  inventory: KofiShopCardProps[];
}

// clones the views of individual items for sale on a kofi user's 'shop' page
export const KofiShopCard = (props: KofiShopCardProps) => {
  const { Alias, Name, Price, ThumbnailUrls, Description } = props;

  return (
    <a href={`http://ko-fi.com/s/${Alias}`} className="shop-item">
      <div className="shop-item-thumbnail">
        <img
          loading="lazy"
          src={`https://storage.ko-fi.com/cdn/useruploads/post/${ThumbnailUrls[0]}`}
          className="shop-item-thumbnail"
        />
        <div className="shop-item-price-container">
          <span className="shop-item-price">${Price}</span>
        </div>
      </div>
      <div className="shop-item-details-container">
        <div className="shop-item-details">
          <span className="shop-item-name">{Name}</span>
          {Description && (
            <span className="shop-item-description">{Description}</span>
          )}
        </div>
      </div>
    </a>
  );
};

// this component clones the layout of search results on the `shop` page
export const KofiShopGrid = (props: KofiShopGridProps) => {
  return (
    <div id="kofi-item-grid" className="shop_base_colorscheme"> 
      {props.inventory.map((item, index) => (
        <KofiShopCard
          key={index}
          Alias={item.Alias}
          Name={item.Name}
          Price={item.Price}
          ThumbnailUrls={item.ThumbnailUrls}
          Description={item.Description}
        />
      ))}
    </div>
  );
};

export default KofiShopGrid;
