import {
    AppsRoutes,
    IntegrationRoutes,
    BlankRoutes,
    DashboardRoutes,
    IndependentRoutes,
    UiKitRoutes,
    AdvanceUiRoutes,
    IconsRoutes,
    MISC_PAGE,
    mapRoutes,
    chartRoutes,
    apexChartRoutes,
    AuthRoutes,
    ErrorRoutes,
    OtherRoutes,
    TableRoutes,
    FormElementRoutes,
    ReadyUseRoutes
} from "@/Route/AuthRoutes";

export const sidebarConfig = [
  {
    type: "dropdown",
    title: "Amazon",
    iconClass: "flag-icon flag-icon-usa", // USA flag circle
    name: "amazon",
    collapseId: "amazon",
    path: "/Amazon/Dashboard",
    children: [
      { name: "Dashboard", path: "/Amazon/Dashboard", iconClass: "ph-duotone ph-gauge" },
      { name: "Products", path: "/Amazon/Products", iconClass: "ph-duotone ph-package" },
      { name: "Brands", path: "/Amazon/Brands", iconClass: "ph-duotone ph-briefcase" },
      { name: "My Links", path: "/Amazon/MyLinks", iconClass: "ph-duotone ph-link" },
      { name: "Orders", path: "/Amazon/Orders", iconClass: "ph-duotone ph-shopping-cart" },
      { name: "Reports", path: "/Amazon/Reports", iconClass: "ph-duotone ph-chart-bar" },
    ],
  },
  {
    type: "dropdown",
    title: "D2C Ecom",
    iconClass: "flag-icon flag-icon-ind", // India flag circle
    name: "D2C Ecom",
    collapseId: "d2c-ecom",
    path: "/D2C/Dashboard",
    children: [
      { name: "Dashboard", path: "/D2C/Dashboard", iconClass: "ph-duotone ph-gauge" },
      { name: "Products", path: "/D2C/Products", iconClass: "ph-duotone ph-package" },
      { name: "Brands", path: "/D2C/Brands", iconClass: "ph-duotone ph-briefcase" },
      { name: "My Links", path: "/D2C/MyLinks", iconClass: "ph-duotone ph-link" },
      { name: "Orders", path: "/D2C/Orders", iconClass: "ph-duotone ph-shopping-cart" },
      { name: "Reports", path: "/D2C/Reports", iconClass: "ph-duotone ph-chart-bar" },
    ],
  },
  {
    type: "dropdown",
    title: "Integration",
    iconClass: "integration-icon",
    name: "integration",
    collapseId: "integration",
    path: "/Integration",
    children: [
      { name: "Postback", path: IntegrationRoutes.POSTBACK_PAGE, iconClass: "ph-duotone ph-arrow-u-up-left" },
      { name: "Facebook", path: IntegrationRoutes.FACEBOOK_PAGE, iconClass: "ph-duotone ph-facebook-logo" },
      { name: "Google Ads", path: IntegrationRoutes.GOOGLE_ADS_PAGE, iconClass: "ph-duotone ph-google-logo" },
    ],
  },
];