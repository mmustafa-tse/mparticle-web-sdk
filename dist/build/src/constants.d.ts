declare const Constants: {
    readonly sdkVersion: string;
    readonly sdkVendor: "mparticle";
    readonly platform: "web";
    readonly Messages: {
        readonly ErrorMessages: {
            readonly NoToken: "A token must be specified.";
            readonly EventNameInvalidType: "Event name must be a valid string value.";
            readonly EventDataInvalidType: "Event data must be a valid object hash.";
            readonly LoggingDisabled: "Event logging is currently disabled.";
            readonly CookieParseError: "Could not parse cookie";
            readonly EventEmpty: "Event object is null or undefined, cancelling send";
            readonly APIRequestEmpty: "APIRequest is null or undefined, cancelling send";
            readonly NoEventType: "Event type must be specified.";
            readonly TransactionIdRequired: "Transaction ID is required";
            readonly TransactionRequired: "A transaction attributes object is required";
            readonly PromotionIdRequired: "Promotion ID is required";
            readonly BadAttribute: "Attribute value cannot be object or array";
            readonly BadKey: "Key value cannot be object or array";
            readonly BadLogPurchase: "Transaction attributes and a product are both required to log a purchase, https://docs.mparticle.com/?javascript#measuring-transactions";
        };
        readonly InformationMessages: {
            readonly CookieSearch: "Searching for cookie";
            readonly CookieFound: "Cookie found, parsing values";
            readonly CookieNotFound: "Cookies not found";
            readonly CookieSet: "Setting cookie";
            readonly CookieSync: "Performing cookie sync";
            readonly SendBegin: "Starting to send event";
            readonly SendIdentityBegin: "Starting to send event to identity server";
            readonly SendWindowsPhone: "Sending event to Windows Phone container";
            readonly SendIOS: "Calling iOS path: ";
            readonly SendAndroid: "Calling Android JS interface method: ";
            readonly SendHttp: "Sending event to mParticle HTTP service";
            readonly SendAliasHttp: "Sending alias request to mParticle HTTP service";
            readonly SendIdentityHttp: "Sending event to mParticle HTTP service";
            readonly StartingNewSession: "Starting new Session";
            readonly StartingLogEvent: "Starting to log event";
            readonly StartingLogOptOut: "Starting to log user opt in/out";
            readonly StartingEndSession: "Starting to end session";
            readonly StartingInitialization: "Starting to initialize";
            readonly StartingLogCommerceEvent: "Starting to log commerce event";
            readonly StartingAliasRequest: "Starting to Alias MPIDs";
            readonly LoadingConfig: "Loading configuration options";
            readonly AbandonLogEvent: "Cannot log event, logging disabled or developer token not set";
            readonly AbandonAliasUsers: "Cannot Alias Users, logging disabled or developer token not set";
            readonly AbandonStartSession: "Cannot start session, logging disabled or developer token not set";
            readonly AbandonEndSession: "Cannot end session, logging disabled or developer token not set";
            readonly NoSessionToEnd: "Cannot end session, no active session found";
        };
        readonly ValidationMessages: {
            readonly ModifyIdentityRequestUserIdentitiesPresent: "identityRequests to modify require userIdentities to be present. Request not sent to server. Please fix and try again";
            readonly IdentityRequesetInvalidKey: "There is an invalid key on your identityRequest object. It can only contain a `userIdentities` object and a `onUserAlias` function. Request not sent to server. Please fix and try again.";
            readonly OnUserAliasType: "The onUserAlias value must be a function.";
            readonly UserIdentities: "The userIdentities key must be an object with keys of identityTypes and values of strings. Request not sent to server. Please fix and try again.";
            readonly UserIdentitiesInvalidKey: "There is an invalid identity key on your `userIdentities` object within the identityRequest. Request not sent to server. Please fix and try again.";
            readonly UserIdentitiesInvalidValues: "All user identity values must be strings or null. Request not sent to server. Please fix and try again.";
            readonly AliasMissingMpid: "Alias Request must contain both a destinationMpid and a sourceMpid";
            readonly AliasNonUniqueMpid: "Alias Request's destinationMpid and sourceMpid must be unique";
            readonly AliasMissingTime: "Alias Request must have both a startTime and an endTime";
            readonly AliasStartBeforeEndTime: "Alias Request's endTime must be later than its startTime";
        };
    };
    readonly NativeSdkPaths: {
        readonly LogEvent: "logEvent";
        readonly SetUserTag: "setUserTag";
        readonly RemoveUserTag: "removeUserTag";
        readonly SetUserAttribute: "setUserAttribute";
        readonly RemoveUserAttribute: "removeUserAttribute";
        readonly SetSessionAttribute: "setSessionAttribute";
        readonly AddToCart: "addToCart";
        readonly RemoveFromCart: "removeFromCart";
        readonly ClearCart: "clearCart";
        readonly LogOut: "logOut";
        readonly SetUserAttributeList: "setUserAttributeList";
        readonly RemoveAllUserAttributes: "removeAllUserAttributes";
        readonly GetUserAttributesLists: "getUserAttributesLists";
        readonly GetAllUserAttributes: "getAllUserAttributes";
        readonly Identify: "identify";
        readonly Logout: "logout";
        readonly Login: "login";
        readonly Modify: "modify";
        readonly Alias: "aliasUsers";
        readonly Upload: "upload";
    };
    readonly StorageNames: {
        readonly localStorageName: "mprtcl-api";
        readonly localStorageNameV3: "mprtcl-v3";
        readonly cookieName: "mprtcl-api";
        readonly cookieNameV2: "mprtcl-v2";
        readonly cookieNameV3: "mprtcl-v3";
        readonly localStorageNameV4: "mprtcl-v4";
        readonly localStorageProductsV4: "mprtcl-prodv4";
        readonly cookieNameV4: "mprtcl-v4";
        readonly currentStorageName: "mprtcl-v4";
        readonly currentStorageProductsName: "mprtcl-prodv4";
    };
    readonly DefaultConfig: {
        readonly cookieDomain: any;
        readonly cookieExpiration: 365;
        readonly logLevel: any;
        readonly timeout: 300;
        readonly sessionTimeout: 30;
        readonly maxProducts: 20;
        readonly forwarderStatsTimeout: 5000;
        readonly integrationDelayTimeout: 5000;
        readonly maxCookieSize: 3000;
        readonly aliasMaxWindow: 90;
        readonly uploadInterval: 0;
    };
    readonly DefaultUrls: {
        readonly v1SecureServiceUrl: "jssdks.mparticle.com/v1/JS/";
        readonly v2SecureServiceUrl: "jssdks.mparticle.com/v2/JS/";
        readonly v3SecureServiceUrl: "jssdks.mparticle.com/v3/JS/";
        readonly configUrl: "jssdkcdns.mparticle.com/JS/v2/";
        readonly identityUrl: "identity.mparticle.com/v1/";
        readonly aliasUrl: "jssdks.mparticle.com/v1/identity/";
    };
    readonly Base64CookieKeys: {
        readonly csm: 1;
        readonly sa: 1;
        readonly ss: 1;
        readonly ua: 1;
        readonly ui: 1;
        readonly csd: 1;
        readonly ia: 1;
        readonly con: 1;
    };
    readonly SDKv2NonMPIDCookieKeys: {
        readonly gs: 1;
        readonly cu: 1;
        readonly l: 1;
        readonly globalSettings: 1;
        readonly currentUserMPID: 1;
    };
    readonly HTTPCodes: {
        readonly noHttpCoverage: -1;
        readonly activeIdentityRequest: -2;
        readonly activeSession: -3;
        readonly validationIssue: -4;
        readonly nativeIdentityRequest: -5;
        readonly loggingDisabledOrMissingAPIKey: -6;
        readonly tooManyRequests: 429;
    };
    readonly FeatureFlags: {
        readonly ReportBatching: "reportBatching";
        readonly EventsV3: "eventsV3";
        readonly EventBatchingIntervalMillis: "eventBatchingIntervalMillis";
    };
    readonly DefaultInstance: "default_instance";
};
export default Constants;
