// Status metadata used by all error pages
export type NeurasynkErrorInfo = {
  code: number;
  label: string;
  headline: string;
  detail: string;
  hint?: string;
};

export const NEURASYNK_ERRORS: Record<string, NeurasynkErrorInfo> = {
  "400": {
    code: 400,
    label: "Bad Request",
    headline: "We couldn’t process that request.",
    detail: "Please check the URL or form data and try again.",
    hint: "Tip: refresh the page or return to the home page.",
  },
  "401": {
    code: 401,
    label: "Unauthorized",
    headline: "You’ll need to sign in to continue.",
    detail: "This page or action requires authentication.",
  },
  "403": {
    code: 403,
    label: "Forbidden",
    headline: "You don’t have permission to view this page.",
    detail: "If you believe this is an error, contact the site admin.",
  },
  "404": {
    code: 404,
    label: "Not Found",
    headline: "We can’t find that page.",
    detail: "The link may be broken or the page may have moved.",
  },
  "500": {
    code: 500,
    label: "Server Error",
    headline: "Something went wrong on our side.",
    detail: "We’ve been notified and are looking into it.",
    hint: "Try again in a few minutes.",
  },
  "502": {
    code: 502,
    label: "Bad Gateway",
    headline: "Upstream service is unavailable.",
    detail: "Our service dependency returned an invalid response.",
  },
  "503": {
    code: 503,
    label: "Service Unavailable",
    headline: "We’re doing some maintenance.",
    detail: "Please check back shortly.",
  },
  "504": {
    code: 504,
    label: "Gateway Timeout",
    headline: "A service took too long to respond.",
    detail: "Please retry after a moment.",
  },
  "505": {
    code: 505,
    label: "HTTP Version Not Supported",
    headline: "Your client’s HTTP version isn’t supported.",
    detail: "Please update your browser or client and try again.",
  },
};
