// ***********************
// PLUGIN COMPONENT CODE
// Adapted from base YelpIntegrationPlugin code from TwilioQuest
// ***********************
import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import ZingTheme from "./theme/ZingTheme";

const PLUGIN_NAME = 'FlexThemePlugin';

export default class FlexThemePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    //NOTE: This is useful https://www.twilio.com/docs/flex/overriding-themes-branding-and-styling

    //define const for theme basically need colorTheme: CustomTheme or whatever it's called
    //this can be imported above from css
    const config = {
      colorTheme: ZingTheme
    };

    //use manager.updateConfig(constDefinedJustUpThere); to apply the theme
    manager.updateConfig(config);
  }
}