import { IWebsiteUrl } from "@app/types/IWebsiteUrl"

/**
 * Helper function to find url to redirect to when clicking
 * 'Apply' button
 */
export const getApplyUrl = (websites_urls: IWebsiteUrl[]) => {
  return websites_urls.find(url => url.website_reference === 'wttj_fr');
}