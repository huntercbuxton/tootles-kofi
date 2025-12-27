import "./kofi_shop.css"; 

export interface KofiShopCardProps {
  Alias: string;
  Name: string;
  Price: string;
  ThumbnailUrls: string[];
  IsSoldOut: boolean;
  Description: string;
}

export interface KofiShopGridProps {
  inventory: KofiShopCardProps[];
}

export function filterSoldOut(inventory: KofiShopCardProps[]) {
  return inventory.filter(x => x.IsSoldOut !== true) 
}


// clones the views of individual items for sale on a kofi user's 'shop' page
export const KofiShopCard = (props: KofiShopCardProps) => {
  const { Alias, Name, Price, ThumbnailUrls, IsSoldOut, Description } = props;

  return (
    <a href={`http://ko-fi.com/s/${Alias}`} className="shop-item">
      <div className="shop-item-thumbnail">
        <img
          loading="lazy"
          src={`https://storage.ko-fi.com/cdn/useruploads/post/${ThumbnailUrls[0]}`}
          className="shop-item-thumbnail"
        />
        <div className="shop-item-price-container">
          {IsSoldOut ? <span className="shop-item-sold-out">Sold Out</span> : 
              <span className="shop-item-price">${Price}</span> } 
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
const KofiShopGrid = (props: KofiShopGridProps) => {
  return (
    <div id="kofi-item-grid"> 
      {props.inventory.map((item, index) => (
        <KofiShopCard
          key={index}
          Alias={item.Alias}
          Name={item.Name}
          Price={item.Price}
          IsSoldOut={item.IsSoldOut}
          ThumbnailUrls={item.ThumbnailUrls}
          Description={item.Description}
        />
      ))}
    </div>
  );
};
 

export default KofiShopGrid;
