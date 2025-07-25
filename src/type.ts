export const formatCurrency = (
    value: number,
    currency: string = "NGN",
    unit: boolean = true
  ): string => {
    const locale = `en-${currency.slice(0, 2) || "NG"}`;
  
    const formatted = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
  
    return unit ? formatted : formatted.replace(".00", "");
  };

  export interface dataProps {
    accessibilityLabel: string;
    hotel_id: number
    property:{
      name: string;
      photoUrls:[];
      checkinDate: string;
      checkoutDate: string;
      reviewScore: string;
      reviewCount: string
      priceBreakdown:{
        grossPrice:{
          value: number
        }
      }
    }
  }

  export interface Filters  {
    dest_id: string;
    arrival_date: string;
    departure_date: string;
  };
  