module.exports = {

"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_gbwmpesob3fhaujg4y5vtqy63i/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/HelpersUtil.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HelpersUtil": (()=>HelpersUtil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$common$40$1$2e$7$2e$10_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-common@1.7.10_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_3dvad5p7yzthfzsurxufuomdma/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_gbwmpesob3fhaujg4y5vtqy63i$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_gbwmpesob3fhaujg4y5vtqy63i/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)");
;
;
;
const HelpersUtil = {
    getTabsByNamespace (namespace) {
        const isEVM = Boolean(namespace) && namespace === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$common$40$1$2e$7$2e$10_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM;
        if (!isEVM) {
            return [];
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsController"].state.remoteFeatures?.activity === false) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_gbwmpesob3fhaujg4y5vtqy63i$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].ACCOUNT_TABS.filter((tab)=>tab.label !== 'Activity');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_gbwmpesob3fhaujg4y5vtqy63i$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].ACCOUNT_TABS;
    }
}; //# sourceMappingURL=HelpersUtil.js.map
}}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_gbwmpesob3fhaujg4y5vtqy63i/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectionUtil.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConnectionUtil": (()=>ConnectionUtil)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$common$40$1$2e$7$2e$10_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-common@1.7.10_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_3dvad5p7yzthfzsurxufuomdma/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_3dvad5p7yzthfzsurxufuomdma/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_gbwmpesob3fhaujg4y5vtqy63i$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_gbwmpesob3fhaujg4y5vtqy63i/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/ConnectorUtil.js [app-ssr] (ecmascript)");
;
;
;
const ConnectionUtil = {
    getAuthData (connection) {
        const isAuth = connection.connectorId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$common$40$1$2e$7$2e$10_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH;
        if (!isAuth) {
            return {
                isAuth: false,
                icon: undefined,
                iconSize: undefined,
                name: undefined
            };
        }
        const socialProvider = connection?.auth?.name ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectedSocialProvider();
        const socialUsername = connection?.auth?.username ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageUtil"].getConnectedSocialUsername();
        const authConnector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorController"].getAuthConnector();
        const email = authConnector?.provider.getEmail() ?? '';
        return {
            isAuth: true,
            icon: socialProvider ?? 'mail',
            iconSize: socialProvider ? 'xl' : 'md',
            name: isAuth ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_gbwmpesob3fhaujg4y5vtqy63i$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$ConnectorUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorUtil"].getAuthName({
                email,
                socialUsername,
                socialProvider
            }) : undefined
        };
    }
}; //# sourceMappingURL=ConnectionUtil.js.map
}}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_gbwmpesob3fhaujg4y5vtqy63i/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.0/node_modules/@lit/reactive-element/node/development/css-tag.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;
 //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_gbwmpesob3fhaujg4y5vtqy63i/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "W3mConnectingWidget": (()=>W3mConnectingWidget)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$0$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-element@4.2.0/node_modules/lit-element/development/lit-element.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.0/node_modules/lit-html/node/development/lit-html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/decorators.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.0/node_modules/@lit/reactive-element/node/development/decorators/property.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lit+reactive-element@2.1.0/node_modules/@lit/reactive-element/node/development/decorators/state.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit@3.3.0/node_modules/lit/directives/if-defined.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lit-html@3.3.0/node_modules/lit-html/node/development/directives/if-defined.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_3dvad5p7yzthfzsurxufuomdma/node_modules/@reown/appkit-controllers/dist/esm/src/utils/AssetUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_3dvad5p7yzthfzsurxufuomdma/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_3dvad5p7yzthfzsurxufuomdma/node_modules/@reown/appkit-controllers/dist/esm/src/utils/CoreHelperUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_3dvad5p7yzthfzsurxufuomdma/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/RouterController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_3dvad5p7yzthfzsurxufuomdma/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/SnackController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-controllers@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_3dvad5p7yzthfzsurxufuomdma/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ThemeController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_ut_f6f2eg4usx6xlrugu7phmm3ovq$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_ut_f6f2eg4usx6xlrugu7phmm3ovq/node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_ut_f6f2eg4usx6xlrugu7phmm3ovq$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$flex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_ut_f6f2eg4usx6xlrugu7phmm3ovq/node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_ut_f6f2eg4usx6xlrugu7phmm3ovq$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_ut_f6f2eg4usx6xlrugu7phmm3ovq/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_ut_f6f2eg4usx6xlrugu7phmm3ovq$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$icon$2d$box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_ut_f6f2eg4usx6xlrugu7phmm3ovq/node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_ut_f6f2eg4usx6xlrugu7phmm3ovq$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_ut_f6f2eg4usx6xlrugu7phmm3ovq/node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_ut_f6f2eg4usx6xlrugu7phmm3ovq$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$loading$2d$thumbnail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_ut_f6f2eg4usx6xlrugu7phmm3ovq/node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_ut_f6f2eg4usx6xlrugu7phmm3ovq$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_ut_f6f2eg4usx6xlrugu7phmm3ovq/node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_ut_f6f2eg4usx6xlrugu7phmm3ovq$2f$node_modules$2f40$reown$2f$appkit$2d$ui$2f$dist$2f$esm$2f$exports$2f$wui$2d$wallet$2d$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_ut_f6f2eg4usx6xlrugu7phmm3ovq/node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_gbwmpesob3fhaujg4y5vtqy63i$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$partials$2f$w3m$2d$mobile$2d$download$2d$links$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_gbwmpesob3fhaujg4y5vtqy63i/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_gbwmpesob3fhaujg4y5vtqy63i$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-scaffold-ui@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript_gbwmpesob3fhaujg4y5vtqy63i/node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js [app-ssr] (ecmascript)");
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class W3mConnectingWidget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$element$40$4$2e$2$2e$0$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LitElement"] {
    constructor(){
        super();
        this.wallet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterController"].state.data?.wallet;
        this.connector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$RouterController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterController"].state.data?.connector;
        this.timeout = undefined;
        this.secondaryBtnIcon = 'refresh';
        this.onConnect = undefined;
        this.onRender = undefined;
        this.onAutoConnect = undefined;
        this.isWalletConnect = true;
        this.unsubscribe = [];
        this.imageSrc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AssetUtil"].getWalletImage(this.wallet) ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$AssetUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AssetUtil"].getConnectorImage(this.connector);
        this.name = this.wallet?.name ?? this.connector?.name ?? 'Wallet';
        this.isRetrying = false;
        this.uri = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri;
        this.error = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcError;
        this.ready = false;
        this.showRetry = false;
        this.secondaryBtnLabel = 'Try again';
        this.secondaryLabel = 'Accept connection request in the wallet';
        this.isLoading = false;
        this.isMobile = false;
        this.onRetry = undefined;
        this.unsubscribe.push(...[
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcUri', (val)=>{
                this.uri = val;
                if (this.isRetrying && this.onRetry) {
                    this.isRetrying = false;
                    this.onConnect?.();
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionController"].subscribeKey('wcError', (val)=>this.error = val)
        ]);
        if ((__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isTelegram() || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isSafari()) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoreHelperUtil"].isIos() && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionController"].state.wcUri) {
            this.onConnect?.();
        }
    }
    firstUpdated() {
        this.onAutoConnect?.();
        this.showRetry = !this.onAutoConnect;
    }
    disconnectedCallback() {
        this.unsubscribe.forEach((unsubscribe)=>unsubscribe());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(false);
        clearTimeout(this.timeout);
    }
    render() {
        this.onRender?.();
        this.onShowRetry();
        const subLabel = this.error ? 'Connection can be declined if a previous request is still active' : this.secondaryLabel;
        let label = `Continue in ${this.name}`;
        if (this.error) {
            label = 'Connection declined';
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"]`
      <wui-flex
        data-error=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ifDefined"])(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[
            '3xl',
            'xl',
            'xl',
            'xl'
        ]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$directives$2f$if$2d$defined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ifDefined"])(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? 'error-100' : 'fg-100'}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"]`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying || this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            ` : null}
      </wui-flex>

      ${this.isWalletConnect ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"]`
            <wui-flex .padding=${[
            '0',
            'xl',
            'xl',
            'xl'
        ]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
    }
    onShowRetry() {
        if (this.error && !this.showRetry) {
            this.showRetry = true;
            const retryButton = this.shadowRoot?.querySelector('wui-button');
            retryButton?.animate([
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ], {
                fill: 'forwards',
                easing: 'ease'
            });
        }
    }
    onTryAgain() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectionController"].setWcError(false);
        if (this.onRetry) {
            this.isRetrying = true;
            this.onRetry?.();
        } else {
            this.onConnect?.();
        }
    }
    loaderTemplate() {
        const borderRadiusMaster = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ThemeController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeController"].state.themeVariables['--w3m-border-radius-master'];
        const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace('px', ''), 10) : 4;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lit$2d$html$40$3$2e$3$2e$0$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"]`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
    }
    onCopyUri() {
        try {
            if (this.uri) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$CoreHelperUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoreHelperUtil"].copyToClopboard(this.uri);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnackController"].showSuccess('Link copied');
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$controllers$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_3dvad5p7yzthfzsurxufuomdma$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$SnackController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnackController"].showError('Failed to copy');
        }
    }
}
W3mConnectingWidget.styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$scaffold$2d$ui$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript_gbwmpesob3fhaujg4y5vtqy63i$2f$node_modules$2f40$reown$2f$appkit$2d$scaffold$2d$ui$2f$dist$2f$esm$2f$src$2f$utils$2f$w3m$2d$connecting$2d$widget$2f$styles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "isRetrying", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "secondaryBtnLabel", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "secondaryLabel", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["state"])()
], W3mConnectingWidget.prototype, "isLoading", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["property"])({
        type: Boolean
    })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lit$2b$reactive$2d$element$40$2$2e$1$2e$0$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$decorators$2f$property$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["property"])()
], W3mConnectingWidget.prototype, "onRetry", void 0); //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=89fa5_%40reown_appkit-scaffold-ui_dist_esm_src_utils_e60f973d._.js.map