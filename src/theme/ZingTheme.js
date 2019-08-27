//Again, this is useful https://www.twilio.com/docs/flex/overriding-themes-branding-and-styling

const zingRed = "#c7001c";
const zingSlate = "#2b3040";
const zingGrey = "#4a4a4a";

export default {
    baseName: "GreyDark",
    colors: {
        base0: zingRed,
        base1: zingGrey,
        base2: zingSlate,
        base3: zingGrey
    },
    overrides: {
        MainHeader: {
            Container: {
                background: zingSlate,
                color: "#FFFFFF"
            }
        },
        SideNav: {
            Container: {
                background: zingSlate
            },
            Button: {
                background: zingGrey,
                color: zingRed
            },
        }
    }
}