(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/packages/frontend/src/providers/ReownProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppKitProvider": (()=>AppKitProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/@reown/appkit/dist/esm/exports/react.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/@reown/appkit/dist/esm/exports/react.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$15$2e$6_$40$tanstack$2b$query$2d$core$40$5$2e$80$2e$10_$40$tanstack$2b$react$2d$query$40$5$2e$80$2e$10_react$40$19$2e$1$2e$0_$5f40$types$2b$_hci3yy5tknawly2qzgbvfujxr4$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@2.15.6_@tanstack+query-core@5.80.10_@tanstack+react-query@5.80.10_react@19.1.0__@types+_hci3yy5tknawly2qzgbvfujxr4/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$networks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit@1.7.10_@types+react@19.1.8_bufferutil@4.0.9_react@19.1.0_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/@reown/appkit/dist/esm/exports/networks.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$3_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$arbitrum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.3_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/chains/definitions/arbitrum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$3_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.31.3_bufferutil@4.0.9_typescript@5.8.3_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$80$2e$10$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.80.10/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$80$2e$10_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.80.10_react@19.1.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$adapter$2d$wagmi$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_$40$wagmi$2b$core$40$2$2e$17$2e$3_$40$tanstack$2b$query$2d$cor_jdgujd5b37jfqc4rxqvsynbeoe$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reown+appkit-adapter-wagmi@1.7.10_@types+react@19.1.8_@wagmi+core@2.17.3_@tanstack+query-cor_jdgujd5b37jfqc4rxqvsynbeoe/node_modules/@reown/appkit-adapter-wagmi/dist/esm/src/client.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
// 0. Setup queryClient
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$80$2e$10$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]();
// 1. Get projectId from https://cloud.reown.com
const projectId = "f33e3d88d12229f22df549cace373781";
// 2. Create a metadata object - optional
const metadata = {
    name: "prediction-market",
    description: "AppKit Example",
    url: "https://reown.com/appkit",
    icons: [
        "https://assets.reown.com/reown-profile-pic.png"
    ]
};
// 3. Set the networks
const networks = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$3_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$31$2e$3_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$arbitrum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arbitrum"]
];
// 4. Create Wagmi Adapter
const wagmiAdapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$2d$adapter$2d$wagmi$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_$40$wagmi$2b$core$40$2$2e$17$2e$3_$40$tanstack$2b$query$2d$cor_jdgujd5b37jfqc4rxqvsynbeoe$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiAdapter"]({
    networks,
    projectId,
    ssr: true
});
// 5. Create modal
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reown$2b$appkit$40$1$2e$7$2e$10_$40$types$2b$react$40$19$2e$1$2e$8_bufferutil$40$4$2e$0$2e$9_react$40$19$2e$1$2e$0_typescript$40$5$2e$8$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAppKit"])({
    adapters: [
        wagmiAdapter
    ],
    networks,
    projectId,
    metadata,
    features: {
        analytics: true
    }
});
function AppKitProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$2$2e$15$2e$6_$40$tanstack$2b$query$2d$core$40$5$2e$80$2e$10_$40$tanstack$2b$react$2d$query$40$5$2e$80$2e$10_react$40$19$2e$1$2e$0_$5f40$types$2b$_hci3yy5tknawly2qzgbvfujxr4$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProvider"], {
        config: wagmiAdapter.wagmiConfig,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$80$2e$10_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/packages/frontend/src/providers/ReownProvider.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/frontend/src/providers/ReownProvider.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = AppKitProvider;
var _c;
__turbopack_context__.k.register(_c, "AppKitProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=packages_frontend_src_providers_ReownProvider_tsx_14b92655._.js.map