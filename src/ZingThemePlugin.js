// ***********************
// PLUGIN COMPONENT CODE
// Adapted from base YelpIntegrationPlugin code from TwilioQuest
// ***********************
import { FlexPlugin, loadCSS } from 'flex-plugin';
import React from 'react';
import ZingTheme from "./theme/ZingTheme";

const PLUGIN_NAME = 'FlexThemePlugin';

export default class FlexThemePlugin extends FlexPlugin {
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
    flex.MainHeader.defaultProps.logoUrl = "https://lh6.googleusercontent.com/DsUR5fM54xmMuNzufFnseC_MqIHLLhDqyoBLatE22IinqkFbHhUkNj2j22Q-2605wku_SlsGQmco1r6xOQEP=w944-h948-rw";
  }
}