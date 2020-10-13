/** 
 * name - name of web project
 * descriptions - array containing descriptions of web project which will be transformed into p elements
 * cloudinaryID - path to image on cloudinary that will be used with vue cloudinary components
 * cloudinarySrc - absolute url to cloudinary image for pre-rendering
 * alt - alt text for image
 * href - link to web project
 * analytics - object containing utm source, medium, and campaign info
 * cursorStyle - CSS rule for cursor
 * tagline - caption which will appear below the image
 * emoji - an emoji included in the caption
 * isActive - boolean indicating if project will be displayed on website or not
 * index - indicates, in ascending order, how the projects will appear
*/
export type WebProject = {
  name: string,
  descriptions: Array<Record<string, string>>,
  cloudinaryID: string,
  cloudinarySrc: string,
  alt: string,
  href: string,
  analytics: {
    source: string,
    medium: string,
    campaign: string,
  } | null,
  tagline: string,
  cursorStyle: string,
  isActive: boolean,
  emoji: string,
  index: number,
}

/** 
 * displayText - the text which will be shown in the anchor tag
 * href - destination for navigation link
 * ariaLabel - text which will fulfill an aria label on the anchor tag
 * isActive - boolean indicating if navigation link will be displayed on website or not
 * index - indicates, in ascending order, how the navigation links will appear
*/
export type NavigationLink = {
  displayText: string,
  href: string,
  ariaLabel: string,
  isActive: string,
  index: number,
}

/** 
 * href - destination for social media link
 * ariaLabel - text which will fulfill an aria label on the anchor tag
 * icon - the value which will retrieve the font awesome icon in the vue component
 * isActive - boolean indicating if social media link will be displayed on website or not
 * index - indicates, in ascending order, how the social media links will appear
*/
export type SocialMediaLink = {
  href: string,
  ariaLabel: string,
  icon: string,
  isActive: string,
  index: number,
}
