import AdminLevel from "AdminLevel";
export interface GeocodedObject {
    readonly [property: string]: string | number | AdminLevel[] | undefined;
    readonly latitude?: number;
    readonly longitude?: number;
    readonly south?: number;
    readonly west?: number;
    readonly north?: number;
    readonly east?: number;
    readonly formattedAddress?: string;
    readonly streetNumber?: string;
    readonly streetName?: string;
    readonly subLocality?: string;
    readonly locality?: string;
    readonly postalCode?: string;
    readonly region?: string;
    readonly adminLevels?: AdminLevel[];
    readonly country?: string;
    readonly countryCode?: string;
}
export default class Geocoded {
    private readonly latitude?;
    private readonly longitude?;
    private readonly south?;
    private readonly west?;
    private readonly north?;
    private readonly east?;
    private readonly formattedAddress?;
    private readonly streetNumber?;
    private readonly streetName?;
    private readonly subLocality?;
    private readonly locality?;
    private readonly postalCode?;
    private readonly region?;
    private readonly adminLevels;
    private readonly country?;
    private readonly countryCode?;
    protected constructor({ latitude, longitude, south, west, north, east, formattedAddress, streetNumber, streetName, subLocality, locality, postalCode, region, adminLevels, country, countryCode, }: GeocodedObject);
    static create(object: GeocodedObject): Geocoded;
    toObject(): GeocodedObject;
    withBounds(south?: number, west?: number, north?: number, east?: number): Geocoded;
    withCoordinates(latitude?: number, longitude?: number): Geocoded;
    getCoordinates(): [undefined | number, undefined | number];
    getLatitude(): undefined | number;
    getLongitude(): undefined | number;
    getBounds(): [undefined | number, undefined | number, undefined | number, undefined | number];
    getFormattedAddress(): undefined | string;
    getStreetNumber(): undefined | string;
    getStreetName(): undefined | string;
    getSubLocality(): undefined | string;
    getLocality(): undefined | string;
    getPostalCode(): undefined | string;
    getRegion(): undefined | string;
    addAdminLevel(adminLevel: AdminLevel): void;
    getAdminLevels(): AdminLevel[];
    getCountry(): undefined | string;
    getCountryCode(): undefined | string;
}
//# sourceMappingURL=Geocoded.d.ts.map