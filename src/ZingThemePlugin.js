// ***********************
// PLUGIN COMPONENT CODE
// Adapted from base YelpIntegrationPlugin code from TwilioQuest
// ***********************
import { FlexPlugin, loadCSS } from 'flex-plugin';
import React from 'react';
import ZingTheme from "./theme/ZingTheme";

const PLUGIN_NAME = 'ZingThemePlugin';

export default class ZingThemePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    //NOTE: This is useful https://www.twilio.com/docs/flex/overriding-themes-branding-and-styling

    loadCSS('./fonts/font.css');

    //define const for theme basically need colorTheme: CustomTheme or whatever it's called
    //this can be imported above from css
    const config = {
      colorTheme: ZingTheme
    };

    //use manager.updateConfig(constDefinedJustUpThere); to apply the theme
    manager.updateConfig(config);
    flex.MainHeader.defaultProps.logoUrl = "https://doc-10-ac-docs.googleusercontent.com/docs/securesc/s95slau2cv85a89pgqtrp630rtgq6hns/fl1u775pk9mg9bsk3ahkb24g0m5splu8/1567072800000/06043530724723489829/17335709548727963608/18CMWWqEzwBjZwKGGpgbwPpDbdJJHEwQ4?h=13401462919179631825" /*"https://drive.google.com/uc?id=18CMWWqEzwBjZwKGGpgbwPpDbdJJHEwQ4"*/;
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://lh5.googleusercontent.com/rEBWxvzCT5TwD_WaSEk7tSMJfQrREy6Ie9e5RtS_7AwEUbkMbInihyJ3k7sE7dnT542cb_-kOtJbXHKZ31_X=w1920-h920';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}