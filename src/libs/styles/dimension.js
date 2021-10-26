/** @format */

// /** @format */

// import {
//   Dimensions,
//   PixelRatio,
//   Platform,
//   PlatformIOSStatic,
//   StatusBar,
// } from "react-native";
// import DeviceInfo from "react-native-device-info";

// export const isIOS = Platform.OS === "ios";
// export const isTestMode = __DEV__;
// export const tabBarHeight = 84;
// export const navBarHeight = 74;
// export const designSize = { width: 375, height: 812 }; // based on iPhoneX
// const windowSize = Dimensions.get("window");

// const widthRatio = windowSize.width / designSize.width;
// const heightRatio = windowSize.height / designSize.height;
// const heightRatioWithTB =
//   (windowSize.height - tabBarHeight) / (designSize.height - tabBarHeight);

// const isIPhone = () => isIOS && !Platform.isPad && !Platform.isTV;
// export const getScaledWidth = (w, noScaleIfRatioIsLessThanOne = true) => {
//   if (noScaleIfRatioIsLessThanOne && widthRatio < 1) {
//     return w;
//   }
//   return w * widthRatio;
// };

// export const getScaledHeight = (
//   h,
//   noScaleIfRatioIsLessThanOne = false,
//   includeTabBar = false
// ) => {
//   const ratio = includeTabBar ? heightRatioWithTB : heightRatio;
//   if (noScaleIfRatioIsLessThanOne && ratio < 1) {
//     return h;
//   }
//   return h * ratio;
// };

// export const getScaledHeightForSmallScreen = (h) => {
//   if (heightRatio >= 1) {
//     return h;
//   }
//   return h * heightRatio;
// };

// export const getAdaptiveRatio = () => {
//   if (!isIPhoneX()) {
//     return { widthRatio: 1, heightRatio: 1 };
//   }
//   return { widthRatio, heightRatio };
// };

// export const getAdaptiveSize = ({ width = 0, height = 0 }) => {
//   if (!isIPhoneX()) {
//     return { width, height };
//   }
//   const _width = width === 0 ? 0 : getScaledWidth(width, true);
//   const _height = height === 0 ? 0 : getScaledHeight(height, true);
//   return { width: _width, height: _height };
// };

// export const getAdaptiveWidth = (_width) => {
//   const { width } = getAdaptiveSize({ width: _width });
//   return width;
// };

// export const getAdaptiveHeight = (_height) => {
//   const { height } = getAdaptiveSize({ height: _height });
//   return height;
// };

// export const getScaledButtonWidth = (_width) => {
//   return _width * PixelRatio.getFontScale();
// };

// export const windowHeight = windowSize.height;
// export const windowWidth = windowSize.width;
// export const containerPadding = 30; // left and right padding
// export const fixHeightAndroidNotch = isIOS
//   ? 0
//   : StatusBar.currentHeight > 24
//   ? StatusBar.currentHeight
//   : 0;

// // let _statusBarHeight = StatusBar.currentHeight;
// // export const setStatusBarHeight = async () => {
// //     try {
// //         const { statusBarHeight } = await Navigation.constants();
// //         _statusBarHeight = statusBarHeight;
// //     } catch (error) {
// //         console.log('Error: unable to set statusBar height');
// //     }
// // };_statusBarHeight

// export const safeAreaHeight = () => (isIOS ? (isIPhoneX() ? 20 : 10) : 20);
// export const windowHeightSafe = () =>
//   windowHeight - (isIOS ? 0 : safeAreaHeight() + Number(fixHeightAndroidNotch));

// export const isIPhoneX = () =>
//   isIPhone() && (windowHeight >= 812 || windowWidth >= 812);

// export const safePaddingTop = (isIOS ? Number(safeAreaHeight()) : 0) + 16;
// export const safePaddingTopSpecial = Number(safeAreaHeight()) + 16;

// export const safeBottomPadding = isIPhoneX() ? 30 : 10;

// export const safeBottomHeight = tabBarHeight + safeBottomPadding;

// export const isWideScreen = windowWidth > 400 && windowHeight < 800;

// export const isLargeScreen = windowHeight >= 812 && windowHeight < 896;

// export const isExtraLargeScreen = windowHeight >= 896;

// export const isSmallScreen = windowHeight < 736;

// export const isSmallerScreen = windowHeight < 650;

// export const isMediumScreen = !isLargeScreen && !isSmallScreen;

// const ratio = isSmallerScreen ? 1.333 : 1;
// export function getScaledSizeForSmallerScreen(size) {
//   return size / ratio;
// }

// export const getScaledTransformStyle = ({ width, height, scale }) => {
//   const scaledWidth = width * scale;
//   const scaledHeight = height * scale;
//   const translateX = (scaledWidth - width) / 2;
//   const translateY = (scaledHeight - height) / 2;
//   return {
//     width: scaledWidth,
//     height: scaledHeight,
//     transform: [{ scale }, { translateX }, { translateY }],
//   };
// };

// export const isTabletBasedOnRatio = () => {
//   const value = windowSize.height / windowSize.width;
//   return value > 1.6 ? false : true;
// };

// export const getDevicesInfo = () => {
//   const screen = Dimensions.get("screen");
//   const devicesInfo = {
//     width: parseInt(screen.width.toString(), 10),
//     height: parseInt(screen.height.toString(), 10),
//     os: Platform.OS,
//     brand: DeviceInfo.getModel(),
//     version: DeviceInfo.getSystemVersion(),
//   };
//   return devicesInfo;
// };
// export const deviceInfo = getDevicesInfo();

// export const innerWindowHeight =
//   windowHeight -
//   (isIOS
//     ? isIPhoneX()
//       ? 20
//       : 10
//     : (StatusBar && StatusBar.currentHeight) || 24);
