/* Form */
export { default as ErrorMessage } from "./components/form/ErrorMessage";
export { default as EntryTitle } from "./components/form/EntryTitle";
export { default as FormDiv } from "./components/form/FormDiv";
export { default as FormEntry } from "./components/form/FormEntry";
export { default as SubmitButton } from "./components/form/SubmitButton";
export { default as FormAlert } from "./components/form/FormAlert";
export { default as FormOuterDiv } from "./components/form/FormOuterDiv";
export { default as FormBottomButtonsDiv } from "./components/form/FormBottomButtonsDiv";
export { default as FormSectionsDiv } from "./components/form/FormSectionDiv";

/* Site */
export { default as SiteLayout } from "./components/site/SiteLayout";
export { default as PrimaryColumnDiv } from "./components/site/PrimaryColumnDiv";
export { default as PrimaryMenu } from "./components/site/PrimaryMenu";
export { default as SnackbarAlert } from "./components/site/SnackbarAlert"; 

/* Button */
export { PrimaryButton } from "./components/button/Button";
export { SecondaryButton } from "./components/button/Button";

/* Header */
export { default as HeaderDiv } from "./components/header/HeaderDiv";
export { default as SiteHeader } from "./components/header/SiteHeader";
export { default as LogoLink } from "./components/header/LogoLink";
export { default as HeaderTitle } from "./components/header/HeaderTitle";
export { HeaderBar, HeaderMediaWidth } from "./components/header/HeaderBar";
export { default as HeaderButton } from "./components/header/HeaderButton";
export { default as HeaderBarSpacer } from "./components/header/HeaderBarSpacer";

/* Account */
export { default as AccountPageDiv } from "./components/account/AccountPageDiv";
export { default as UserAvatarDropdown } from "./components/account/UserAvatarDropdown";

/* Display */
export { default as PageName } from "./components/display/PageName";
export { default as SectionName } from "./components/display/SectionName";
export { default as TextSectionDiv } from "./components/display/TextSectionDiv";
export { default as PageDiv } from "./components/display/PageDiv";
export { default as OneColumnSectionDiv } from "./components/display/OneColumnSectionDiv";
export { default as TwoColumnSectionDiv } from "./components/display/TwoColumnSectionDiv";
export { default as PortfolioDropdown } from "./components/display/PortfolioDropdown"

/* Display Mui*/
export {
  Section,
  SectionGrid,
  CentredGrid,
  BackgroundImage,
  Copyright,
  ScreenBlock,
  PortfolioHeader,
} from "./components/display/MuiComponents";




/* Edit */
export { default as PaperSection } from "./components/edit/PaperSection"
export { default as NewSectionMenu } from "./components/edit/NewSectionMenu"
export { default as UploadImageSubSection } from "./components/edit/UploadImageSubSection"
export { default as TextFieldSubSection } from "./components/edit/TextFieldSubSection"
export { default as PortfolioNameSectionInput } from "./components/edit/PortfolioNameSectionInput"
export { default as TextSectionInput } from "./components/edit/TextSectionInput"
export { default as ImageSectionInput } from "./components/edit/ImageSectionInput"
export { default as ImageTextSectionInput } from "./components/edit/ImageTextSectionInput"
export { default as UserImage } from "./components/edit/UserImage";
export { default as DefaultSectionData } from "./components/edit/DefaultSectionData"
export { default as PaperSectionStatic } from "./components/edit/PaperSectionStatic"
export { default as PaperSectionBase } from "./components/edit/PaperSectionBase"
export { default as PaperSectionDiv } from "./components/edit/PaperSectionDiv"
export { default as PaperSectionTitle } from "./components/edit/PaperSectionTitle"

/* Home */
export { default as HomeTemplates } from "./components/home/HomeTemplates";
export { UploadIcon, FormIcon, LogoTextIcon } from "./components/home/HomeIcons";
export { default as HomeFooter } from "./components/home/HomeFooter";

/* Routes */
export { LoggedInRoute, LoggedOutRoute } from "./routes/ProtectedRoutes.js";
export { PortfolioDisplay } from "./routes/PortfolioDisplay";
export { Routes } from "./routes/Routes";

/* Context */
export {
  UserContextProvider,
  UserContext,
  defaultUserContext,
  storeUserData,
  retrieveUserData,
} from "./contexts/index";

/* Types */

export type {
  TPortfolio,
  TPage,
  TSection,
  TSectionData,
  TEditSection,
  TPortfolioData,
  TPageData,
  IUserContext,
} from "./types/index";

/* Hook */
export { useUser } from "./hooks/useUser";

/* Theme */
export {
  LightTheme,
  DarkTheme,
  LightShadowColour,
  DarkShadowColour,
  LightHeaderGrad,
  DarkHeaderGrad,
  LightTitleBGGrad,
  DarkTitleBGGrad,
  LightPrimaryButtonGrad,
  LightPrimaryButtonGradHover,
  DarkPrimaryButtonGrad,
  BlueIconGrad,
} from "./theme/GlobalTheme";

/* Portfolio themes */
export { PortfolioThemes, defaultColors } from "./theme/index";