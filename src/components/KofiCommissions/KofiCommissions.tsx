import { useState, useEffect } from "react";
import "./kofi_commissions.css"; 
import "../index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faPlus } from '@fortawesome/free-solid-svg-icons';

/** This mimicks the layer-plus icon, which requires a pro subscription */
function LayerPlusIcon() {
  return (
    <span className="fa-layers fa-fw" style={{ fontSize: '1.5em' }} > 
      <FontAwesomeIcon  
        icon={faLayerGroup} 
        size="2xs" 
        transform="down-9 left-8"  
      /> 
      <FontAwesomeIcon 
        icon={faPlus} 
        transform="shrink-6 up-2 right-2" 
        size="2xs"  
      />
    </span>
  );
}

export interface KofiCommissionCardProps {
    Alias: string;
    Name: string;
    Price: number;
    AddOnsAvailable: boolean;
    ThumbnailUrls: string[];
    Description: string;
}

export interface KofiCommissionsListProps {
    items: KofiCommissionCardProps[];
}

interface ImgAttributes {
    src: string;
    alt: string;
}

interface ThumbnailSliderProps {
    thumbnails: ImgAttributes[]
}


const srcTmplt = (filename: string): string => `https://storage.ko-fi.com/cdn/useruploads/post/${filename}`
const altTmplt = (subject: string, index: number): string => `${subject} image ${index}`
const commissionLinkUrlTmplt = (Alias: string): string => `http://ko-fi.com/c/${Alias}`

const mapThumbnailsToImgAttributes = (Name: string, Thumbnails: string[]): ImgAttributes[] => {
    return Thumbnails.map((filename, i) => ({ src: srcTmplt(filename), alt: altTmplt(Name, i) }))
}

const ThumbnailSlide = ({ src, alt }: ImgAttributes) => {
 
    return (
        <a className="thumbnail-slide">
            <img className="thumbnail-slide"
                loading="lazy"
                alt={alt}
                src={src} 
            />
        </a>
    )
}

const ThumbnailSlider = ({ thumbnails }: ThumbnailSliderProps) => {
  
    return (<div className="kofi-thumbnail-slider">
        {thumbnails.map((x, i) => <ThumbnailSlide key={i} src={x.src} alt={x.alt} />)}
    </div>
    )
}

// clones the views of individual items for sale on a kofi user's 'shop' page
export const KofiCommissionCard = (props: KofiCommissionCardProps) => {
    const { Alias, Name, Price, AddOnsAvailable, ThumbnailUrls, Description } = props;

    const [kofiLinkUrl, setKofiLinkUrl] = useState<string>('')
    const [thumbnailsData, setThumbnailsData] = useState<ImgAttributes[]>([])

    useEffect(() => {
        if (Name && ThumbnailUrls) setThumbnailsData(mapThumbnailsToImgAttributes(Name, ThumbnailUrls))
    }, [Name, ThumbnailUrls])

    useEffect(() => {
        if (Alias) setKofiLinkUrl(commissionLinkUrlTmplt(Alias))
    }, [Alias])

    return (
        <div className="ko-fi kofi-commissions-root kofi-commission-card">
            <header className="kofi-commission-header">
                <div className="commission-name-column">
                    <h4 className="commission-name">{Name}</h4>
                </div>
                <div className="commission-price-column" >
                    <span className="commission-price">
                        <span>{`$${Price}`}</span>
                        <span>+</span>
                    </span>
                </div>
            </header>
            <p className="commission-description line-breaks">{Description}</p>
           <ThumbnailSlider thumbnails={thumbnailsData} />
            <div>
                {AddOnsAvailable && <p className="add-ons-available"><LayerPlusIcon/>Add-ons available</p>}
                <a className="kofi-action-button request-commission-btn"
                    href={kofiLinkUrl}>Request This</a>
            </div>
        </div>
    )
};

// this component clones the layout of search results on the `shop` page
export const KofiCommissionsList = ({ items }: KofiCommissionsListProps) => { 

    return (
        <div className="ko-fi kofi-commissions-root commissions-list-wrapper" role="list">
            {items.map((item, index) => <KofiCommissionCard
                key={index}
                Alias={item.Alias}
                Name={item.Name}
                Price={item.Price}
                ThumbnailUrls={item.ThumbnailUrls}
                AddOnsAvailable={item.AddOnsAvailable}
                Description={item.Description} />)}
        </div>
    )
};

export default KofiCommissionsList;