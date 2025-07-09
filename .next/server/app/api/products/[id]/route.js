/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/products/[id]/route";
exports.ids = ["app/api/products/[id]/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDesktop%5C%D0%B2%D0%B6%D0%B2%D0%B6%D1%8C%D0%B2%D0%B6%5Cfsite%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDesktop%5C%D0%B2%D0%B6%D0%B2%D0%B6%D1%8C%D0%B2%D0%B6%5Cfsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDesktop%5C%D0%B2%D0%B6%D0%B2%D0%B6%D1%8C%D0%B2%D0%B6%5Cfsite%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDesktop%5C%D0%B2%D0%B6%D0%B2%D0%B6%D1%8C%D0%B2%D0%B6%5Cfsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Admin_Desktop_fsite_src_app_api_products_id_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/products/[id]/route.js */ \"(rsc)/./src/app/api/products/[id]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/[id]/route\",\n        pathname: \"/api/products/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\вжвжьвж\\\\fsite\\\\src\\\\app\\\\api\\\\products\\\\[id]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Admin_Desktop_fsite_src_app_api_products_id_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9kdWN0cyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZHVjdHMlMkYlNUJpZCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBZG1pbiU1Q0Rlc2t0b3AlNUMlRDAlQjIlRDAlQjYlRDAlQjIlRDAlQjYlRDElOEMlRDAlQjIlRDAlQjYlNUNmc2l0ZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQWRtaW4lNUNEZXNrdG9wJTVDJUQwJUIyJUQwJUI2JUQwJUIyJUQwJUI2JUQxJThDJUQwJUIyJUQwJUI2JTVDZnNpdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXNCy0LbQstC20YzQstC2XFxcXGZzaXRlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHByb2R1Y3RzXFxcXFtpZF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3RzL1tpZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9kdWN0cy9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm9kdWN0cy9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5cXFxcRGVza3RvcFxcXFzQstC20LLQttGM0LLQtlxcXFxmc2l0ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwcm9kdWN0c1xcXFxbaWRdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDesktop%5C%D0%B2%D0%B6%D0%B2%D0%B6%D1%8C%D0%B2%D0%B6%5Cfsite%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDesktop%5C%D0%B2%D0%B6%D0%B2%D0%B6%D1%8C%D0%B2%D0%B6%5Cfsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/products/[id]/route.js":
/*!********************************************!*\
  !*** ./src/app/api/products/[id]/route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   PATCH: () => (/* binding */ PATCH),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function PUT(req, { params }) {\n    const id = parseInt(params.id);\n    try {\n        const formData = await req.formData();\n        const title = formData.get(\"title\");\n        const slug = formData.get(\"slug\");\n        const description = formData.get(\"description\");\n        const price = formData.get(\"price\");\n        const file = formData.get(\"image\");\n        if (!title || !slug || !price) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing required fields\"\n            }, {\n                status: 400\n            });\n        }\n        let imagePath = null;\n        if (file && typeof file === \"object\" && file.arrayBuffer) {\n            const buffer = Buffer.from(await file.arrayBuffer());\n            const filename = `${Date.now()}-${file.name}`;\n            const uploadDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", \"uploads\");\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(path__WEBPACK_IMPORTED_MODULE_3___default().join(uploadDir, filename), buffer);\n            imagePath = ` /uploads/${filename}`;\n        }\n        const updated = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products.update({\n            where: {\n                id\n            },\n            data: {\n                title,\n                slug,\n                description: description ?? null,\n                price: parseFloat(price),\n                image: imagePath\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updated, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Update failed\",\n            details: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PATCH(req, { params }) {\n    const id = parseInt(params.id);\n    try {\n        const body = await req.json();\n        const data = {};\n        if (body.price !== undefined) data.price = parseFloat(body.price);\n        if (body.title !== undefined) data.title = body.title;\n        if (body.description !== undefined) data.description = body.description;\n        const updated = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products.update({\n            where: {\n                id\n            },\n            data\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updated, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Update failed\",\n            details: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(req, { params }) {\n    const id = parseInt(params.id);\n    try {\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products.delete({\n            where: {\n                id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Deleted\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Delete failed\",\n            details: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9kdWN0cy9baWRdL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQztBQUNUO0FBQ007QUFDaEI7QUFFakIsZUFBZUksSUFBSUMsR0FBRyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtJQUN2QyxNQUFNQyxLQUFLQyxTQUFTRixPQUFPQyxFQUFFO0lBRTdCLElBQUk7UUFDRixNQUFNRSxXQUFXLE1BQU1KLElBQUlJLFFBQVE7UUFFbkMsTUFBTUMsUUFBUUQsU0FBU0UsR0FBRyxDQUFDO1FBQzNCLE1BQU1DLE9BQU9ILFNBQVNFLEdBQUcsQ0FBQztRQUMxQixNQUFNRSxjQUFjSixTQUFTRSxHQUFHLENBQUM7UUFDakMsTUFBTUcsUUFBUUwsU0FBU0UsR0FBRyxDQUFDO1FBQzNCLE1BQU1JLE9BQU9OLFNBQVNFLEdBQUcsQ0FBQztRQUUxQixJQUFJLENBQUNELFNBQVMsQ0FBQ0UsUUFBUSxDQUFDRSxPQUFPO1lBQzdCLE9BQU9kLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQTBCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMvRTtRQUVBLElBQUlDLFlBQVk7UUFFaEIsSUFBSUosUUFBUSxPQUFPQSxTQUFTLFlBQVlBLEtBQUtLLFdBQVcsRUFBRTtZQUN4RCxNQUFNQyxTQUFTQyxPQUFPQyxJQUFJLENBQUMsTUFBTVIsS0FBS0ssV0FBVztZQUNqRCxNQUFNSSxXQUFXLEdBQUdDLEtBQUtDLEdBQUcsR0FBRyxDQUFDLEVBQUVYLEtBQUtZLElBQUksRUFBRTtZQUM3QyxNQUFNQyxZQUFZekIsZ0RBQVMsQ0FBQzJCLFFBQVFDLEdBQUcsSUFBSSxVQUFVO1lBRXJELE1BQU03QixzREFBU0EsQ0FBQ0MsZ0RBQVMsQ0FBQ3lCLFdBQVdKLFdBQVdIO1lBQ2hERixZQUFXLENBQUMsVUFBVSxFQUFFSyxVQUFVO1FBQ3BDO1FBRUEsTUFBTVEsVUFBVSxNQUFNL0IsbURBQU1BLENBQUNnQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztZQUMzQ0MsT0FBTztnQkFBRTVCO1lBQUc7WUFDWjZCLE1BQU07Z0JBQ0oxQjtnQkFDQUU7Z0JBQ0FDLGFBQWFBLGVBQWU7Z0JBQzVCQyxPQUFPdUIsV0FBV3ZCO2dCQUNsQndCLE9BQU9uQjtZQUNUO1FBQ0Y7UUFFQSxPQUFPbkIscURBQVlBLENBQUNnQixJQUFJLENBQUNnQixTQUFTO1lBQUVkLFFBQVE7UUFBSTtJQUNsRCxFQUFFLE9BQU9ELE9BQU87UUFDZCxPQUFPakIscURBQVlBLENBQUNnQixJQUFJLENBQUM7WUFBRUMsT0FBTztZQUFpQnNCLFNBQVN0QixNQUFNdUIsT0FBTztRQUFDLEdBQUc7WUFBRXRCLFFBQVE7UUFBSTtJQUM3RjtBQUNGO0FBR08sZUFBZXVCLE1BQU1wQyxHQUFHLEVBQUUsRUFBRUMsTUFBTSxFQUFFO0lBQ3pDLE1BQU1DLEtBQUtDLFNBQVNGLE9BQU9DLEVBQUU7SUFFN0IsSUFBSTtRQUNGLE1BQU1tQyxPQUFPLE1BQU1yQyxJQUFJVyxJQUFJO1FBRTNCLE1BQU1vQixPQUFPLENBQUM7UUFDZCxJQUFJTSxLQUFLNUIsS0FBSyxLQUFLNkIsV0FBV1AsS0FBS3RCLEtBQUssR0FBR3VCLFdBQVdLLEtBQUs1QixLQUFLO1FBQ2hFLElBQUk0QixLQUFLaEMsS0FBSyxLQUFLaUMsV0FBV1AsS0FBSzFCLEtBQUssR0FBR2dDLEtBQUtoQyxLQUFLO1FBQ3JELElBQUlnQyxLQUFLN0IsV0FBVyxLQUFLOEIsV0FBV1AsS0FBS3ZCLFdBQVcsR0FBRzZCLEtBQUs3QixXQUFXO1FBR3ZFLE1BQU1tQixVQUFVLE1BQU0vQixtREFBTUEsQ0FBQ2dDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1lBQzNDQyxPQUFPO2dCQUFFNUI7WUFBRztZQUNaNkI7UUFDRjtRQUVBLE9BQU9wQyxxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQ2dCLFNBQVM7WUFBRWQsUUFBUTtRQUFJO0lBQ2xELEVBQUUsT0FBT0QsT0FBTztRQUNkLE9BQU9qQixxREFBWUEsQ0FBQ2dCLElBQUksQ0FDdEI7WUFBRUMsT0FBTztZQUFpQnNCLFNBQVN0QixNQUFNdUIsT0FBTztRQUFDLEdBQ2pEO1lBQUV0QixRQUFRO1FBQUk7SUFFbEI7QUFDRjtBQUdPLGVBQWUwQixPQUFPdkMsR0FBRyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtJQUMxQyxNQUFNQyxLQUFLQyxTQUFTRixPQUFPQyxFQUFFO0lBRTdCLElBQUk7UUFDRixNQUFNTixtREFBTUEsQ0FBQ2dDLFFBQVEsQ0FBQ1ksTUFBTSxDQUFDO1lBQUVWLE9BQU87Z0JBQUU1QjtZQUFHO1FBQUU7UUFDN0MsT0FBT1AscURBQVlBLENBQUNnQixJQUFJLENBQUM7WUFBRXdCLFNBQVM7UUFBVSxHQUFHO1lBQUV0QixRQUFRO1FBQUk7SUFDakUsRUFBRSxPQUFPRCxPQUFPO1FBQ2QsT0FBT2pCLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1lBQWlCc0IsU0FBU3RCLE1BQU11QixPQUFPO1FBQUMsR0FDakQ7WUFBRXRCLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFzQstC20LLQttGM0LLQtlxcZnNpdGVcXHNyY1xcYXBwXFxhcGlcXHByb2R1Y3RzXFxbaWRdXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gXCJmcy9wcm9taXNlc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXEsIHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBpZCA9IHBhcnNlSW50KHBhcmFtcy5pZCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIik7XHJcbiAgICBjb25zdCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICBjb25zdCBwcmljZSA9IGZvcm1EYXRhLmdldChcInByaWNlXCIpO1xyXG4gICAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpO1xyXG5cclxuICAgIGlmICghdGl0bGUgfHwgIXNsdWcgfHwgIXByaWNlKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW1hZ2VQYXRoID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZmlsZSAmJiB0eXBlb2YgZmlsZSA9PT0gXCJvYmplY3RcIiAmJiBmaWxlLmFycmF5QnVmZmVyKSB7XHJcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSk7XHJcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gYCR7RGF0ZS5ub3coKX0tJHtmaWxlLm5hbWV9YDtcclxuICAgICAgY29uc3QgdXBsb2FkRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwicHVibGljXCIsIFwidXBsb2Fkc1wiKTtcclxuXHJcbiAgICAgIGF3YWl0IHdyaXRlRmlsZShwYXRoLmpvaW4odXBsb2FkRGlyLCBmaWxlbmFtZSksIGJ1ZmZlcik7XHJcbiAgICAgIGltYWdlUGF0aCA9YCAvdXBsb2Fkcy8ke2ZpbGVuYW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHByaXNtYS5wcm9kdWN0cy51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgc2x1ZyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gPz8gbnVsbCxcclxuICAgICAgICBwcmljZTogcGFyc2VGbG9hdChwcmljZSksXHJcbiAgICAgICAgaW1hZ2U6IGltYWdlUGF0aCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1cGRhdGVkLCB7IHN0YXR1czogMjAwIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVcGRhdGUgZmFpbGVkXCIsIGRldGFpbHM6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUEFUQ0gocmVxLCB7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgaWQgPSBwYXJzZUludChwYXJhbXMuaWQpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgaWYgKGJvZHkucHJpY2UgIT09IHVuZGVmaW5lZCkgZGF0YS5wcmljZSA9IHBhcnNlRmxvYXQoYm9keS5wcmljZSk7XHJcbiAgICBpZiAoYm9keS50aXRsZSAhPT0gdW5kZWZpbmVkKSBkYXRhLnRpdGxlID0gYm9keS50aXRsZTtcclxuICAgIGlmIChib2R5LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIGRhdGEuZGVzY3JpcHRpb24gPSBib2R5LmRlc2NyaXB0aW9uO1xyXG5cclxuXHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgcHJpc21hLnByb2R1Y3RzLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIGRhdGEsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXBkYXRlZCwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBcIlVwZGF0ZSBmYWlsZWRcIiwgZGV0YWlsczogZXJyb3IubWVzc2FnZSB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXEsIHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBpZCA9IHBhcnNlSW50KHBhcmFtcy5pZCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEucHJvZHVjdHMuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiRGVsZXRlZFwiIH0sIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJEZWxldGUgZmFpbGVkXCIsIGRldGFpbHM6IGVycm9yLm1lc3NhZ2UgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJ3cml0ZUZpbGUiLCJwYXRoIiwiUFVUIiwicmVxIiwicGFyYW1zIiwiaWQiLCJwYXJzZUludCIsImZvcm1EYXRhIiwidGl0bGUiLCJnZXQiLCJzbHVnIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImZpbGUiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJpbWFnZVBhdGgiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJmaWxlbmFtZSIsIkRhdGUiLCJub3ciLCJuYW1lIiwidXBsb2FkRGlyIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJ1cGRhdGVkIiwicHJvZHVjdHMiLCJ1cGRhdGUiLCJ3aGVyZSIsImRhdGEiLCJwYXJzZUZsb2F0IiwiaW1hZ2UiLCJkZXRhaWxzIiwibWVzc2FnZSIsIlBBVENIIiwiYm9keSIsInVuZGVmaW5lZCIsIkRFTEVURSIsImRlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/products/[id]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.js":
/*!***************************!*\
  !*** ./src/lib/prisma.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUV4QixNQUFNQyxTQUFTRixnQkFBZ0JFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUE7QUFFekQsSUFBSUksSUFBcUMsRUFBRUgsZ0JBQWdCRSxNQUFNLEdBQUdBO0FBRXBFLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFzQstC20LLQttGM0LLQtlxcZnNpdGVcXHNyY1xcbGliXFxwcmlzbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcztcclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fproducts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2F%5Bid%5D%2Froute.js&appDir=C%3A%5CUsers%5CAdmin%5CDesktop%5C%D0%B2%D0%B6%D0%B2%D0%B6%D1%8C%D0%B2%D0%B6%5Cfsite%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdmin%5CDesktop%5C%D0%B2%D0%B6%D0%B2%D0%B6%D1%8C%D0%B2%D0%B6%5Cfsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();