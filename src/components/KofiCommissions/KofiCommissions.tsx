import { useState, useEffect } from "react";
import "./kofi_commissions.css";

export interface KofiCommissionCardProps {
  Alias: string;
  Name: string;
  Price: string;
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

const srcTmplt = (filename: string): string =>  `https://storage.ko-fi.com/cdn/useruploads/post/${filename}`
const altTmplt = (subject: string, index: number): string => `${subject} image ${index}`
const commissionLinkUrlTmplt = (Alias: string): string => `http://ko-fi.com/c/${Alias}`

const mapThumbnailsToImgAttributes = (Name: string, Thumbnails: string[]) :ImgAttributes[] => {
    return Thumbnails.map((filename, i) => ({ src: srcTmplt(filename), alt: altTmplt(Name, i) }) )
}


const ThumbnailSlide = (props: ImgAttributes) => {
    
    const { src, alt } = props;

    return (
        <a   
            className="thumbnail-slide">
            <img
                loading="lazy"
                alt={alt}
                src={src}
                className="thumbnail-slide"
                />
        </a>
    )
}

// const ThumbnailRightBtn = () =>  <div className="slide-btn"> <ChevronRightIcon /> </div>

const ThumbnailSlider = (props: ThumbnailSliderProps) => { 
    const { thumbnails } = props;
    return ( <div className="kofi-thumbnail-slider"> 
            {thumbnails.map((x, i)=> <ThumbnailSlide key={i} src={x.src} alt={x.alt}/> )} 
        </div>    
    )
}

// clones the views of individual items for sale on a kofi user's 'shop' page
export const KofiCommissionCard = (props: KofiCommissionCardProps) => {
    const { Alias, Name, Price, AddOnsAvailable, ThumbnailUrls, Description } = props;

    const [ kofiLinkUrl, setKofiLinkUrl ] = useState<string>('')
    const [ thumbnailsData, setThumbnailsData ] = useState<ImgAttributes[]>([])

    useEffect(()=> {
        if (Name && ThumbnailUrls) setThumbnailsData(mapThumbnailsToImgAttributes(Name, ThumbnailUrls)) 
    }, [Name, ThumbnailUrls])

    useEffect(()=> {
        if (Alias) setKofiLinkUrl(commissionLinkUrlTmplt(Alias)) 
    }, [Alias])

  return (
        <div className="kofi-commissions-root kofi-commission-card">
        <header className="kofi-commission-header">
            <div className="commission-name-column">
                <h4 className="commission-name">{Name}</h4>
            </div>  
            <div className="commission-price-column" >
                <span className="commission-price">{`${Price} +`}</span>
            </div> 
        </header>
        <div>
            <p>{Description}</p>
        </div>
        <div className="kofi-thumbnail-slider">
            <ThumbnailSlider thumbnails={thumbnailsData} /> 
        </div>
        <div>
            { AddOnsAvailable && <p className="add-ons-available">Add-ons available</p> }   
            <a className="kofi-action-button request-commission-btn" 
                href={kofiLinkUrl}>Request on Ko-fi</a>
        </div> 
    </div>
  )
};

// this component clones the layout of search results on the `shop` page
export const KofiCommissionsList = (props: KofiCommissionsListProps) => {
    const { items } = props;
    
    return (
        <div className="kofi-commissions-root commissions-list-wrapper">
            {items.map((item, index) => <KofiCommissionCard           
                                            key={index}
                                            Alias={item.Alias}
                                            Name={item.Name}
                                            Price={item.Price}
                                            ThumbnailUrls={item.ThumbnailUrls}
                                            AddOnsAvailable={item.AddOnsAvailable}
                                            Description={item.Description}/> )}
        </div>
    )
};

export default KofiCommissionsList;
