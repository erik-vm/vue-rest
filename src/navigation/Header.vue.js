import { RouterLink, useRouter } from 'vue-router';
import { useUserDataStore } from '@/stores/userDataStore';
const router = useRouter();
const userStore = useUserDataStore();
const logout = async () => {
    userStore.firstName = '';
    userStore.lastName = '';
    userStore.jwt = '';
    userStore.refreshToken = '';
    await router.push("/");
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "navbar-brand" },
    href: "/",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "navbar-toggler" },
    type: "button",
    'data-bs-toggle': "collapse",
    'data-bs-target': ".navbar-collapse",
    'aria-controls': "navbarSupportedContent",
    'aria-expanded': "false",
    'aria-label': "Toggle navigation",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "navbar-toggler-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "navbar-collapse collapse d-sm-inline-flex justify-content-between" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "navbar-nav flex-grow-1" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "nav-item" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "nav-link text-dark" },
    to: "/",
}));
const __VLS_2 = __VLS_1({
    ...{ class: "nav-link text-dark" },
    to: "/",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "nav-item" },
});
const __VLS_4 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ class: "nav-link text-dark" },
    to: "/page1",
}));
const __VLS_6 = __VLS_5({
    ...{ class: "nav-link text-dark" },
    to: "/page1",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "nav-item" },
});
const __VLS_8 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ class: "nav-link text-dark" },
    to: "/gpssession",
}));
const __VLS_10 = __VLS_9({
    ...{ class: "nav-link text-dark" },
    to: "/gpssession",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "nav-item" },
});
const __VLS_12 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ class: "nav-link text-dark" },
    to: "/gpssessiontype",
}));
const __VLS_14 = __VLS_13({
    ...{ class: "nav-link text-dark" },
    to: "/gpssessiontype",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
var __VLS_15;
if (!__VLS_ctx.userStore.jwt) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "navbar-nav" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: "nav-item" },
    });
    const __VLS_16 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        ...{ class: "nav-link text-dark" },
        to: "/register",
    }));
    const __VLS_18 = __VLS_17({
        ...{ class: "nav-link text-dark" },
        to: "/register",
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_19.slots.default;
    var __VLS_19;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: "nav-item" },
    });
    const __VLS_20 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        ...{ class: "nav-link text-dark" },
        to: "/login",
    }));
    const __VLS_22 = __VLS_21({
        ...{ class: "nav-link text-dark" },
        to: "/login",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_23.slots.default;
    var __VLS_23;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: "navbar-nav" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: "nav-item" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onClick: (__VLS_ctx.logout) },
        ...{ class: "nav-link text-dark d-flex align-items-center" },
        ...{ style: {} },
    });
    (__VLS_ctx.userStore.firstName);
    (__VLS_ctx.userStore.lastName);
}
/** @type {__VLS_StyleScopedClasses['navbar']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-expand-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-toggleable-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-light']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-bottom']} */ ;
/** @type {__VLS_StyleScopedClasses['box-shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-brand']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-toggler']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-toggler-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-collapse']} */ ;
/** @type {__VLS_StyleScopedClasses['collapse']} */ ;
/** @type {__VLS_StyleScopedClasses['d-sm-inline-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-between']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['text-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['text-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['text-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['text-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['text-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['text-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-link']} */ ;
/** @type {__VLS_StyleScopedClasses['text-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            userStore: userStore,
            logout: logout,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Header.vue.js.map