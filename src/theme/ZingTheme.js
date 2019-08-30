//Documentation: https://www.twilio.com/docs/flex/overriding-themes-branding-and-styling

//Define commonly used colours/gradients
const zingRed = "#c7001c";
const zingSlate = "#2b3040";
const zingGrey = "#4a4a4a";
const zingMidGrey = "#b2b2b2";
const zingLightGrey = "#dadada";
const zingYolk = "#fab400";
const zingDragonfruit = "#de007e";
const zingAvocado = "#9bbd1e";
const zingGradient = `linear-gradient(to bottom, ${zingSlate}, ${zingGrey})`;

//Define commonly used fonts
const zingRegular = "CeraPro-Regular";
const zingBold = "CeraPro-Medium";

export default {
    //This is the name of the flex theme being built upon, GreyDark is default
    baseName: "GreyDark",

    //Colours used by various components, may also be overridden individually
    colors: {
        //base0: zingRed, //Only really used in custom theme creation
        base1: zingGrey, //CRM, upper gradient and highlighted call
        base2: zingSlate, //Call list background and bottom gradient
        base3: zingGrey, //Call buttons
        base4: "#202020", //Borders between some elements
        base5: zingGrey, //User icon outline
        base6: zingGrey, //Call icon outline
        //base7: zingRed, //Only used in custom themes
        //base8: zingRed, //Deselected tab text, wrap up bit and small text under no crm configured
        //base9: zingRed, //Used in header light theme
        //base10: zingRed, //Selected and hovered tab text colours
        //base11: zingRed, //Cog colour, used for some other customisations but these were manually overrided
        tabSelectedColor: zingRed, //the little line under the selected tab
        defaultButtonColor: zingRed, //how to configure button
        focusColor: "#990014", //dropdown outline
        focusGlow: zingRed, //dropdown outline
        textColor: "rgba(255,255,255, 0.9)",
        //NOTE: This isn't officially documented, but can still be overridden. Might get deprecated eventually, though I doubt it.
        flexBlueColor: zingRed, //Used for some colouring by flex
    },

    //Overrides for individual component styling
    overrides: {
        //Base container for all elements
        RootContainer: {
            fontFamily: zingRegular,
            color: "rgba(255,255,255, 0.9)",
        },

        //Overall Header
        MainHeader: {
            Container: {
                background: zingSlate,
                color: "rgba(255,255,255, 0.9)",
            },
        },

        //Extendable side menu
        SideNav: {
            Container: {
                background: zingGrey,
                fontFamily: zingBold,
            },
            Button: {
                color: zingRed,
                background: zingGrey,
            },
            Icon: {
                color: "#FFFFFF",
            },
        },

        //Overall Agent View
        AgentDesktopView: {
            ContentSplitter: {
                background: zingRed
            },
            Panel1: {
                background: `linear-gradient(to bottom, ${zingSlate} 10%, ${zingGrey})`,
                color: "rgba(255,255,255, 0.9)",
            },
            Panel2: {
                background: zingGradient,
                color: "rgba(255,255,255, 0.9)",
            },
        },

        //Details Panel of Task
        TaskDetailsPanel: {
            Container: {
                background: zingGradient,
                fontFamily: zingBold,
                color: "rgba(255,255,255, 0.9)",
            },
        },

        TaskList: {
            Item: {
                Buttons: {
                    AcceptButton: {
                        background: zingAvocado,
                    },
                    RejectButton: {
                        background: zingRed,
                    },
                },
            },
        },

        IncomingTaskCanvas: {
            AcceptTaskButton: {
                background: zingAvocado,
            },
            RejectTaskButton: {
                background: zingRed,
            },
        },

        //Task Header
        TaskCanvasHeader: {
            Container: {
                background: zingSlate,
                fontFamily: zingBold,
                color: "rgba(255,255,255, 0.9)",
            },
            WrapupTaskButton: {
                //If wrap up timer configured, will change to red
                //just to emphasise urgency of resolution
                background: zingRed,
                //fontFamily: zingBold, //Can't change font on button, only works inherited
            },
            EndTaskButton: {
                //Made this green as it is an affirmative action
                background: zingAvocado,
                color: "#000000",
                //fontFamily: zingBold, //Can't change font on button, only works inherited
            },
        },

        //Info Tab of Task
        TaskInfoPanel: {
            Container: {
                background: zingGradient,
                color: "rgba(255,255,255, 0.9)",
                fontFamily: zingRegular,
            }
        },

        //Overall Task Canvas
        TaskCanvas: {
            Container: {
                background: zingSlate,
                color: "rgba(255,255,255, 0.9)",
                fontFamily: zingBold,
            },
        },

        //Call Tab of Task
        CallCanvas: {
            Button: {
                background: zingSlate,
                color: "rgba(255,255,255, 0.9)",
            },
        },

        //CRM Section
        CRMContainer: {
            Placeholder: {
                Container: {
                    background: `linear-gradient(to bottom, ${zingSlate} 15%, ${zingGrey})`,
                    fontFamily: zingBold,
                    color: "rgba(255,255,255, 0.9)",
                },
            },
        },

        //Some overall styling passed down to all other classes, may be overridden themselves
        Supervisor: {
            Container: {
                background: zingGradient,
                color: "rgba(255,255,255, 0.9)",
            },
            TaskCanvas: {
                Container: {
                    background: zingSlate,
                    color: "rgba(255,255,255, 0.9)",
                    fontFamily: zingBold,
                },
                Header: {
                    fontFamily: zingBold,
                },
            },
            WorkerCanvas: {
                Header: {
                    fontFamily: zingBold,
                },
            },
        },

        //Empty Task Area
        NoTasksCanvas: {
            Container: {
                background: `linear-gradient(to bottom, ${zingSlate} 15%, ${zingGrey})`,
                color: "rgba(255,255,255, 0.9)",
                fontFamily: zingBold,
            },
        },
    }
}